import { ReactNode } from 'react'

export interface ProviderProps<T> {
  children: ReactNode | ((value: T) => ReactNode)
  value: T
}
