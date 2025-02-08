import React from "react";
import { Form, Input, Button, Upload, Card, Row, Col } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const Signup = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Card title="Signup" className="shadow-lg" style={{ width: 400 }}>
        <Form
          name="signup"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          layout="vertical"
        >
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="First Name"
                name="firstName"
                rules={[
                  { required: true, message: "Please enter your first name!" },
                ]}
              >
                <Input placeholder="Enter your first name" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Last Name"
                name="lastName"
                rules={[
                  { required: true, message: "Please enter your last name!" },
                ]}
              >
                <Input placeholder="Enter your last name" />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please enter your email!",
                type: "email",
              },
            ]}
          >
            <Input placeholder="Enter your email" />
          </Form.Item>

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="Password"
                name="password"
                rules={[
                  { required: true, message: "Please enter your password!" },
                ]}
              >
                <Input.Password placeholder="Enter your password" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="confirmPassword"
                label="Confirm Password"
                dependencies={["password"]}
                rules={[
                  { required: true, message: "Please confirm your password!" },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error("Passwords do not match!")
                      );
                    },
                  }),
                ]}
              >
                <Input.Password placeholder="Confirm Password" />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item label="Upload Image" name="image">
            <Upload beforeUpload={() => false} maxCount={1}>
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Signup
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Signup;
