import React from 'react'

const useKeydown = (key, callback) => {
  React.useEffect(() => {
    const handleKeydown = (event) => {
      if (event.code !== key) return

      callback()
    }
    window.addEventListener('keydown', handleKeydown)

    return (() => window.removeEventListener('keydown', handleKeydown))
  }, [])
}

export default useKeydown
