class Header extends React.Component {
  render() {
    console.log(this.props.uName);
    this.props.uName = "Pramila";
    return this.props.uName;
  }
}
ReactDOM.render(<Header uName="Soumya" />, document.getElementById("root"));
