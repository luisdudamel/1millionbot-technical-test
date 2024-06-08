export type ChatAgent = {
  name: string
  avatarUrl: string
}

export type User = {
  name: string
}

export type UserMessage = {
  messageText: string
  messageAuthor: "agent" | "user"
}

export type ChatMessage = UserMessage & {
  id: number
  timestamp: number
}
