import { Card, Icon, message, Tabs } from "antd";
import React, { Props } from "react";

const TabPane = Tabs.TabPane;

interface IPane {
  title: string;
  content: string;
  key: string;
}

interface IState {
  panes: any;
  activeKey: any;
}

export class TabsPage extends React.Component<Props<any>, IState> {

  private newTabIndex: number;

  constructor(props: any) {
    super(props);
  }

  handleCallback = (key: string) => {
    message.info("Hi,您选择了页签：" + key)
  }

  componentWillMount() {
    const panes: IPane[] = [
      {
        title: 'Tab 1',
        content: 'Tab 1',
        key: '1'
      },
      {
        title: 'Tab 2',
        content: 'Tab 2',
        key: '2'
      },
      {
        title: 'Tab 3',
        content: 'Tab 3',
        key: '3'
      }
    ]
    this.setState({
      activeKey: panes[0].key,
      panes
    })
  }

  onChange = (activeKey: string) => {
    this.setState({
      activeKey
    })
  }

  onEdit = (targetKey: string, action: string) => {
    this[action](targetKey);
  }

  add = () => {
    const panes = this.state.panes;
    const activeKey = `newTab${this.newTabIndex++}`;
    panes.push({title: activeKey, content: 'New Tab Pane', key: activeKey});
    this.setState({panes, activeKey});
  }
  remove = (targetKey: string) => {
    let activeKey = this.state.activeKey;
    let lastIndex;
    this.state.panes.forEach((pane: IPane, i: any) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const panes = this.state.panes.filter((pane: IPane) => pane.key !== targetKey);
    if (lastIndex && lastIndex >= 0 && activeKey === targetKey) {
      activeKey = panes[lastIndex].key;
    }
    this.setState({panes, activeKey});
  }

  render(): React.ReactNode {
    return (
      <div>
        <Card title="Tab页签" className="card-wrap">
          <Tabs defaultActiveKey="1" onChange={this.handleCallback}>
            <TabPane tab="Tab 1" key="1">欢迎使用React</TabPane>
            <TabPane tab="Tab 2" key="2" disabled={true}>欢迎使用React</TabPane>
            <TabPane tab="Tab 3" key="3">React是一个非常受欢迎的MV*框架</TabPane>
          </Tabs>
        </Card>
        <Card title="Tab带图的页签" className="card-wrap">
          <Tabs defaultActiveKey="1" onChange={this.handleCallback}>
            <TabPane tab={<span><Icon type="plus"/>Tab 1</span>} key="1">欢迎使用React</TabPane>
            <TabPane tab={<span><Icon type="edit"/>Tab 2</span>} key="2">欢迎使用React</TabPane>
            <TabPane tab={<span><Icon type="delete"/>Tab 3</span>} key="3">React是一个非常受欢迎的MV*框架</TabPane>
          </Tabs>
        </Card>
        <Card title="Tab带图的页签" className="card-wrap">
          <Tabs
            onChange={this.onChange}
            activeKey={this.state.activeKey}
            type="editable-card"
            onEdit={this.onEdit}
          >
            {
              this.state.panes.map((panel: IPane) => {
                return <TabPane
                  tab={panel.title}
                  key={panel.key}

                />
              })
            }
          </Tabs>
        </Card>
      </div>
    );
  }
}
