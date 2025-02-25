import { Button, Form, Input, Modal } from "antd";
import { TypeLoginForm } from "../../lib/types/user";
import { useState } from "react";

const { Password } = Input;

const ComponentLogin = () => {
  const [open, setOpen] = useState(false);
  const handleLogin = async (fields: TypeLoginForm) => {
    console.log("fields", fields);
    // await login(email, password);
  };

  const showModal = () => {
    setOpen(!open);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        marginTop: "20px",
      }}
    >
      <Button size="large" type="primary" onClick={showModal}>
        Please login, and acc
      </Button>

      <Modal
        onCancel={showModal}
        open={open}
        title="Login"
        footer={null}
        closable={true}
        closeIcon
      >
        <Form
          onFinish={handleLogin}
          name="basic"
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          autoComplete="off"
        >
          <Form.Item
            name="email"
            label="Email"
            rules={[
              { required: true, message: "Please input your email!" },
              { type: "email", message: "Please input a valid email!" },
            ]}
          >
            <Input size="large" />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Password size="large" />
          </Form.Item>
          <Button size="large" type="primary" htmlType="submit">
            Do login
          </Button>
        </Form>
      </Modal>
    </div>
  );
};

export default ComponentLogin;
