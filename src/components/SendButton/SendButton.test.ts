import { describe, expect, test } from "vitest"
import { render, fireEvent } from "@testing-library/vue"
import SendButton from "./SendButton.vue"

describe("Given a SendButton component", () => {
  const expectedAriaLabel = "Send"

  const { getByRole, emitted } = render(SendButton)
  const sendButton = getByRole("button", { name: expectedAriaLabel })

  describe("When it's mounted", () => {
    test("Then it should render a button with the accesible name `Send`", () => {
      expect(sendButton).not.toBeNull()
    })
  })

  describe("When it's mounted and the user clicks on the button with the accesible name `Send`", () => {
    test("Then it should emit the 'send-message' event", async () => {
      await fireEvent.click(sendButton)

      expect(emitted()).toHaveProperty("send-message")
      expect(emitted()).toHaveProperty("click")
    })
  })
})
