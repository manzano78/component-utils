import React, {
  ComponentType,
  Consumer,
  createContext as createReactContext,
  useContext,
  useMemo
} from 'react'
import { ProviderProps } from './Context-types'
import { isFunction } from '../../utils/typeUtils'

export function createContext<T>(
  defaultValue?: T
): [ComponentType<ProviderProps<T>>, () => T, Consumer<T>] {
  const Context = createReactContext(defaultValue as T)
  const useContextValue = () => useContext(Context)
  const Provider = ({ value, children }: ProviderProps<T>) => {
    const effectiveChildren = useMemo(
      () => (isFunction(children) ? children(value) : children),
      [value, children]
    )

    return (
      <Context.Provider value={value}>{effectiveChildren}</Context.Provider>
    )
  }

  return [Provider, useContextValue, Context.Consumer]
}
