import { useRef } from 'react'

export function useFinalCallback<T extends (...args: any[]) => any>(fn: T) {
  const { current: finalCallback } = useRef(fn)

  return finalCallback
}
