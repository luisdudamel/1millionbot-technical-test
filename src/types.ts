export type ChatAgent = {
  name: string
}

export type User = {
  name: string
}

export type ChatMessage = {
  messageText: string
  messageAuthor: "agent" | "user"
}
