import { isFunction } from './typeUtils'

export function toEffectiveInitialValue<T>(initialValue: T | (() => T)) {
  return isFunction(initialValue) ? initialValue() : initialValue
}
