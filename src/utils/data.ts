import type { ContextualOptions } from "@/types"

export const contextualMenuOptions: ContextualOptions[] = [
  {
    id: 1,
    optionText: "Clear my data",
    actionToEmit: "clear-user-data"
  },
  {
    id: 2,
    optionText: "Change Language",
    actionToEmit: "change-language"
  },
  {
    id: 3,
    optionText: "Privacy policy",
    actionToEmit: "check-privacy-policy"
  }
]
