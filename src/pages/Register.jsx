function Register() {
  return (
    <div>
      <h1>Register</h1>
      <form>
        <label>Username:</label>
        <input type="text" placeholder="Enter your username" />
        <label>Email:</label>
        <input type="email" placeholder="Enter your email" />
        <label>Password:</label>
        <input type="password" placeholder="Enter your password" />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
