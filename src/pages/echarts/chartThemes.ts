/**
 * chartThemes
 * @author guobin201314@gmail.com on 2019-02-02
 */
const colorPalette = [
  '#C1232B',
  '#27727B',
  '#FCCE10',
  '#E87C25',
  '#B5C334',
  '#FE8463',
  '#9BCA63',
  '#FAD860',
  '#F3A43B',
  '#60C0DD',
  '#D7504B',
  '#C6E579',
  '#F4E001',
  '#F0805A',
  '#26C0C0'
];

export const Theme = {
  "color": [
    "#f9c700",
    "#ff5400",
    "#6699cc",
    "#9cb3c5",
    "#e0e6ec",
    "#666666",
    "#787464",
    "#cc7e63",
    "#724e58",
    "#4b565b"
  ],
  "backgroundColor": "#ffffff",
  "textStyle": {},
  "title": {
    "textStyle": {
      "color": "#cccccc"
    },
    "subtextStyle": {
      "color": "#cccccc"
    }
  },
  "line": {
    "itemStyle": {
      "normal": {
        "borderWidth": 1
      }
    },
    "lineStyle": {
      "normal": {
        "width": 2
      }
    },
    "symbolSize": "10",
    "symbol": "emptyCircle",
    "smooth": false
  },
  "pie": {
    "itemStyle": {
      "normal": {
        "borderWidth": 0,
        "borderColor": "#ccc"
      },
      "emphasis": {
        "borderWidth": 0,
        "borderColor": "#ccc"
      }
    }
  },
  "categoryAxis": {
    "axisLine": {
      "show": true,
      "lineStyle": {
        "color": "#f1f3f5"
      }
    },
    "axisTick": {
      "show": true,
      "lineStyle": {
        "color": "#f1f3f5"
      }
    },
    "axisLabel": {
      "show": true,
      "textStyle": {
        "color": "#999999",
        "fontSize": "14"
      }
    },
    "splitLine": {
      "show": true,
      "lineStyle": {
        "color": [
          "#f1f3f5"
        ]
      }
    },
    "splitArea": {
      "show": false,
      "areaStyle": {
        "color": [
          "rgba(250,250,250,0.3)",
          "rgba(200,200,200,0.3)"
        ]
      }
    }
  },
  "valueAxis": {
    "axisLine": {
      "show": true,
      "lineStyle": {
        "color": "#f1f3f5"
      }
    },
    "axisTick": {
      "show": true,
      "lineStyle": {
        "color": "#f1f3f5"
      }
    },
    "axisLabel": {
      "show": true,
      "textStyle": {
        "color": "#999999",
        "fontSize": "14"
      }
    },
    "splitLine": {
      "show": true,
      "lineStyle": {
        "color": [
          "#f1f3f5"
        ]
      }
    },
    "splitArea": {
      "show": false,
      "areaStyle": {
        "color": [
          "rgba(250,250,250,0.3)",
          "rgba(200,200,200,0.3)"
        ]
      }
    }
  },
  "toolbox": {
    "iconStyle": {
      "normal": {
        "borderColor": "#999999"
      },
      "emphasis": {
        "borderColor": "#666666"
      }
    }
  },
  "legend": {
    "textStyle": {
      "color": "#333333"
    }
  },
  "tooltip": {
    "axisPointer": {
      "lineStyle": {
        "color": "#cccccc",
        "width": 1
      },
      "crossStyle": {
        "color": "#cccccc",
        "width": 1
      }
    }
  },
  "timeline": {
    "lineStyle": {
      "color": "#293c55",
      "width": 1
    },
    "itemStyle": {
      "normal": {
        "color": "#293c55",
        "borderWidth": 1
      },
      "emphasis": {
        "color": "#a9334c"
      }
    },
    "controlStyle": {
      "normal": {
        "color": "#293c55",
        "borderColor": "#293c55",
        "borderWidth": 0.5
      },
      "emphasis": {
        "color": "#293c55",
        "borderColor": "#293c55",
        "borderWidth": 0.5
      }
    },
    "checkpointStyle": {
      "color": "#e43c59",
      "borderColor": "rgba(194,53,49,0.5)"
    },
    "label": {
      "normal": {
        "textStyle": {
          "color": "#293c55"
        }
      },
      "emphasis": {
        "textStyle": {
          "color": "#293c55"
        }
      }
    }
  },
  "markPoint": {
    "label": {
      "normal": {
        "textStyle": {
          "color": "#ffffff"
        }
      },
      "emphasis": {
        "textStyle": {
          "color": "#ffffff"
        }
      }
    }
  }
}

export const lightTheme = {
  color: colorPalette,

  title: {
    textStyle: {
      fontWeight: 'normal',
      color: '#27727B'
    }
  },

  visualMap: {
    color: ['#C1232B', '#FCCE10']
  },

  toolbox: {
    iconStyle: {
      normal: {
        borderColor: colorPalette[0]
      }
    }
  },

  tooltip: {
    backgroundColor: 'rgba(50,50,50,0.5)',
    axisPointer: {
      type: 'line',
      lineStyle: {
        color: '#27727B',
        type: 'dashed'
      },
      crossStyle: {
        color: '#27727B'
      },
      shadowStyle: {
        color: 'rgba(200,200,200,0.3)'
      }
    }
  },

  dataZoom: {
    dataBackgroundColor: 'rgba(181,195,52,0.3)',
    fillerColor: 'rgba(181,195,52,0.2)',
    handleColor: '#27727B'
  },

  categoryAxis: {
    axisLine: {
      lineStyle: {
        color: '#27727B'
      }
    },
    splitLine: {
      show: false
    }
  },

  valueAxis: {
    axisLine: {
      show: false
    },
    splitArea: {
      show: false
    },
    splitLine: {
      lineStyle: {
        color: ['#ccc'],
        type: 'dashed'
      }
    }
  },

  timeline: {
    lineStyle: {
      color: '#27727B'
    },
    controlStyle: {
      normal: {
        color: '#27727B',
        borderColor: '#27727B'
      }
    },
    symbol: 'emptyCircle',
    symbolSize: 3
  },

  line: {
    itemStyle: {
      normal: {
        borderWidth: 2,
        borderColor: '#fff',
        lineStyle: {
          width: 3
        }
      },
      emphasis: {
        borderWidth: 0
      }
    },
    symbol: 'circle',
    symbolSize: 3.5
  },

  candlestick: {
    itemStyle: {
      normal: {
        color: '#C1232B',
        color0: '#B5C334',
        lineStyle: {
          width: 1,
          color: '#C1232B',
          color0: '#B5C334'
        }
      }
    }
  },

  graph: {
    color: colorPalette
  },

  map: {
    label: {
      normal: {
        textStyle: {
          color: '#C1232B'
        }
      },
      emphasis: {
        textStyle: {
          color: 'rgb(100,0,0)'
        }
      }
    },
    itemStyle: {
      normal: {
        areaColor: '#ddd',
        borderColor: '#eee'
      },
      emphasis: {
        areaColor: '#fe994e'
      }
    }
  },

  gauge: {
    axisLine: {
      lineStyle: {
        color: [
          [
            0.2, '#B5C334'
          ],
          [
            0.8, '#27727B'
          ],
          [1, '#C1232B']
        ]
      }
    },
    axisTick: {
      splitNumber: 2,
      length: 5,
      lineStyle: {
        color: '#fff'
      }
    },
    axisLabel: {
      textStyle: {
        color: '#fff'
      }
    },
    splitLine: {
      length: '5%',
      lineStyle: {
        color: '#fff'
      }
    },
    title: {
      offsetCenter: [0, -20]
    }
  }
}
