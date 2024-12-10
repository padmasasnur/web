function Header(x) {
  return <h1>HLO {x.name}!</h1>;
}
//ReactDOM.render(<Header name="Padma" />, document.getElementById("root"));
function Demo({ fname, lname }) {
  return (
    <div>
      <h1>This is Demo </h1>
      <h2>
        {fname} {lname}
      </h2>
    </div>
  );
}
// ReactDOM.render(
//   <div>
//     <Header name="Padma" />
//     <Demo fname="Padma" lname="Sasnur" />
//   </div>,
//   document.getElementById("root")
// );
function Sample({ obj }) {
  return (
    <div>
      <h1>This is sample </h1>
      <h2>{obj.BTS}</h2>
      <h2> {obj.Blackpink}</h2>
    </div>
  );
}
ReactDOM.render(
  <div>
    <Sample obj={{ BTS: "RM", Blackpink: "Jennie" }} />
    <Demo fname="Kim" lname="Namjoon" />
  </div>,
  document.getElementById("root")
);
// function F1(props) {
//   return (
//     {props.value}="Hii";
//     <div>
//       <h1>{props.value}</h1>
//       <h2>
//        {props.value}
//       </h2>
//     </div>
//   );
// }
// ReactDOM.render(<F1 value="Hlo" />, document.getElementById("root"));
class Demo1 extends React.Component {
  state = {
    name: "soumya",
  };
  changeState() {
    this.setState({
      name: "Pramila",
    });
  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <button onClick={() => this.changeState()}>Click</button>
      </div>
    );
  }
}
ReactDOM.render(<Demo1 />, document.getElementById("root"));

// function Content({sub1,sub2,sub3,sub4}) {
//     return<h1>{sub1}{sub2}{sub3}{sub4}</h1>

// }

// function Footer({Person}) {
//     return<h1>{person.fName}{person.lName}</h1>

// }
// ReactDOM.render{
//     <div>
//         <Header userName="Soumya" />
//         <Content />
//         <Footer fName="soumya" lName="t"/>

//     </div>
// }
