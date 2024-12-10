class Parent extends React.Component {
  state = {
    txt: "Hello",
  };
  render() {
    return (
      <div>
        <h1>{this.state.txt}</h1>
        <Child action={this.getDataFromChild.bind(this)} />
      </div>
    );
  }
  getDataFromChild(ChildData) {
    console.log(ChildData);
    this.setState({
      txt: ChildData,
    });
  }
}

// (parameter) props: any

function Child(props) {
  const str = "welcome";
  return (
    <div>
      <button onClick={() => props.action(str)}>send data</button>
    </div>
  );
}
ReactDom.render(<parent />, document.getElementById("root"));
