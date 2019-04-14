import React from "react";
import { Button, Card, Modal } from 'antd';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftjs from 'draftjs-to-html';
import './index.scss';

export class RichEditor extends React.Component {

  state = {
    showRichText: false,
    editorContent: '',
    editorState: undefined,
  };

  handleClearContent = () => {
    this.setState({
      editorState: '',
      editorContent: '',
    })
  }

  handleGetText = () => {
    this.setState({
      showRichText: true
    })
  }

  onEditorChange: any = (editorContent: any) => {
    this.setState({
      editorContent,
    });
  };

  onEditorStateChange = (editorState: any) => {
    this.setState({
      editorState
    });
  };

  render(): React.ReactNode {
    return (
      <div>
        <Card style={{marginTop: 10}}>
          <Button type="primary" onClick={this.handleClearContent}>清空内容</Button>
          <Button type="primary" onClick={this.handleGetText}>获取HTML文本</Button>
        </Card>
        <Card title="富文本编辑器">
          <Editor
            editorClassName="editor-class"
            editorState={this.state.editorState}
            onContentStateChange={this.onEditorChange}
            onEditorStateChange={this.onEditorStateChange}
          />
        </Card>
        <Modal
          title="富文本"
          visible={this.state.showRichText}
          onCancel={() => {
            this.setState({
              showRichText: false
            })
          }}
          footer={null}
        >
          {draftjs(this.state.editorContent)}
        </Modal>
      </div>
    );
  }
}
