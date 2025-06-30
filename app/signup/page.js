'use client'

import SignUp from '../../components/SignUp'

export default function SignUpPage({ onLogin, onSignUp }) {
  return <SignUp onLogin={onLogin} onSignUp={onSignUp} />
} 