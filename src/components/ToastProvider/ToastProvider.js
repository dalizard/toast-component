import React from "react";

const ToastContext = React.createContext()

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

export default ToastProvider;
export { ToastContext }
