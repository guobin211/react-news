/**
 *  SvgRef.tsx
 * @Date 2020-06-17
 * @Author GuoBin<guobin201314@gmail.com>
 * @Project react-news
 */
import * as React from 'react'
import Panzoom from '@panzoom/panzoom'
import { useEffect } from 'react'

function SvgComponent(props: React.SVGProps<SVGSVGElement>, svgRef?: React.Ref<SVGSVGElement>) {
  const _props = { ...props, id: 'svg-warp' }

  useEffect(() => {
    const elem = document.getElementById('svg-warp') as HTMLElement
    const panZoom = Panzoom(elem, {
      minScale: 1,
      maxScale: 5
    })
    elem.parentElement?.addEventListener('wheel', panZoom.zoomWithWheel)
    panZoom.zoom(2, { animate: true })
  })

  return (
    <svg viewBox="-50 -50 100 100" ref={svgRef} {..._props}>
      <circle r={10} fill="red" transform="scale(4)" />
      <circle r={10} fill="#ff0" transform="scale(1 4)" />
      <circle r={10} fill="pink" transform="scale(4 1)" />
      <circle r={10} />
    </svg>
  )
}

const SvgRef = React.forwardRef(SvgComponent)
export default SvgRef
