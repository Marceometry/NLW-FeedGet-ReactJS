import { Dialog } from '@headlessui/react'

type Props = {
  isOpen: boolean
  onClose: () => void
}

export const Modal = ({ isOpen, onClose }: Props) => {
  return (
    <Dialog open={isOpen} onClose={onClose} className='relative z-50'>
      <div className='fixed inset-0 bg-black/30' aria-hidden='true' />
      <div className='fixed inset-0 grid place-items-center p-4'>
        <Dialog.Panel className='w-full max-w-lg p-6 rounded-md bg-zinc-800'>
          <Dialog.Title>Deactivate account</Dialog.Title>
          <Dialog.Description>
            This will permanently deactivate your account
          </Dialog.Description>

          <p>
            Are you sure you want to deactivate your account? All of your data
            will be permanently removed. This action cannot be undone.
          </p>

          <button onClick={onClose}>Deactivate</button>
          <button onClick={onClose}>Cancel</button>
        </Dialog.Panel>
      </div>
    </Dialog>
  )
}
