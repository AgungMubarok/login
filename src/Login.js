import React, { useState } from 'react';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import { Redirect } from 'react-router-dom';

const Login = () => {
  const [dataLoginGoogle, setDataLoginGoogle] = useState();
  const [statusLogin, setStatusLogin] = useState(false);
  const [dataLoginFacebook, setDataLoginFacebook] = useState();

  const responseGoogle = (response) => {
    setDataLoginGoogle(response.profileObj);
    localStorage.setItem('name', response.profileObj.givenName);
    localStorage.setItem('email', response.profileObj.email);
    localStorage.setItem('image', response.profileObj.imageUrl);
    setStatusLogin(true);
  }
  const responseFacebook = (response) => {
    console.log(response)
    setDataLoginFacebook(response);
    console.log(response)
    localStorage.setItem('name', response.name);
    localStorage.setItem('email', response.email);
    localStorage.setItem('image', response.picture.data.url);
    setStatusLogin(true);
  }

  const componentClicked = () => {
    console.log( "Clicked!" )
  }

  return (
      <div className="wrapperLogin">
        <style>
        {`
          .btnFacebook { 
            width: 460px;
            height:70px;  
            border-radius: 6px;
            background: #3b5998;
            color:white;
            text-align: center;
            margin:5px;
            display: flex;
            align-items: center;
            font-size: 30px
          }
          .wrapperLogin button div {
            margin-left: 30px;
          }
          .wrapperLogin button span {
            font-size: 30px;
            color: black;
            padding-right: 66px!important;
          }
          i {
            padding: 5px 60px 0px 50px;
          }
          .btnGoogle { 
            margin:5px;
            width: 460px;
            height:70px;
            border-radius: 6px;
            background: #db3236;
            color:white;
            text-align: center;
            display: flex;
            justify-content: space-around;
            align-items: center;
          }
          .btnFacebook:hover {
            background: #3b5998;
            opacity: 0.6;
          }
          .btnGoogle:hover {
            background: #db3236;
            opacity: 0.6;
          }
        `}
      </style>
        <GoogleLogin
          clientId="116131025192-r2kom4g1i2fu1p45l3a2rut52u93s8i0.apps.googleusercontent.com"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          buttonText="Login with Google"
          cookiePolicy={'single_host_origin'}
          className="btnGoogle"
        />

        <FacebookLogin
          appId="1180796718964988"
          autoLoad={true}
          fields="name,email,picture"
          onClick={componentClicked}
          callback={responseFacebook}
          icon="fa-facebook"
          cssClass="btnFacebook"
          size="small"
        />

        {
          statusLogin ? (
            <Redirect
            to={{
              pathname: "/profile",
            }}
          />
          ) : (
            <Redirect
            to={{
              pathname: "/",
            }}
          />
          )
        }
      </div>
  );
}

export default Login;