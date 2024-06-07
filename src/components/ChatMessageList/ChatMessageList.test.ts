import { render } from "@testing-library/vue"
import { describe, expect, test } from "vitest"
import ChatMessageList from "./ChatMessageList.vue"
import { mockConversation } from "@/utils/mocks/mockdata"

describe("Given a ChatMessageList component", () => {
  describe("When it's mounted with a list of two messages", () => {
    test("Then it should render two list elements", async () => {
      const { findAllByRole } = render(ChatMessageList, {
        props: {
          messageList: [mockConversation[0], mockConversation[1]]
        }
      })

      const messages = await findAllByRole("listitem")

      expect(messages).toHaveLength(2)
    })
  })
})
