/* __imports__ */

import type { MermaidOptions } from '@markdown-flashcards/types'
import { defineMermaidSetup } from '@markdown-flashcards/types'

export default defineMermaidSetup(() => {
  // eslint-disable-next-line prefer-const
  let injection_return: MermaidOptions = {
    theme: 'default',
  }

  /* __injections__ */

  return injection_return
})
