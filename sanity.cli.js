import {loadEnvConfig} from '@next/env'
loadEnvConfig(process.cwd())

export default {
  api: {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'h0vssa9p',
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  },
}
