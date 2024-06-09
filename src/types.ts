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
  actionMessage?: boolean
  imageMessage?: boolean
}

export type ContextualOptions = {
  id: number
  optionText: string
  actionToEmit: string
}
