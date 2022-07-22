// Source by https://zenn.dev/tm35/articles/7ac0a932c15ef8

import { useCallback, RefObject } from "react"

type DOMRectProperty = keyof Omit<DOMRect, "toJSON">

export const useGetElementProperty = <T extends HTMLElement>(
  elementRef: RefObject<T>
) => {
  const getElementProperty = useCallback(
    (targetProperty: DOMRectProperty): number => {
      const clientRect = elementRef.current?.getBoundingClientRect()
      if (clientRect) {
        return clientRect[targetProperty]
      }

      return 0
    },
    [elementRef]
  )

  return { getElementProperty }
}