class Header extends React.Component {
  render() {
    console.log(this.props.name);
    return (
      <div>
        <h1>Hii {this.props.name}!</h1>
        <h2>HELLO UNIVERSE</h2>
        <h3>NICE WEEKEND!!!</h3>
      </div>
    );
  }
}
class Content extends React.Component {
  render() {
    console.log(this.props.fname + this.props.lname);
    return (
      <h4>
        THIS IS CONTENT COMPONENT {this.props.fname}
        {this.props.lname}
      </h4>
    );
  }
}
class Footer extends React.Component {
  render() {
    return <h4>THIS IS FOOTER COMPONENT</h4>;
  }
}
ReactDOM.render(
  <div>
    <Header name="PADMA" />
    <Content fname="Padma" lname="S" />
    <Footer />
  </div>,
  document.getElementById("root")
);
