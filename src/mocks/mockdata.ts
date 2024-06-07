import type { ChatMessage, ChatAgent } from "@/types"

export const mockAgent: ChatAgent = {
  name: "Leia",
  avatarUrl: "chatbotavatar.png"
}

export const mockAgentMessage: ChatMessage = {
  id: 1,
  messageAuthor: "agent",
  messageText: "Hi! How can I help you?"
}

export const mockUserMessage: ChatMessage = {
  id: 1,
  messageAuthor: "user",
  messageText: "I'm a test message from an user!"
}

export const mockUserLongMessage: ChatMessage = {
  id: 1,
  messageAuthor: "user",
  messageText:
    "I'm a test message from an user! A really really long message, as you can see I can take a lot of space"
}

export const mockAgentMessages: ChatMessage[] = [
  {
    id: 1,
    messageAuthor: "agent",
    messageText: "Sure, I can assist with that!"
  },
  {
    id: 2,
    messageAuthor: "agent",
    messageText: "Is there anything else you'd like to know?"
  },
  {
    id: 3,
    messageAuthor: "agent",
    messageText: "I appreciate your patience!"
  },
  {
    id: 4,
    messageAuthor: "agent",
    messageText: "Let me check that for you."
  },
  {
    id: 5,
    messageAuthor: "agent",
    messageText: "Feel free to ask any questions!"
  },
  {
    id: 6,
    messageAuthor: "agent",
    messageText: "I'm here to help!"
  },
  {
    id: 7,
    messageAuthor: "agent",
    messageText: "Thank you for reaching out!"
  },
  {
    id: 8,
    messageAuthor: "agent",
    messageText: "I'll look into it and get back to you."
  },
  {
    id: 9,
    messageAuthor: "agent",
    messageText: "Have a great day!"
  }
]

export const mockUserMessages: ChatMessage[] = [
  {
    id: 1,
    messageAuthor: "user",
    messageText: "I need assistance with my account."
  },
  {
    id: 2,
    messageAuthor: "user",
    messageText: "Can you help me reset my password?"
  },
  {
    id: 3,
    messageAuthor: "user",
    messageText: "I'm having trouble accessing my settings."
  },
  {
    id: 4,
    messageAuthor: "user",
    messageText: "Is there a way to update my billing information?"
  },
  {
    id: 5,
    messageAuthor: "user",
    messageText: "How do I change my profile picture?"
  },
  {
    id: 6,
    messageAuthor: "user",
    messageText: "What's the process for closing my account?"
  },
  {
    id: 7,
    messageAuthor: "user",
    messageText: "I'd like to report a bug in the app."
  },
  {
    id: 8,
    messageAuthor: "user",
    messageText: "Where can I find the FAQ section?"
  },
  {
    id: 9,
    messageAuthor: "user",
    messageText: "Can you explain the new feature?"
  },
  {
    id: 10,
    messageAuthor: "user",
    messageText: "I'm experiencing a login issue."
  }
]

export const mockConversation: ChatMessage[] = [
  {
    id: 1,
    messageAuthor: "agent",
    messageText: "Hi! How can I help you?"
  },
  {
    id: 2,
    messageAuthor: "user",
    messageText: "I need assistance with my account."
  },
  {
    id: 3,
    messageAuthor: "agent",
    messageText: "Sure, I can assist with that!"
  },
  {
    id: 4,
    messageAuthor: "user",
    messageText: "Can you help me reset my password?"
  },
  {
    id: 5,
    messageAuthor: "agent",
    messageText: "Is there anything else you'd like to know?"
  },
  {
    id: 6,
    messageAuthor: "user",
    messageText: "I'm having trouble accessing my settings."
  },
  {
    id: 7,
    messageAuthor: "agent",
    messageText: "I appreciate your patience!"
  },
  {
    id: 8,
    messageAuthor: "user",
    messageText: "Is there a way to update my billing information?"
  },
  {
    id: 9,
    messageAuthor: "agent",
    messageText: "Let me check that for you."
  },
  {
    id: 10,
    messageAuthor: "user",
    messageText: "How do I change my profile picture?"
  },
  {
    id: 11,
    messageAuthor: "agent",
    messageText: "Feel free to ask any questions!"
  },
  {
    id: 12,
    messageAuthor: "user",
    messageText: "What's the process for closing my account?"
  },
  {
    id: 13,
    messageAuthor: "agent",
    messageText: "I'm here to help!"
  },
  {
    id: 14,
    messageAuthor: "user",
    messageText: "I'd like to report a bug in the app."
  },
  {
    id: 15,
    messageAuthor: "agent",
    messageText: "Thank you for reaching out!"
  },
  {
    id: 16,
    messageAuthor: "user",
    messageText: "Where can I find the FAQ section?"
  },
  {
    id: 17,
    messageAuthor: "agent",
    messageText: "I'll look into it and get back to you."
  },
  {
    id: 18,
    messageAuthor: "user",
    messageText: "Can you explain the new feature?"
  },
  {
    id: 19,
    messageAuthor: "agent",
    messageText:
      "I apologize for the delay in our response. Our team is currently experiencing high volumes, but I'm here now to assist you. How can I help?"
  },
  {
    id: 20,
    messageAuthor: "user",
    messageText: "I'm experiencing a login issue."
  }
]
