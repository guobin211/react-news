/**
 *  WithZoom.tsx
 * @Date 2020-06-18
 * @Author GuoBin<guobin201314@gmail.com>
 * @Project react-news
 */

import React, { useEffect } from "react"
import Panzoom from "@panzoom/panzoom"

const WithZoom: React.FC = (props) => {
  const refParent = React.createRef<HTMLDivElement>()
  const refChild = React.createRef<HTMLDivElement>()
  useEffect(() => {
    if (refParent.current && refChild.current) {
      const panZoom = Panzoom(refChild.current, {
        minScale: 1,
        maxScale: 5
      })
      refParent.current?.addEventListener("wheel", panZoom.zoomWithWheel)
    }
  }, [refChild, refParent])
  return (
    <div ref={refParent}>
      <div ref={refChild}>{props.children}</div>
    </div>
  )
}

export default WithZoom
