import React from 'react';
import useLocalStorage from 'use-local-storage';
import './index.css';

function App() {
  const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light');

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme)
  }
  return (
    <div className='app' data-theme={theme}>
      <div className='login'>
        <h1>Login</h1>
        <div className='container'>
          <div className='top'>
            <i class='fab fa-google' />
            <i class='fab fa-facebook-square' />
            <i class='fab fa-linkedin' />
            <i class='fab fa-twitter-square' />
            <i class='fab fa-apple' />
          </div>
          <p className='divider'><span>Or</span></p>
          <form>
            <label>E-mail</label>
            <input type="email" placeholder='Enter your email' />
            <label>Password</label>
            <input type="password" placeholder='Enter your password' />
            <div className='remember'>
              <input type='checkbox' checked='checked' />
              <p>Remember Me</p>
            </div>
            <button>Log in</button>
          </form>
          <div className='bottom'>
            <p>Forget your password</p>
            <a href="/">Reset your password</a>
          </div>
          <p className='create'>Create account</p>
          <div className='theme-toggle'>
            <h2>Light theme</h2>
            <i onClick={switchTheme} class='fas fa-toggle-on' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;