import { useState } from 'react'
import { useFinalCallback } from './useFinalCallback'

export function useForceUpdate() {
  const [, setFlag] = useState(true)

  return useFinalCallback(() => {
    setFlag((flag) => !flag)
  })
}
