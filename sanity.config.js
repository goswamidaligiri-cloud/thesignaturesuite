'use client'

import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './sanity/schemas'
import {studioStructure} from './sanity/structure'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'h0vssa9p'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

export default defineConfig({
  name: 'thesignaturesuite',
  title: 'The Signature Suite — CMS',
  projectId,
  dataset,
  basePath: '/studio',
  plugins: [
    structureTool({structure: studioStructure}),
    visionTool(),
  ],
  schema: {types: schemaTypes},
})
