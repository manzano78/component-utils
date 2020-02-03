import { ReactNode } from 'react'

export interface IProviderProps<T> {
  children: ReactNode | ((value: T) => ReactNode)
  value: T
}
