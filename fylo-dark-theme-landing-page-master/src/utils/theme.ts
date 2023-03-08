import { writable } from 'svelte/store'

type Theme = 'light' | 'dark'

let store = writable<Theme>(null)

function applyTheme(): void {
  if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    localStorage.setItem('theme', 'dark')
    document.documentElement.classList.add('dark')
    store.set('dark')
  } else {
    document.documentElement.classList.remove('dark')
    store.set('light')
  }
}

function setTheme(theme: Theme): void {
  localStorage.setItem('theme', theme)
  applyTheme()
}

function getTheme(): string {
  return localStorage.getItem('theme')
}

export { applyTheme, setTheme, getTheme }
export default store
