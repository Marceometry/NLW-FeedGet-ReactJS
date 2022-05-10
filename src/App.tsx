import { Router } from './routes'

export function App() {
  return (
    <div className='h-screen scroll-smooth scrollbar-thin scrollbar-track-transparent scrollbar-thumb-zinc-200 dark:scrollbar-thumb-zinc-700'>
      <Router />
    </div>
  )
}
