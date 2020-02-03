import React, { ComponentType, Consumer, createContext as createReactContext, useContext, useMemo } from 'react'
import { IProviderProps } from './createContext-types'
import { isFunction } from 'ts-util-is'

export function createContext<T>(
  defaultValue?: T
): [ComponentType<IProviderProps<T>>, () => T, Consumer<T>] {
  const Context = createReactContext(defaultValue as T)
  const useContextValue = () => useContext(Context)
  const Provider = ({ value, children }: IProviderProps<T>) => {
    const effectiveChildren = useMemo(
      () => isFunction(children) ? children(value) : children,
      [value, children]
    )

    return (
      <Context.Provider value={value}>
        {effectiveChildren}
      </Context.Provider>
    )
  }

  return [Provider, useContextValue, Context.Consumer]
}
