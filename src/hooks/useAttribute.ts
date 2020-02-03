import { useRef } from 'react'
import { toEffectiveInitialValue } from '../utils/initializationUtils'
import { isFunction } from '../utils/typeUtils'

export function useAttribute<T>(initialValue: T | (() => T)) {
  const attributeRef = useRef<
    [() => T, (value: T | ((prevValue: T) => T)) => void] | undefined
  >(undefined)

  if (!attributeRef.current) {
    attributeRef.current = createAttribute(initialValue)
  }

  return attributeRef.current
}

function createAttribute<T>(
  initialValue: T | (() => T)
): [() => T, (value: T | ((prevValue: T) => T)) => void] {
  let value = toEffectiveInitialValue(initialValue)

  const getValue = () => value

  const setValue = (nextValue: T | ((prevValue: T) => T)) => {
    value = isFunction(nextValue) ? nextValue(value) : nextValue
  }

  return [getValue, setValue]
}
