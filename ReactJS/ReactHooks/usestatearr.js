function Demo() {
  const [name, setName] = React.useState(["Soumya ", "Pramila ", "Aishu"]);
  const Update = () => {
    console.log(name);
​
    setName(["Gouri", "Anita", "MeghuS"]);
  };
  return (
    <div>
      <h1>Hello Universe</h1>
      <h2>{name}</h2>
​
      <button onClick={Update}>update</button>
    </div>
  );
}
ReactDOM.render(<Demo />, document.getElementById("root"));
