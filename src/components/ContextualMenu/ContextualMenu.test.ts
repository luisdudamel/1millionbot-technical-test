import { fireEvent, getByRole, render } from "@testing-library/vue"
import { describe, expect, test } from "vitest"
import ContextualMenu from "./ContextualMenu.vue"
import { contextualMenuOptions } from "@/utils/data"

describe("Given a ContextualMenu component", () => {
  describe("When it's mounted with a list of three actions named 'Clear my data', 'Change language' and 'Privacy policy'", () => {
    test("Then it should render a list with three elements with the text 'Clear my data' and 'Change language' and 'Privacy policy", async () => {
      const expectedButtonTexts = contextualMenuOptions.map((option) => option.optionText)

      const { findAllByRole } = render(ContextualMenu)

      const optionButtons = await findAllByRole("button")

      expect(expectedButtonTexts).toHaveLength(optionButtons.length)

      optionButtons.forEach((buttonText, index) => {
        expect(buttonText.textContent).toBe(expectedButtonTexts[index])
      })
    })

    describe("When it's mounted and the user clicks on the action named 'Clear my data'", () => {
      test("Then it should emit the event named 'clear-user-data'", async () => {
        const expectedButtonText = "Clear my data"
        const expectedEmitText = "clear-user-data"

        const { getByRole, emitted } = render(ContextualMenu)
        const clearDataButton = getByRole("button", { name: expectedButtonText })

        await fireEvent.click(clearDataButton)

        expect(emitted()).toHaveProperty("click")
        expect(emitted()).toHaveProperty([expectedEmitText])
      })
    })
  })
})
