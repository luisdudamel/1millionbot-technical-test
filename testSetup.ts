import { cleanup } from "@testing-library/vue"
import { afterEach, beforeEach, vi } from "vitest"

afterEach(() => {
  cleanup()
})

beforeEach(() => {
  window.HTMLElement.prototype.scrollIntoView = () => vi.fn()
})
