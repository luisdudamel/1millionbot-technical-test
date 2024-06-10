import { describe, expect, test } from "vitest"
import ChatMessageList from "./ChatMessageList.vue"
import { mockConversation } from "@/utils/mocks/mockdata"
import { mount } from "@vue/test-utils"

describe("Given a ChatMessageList component", () => {
  describe("When it's mounted with a list of two messages", () => {
    test("Then it should render two list elements", () => {
      const wrapper = mount(ChatMessageList, {
        props: {
          messageList: [mockConversation[0], mockConversation[1]],
          isAgentTyping: false,
          agentName: "Leia"
        }
      })

      const messages = wrapper.findAll("li")

      expect(messages).toHaveLength(2)
    })
  })
})
