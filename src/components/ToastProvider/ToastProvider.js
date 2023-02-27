import React from "react";
import useKeydown from '../../hooks/use-keydown'

export const ToastContext = React.createContext()

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([])

  const createToast = (message, variant) => {
    const nextToasts = [...toasts, {
      id: crypto.randomUUID(),
      message: message,
      variant: variant,
    }]

    setToasts(nextToasts)
  }

  const dismissToast = (id) => {
    const nextToasts = toasts.filter(toast => toast.id !== id)

    setToasts(nextToasts)
  }

  useKeydown('Escape', () => setToasts([]))

  return <ToastContext.Provider value={{ toasts, createToast, dismissToast }}>
    {children}
  </ToastContext.Provider>
}

export default ToastProvider
