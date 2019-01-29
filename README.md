# react-news

## 项目说明

> React + Typescript + Antd 快速开发管理系统界面

### 预览图

[![React-Ui](https://github.com/guobin211/react-news/blob/master/images/img.png)](https://github.com/guobin211/react-news)

### 开发注意事项

1. 请尽量遵循ts-lint的语法检查，避免无类型声明的变量。

2. 组件文件夹和组件名都必须以大写字母开头。私有组件应避免与现有的html标签重名。

```
    
    /HeaderContent/
        /index.tsx
        
    export class HeaderContent extends React.Component{}
    
```

3. interface类型声明必须是大驼峰形式。`I-ComponentName-Props`。
   
```typescript jsx

    export interface IAppProps {
        name: string;
    }
    interface IAppState {
        name: string;
    }
    export class App extends React.Component<IAppProps, IAppState>{
        constructor(props) {
          super(props);
        }
        
        render():React.ReactNode{
            return (
                <div>
                {this.state.name}
                <p>{this.props.name}</p>
                </div>
            );
        }
    }

```
