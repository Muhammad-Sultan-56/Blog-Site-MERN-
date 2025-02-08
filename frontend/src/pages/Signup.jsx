import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Form, Input, Button, Upload, Card, Row, Col } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const Signup = () => {
  const navigate = useNavigate();
  const [fileList, setFileList] = useState([]);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    console.log("Form Submitted:", values);
    setErrors([]); // Clear previous errors
    setLoading(true);

    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("email", values.email);
    formData.append("password", values.password);
    if (fileList.length > 0) {
      formData.append("image", fileList[0].originFileObj);
    }

    axios
      .post("http://localhost:3001/user/signup", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => {
        console.log("Response:", res.data);
        navigate("/login");
      })
      .catch((error) => {
        console.error("Signup Error:", error.response?.data || error.message);

        let errorMessages = [];

        if (error.response?.data?.errors) {
          errorMessages = error.response.data.errors.map((err) => err.message);
        } else if (error.response?.data?.message) {
          errorMessages = [error.response.data.message];
        } else {
          errorMessages = ["An unexpected error occurred. Please try again."];
        }

        setErrors([...errorMessages]);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Validation Failed:", errorInfo);
  };

  const handleUpload = (info) => {
    setFileList(info.fileList);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#edf5ff",
      }}
    >
      <Card title="Signup" className="shadow-lg" style={{ width: 450 }}>
        {errors.length > 0 && (
          <div className="bg-red-100 p-4 rounded mb-4">
            <h4 className="text-red-500 text-lg font-semibold">
              Errors occurred:
            </h4>
            <ul className="list-disc pl-5">
              {errors.map((error, index) => (
                <li key={index} className="text-red-400">
                  {error}
                </li>
              ))}
            </ul>
          </div>
        )}

        <Form
          name="signup"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          layout="vertical"
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please enter your name!" }]}
          >
            <Input placeholder="Enter your name" />
          </Form.Item>

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
            <Upload
              onChange={handleUpload}
              fileList={fileList}
              beforeUpload={() => false}
              maxCount={1}
            >
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
          </Form.Item>

          <Form.Item>
            <Button loading={loading} type="primary" htmlType="submit" block>
              Signup
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Signup;
