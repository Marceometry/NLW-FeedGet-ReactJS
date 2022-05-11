import { useToast } from '@/hooks'

export const useCopy = () => {
  const { addToast } = useToast()

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text)
    addToast('Copiado com sucesso!', 'success', { position: 'top-center' })
  }

  return { handleCopy }
}
