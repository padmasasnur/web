function App(props) {
  return (
    <div>
      <Home appName="Netflix" userName={props.userLog} />
    </div>
  );
}
function Home(props) {
  return;
  <div>
    <h1>{props.appName}</h1>
    <h1>{props.appName}</h1>
  </div>;
}
ReactDOM.render(<Home uName="Soumya" />, document.getElementById("root"));
