import React from 'react';
import './login.css';
import { Form, Icon, Input, Button } from 'antd';

// Likley need to import React Router here to be able to route through the app on success or register

const LoginForm = props => {
  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {

        // Object provided under values is { username: '', password: '' }
        // Need to send that to the back end on success
        // Need to determine what to do on error state of login request

      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  const { getFieldDecorator } = props.form;
    return (
      <Form onSubmit={handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          {/* Need Route here to go to home page using Link in React Router instead of an anchor tag */}
          Or <a href="">register now!</a>
        </Form.Item>
      </Form>
    );
}

const Login = Form.create({ name: 'login' })(LoginForm);

export default Login;
