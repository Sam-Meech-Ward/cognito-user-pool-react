import { useState } from "react"
import { confirmPassword } from "./auth"

export default function ResetPassword() {
  const [username, setUsername] = useState("")
  const [confirmationCode, setConfirmationCode] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")

    try {
      await confirmPassword(username, confirmationCode, newPassword)
      setSuccess(true)
    } catch (err) {
      setError(err.message)
    }
  }

  if (success) {
    return (
      <div>
        <h2>Reset password</h2>
        <p>Your password has been reset successfully!</p>
      </div>
    )
  }

  return (
    <div>
      <h2>Reset Password</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder="Confirmation code"
          value={confirmationCode}
          onChange={(e) => setConfirmationCode(e.target.value)}
        />
        <input
          type="password"
          placeholder="New password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  )
}