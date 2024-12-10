function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}
function GuestGreeting(props) {
  return <h1>Login.</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}
const root = ReactDOM.createRoot(document.getElementById("root"));
// Try changing to isLoggedIn={true}:
root.render(<Greeting isLoggedIn={false} />);
