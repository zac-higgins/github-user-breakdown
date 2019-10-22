import React from 'react';
import './register.css';
import { Form, Input, Button } from 'antd';

//Need React Router to import and use for routing to home on successful registration

//Need endpoints to point to for when data is submitted via form
  
const RegisterForm = props => {
  
    const handleSubmit = e => {
      e.preventDefault();
      props.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    };
  
  
    const compareToFirstPassword = (rule, value, callback) => {
      if (value && value !== props.form.getFieldValue('password')) {
        callback('Your passwords do not match.');
      } else {
        callback();
      }
    };
  
    const validateToNextPassword = (rule, value, callback) => {
      if (value) {
        props.form.validateFields(['confirm'], { force: true });
      }
      callback();
    };

      const { getFieldDecorator } = props.form;
  
      return (
        <Form onSubmit={handleSubmit} className='register-form'>
          <Form.Item label="Username">
            {getFieldDecorator('username', {
              rules: [
                {
                  required: true,
                  message: 'Please input a username',
                },
              ],
            })(<Input />)}
          </Form.Item>
          <Form.Item label="Password" hasFeedback>
            {getFieldDecorator('password', {
              rules: [
                {
                  required: true,
                  message: 'Please input your password!',
                },
                {
                  validator: validateToNextPassword,
                },
              ],
            })(<Input.Password />)}
          </Form.Item>
          <Form.Item label="Confirm Password" hasFeedback>
            {getFieldDecorator('confirm', {
              rules: [
                {
                  required: true,
                  message: 'Please confirm your password!',
                },
                {
                  validator: compareToFirstPassword,
                },
              ],
            })(<Input.Password />)}
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className='register-form-button'>
              Register
            </Button>
            {/* Need to route here to the Login page */}
            Already have an account? Login
          </Form.Item>
        </Form>
      );
  }
  
  const Register = Form.create({ name: 'register' })(RegisterForm);
  
  export default Register;