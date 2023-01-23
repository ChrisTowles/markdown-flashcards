declare interface Window {
  // extend the window
}

// with vite-plugin-vue-markdown, markdowns can be treat as Vue components
declare module '*.md' {
  import type { ComponentOptions } from 'vue'
  const component: ComponentOptions
  export default component
}

declare module '/@markdown-flashcards/configs' {
  import { SlidevConfig } from '@markdown-flashcards/types'
  export default SlidevConfig
}
