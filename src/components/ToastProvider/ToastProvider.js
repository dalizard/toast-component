import React from "react";

export const ToastContext = React.createContext()

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([
    {
      id: crypto.randomUUID(),
      message: 'Hey there!',
      variant: 'notice',
    },
    {
      id: crypto.randomUUID(),
      message: 'Oops! Something went wrong.',
      variant: 'error',
    },
  ])

  React.useEffect(() => {
    const handleKeydown = (event) => {
      if (event.code !== 'Escape') return

      setToasts([])
    }
    window.addEventListener(('keydown'), handleKeydown)

    return (() => window.removeEventListener(('keydown'), handleKeydown))
  }, [])

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

  return <ToastContext.Provider value={{ toasts, createToast, dismissToast }}>
    {children}
  </ToastContext.Provider>
}

export default ToastProvider
