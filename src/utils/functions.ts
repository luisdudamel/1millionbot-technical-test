import type { ChatMessage, UserMessage } from "@/types"
import type { Ref } from "vue"
import { mockAgentMessages } from "./mocks/mockdata"

export const addMessageToList = (
  messageToAdd: UserMessage,
  timestamp: number,
  messageList: Ref<ChatMessage[]>
) => {
  const highestId = !messageList.value.length
    ? 0
    : Math.max(...messageList.value.map((message) => message.id))

  messageList.value.push({
    ...messageToAdd,
    id: highestId + 1,
    timestamp: timestamp
  })
}

export const generateAgentResponse = (messageList: Ref<ChatMessage[]>) => {
  const randomAgentResponse = Math.floor(Math.random() * (9 - 1 + 1)) + 1
  addMessageToList({ ...mockAgentMessages[randomAgentResponse] }, Date.now(), messageList)
}
