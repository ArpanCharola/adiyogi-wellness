import requests
from typing import Optional

from utils import get_mistral_api_key

MISTRAL_API_URL = "https://api.mistral.ai/v1/chat/completions"
MODEL_NAME = "mistral-small-latest"  # adjust to the free model you selected


def build_therapy_prompt(client_name: str,
                         issue: str,
                         context_text: str) -> str:
    system = (
        "You are a warm, professional mental-health therapist. "
        "Use evidence-informed, non-judgmental language. "
        "Do NOT give medical diagnoses or emergency instructions. "
        "If the user mentions self-harm, suicide, or violence, "
        "you gently encourage them to contact local emergency services "
        "or a trusted adult and say you cannot handle crises."
    )

    user = (
        f"Client name: {client_name}\n"
        f"Presenting issue: {issue}\n\n"
        f"Client message:\n{context_text}\n\n"
        "Reply as the therapist in a single, concise paragraph. "
        "Validate feelings, ask at most one gentle follow-up question, "
        "and keep a supportive tone."
    )

    return system, user


def call_mistral_therapy(
    client_name: str,
    issue: str,
    context_text: str,
    temperature: float = 0.7,
    max_tokens: int = 300,
) -> Optional[str]:
    api_key = get_mistral_api_key()
    system_content, user_content = build_therapy_prompt(
        client_name, issue, context_text
    )

    headers = {
        "Authorization": f"Bearer {api_key}",
        "Content-Type": "application/json",
    }

    payload = {
        "model": MODEL_NAME,
        "messages": [
            {"role": "system", "content": system_content},
            {"role": "user", "content": user_content},
        ],
        "temperature": temperature,
        "max_tokens": max_tokens,
    }

    resp = requests.post(MISTRAL_API_URL, headers=headers, json=payload, timeout=30)
    resp.raise_for_status()
    data = resp.json()

    try:
        return data["choices"][0]["message"]["content"]
    except (KeyError, IndexError):
        return None


if __name__ == "__main__":
    reply = call_mistral_therapy(
        client_name="Arpan",
        issue="anxiety",
        context_text="I feel very tense before exams and my mind keeps overthinking.",
    )
    print("Therapist:", reply)
