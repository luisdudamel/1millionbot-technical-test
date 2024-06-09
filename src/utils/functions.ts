import type { ChatMessage, UserMessage } from "@/types"
import type { Ref } from "vue"
import { mockActionMessages, mockAgentImageResponse, mockAgentMessages } from "./mocks/mockdata"

export const addMessageToList = (
  timestamp: number,
  messageList: Ref<ChatMessage[]>,
  messageAuthor: UserMessage["messageAuthor"],
  messageToAdd: UserMessage
) => {
  const highestId = !messageList.value.length
    ? 0
    : Math.max(...messageList.value.map((message) => message.id))

  if (messageAuthor === "agent") {
    messageList.value.push({
      ...generateAgentResponse(messageList),
      id: highestId + 1,
      timestamp: timestamp
    })
    return
  }

  messageList.value.push({
    ...messageToAdd,
    id: highestId + 1,
    timestamp: timestamp
  })
}

export const generateAgentResponse = (messageList: Ref<ChatMessage[]>) => {
  const randomAgentResponse = Math.floor(Math.random() * (9 - 1 + 1)) + 1

  const isImageMessage =
    messageList.value[messageList.value.length - 1].messageText ===
    mockActionMessages[3].messageText

  if (isImageMessage) {
    return { ...mockAgentImageResponse, imageMessage: isImageMessage }
  }

  return { ...mockAgentMessages[randomAgentResponse] }
}
