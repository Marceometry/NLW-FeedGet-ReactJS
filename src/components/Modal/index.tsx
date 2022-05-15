import { Dialog } from '@headlessui/react'

type Props = {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
}

export const Modal = ({ isOpen, onClose, onConfirm }: Props) => {
  return (
    <Dialog open={isOpen} onClose={onClose} className='relative z-50'>
      <div className='fixed inset-0 bg-black/30' aria-hidden='true' />
      <div className='fixed inset-0 grid place-items-center p-4'>
        <Dialog.Panel className='w-full max-w-lg p-6 rounded-lg bg-zinc-800'>
          <Dialog.Title className='text-xl text-center mb-4'>
            Excluir conta de usuário
          </Dialog.Title>
          <Dialog.Description className='text-center mb-8'>
            Atenção: Esta ação não pode ser revertida
          </Dialog.Description>

          <div className='flex justify-between gap-8'>
            <button
              onClick={onConfirm}
              className='w-full py-3 px-6 rounded-lg bg-zinc-700 hover:bg-red-500 transition-colors'
            >
              Excluir
            </button>
            <button
              onClick={onClose}
              className='w-full py-3 px-6 rounded-lg bg-zinc-700 hover:bg-zinc-600 transition-colors'
            >
              Cancel
            </button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  )
}
