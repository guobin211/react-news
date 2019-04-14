import { Button, Checkbox, DatePicker, Form, Input, Select } from "antd";
import FormItem from "antd/lib/form/FormItem";
import React from "react";

const Option = Select.Option;

interface IBaseForm {
  form: any,
  filterSubmit: (data: any) => void;
  formList: any;
}

class SelfForm extends React.Component<IBaseForm> {

  constructor(props: IBaseForm) {
    super(props);
  }

  handleFilterSubmit = () => {
    const fieldsValue = this.props.form.getFieldsValue();
    this.props.filterSubmit(fieldsValue);
  }

  reset = () => {
    this.props.form.resetFields();
  }

  getOptionList(data: any) {
    if (!data) {
      return [];
    }
    const options: any[] = []
    data.map((item: any) => {
      options.push(<Option value={item.id} key={item.id}>{item.name}</Option>)
    })
    return options;
  }

  initFormList = () => {
    const {getFieldDecorator} = this.props.form;
    const formList = this.props.formList;
    const formItemList: JSX.Element[] = [];
    if (formList && formList.length > 0) {
      formList.forEach((item: any, i: number) => {
        const label = item.label;
        const field = item.field;
        const initialValue = item.initialValue || '';
        const placeholder = item.placeholder;
        const width = item.width;
        if (item.type === '时间查询') {
          const beginTime = <FormItem label="订单时间" key={field}>
            {
              getFieldDecorator('beginTime')(
                <DatePicker showTime={true} placeholder={placeholder} format="YYYY-MM-DD HH:mm:ss"/>
              )
            }
          </FormItem>;
          formItemList.push(beginTime)
          const endTime = <FormItem label="~" colon={false} key={field}>
            {
              getFieldDecorator('endTime')(
                <DatePicker showTime={true} placeholder={placeholder} format="YYYY-MM-DD HH:mm:ss"/>
              )
            }
          </FormItem>;
          formItemList.push(endTime)
        } else if (item.type === 'INPUT') {
          const INPUT = <FormItem label={label} key={field}>
            {
              getFieldDecorator([field], {
                // initialValue: initialValue
                initialValue
              })(
                <Input type="text" placeholder={placeholder}/>
              )
            }
          </FormItem>;
          formItemList.push(INPUT)
        } else if (item.type === 'SELECT') {
          const SELECT = <FormItem label={label} key={field}>
            {
              getFieldDecorator([field], {
                initialValue
              })(
                <Select
                  style={{width}}
                  placeholder={placeholder}
                >
                  {this.getOptionList(item.list)}
                </Select>
              )
            }
          </FormItem>;
          formItemList.push(SELECT)
        } else if (item.type === 'CHECKBOX') {
          const CHECKBOX = <FormItem label={label} key={field}>
            {
              getFieldDecorator([field], {
                valuePropName: 'checked',
                initialValue
              })(
                <Checkbox>
                  {label}
                </Checkbox>
              )
            }
          </FormItem>;
          formItemList.push(CHECKBOX)
        }
      })
    }
    return formItemList;
  }

  render(): React.ReactNode {
    return (
      <Form layout="inline">
        {this.initFormList()}
        <FormItem>
          <Button type="primary" style={{margin: '0 20px'}} onClick={this.handleFilterSubmit}>查询</Button>
          <Button onClick={this.reset}>重置</Button>
        </FormItem>
      </Form>
    );
  }
}

export const BaseForm = Form.create()(SelfForm);
