import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as actions from '../store/actions/auth';
import { SmileOutlined } from '@ant-design/icons';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const FormItem = Form.Item;
const antIcon = <SmileOutlined type="loading" style={{ fontSize: 24 }} spin />;


const NormalLoginForm = () => {
  const onFinish = (values) => {
    this.props.form.validateFields((err, values) => {
        if (!err) {
            this.props.onAuth(values.email, values.password);
            this.props.history.push('/');
        }
    });
    console.log('Received values of form: ', values);
    console.log('login email', this.props.values.email);
  };

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your email address!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in 
        </Button> 
          Or <a href=""> SignUp</a>
          
      </Form.Item>
    </Form>
    
  );
  
};


const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        error: state.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password) => dispatch(actions.authLogin(email, password)) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NormalLoginForm);