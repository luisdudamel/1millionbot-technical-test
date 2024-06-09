import type { ContextualOptions } from "@/types"

export const contextualMenuOptions: ContextualOptions[] = [
  {
    id: 1,
    optionText: "Clear my data",
    actionToEmit: "clear-user-data"
  },
  {
    id: 2,
    optionText: "Change language",
    actionToEmit: "change-language"
  },
  {
    id: 3,
    optionText: "Privacy policy",
    actionToEmit: "check-privacy-policy"
  }
]

export const imageList = [
  {
    id: 1,
    imageUrl: "party1.jpg",
    alternativeText: "Several people on an office enjoying a christmas party"
  },
  {
    id: 2,
    imageUrl: "party2.jpg",
    alternativeText: "Several people on an office enjoying a christmas party"
  },
  {
    id: 3,
    imageUrl: "party3.jpg",
    alternativeText: "Several people on an office enjoying a christmas party"
  }
]
