'use client'

import { useEffect, useState } from 'react'

import { usePathname } from 'next/navigation'

import { CartModal } from '../components/CartModal'
import { useModalStore } from '../store/modalStore'

export const ModalProvider = () => {
  const { activeModal, modalProps, setActiveModal, setModalProps } = useModalStore()
  const [isMounted, setIsMounted] = useState(false)
  const pathName = usePathname()

  console.log('ModalProvider_modalProps', modalProps)

  const handleCloseModal = () => {
    setActiveModal(null)
    setModalProps(null)
  }

  const isOnProfileRoute = pathName.includes('/profile/')

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (activeModal) {
      console.log('Modal is open:', modalProps)
    }
  }, [activeModal, modalProps])

  if (isOnProfileRoute) {
    console.log('ModalProvider_isOnProfileRoute', isOnProfileRoute)
  } else {
    console.log('ModalProvider_isNotOnProfileRoute', isOnProfileRoute)
  }

  if (!isMounted) {
    return null
  }

  let modalComponent = null

  switch (activeModal) {
    case 'CartModal':
      modalComponent = (
        <CartModal isOpen={true} onClose={handleCloseModal} modalProps={modalProps} />
      )
      break
    // Add more cases for other modals here
    default:
      modalComponent = null
  }

  return modalComponent
}
