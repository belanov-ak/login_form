import React, {useState} from 'react'
import LoginForm from './components/LoginForm'
import WelcomePage from './components/WelcomePage'

function App() {
  const adminUser = {
    email: 'admin@admin.com',
    password: 'admin'
  }

  const [user, setUser] = useState({name: '', email: ''})
  const [error, setError] = useState('')

  const Login = details => {
    if (details.email === adminUser.email && details.password === adminUser.password) {
      setUser({
        email: details.email
      })
    } else {
      setError('Incorrect password or email entered!')
    }
  }

  const Logout = () => {
    setUser({email:''})
  }

  return (
    <div className="App">
      {user.email !== '' ? (
        <WelcomePage Logout={Logout} user={user}/>
      ) : (
        <LoginForm Login={Login} error={error}/>
      )}
    </div>
  );
}

export default App;
