// jest-dom.d.ts

import '@testing-library/jest-dom/extend-expect'

declare global {
  namespace jest {
    interface Matchers<R> {
      // Add custom matchers if needed
      toBeInTheDocument(): R
    }
  }
}
