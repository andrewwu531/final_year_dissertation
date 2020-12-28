import React from 'react';
import { Form, Radio, Select, Input, Button, Checkbox, Spin } from 'antd';
import { connect } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import * as actions from '../store/actions/auth';
import { SmileOutlined } from '@ant-design/icons';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Redirect } from 'react-router';

import ReactDOM from "react-dom";
import "antd/dist/antd.css";

class NormalLoginForm extends React.Component {
  constructor(props) {
    super(props);


    this.state = {
      username: '',
      password: '',
      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
      e.preventDefault();

      this.setState({ submitted: true });
      const { username, password } = this.state;
    
      if (username && password) {
        this.props.onAuth(username, password);
        this.props.history.push('/');
      }

  }

  render() {
    const { loggingIn } = this.props;
    const { username, password, submitted } = this.state;
    return (
      <div className="col-md-6 col-md-offset-3">
        <h2>Login</h2>
        <form name="form" onSubmit={this.handleSubmit}>
          <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
            <label htmlFor="username">Username</label>
            <input type="text" className="form-control" name="username" value={username} onChange={this.handleChange} />
            {submitted && !username &&
              <div className="help-block">Username is required</div>
            }
          </div>
          <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" name="password" value={password} onChange={this.handleChange} />
            {submitted && !password &&
              <div className="help-block">Password is required</div>
            }
          </div>
          <div className="form-group">
            <button className="btn btn-primary">Login</button>
            {loggingIn &&
              <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
            }
            <Link to="/register" className="btn btn-link">Register</Link>
          </div>
        </form>
      </div>
    );
  }
}


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

// class NormalLoginForm extends React.Component {
//   handleSubmit = (e) => {
//       e.preventDefault();
//       this.props.form.validateFields((err, values) => {
//           if (!err) {
//               this.props.onAuth(values.userName, values.password);
//               this.props.history.push('/');
//           }
//       });
//   }

//   render() {
//       let errorMessage = null;
//       if (this.props.error) {
//           errorMessage = (
//               <p>{this.props.error.message}</p>
//           );
//       }

//       const { getFieldDecorator } = this.props.form;
//       return (
//           <div>
//               {errorMessage}
//               {
//                   this.props.loading ?

//                       <Spin indicator={antIcon} />

//                       :

//                       <Form onSubmit={this.handleSubmit} className="login-form">

//                           <FormItem>
//                               {getFieldDecorator('userName', {
//                                   rules: [{ required: true, message: 'Please input your username!' }],
//                               })(
//                                   <Input prefix={<SmileOutlined type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
//                               )}
//                           </FormItem>

//                           <FormItem>
//                               {getFieldDecorator('password', {
//                                   rules: [{ required: true, message: 'Please input your Password!' }],
//                               })(
//                                   <Input prefix={<SmileOutlined type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
//                               )}
//                           </FormItem>

//                           <FormItem>
//                               <Button type="primary" htmlType="submit" style={{ marginRight: '10px' }}>
//                                   Login
//                   </Button>
//                   Or
//                   <NavLink
//                                   style={{ marginRight: '10px' }}
//                                   to='/signup/'> signup
//                   </NavLink>
//                           </FormItem>
//                       </Form>
//               }
//           </div>
//       );
//   }
// }


// const mapStateToProps = (state) => {
//   return {
//       loading: state.loading,
//       error: state.error
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//       onAuth: (username, password) => dispatch(actions.authLogin(username, password))
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(NormalLoginForm);
/**
const NormalLoginForm = () => {

  const onFinish = e => {

    this.props.form.validateFields((e.error, e.value.) => {
        if (!err) {
            this.props.onAuth(email, password );
            this.props.history.push('/signup/');
        } else {
          this.props.history.push('/signup/');
        }
    });
    console.log('Received values of form: ', email);
  };



  return (
    <Form
      onSubmit={onFinish(this.props.email, this.props.password)}
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
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
        <Input prefix={<UserOutlined className="site-form-item-icon" />} value="email" placeholder="Email" />
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
          value = "password"
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
          Or
        <NavLink to="/signup/"> SignUp
        </NavLink>
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

*/