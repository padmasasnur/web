class Header extends React.Component {
  
  state = {
      name = "megha" 
  };
  
  ChangeName(){
      //asynch
      this.setState({name:"soumya"})
  }
  
  render(){
      return(<div>
          <h1>{this.state.name}</h1>
          <button onClick={() => this.changeState()}>Click</button>
      </div>);
  }
  }
  ReactDOM.render(<Header uName="Soumya" />, document.getElementById("root"));