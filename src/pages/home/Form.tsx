import React from "react";
import { Select, Form, Input, Button } from "antd";
const { Option } = Select;
const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8 },
};
const tailLayout = {
  wrapperCol: { offset: 4, span: 8 },
};
interface myFormProps {
  submitPost: (
    ImageUrl: string,
    kind: string,
    _uid: string,
    ig_handle: string
  ) => void;
}
const MyForm: React.FC<myFormProps> = ({ submitPost }) => {
  const onFinish = (values: any) => {
    const { ImageUrl, kind, _uid, ig_handle } = values;
    submitPost(ImageUrl, kind, _uid, ig_handle);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
      <Form {...layout} onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <Form.Item
          label="ImageUrl"
          name="ImageUrl"
          rules={[{ required: true, message: "Please input ImageUrl!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="kind"
          name="kind"
          rules={[
            { required: true, message: "Please input the commodity kind!" },
          ]}
        >
          <Select allowClear>
            <Option value="storage">storage</Option>
            <Option value="living">living</Option>
            <Option value="bedroom">bedroom</Option>
            <Option value="dining">dining</Option>
            <Option value="other">other</Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="_uid"
          name="_uid"
          rules={[
            { required: true, message: "Please input the commodity uid!" },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="ig_handle"
          name="ig_handle"
          rules={[
            {
              required: true,
              message: "Please input the commodity ig_handle!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default MyForm;
