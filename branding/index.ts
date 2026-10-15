import { fileURLToPath } from 'node:url'
import type { NuxtModule } from 'nuxt/schema'

const siteBranding: NuxtModule = (_options, nuxt) => {
  nuxt.options.css.push(fileURLToPath(new URL('./theme.css', import.meta.url)))
  nuxt.options.app.head.link ??= []
  nuxt.options.app.head.link.push(
    { rel: 'icon', type: 'image/svg+xml', href: '/brand/icon.svg' }
  )
  nuxt.options.app.head.meta ??= []
  nuxt.options.app.head.meta.push({ name: 'theme-color', content: '#7041a4' })
}

export default siteBranding
