import type { ChatMessage } from "@/types"

export const mockAgentMessage: ChatMessage = {
  messageAuthor: "agent",
  messageText: "Hi! How can I help you?"
}

export const mockUserMessage: ChatMessage = {
  messageAuthor: "user",
  messageText: "I'm a test message from an user!"
}

export const mockUserLongMessage: ChatMessage = {
  messageAuthor: "user",
  messageText:
    "I'm a test message from an user! A really really long message, as you can see I can take a lot of space"
}
