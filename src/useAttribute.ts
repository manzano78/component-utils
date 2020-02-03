import { useRef } from 'react'
import { useFinalCallback } from './useFinalCallback'
import { isFunction } from 'ts-util-is'

const DEFAULT_VALUE = Symbol('Default value of attributes')

export function useAttribute<T>(
  initialValue: T | (() => T)
): [() => T, (value: T) => void] {
  const valueRef = useRef<T | typeof DEFAULT_VALUE>(DEFAULT_VALUE)
  const getValue = useFinalCallback(() => valueRef.current as T)
  const setValue = useFinalCallback((value: T) => {
    valueRef.current = value
  })

  if (valueRef.current === DEFAULT_VALUE) {
    valueRef.current = isFunction(initialValue)
      ? initialValue()
      : initialValue
  }

  return [getValue, setValue]
}
