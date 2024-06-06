import { describe, expect, test } from "vitest"
import { render, fireEvent } from "@testing-library/vue"
import SendButton from "./SendButton.vue"

describe("Given a SendButton component", () => {
  const expectedAriaLabel = "Send"

  describe("When it's mounted", () => {
    test("Then it should render a button with the accesible name `Send`", () => {
      const { getByRole } = render(SendButton)
      const sendButton = getByRole("button", { name: expectedAriaLabel })
      expect(sendButton).not.toBeNull()
    })
  })

  describe("When it's mounted and the user clicks on the button with the accesible name `Send`", () => {
    test("Then it should emit the 'send-message' event", async () => {
      const expectedEvent = "send-message"

      const { getByRole, emitted } = render(SendButton)
      const sendButton = getByRole("button", { name: expectedAriaLabel })

      await fireEvent.click(sendButton)

      expect(emitted()).toHaveProperty("click")
      expect(emitted()).toHaveProperty([expectedEvent])
    })
  })
})
