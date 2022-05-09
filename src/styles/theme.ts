export type Theme = 'dark' | 'light' | 'system'

export const setTheme = (theme: Theme) => {
  const root = document.documentElement.classList
  if (
    theme === 'dark' ||
    (theme === 'system' &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    root.add('dark')
  } else {
    root.remove('dark')
  }
}
