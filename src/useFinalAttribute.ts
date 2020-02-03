import { useAttribute } from './useAttribute'

export function useFinalAttribute<T>(
  finalValue: T | (() => T)
) {
  const [getFinalValue] = useAttribute(finalValue)

  return getFinalValue()
}
