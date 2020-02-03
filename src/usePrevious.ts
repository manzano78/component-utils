import { useEffect, useRef } from 'react'

export function usePrevious<T>(value: T): T | undefined
export function usePrevious<T, D>(value: T, initialValue: D): T | D

export function usePrevious<T, D>(value: T, initialValue?: D) {
  const previousValueRef = useRef<T | D | undefined>(initialValue)

  useEffect(() => {
    previousValueRef.current = value
  })

  return previousValueRef.current
}
