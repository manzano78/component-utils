import { useState } from 'react'
import { useFinalCallback } from './useFinalCallback'

export function useForceUpdate(): [() => void, boolean] {
  const [updateFlag, setUpdateFlag] = useState(true)
  const forceUpdate = useFinalCallback(() => {
    setUpdateFlag((updateFlag) => !updateFlag)
  })

  return [forceUpdate, updateFlag]
}
