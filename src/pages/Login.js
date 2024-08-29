import React, { useState } from 'react'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(email, password)
  }

  return (
    <div>
      <h1>Login</h1>
      <form
        onSubmit={handleSubmit}
        style={{
          backgroundColor: '#eeea',
          width: '300px',
          margin: '10px',
          padding: '10px',
        }}
      >
        <input
          type="email"
          style={{ padding: '4px', margin: '4px', width: '280px' }}
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          style={{ padding: '4px', margin: '4px', width: '280px' }}
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          style={{
            padding: '4px',
            margin: '4px',
            width: '292px',
            border: 'none',
            color: 'white',
            backgroundColor: '#259999',
            borderRadius: '10px',
          }}
          type="submit"
        >
          Entrar
        </button>
      </form>
    </div>
  )
}

export default Login
