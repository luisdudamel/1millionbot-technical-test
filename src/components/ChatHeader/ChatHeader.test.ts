import { describe, expect, test } from "vitest"
import { render, fireEvent } from "@testing-library/vue"
import { mockAgent } from "@/utils/mocks/mockdata"
import ChatHeader from "./ChatHeader.vue"
import { contextualMenuOptions } from "@/utils/data"

describe("Given a ChateHeader component", () => {
  describe("When it's mounted and receives an agent named Leia", () => {
    test("Then it should render an image with the alternative text `Profile picture of chat agent Leia`", () => {
      const expectedAlternativeText = "Profile picture of chat agent Leia"

      const { getByAltText } = render(ChatHeader, {
        props: mockAgent
      })
      const agentAvatar = getByAltText(expectedAlternativeText)

      expect(agentAvatar).not.toBeNull()
    })

    test("Then it should render the text 'Leia'", () => {
      const expectedAgentName = "Leia"

      const { getByText } = render(ChatHeader, {
        props: mockAgent
      })
      const agentName = getByText(expectedAgentName)

      expect(agentName).not.toBeNull()
    })
  })

  describe("When it's mounted and the user clicks on the button with the accesible name `Minimize chat`", () => {
    test("Then it should emit the 'minimize-chat' event", async () => {
      const expectedAriaLabel = "Minimize chat"
      const expectedEvent = "minimize-chat"

      const { getByRole, emitted } = render(ChatHeader, {
        props: mockAgent
      })
      const sendButton = getByRole("button", { name: expectedAriaLabel })

      await fireEvent.click(sendButton)

      expect(emitted()).toHaveProperty("click")
      expect(emitted()).toHaveProperty([expectedEvent])
    })
  })

  describe("When it's mounted and the user clicks on the button with the accesible name `Open chat options`", () => {
    test("Then it should show a contextual menu with options", async () => {
      const expectedAriaLabel = "Open chat options"
      const expectedOptions = contextualMenuOptions

      const { getByRole, findAllByRole } = render(ChatHeader, {
        props: mockAgent
      })
      const sendButton = getByRole("button", { name: expectedAriaLabel })

      await fireEvent.click(sendButton)
      const optionsList = await findAllByRole("listitem")

      expect(optionsList).toHaveLength(expectedOptions.length)
    })
  })
})
