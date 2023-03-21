import { useState } from "react"
import { forgotPassword } from "./auth"
import { Link } from "react-router-dom"

export default function ForgotPassword() {
  const [username, setUsername] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")

    try {
      await forgotPassword(username)
      setSuccess(true)
    } catch (err) {
      setError(err.message)
    }
  }

  if (success) {
    return (
      <div>
        <h2>Reset password</h2>
        <p>
          Check your email for the confirmation code to reset your password.
        </p>
        <Link to="/reset-password">Reset Password</Link>
      </div>
    )
  }

  return (
    <div>
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {error && <p>{error}</p>}
      <Link to="/login">Sign In</Link>
    </div>
  )
}