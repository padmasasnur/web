function MyApp() {
  const [name, setName] = React.useState("Allen");

  const updateChanges = () => {
    console.log(name);
    setName("Smith");
  };

  return (
    <div>
      <h1>{name}</h1>
      <button onClick={updateChanges}>Update</button>
    </div>
  );
}
ReactDOM.render(<MyApp />, document.getElementById("root"));
