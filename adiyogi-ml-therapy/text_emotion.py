from typing import Dict

from transformers import AutoTokenizer, AutoModelForSequenceClassification
import torch
import numpy as np

MODEL_NAME = "j-hartmann/emotion-english-distilroberta-base"

_tokenizer = None
_model = None
_labels = [
    "anger",
    "disgust",
    "fear",
    "joy",
    "neutral",
    "sadness",
    "surprise",
]


def _load_model():
    global _tokenizer, _model
    if _tokenizer is None or _model is None:
        _tokenizer = AutoTokenizer.from_pretrained(MODEL_NAME)
        _model = AutoModelForSequenceClassification.from_pretrained(MODEL_NAME)


def analyze_emotion(text: str) -> Dict:
    """
    Returns:
        {
          "top_emotion": str,
          "scores": {label: float}
        }
    """
    _load_model()
    inputs = _tokenizer(text, return_tensors="pt", truncation=True, padding=True)
    with torch.no_grad():
        outputs = _model(**inputs)
        logits = outputs.logits[0].detach().numpy()
    probs = np.exp(logits) / np.exp(logits).sum()

    scores = {label: float(prob) for label, prob in zip(_labels, probs)}
    top_emotion = max(scores, key=scores.get)

    return {
        "top_emotion": top_emotion,
        "scores": scores,
    }


if __name__ == "__main__":
    sample = "I'm feeling very anxious and overwhelmed about my future."
    result = analyze_emotion(sample)
    print(result)
