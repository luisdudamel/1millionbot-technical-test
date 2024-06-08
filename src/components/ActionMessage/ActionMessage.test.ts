import { render } from "@testing-library/vue"
import { describe, expect, test } from "vitest"
import ActionMessage from "./ActionMessage.vue"
import type { ChatMessage } from "@/types"

describe("Given an ActionMessage component", () => {
  describe("When it receives a message 'Hi, how can I help you?'", () => {
    test("Then it should render a button with the text 'Hi, how can I help you?'", () => {
      const mockActionMessage: ChatMessage = {
        id: 1,
        messageAuthor: "agent",
        messageText: "Hi how can I help you?",
        timestamp: 1000,
        actionMessage: true
      }

      const { getByRole } = render(ActionMessage, {
        props: mockActionMessage
      })

      const expectedButton = getByRole("button", {
        name: mockActionMessage.messageText
      })

      expect(expectedButton).not.toBeNull()
    })
  })
})
