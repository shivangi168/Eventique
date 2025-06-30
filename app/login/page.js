'use client'

import Login from '../../components/Login'

export default function LoginPage({ onSignUp, onLogin }) {
  return <Login onSignUp={onSignUp} onLogin={onLogin} />
} 