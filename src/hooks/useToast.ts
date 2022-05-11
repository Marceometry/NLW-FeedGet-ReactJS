import toast, { DefaultToastOptions } from 'react-hot-toast'

type ToastVariant = 'success' | 'error'

export const useToast = () => {
  const addToast = (
    text: string,
    variant: ToastVariant = 'success',
    options?: DefaultToastOptions
  ) => {
    toast[variant](text, options)
  }

  return { addToast }
}
