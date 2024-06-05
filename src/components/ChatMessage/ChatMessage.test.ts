import { describe, expect, test } from "vitest"
import { render } from "@testing-library/vue"
import ChatMessage from "./ChatMessage.vue"
import { mockAgentMessage } from "@/mocks/mockdata"

describe("Given a ChatMessage component", () => {
  describe("When it's mounted and receives a message from an agent with the text 'Hi! How can I help you?'", () => {
    test("Then it should render a paragraph with the text 'Hi! How can I help you?'", () => {
      const expectedAgentMessage = "Hi! How can I help you?"

      const { getByText } = render(ChatMessage, {
        props: mockAgentMessage
      })
      const messageParagraph = getByText(expectedAgentMessage)

      expect(messageParagraph).not.toBeNull()
    })
  })
})
