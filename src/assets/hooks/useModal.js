import { useState } from 'react'

export const useModal = () => {
  const [activeModal, setActiveModal] = useState(null)

  const openModal = (modalId) => {
    setActiveModal(modalId)
  }

  const closeModal = () => {
    setActiveModal(null)
  }

  return {
    activeModal,
    openModal,
    closeModal
  }
}