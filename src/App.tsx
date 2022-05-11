import { Toaster } from 'react-hot-toast'
import { ThemeContextProvider } from './contexts'
import { Router } from './routes'

export function App() {
  return (
    <div className='h-screen scroll-smooth scrollbar-thin scrollbar-track-transparent scrollbar-thumb-zinc-200 dark:scrollbar-thumb-zinc-700'>
      <ThemeContextProvider>
        <Toaster
          containerStyle={{ inset: 24 }}
          toastOptions={{
            position: 'top-right',
            className:
              'bg-zinc-200 dark:bg-zinc-700 text-zinc-800 dark:!text-zinc-200',
          }}
        />
        <Router />
      </ThemeContextProvider>
    </div>
  )
}
