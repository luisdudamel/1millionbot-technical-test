import { fireEvent, render } from "@testing-library/vue"
import { describe, expect, test } from "vitest"
import ChatFooter from "./ChatFooter.vue"
import type { ChatMessage, UserMessage } from "@/types"

describe("Given a ChatFooter component", () => {
  describe("When it's mounted", () => {
    test("Then it should render an input element with the label text 'Ask the chatbot anything'", () => {
      const expectedLabelText = "Ask the chatbot anything"

      const { getByLabelText } = render(ChatFooter)
      const inputElement = getByLabelText(expectedLabelText)

      expect(inputElement.tagName).toBe("INPUT")
    })
  })

  describe("When the user types 'Hi, I would like some help' on the input with the label text 'Ask the chatbot anything'", () => {
    describe("And the user hits the enter key or click the button with the accesible name 'Send'", () => {
      test("Then it should emit the event 'updateList', with the message 'Hi, I would like some help' and sent by the user", async () => {
        const expectedLabelText = "Ask the chatbot anything"
        const expectedAriaLabel = "Send"

        const userMessage = "Hi, I would like some help"
        const expectedMessage: UserMessage = {
          messageText: "Hi, I would like some help",
          messageAuthor: "user"
        }

        const { getByLabelText, getByRole, emitted } = render(ChatFooter)
        const inputElement = getByLabelText(expectedLabelText)
        const sendButton = getByRole("button", { name: expectedAriaLabel })

        await fireEvent.update(inputElement, userMessage)
        await fireEvent.click(sendButton)

        expect(emitted<ChatMessage[][]>("update-list")[0][0]).toMatchObject(expectedMessage)
      })
    })
  })
})
