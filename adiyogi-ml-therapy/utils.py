import os
from dotenv import load_dotenv

load_dotenv()


def get_mistral_api_key() -> str:
    api_key = os.getenv("MISTRAL_API_KEY")
    if not api_key:
        raise RuntimeError("MISTRAL_API_KEY not set in .env")
    return api_key