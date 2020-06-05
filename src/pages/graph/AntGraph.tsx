import React from 'react'
import G6 from '@antv/g6'
import Graph from '@antv/g6/lib/graph/graph'

export interface AntGraphProps {}

export interface AntGraphState {}

export default class AntGraph extends React.Component<AntGraphProps, AntGraphState> {
  componentDidMount() {
    fetch('http://localhost:3000/data/graph-tree.json')
      .then((res) => res.json())
      .then((data) => {
        const width = 1920
        const height = 720
        const graph: Graph = new G6.TreeGraph({
          container: 'container',
          width,
          height,
          fitViewPadding: 20,
          modes: {
            default: [
              // {
              //   type: 'collapse-expand',
              //   onChange: function onChange(item, collapsed) {
              //     const data = item?.get('model').data
              //     data.collapsed = collapsed
              //     return true
              //   }
              // },
              'drag-canvas',
              'zoom-canvas'
            ]
          },
          defaultNode: {
            type: 'rect',
            size: [40, 20],
            style: {
              fill: '#C6E5FF',
              stroke: '#5B8FF9'
            }
          },
          defaultEdge: {
            type: 'line',
            style: {
              stroke: '#A3B1BF'
            }
          },
          layout: {
            type: 'compactBox',
            direction: 'LR',
            getId: function getId(d: any) {
              return d.id
            },
            getHeight: function getHeight() {
              return 16
            },
            getWidth: function getWidth() {
              return 16
            },
            getVGap: function getVGap() {
              return 10
            },
            getHGap: function getHGap() {
              return 100
            }
          }
        })
        graph.node(function (node) {
          return {
            label: node.id === '1号检测点' ? node.id : `${node.id}`,
            labelCfg: {
              offset: 10,
              position: node.children && node.children.length > 0 ? 'left' : 'right',
              style: {
                fill: node.id === '1号检测点' ? '#f00000' : '#444444'
              }
            },
            style: {
              fill: node.id === '1号检测点' ? '#f00000' : '#C6E5FF',
              stroke: node.id === '1号检测点' ? '#f00000' : '#5B8FF9'
            }
          }
        })
        graph.data(data)
        graph.render()
        graph.fitView()
      })
  }

  render() {
    return (
      <div id="AntGraph">
        AntGraph
        <div id="container" />
      </div>
    )
  }
}
