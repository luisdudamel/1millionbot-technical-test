import type { ChatMessage, ChatAgent, UserMessage } from "@/types"

export const mockAgent: ChatAgent = {
  name: "Leia",
  avatarUrl: "chatbotavatar.png"
}

export const mockAgentGreeting: ChatMessage[] = [
  {
    id: 0,
    timestamp: Date.now(),
    messageAuthor: "agent",
    messageText: "Hi! I'm Leia. How can I help you today?"
  },
  {
    id: 1,
    timestamp: Date.now(),
    messageAuthor: "agent",
    messageText: "Dont know how to start? Here are some things you can ask me: "
  }
]

export const mockActionMessages: ChatMessage[] = [
  {
    id: 2,
    timestamp: Date.now(),
    messageAuthor: "agent",
    messageText: "What can you do for me?",
    actionMessage: true
  },
  {
    id: 3,
    timestamp: Date.now(),
    messageAuthor: "agent",
    messageText: "How is the weather today?",
    actionMessage: true
  },
  {
    id: 4,
    timestamp: Date.now(),
    messageAuthor: "agent",
    messageText: "Where can I find the bank's policies on refunds?",
    actionMessage: true
  },
  {
    id: 5,
    timestamp: Date.now(),
    messageAuthor: "agent",
    messageText: "Show me the christmas party photos🎄",
    actionMessage: true
  }
]

export const mockAgentMessage: ChatMessage = {
  id: 1,
  messageAuthor: "agent",
  messageText: "Hi! How can I help you?",
  timestamp: 10000
}

export const mockUserMessage: ChatMessage = {
  id: 1,
  messageAuthor: "user",
  messageText: "I'm a test message from an user!",
  timestamp: 10000
}

export const mockUserLongMessage: ChatMessage = {
  id: 1,
  messageAuthor: "user",
  messageText:
    "I'm a test message from an user! A really really long message, as you can see I can take a lot of space",
  timestamp: 10000
}

export const mockAgentMessages: UserMessage[] = [
  {
    messageAuthor: "agent",
    messageText: "Sure, I can assist with that!"
  },
  {
    messageAuthor: "agent",
    messageText: "Is there anything else you'd like to know?"
  },
  {
    messageAuthor: "agent",
    messageText: "I appreciate your patience!"
  },
  {
    messageAuthor: "agent",
    messageText: "Let me check that for you."
  },
  {
    messageAuthor: "agent",
    messageText: "Feel free to ask any questions!"
  },
  {
    messageAuthor: "agent",
    messageText: "I'm here to help!"
  },
  {
    messageAuthor: "agent",
    messageText: "Thank you for reaching out!"
  },
  {
    messageAuthor: "agent",
    messageText: "I'll look into it and get back to you."
  },
  {
    messageAuthor: "agent",
    messageText: "Have a great day!"
  }
]

export const mockAgentImageResponse: UserMessage = {
  messageAuthor: "agent",
  messageText: "Sure! Here are the last christmas party photos!"
}

export const mockUserMessages: UserMessage[] = [
  {
    messageAuthor: "user",
    messageText: "I need assistance with my account."
  },
  {
    messageAuthor: "user",
    messageText: "Can you help me reset my password?"
  },
  {
    messageAuthor: "user",
    messageText: "I'm having trouble accessing my settings."
  },
  {
    messageAuthor: "user",
    messageText: "Is there a way to update my billing information?"
  },
  {
    messageAuthor: "user",
    messageText: "How do I change my profile picture?"
  },
  {
    messageAuthor: "user",
    messageText: "What's the process for closing my account?"
  },
  {
    messageAuthor: "user",
    messageText: "I'd like to report a bug in the app."
  },
  {
    messageAuthor: "user",
    messageText: "Where can I find the FAQ section?"
  },
  {
    messageAuthor: "user",
    messageText: "Can you explain the new feature?"
  },
  {
    messageAuthor: "user",
    messageText: "I'm experiencing a login issue."
  }
]

export const mockConversation: ChatMessage[] = [
  {
    id: 1,
    messageAuthor: "agent",
    messageText: "Hi! How can I help you?",
    timestamp: 10000
  },
  {
    id: 2,
    messageAuthor: "user",
    messageText: "I need assistance with my account.",
    timestamp: 10000
  },
  {
    id: 3,
    messageAuthor: "agent",
    messageText: "Sure, I can assist with that!",
    timestamp: 10000
  },
  {
    id: 4,
    messageAuthor: "user",
    messageText: "Can you help me reset my password?",
    timestamp: 10000
  },
  {
    id: 5,
    messageAuthor: "agent",
    messageText: "Is there anything else you'd like to know?",
    timestamp: 10000
  },
  {
    id: 6,
    messageAuthor: "user",
    messageText: "I'm having trouble accessing my settings.",
    timestamp: 10000
  },
  {
    id: 7,
    messageAuthor: "agent",
    messageText: "I appreciate your patience!",
    timestamp: 10000
  },
  {
    id: 8,
    messageAuthor: "user",
    messageText: "Is there a way to update my billing information?",
    timestamp: 10000
  },
  {
    id: 9,
    messageAuthor: "agent",
    messageText: "Let me check that for you.",
    timestamp: 10000
  },
  {
    id: 10,
    messageAuthor: "user",
    messageText: "How do I change my profile picture?",
    timestamp: 10000
  },
  {
    id: 11,
    messageAuthor: "agent",
    messageText: "Feel free to ask any questions!",
    timestamp: 10000
  },
  {
    id: 12,
    messageAuthor: "user",
    messageText: "What's the process for closing my account?",
    timestamp: 10000
  },
  {
    id: 13,
    messageAuthor: "agent",
    messageText: "I'm here to help!",
    timestamp: 10000
  },
  {
    id: 14,
    messageAuthor: "user",
    messageText: "I'd like to report a bug in the app.",
    timestamp: 10000
  },
  {
    id: 15,
    messageAuthor: "agent",
    messageText: "Thank you for reaching out!",
    timestamp: 10000
  },
  {
    id: 16,
    messageAuthor: "user",
    messageText: "Where can I find the FAQ section?",
    timestamp: 10000
  },
  {
    id: 17,
    messageAuthor: "agent",
    messageText: "I'll look into it and get back to you.",
    timestamp: 10000
  },
  {
    id: 18,
    messageAuthor: "user",
    messageText: "Can you explain the new feature?",
    timestamp: 10000
  },
  {
    id: 19,
    messageAuthor: "agent",
    messageText:
      "I apologize for the delay in our response. Our team is currently experiencing high volumes, but I'm here now to assist you. How can I help?",
    timestamp: 10000
  },
  {
    id: 20,
    messageAuthor: "user",
    messageText: "I'm experiencing a login issue.",
    timestamp: 10000
  }
]
