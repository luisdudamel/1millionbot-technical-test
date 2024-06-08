import { describe, expect, test, vi } from "vitest"
import ChatMessageList from "./ChatMessageList.vue"
import { mockConversation } from "@/utils/mocks/mockdata"
import { mount } from "@vue/test-utils"
import { fireEvent, render } from "@testing-library/vue"
import type { ChatMessage } from "@/types"

describe("Given a ChatMessageList component", () => {
  describe("When it's mounted with a list of two messages", () => {
    test("Then it should render two list elements", () => {
      const wrapper = mount(ChatMessageList, {
        props: {
          messageList: [mockConversation[0], mockConversation[1]]
        }
      })

      const messages = wrapper.findAll("li")

      expect(messages).toHaveLength(2)
    })
  })
})
