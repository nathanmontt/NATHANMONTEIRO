import MenuItems from './MenuItems'
import Modal from './Modal'
import { useModal } from '../../../hooks/useModal'

function FooterNav() {
  const { activeModal, openModal, closeModal } = useModal()

  const handleMenuClick = (e, itemId) => {
    e.preventDefault()
    openModal(itemId)
  }

  return (
    <>
      <nav class="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
        <MenuItems onMenuClick={handleMenuClick} />
      </nav>

      <Modal activeModal={activeModal} onClose={closeModal} />
    </>
  )
}

export default FooterNav