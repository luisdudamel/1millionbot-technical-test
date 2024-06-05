import { describe, expect, test } from "vitest"
import { mount } from "@vue/test-utils"
import SendButton from "./SendButton.vue"

describe("Given a SendButton component", () => {
  const expectedAriaLabel = "Send"

  const wrapper = mount(SendButton)
  const sendButton = wrapper.find(`[aria-label="${expectedAriaLabel}"]`)

  describe("When it's mounted", () => {
    test("Then it should render a button with aria label `Send`", () => {
      expect(sendButton.exists()).toBe(true)
    })
  })

  describe("When it0s mounted and the user clicks on the button with the aria label `Send`", () => {
    test("Then it should emit the 'send-message' event", async () => {
      await sendButton.trigger("click")

      expect(wrapper.emitted("send-message")).toBeTruthy()
    })
  })
})
