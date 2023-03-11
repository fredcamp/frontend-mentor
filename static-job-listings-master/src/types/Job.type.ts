import type { Writable } from 'svelte/store'

export interface Job {
  id: number
  company: string
  logo: string
  new: boolean
  featured: boolean
  position: string
  role: string
  level: string
  postedAt: string
  contract: string
  location: string
  languages: string[]
  tools: string[]
}

export interface JobStore {
  subscribe: Writable<string[]>['subscribe']
  set: Writable<string[]>['set']
}
