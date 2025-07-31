import ModalContent from './ModalContent'

function Modal({ activeModal, onClose }) {
  if (!activeModal) return null

  return (
    <div class="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div
        class="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      <div class="relative max-w-md w-full p-6 rounded-lg backdrop-blur-lg bg-black/50 border border-gray-600/50 shadow-2xl">
        <button
          onClick={onClose}
          class="absolute top-3 right-3 w-6 h-6 flex items-center justify-center rounded bg-black/40 hover:bg-black/60 transition-colors text-(--text-color) text-sm cursor-pointer"
        >
          ×
        </button>

        <ModalContent activeModal={activeModal} />
      </div>
    </div>
  )
}

export default Modal