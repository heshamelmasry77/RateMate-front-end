function SignIn() {
  return (
    <div>
      <h1>Sign In</h1>
      <form>
        <label>Email:</label>
        <input type="email" placeholder="Enter your email" />
        <label>Password:</label>
        <input type="password" placeholder="Enter your password" />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default SignIn;
