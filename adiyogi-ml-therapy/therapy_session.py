from datetime import datetime
from typing import Dict, Any
import uuid

from text_emotion import analyze_emotion
from mistral_client import call_mistral_therapy


def run_therapy_turn(
    user_id: str,
    client_name: str,
    issue: str,
    user_message: str,
    session_id: str | None = None,
) -> Dict[str, Any]:
    """
    Orchestrates one turn of the therapy conversation:
    - detect emotion
    - call LLM
    - return a dict ready to be saved in DB
    """
    if session_id is None:
        session_id = str(uuid.uuid4())

    # 1) emotion detection
    emotion_result = analyze_emotion(user_message)
    top_emotion = emotion_result["top_emotion"]
    emotion_scores = emotion_result["scores"]

    # 2) call LLM
    reply = call_mistral_therapy(
        client_name=client_name,
        issue=issue,
        context_text=user_message,
    )

    # 3) build log record
    record = {
        "user_id": user_id,
        "session_id": session_id,
        "client_name": client_name,
        "issue": issue,
        "user_message": user_message,
        "model_reply": reply,
        "text_emotion": top_emotion,
        "emotion_scores": emotion_scores,
        "created_at": datetime.utcnow().isoformat() + "Z",
    }

    return record


if __name__ == "__main__":
    # quick manual test
    result = run_therapy_turn(
        user_id="demo-user-1",
        client_name="Arpan",
        issue="anxiety",
        user_message="Bro I'm feeling so tense about my upcoming exams and can't focus.",
    )
    print(result)
