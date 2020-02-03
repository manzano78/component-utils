import { useAttribute } from './useAttribute'
import { useEffect } from 'react'

export function useIsMounted() {
  const [isMounted, setIsMounted] = useAttribute(true)

  useEffect(
    () => () => {
      setIsMounted(false)
    },
    []
  )

  return isMounted
}
