import type { ChatMessage } from "@/types"

export const mockAgentMessage: ChatMessage = {
  messageAuthor: "agent",
  messageText: "This is a test message from an agent"
}

export const mockUserMessage: ChatMessage = {
  messageAuthor: "user",
  messageText: "I'm a test message from an user!"
}
