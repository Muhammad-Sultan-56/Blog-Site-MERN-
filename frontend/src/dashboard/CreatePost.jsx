import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Form, Input, Button, Select, Upload, Row, Col } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const { Option } = Select;

function CreatePost() {
  const [content, setContent] = useState("");
  const [fileList, setFileList] = useState([]);
  const navigate = useNavigate();
  // onsubmit this function will run
  const onFinish = (values) => {
    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("category", values.category);
    formData.append("excerpt", values.excerpt);
    formData.append("description", content);
    formData.append("image", fileList[0].originFileObj);

    console.log(fileList);

    axios
      .post("http://localhost:3001/post/create", formData, {
        headers: {
          "Content-Type": "multipart/form-Data",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3OWI1ZGZkMWNkY2U1YTllNDU2MDIzMCIsImlhdCI6MTczODQwMjczN30.Lda_5lmYMHXQIyHNrerbaaVhBo-vp_O-R7g9gEBFo-A",
        },
      })
      .then((res) => {
        console.log(res);
        navigate("/dashboard");
      })
      .catch((er) => {
        console.log(er);
      });
  };

  const onFileUpload = (file) => {
    console.log(file);
    setFileList(file.fileList);
  };

  return (
    <div>
      <Navbar />
      <div className="px-15 md:px-30 my-10">
        {/* Create post section */}
        <div className="shadow px-10 py-5">
          <h2 className="text-xl font-semibold border-b pb-4 border-gray-300 mb-5">
            Create New Post
          </h2>

          <Form layout="vertical" onFinish={onFinish}>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  label="Title"
                  name="title"
                  rules={[{ required: true, message: "Title is required" }]}
                >
                  <Input placeholder="Enter post title" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Category"
                  name="category"
                  rules={[{ required: true, message: "Category is required" }]}
                >
                  <Select placeholder="Select a category">
                    <Option value="technology">Technology</Option>
                    <Option value="lifestyle">Lifestyle</Option>
                    <Option value="business">Business</Option>
                    <Option value="education">Education</Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>

            <Form.Item label="Excerpt" name="excerpt">
              <Input.TextArea
                rows={2}
                placeholder="Short description of the post"
              />
            </Form.Item>

            <Form.Item
              label="Content"
              name="content"
              rules={[{ required: true, message: "Content is required" }]}
            >
              <ReactQuill
                value={content}
                onChange={setContent}
                style={{ height: "300px", marginBottom: "30px" }}
              />
            </Form.Item>

            <Form.Item label="Upload Image" name="image">
              <Upload
                onChange={onFileUpload}
                fileList={fileList}
                beforeUpload={() => false}
                listType="picture"
                style={{ marginTop: "50px" }}
              >
                <Button icon={<UploadOutlined />}>Upload</Button>
              </Upload>
            </Form.Item>

            <Form.Item className="flex justify-center">
              <Button type="primary" htmlType="submit" className="w-96">
                Submit Post
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default CreatePost;
