import { fireEvent, render, waitFor } from "@testing-library/vue"
import { describe, expect, test } from "vitest"
import ChatLayout from "./ChatLayout.vue"

describe("Given a ChatLayout component", () => {
  describe("When it's mounted with a list of messages", () => {
    describe("And the user sends a message with the text 'Hi, I need help' ", () => {
      test("Then it should render a list of two messages", async () => {
        const userMessage = "Hi, I need help"
        const expectedLabelText = "Ask the chatbot anything"
        const expectedAriaLabel = "Send"

        const { getByLabelText, getByRole, findAllByRole } = render(ChatLayout)

        const inputElement = getByLabelText(expectedLabelText)
        const sendButton = getByRole("button", { name: expectedAriaLabel })

        await fireEvent.update(inputElement, userMessage)
        await fireEvent.click(sendButton)

        await waitFor(
          async () => {
            const expectedMessageList = await findAllByRole("listitem")
            expect(expectedMessageList).toHaveLength(2)
          },
          { timeout: 2000 }
        )
      })
    })
  })
})
