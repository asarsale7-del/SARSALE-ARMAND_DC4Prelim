function SignupForm() {
  return (
    <form>
      <h2>Sign up</h2>
      <label>
        Name:
        <input type="text" />
      </label>
      <br />
      <label>
        Email:
        <input type="email" />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default SignupForm;