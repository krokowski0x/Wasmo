import React, { Component } from "react";
import history from "../../history";
import "./Login.scss";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      auth: this.props.auth,
      isRightOverlayed: true,
      userSignUpName: '',
      userSignUpEmail: '',
      userSignUpPassword: '',
      userSignInName: '',
      userSignInPassword: ''
    };
  }

  componentDidMount() {
    const { auth } = this.state;
    const isLogged = auth.isAuthenticated();
    if (isLogged) {
      history.push("/");
    }
  }

  toggleOverlay = () => {
    this.setState((state) => ({
      isRightOverlayed: !state.isRightOverlayed
    }));
  }

  updateSignUpName = (event) => {
    this.setState({
      userSignUpName: event.target.value
    });
  }

  updateSignUpEmail = (event) => {
    this.setState({
      userSignUpEmail: event.target.value
    });
  }

  updateSignUpPassword = (event) => {
    this.setState({
      userSignUpPassword: event.target.value
    });
  }

  updateSignInName = (event) => {
    this.setState({
      userSignInName: event.target.value
    });
  }

  updateSignInPassword = (event) => {
    this.setState({
      userSignInPassword: event.target.value
    });
  }  

  signUp = () => {
    const { auth, userSignUpEmail, userSignUpName, userSignUpPassword } = this.state;
    auth.signUp(userSignUpEmail, userSignUpName, userSignUpPassword);
  }

  login = () => {
    // const { auth, userSignInName, userSignInPassword } = this.state;
    // auth.login(userSignInName, userSignInPassword);
    history.push("/");
  }

  loginWithSocialMedia = (socialMediaType) => {
    const { auth } = this.state;
    auth.loginSocial(socialMediaType);
  }
 
  render() {
    let overlayClass = "container"
    const { isRightOverlayed, userSignInName, userSignInPassword, userSignUpEmail, userSignUpName, userSignUpPassword } = this.state;
    if (!isRightOverlayed) {
      overlayClass += " right-panel-active";
    }
    return (
      <div className="background-container">
        <div className={overlayClass} id="container">
          <div className="form-container sign-up-container" id="signUp">
            <form action="#">
              <h1>Create Account</h1>
              <div className="social-container">
                <button type="button" className="social fb" onClick={() => {this.loginWithSocialMedia('facebook')}} />
                <button type="button" className="social g" onClick={() => {this.loginWithSocialMedia('google-oauth2')}} />
                <button type="button" className="social git" onClick={() => {this.loginWithSocialMedia('github')}} />
              </div>
              <span>or use your email for registration</span>
              <div className="group">
                <input type="text" value={userSignUpName} onChange={this.updateSignUpName} required />
                <span className="highlight" />
                <span className="bar" />
                <span className="label">Name</span>
              </div>
              <div className="group">
                <input type="text" value={userSignUpEmail} onChange={this.updateSignUpEmail} required />
                <span className="highlight" />
                <span className="bar" />
                <span className="label"> Email</span>
              </div>
              <div className="group">
                <input type="password" value={userSignUpPassword} onChange={this.updateSignUpPassword} required />
                <span className="highlight" />
                <span className="bar" />
                <span className="label">Password</span>
              </div>
              <button type="submit" className="gradient-bg" onClick={this.signUp}>Sign Up</button>
            </form>
          </div>
          <div className="form-container sign-in-container" id="signIn">
            <form action="#">
              <h1>Sign in</h1>
              <div className="social-container">
                <button type="button" className="social fb" onClick={() => {this.loginWithSocialMedia('facebook')}} />
                <button type="button" className="social g" onClick={() => {this.loginWithSocialMedia('google-oauth2')}} />
                <button type="button" className="social git" onClick={() => {this.loginWithSocialMedia('github')}} />
              </div>
              <span>or use your account</span>
              <div className="group">
                <input type="text" value={userSignInName} onChange={this.updateSignInName} required />
                <span className="highlight" />
                <span className="bar" />
                <span className="label">User Name</span>
              </div>
              <div className="group">
                <input type="password" value={userSignInPassword} onChange={this.updateSignInPassword} required />
                <span className="highlight" />
                <span className="bar" />
                <span className="label">Password</span>
              </div>
              <a className="forgot-password" href="https://www.google.com/search?client=firefox-b-d&q=forgot+password">Forgot your password?</a>
              <button type="submit" className="gradient-bg" onClick={this.login}>Sign In</button>
            </form>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1>Welcome Back!</h1>
                <p>To keep connected with us please login with your personal info</p>
                <button type="button" className="ghost" id="signIn" onClick={this.toggleOverlay}>Sign In</button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1>Welcome Chosen One!</h1>
                <p>Enter your personal details and join the best gamer community</p>
                <button type="button" className="ghost" id="signUp" onClick={this.toggleOverlay}>Sign Up</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
