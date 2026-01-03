// frontend/src/lib/api.ts

export const API_BASE_URL = "http://127.0.0.1:8000/api";

export interface Session {
  id: string;
  session_id: string;
  issue: string;
  created_at: string;
}

export interface Message {
  id: string;
  session: string; // ObjectId as string
  role: "user" | "assistant";
  text: string;
  emotion: string;
  extra: Record<string, unknown> | null;
  created_at: string;
}

export interface CreateMessagePayload {
  session_id: string;
  issue?: string;
  user_message: string;
}

export interface ChatResponse {
  session: Session;
  messages: Message[];
}

export async function createMessage(
  payload: CreateMessagePayload
): Promise<ChatResponse> {
  const res = await fetch(`${API_BASE_URL}/message/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const errorBody = await res.json().catch(() => null);
    throw new Error(
      `createMessage failed: ${res.status} ${JSON.stringify(errorBody) ?? ""}`
    );
  }

  return (await res.json()) as ChatResponse;
}

export async function getSessionMessages(
  sessionId: string
): Promise<ChatResponse> {
  const res = await fetch(`${API_BASE_URL}/session/${sessionId}/messages/`);

  if (!res.ok) {
    const errorBody = await res.json().catch(() => null);
    throw new Error(
      `getSessionMessages failed: ${res.status} ${
        JSON.stringify(errorBody) ?? ""
      }`
    );
  }

  return (await res.json()) as ChatResponse;
}
