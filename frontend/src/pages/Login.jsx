import React, { useContext } from "react";
import { Form, Input, Button, Card } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const AuthCtx = useContext(AuthContext);

  // on submit form this function will run
  const onFinish = (values) => {
    console.log("Success:", values);

    axios
      .post("http://localhost:3001/user/login", values)
      .then((res) => {
        console.log("Response:", res.data);
        if (res.data.status == "Ok") {
          AuthCtx.setIsLogin(true);
          AuthCtx.setToken(res.data.token);
          navigate("/dashboard");
        }
      })
      .catch((error) => {
        console.error("Login Error:", error.response?.data || error.message);

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

  // when some error on  submit this function will run
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
        backgroundColor: "#edf5ff",
      }}
    >
      <Card title="Login" className="shadow-lg" style={{ width: 350 }}>
        {errors.length > 0 && (
          <div className="bg-red-100 p-4 rounded mb-4">
            <ul className="list-disc pl-5">
              {errors.map((error, index) => (
                <p key={index} className="text-red-400">
                  {error}
                </p>
              ))}
            </ul>
          </div>
        )}

        <Form
          name="login"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          layout="vertical"
        >
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

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please enter your password!" }]}
          >
            <Input.Password placeholder="Enter your password" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block loading={loading}>
              Login
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
