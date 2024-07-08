import type { ModalUsageProps } from '@kirekire95/ui/client'
import { create } from 'zustand'
import type { PersistOptions } from 'zustand/middleware'
import { createJSONStorage, persist } from 'zustand/middleware'

export const ModalType = {
  CartModal: 'CartModal'
} as const

export type ModalProps = ModalUsageProps & Record<string, any>

type ModalState = {
  activeModal: keyof typeof ModalType | null
  modalProps: ModalProps | null
  setActiveModal: (modalName: keyof typeof ModalType | null) => void
  setModalProps: (props: ModalProps | null) => void
}

const modalPersistOptions: PersistOptions<ModalState> = {
  name: 'modal_store',
  storage: createJSONStorage(() => {
    return localStorage
  })
}

export const useModalStore = create(
  persist<ModalState>(set => {
    return {
      activeModal: null,
      modalProps: null,
      setActiveModal: modalName => {
        return set({ activeModal: modalName })
      },
      setModalProps: props => {
        return set({ modalProps: props })
      }
    }
  }, modalPersistOptions)
)
