import { useRef } from 'react'
import { toEffectiveInitialValue } from '../utils/initializationUtils'

const DEFAULT_VALUE = Symbol('Default value of static attributes')

export function useFinalAttribute<T>(finalValue: T | (() => T)) {
  const valueRef = useRef<T | typeof DEFAULT_VALUE>(DEFAULT_VALUE)

  if (valueRef.current === DEFAULT_VALUE) {
    valueRef.current = toEffectiveInitialValue(finalValue)
  }

  return valueRef.current
}
