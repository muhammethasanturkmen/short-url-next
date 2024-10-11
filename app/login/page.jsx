import Link from 'next/link'
import { login, signup } from './actions'

export default function LoginPage() {
  return (

      <div className="container">
        <form className='form'>
          <label htmlFor="email">Email:</label>
          <input className='form-input' id="email" name="email" type="email" required />
          <label htmlFor="password">Password:</label>
          <input className='form-input' id="password" name="password" type="password" required />
          <button className='form-btn' formAction={login}>Log in</button>
          <button className='form-btn' formAction={signup}>Sign up</button>
        </form>
        <Link className='login-link' href="/">giriş yapmadan devam et</Link>
      </div>

  )
}