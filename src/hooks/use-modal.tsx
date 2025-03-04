import { useState, useCallback } from "react"

interface UseModalProps {
  initialOpen?: boolean
}

export function useModal({ initialOpen = false }: UseModalProps = {}) {
  const [isOpen, setIsOpen] = useState(initialOpen)

  const open = useCallback(() => setIsOpen(true), [])
  const close = useCallback(() => setIsOpen(false), [])
  const toggle = useCallback(() => setIsOpen((prev) => !prev), [])

  return {
    isOpen,
    open,
    close,
    toggle,
  }
}

