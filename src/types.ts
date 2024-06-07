export type ChatAgent = {
  name: string
  avatarUrl: string
}

export type User = {
  name: string
}

export type ChatMessage = {
  id?: number
  messageText: string
  messageAuthor: "agent" | "user"
}
