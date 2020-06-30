import React from "react";
import "./App.css";

function Footer(props) {
  return (
    <footer>
        &trade; {props.message}
    </footer>
  );
}

function Header(props) {
  return (
    <header>
      I am text in the Header function  ... {props.message}
    </header>
  );
}


export default function App() {
  return (
    <>
      <Header message="I am the header message rendered in the {props.message} inside the Header function" />
      <header></header>
      <main>
        <div className="App">
          <h1>Header</h1>
        </div>
        <Odometer />
      </main>
      <Footer message="2020" />
    </>
  );
  }

class Odometer extends React.Component {
  constructor() {
    super();
    this.state = {
      odometer : 0,
    }
  }

  changeOdometer(change) {
    let newOdometer = this.state.odometer;
    if (change === "Increase by 1"){
      newOdometer += 1;
    } 
    if (change === "Increase by 10") {
      newOdometer += 10
    }
    if (change === "Increase by 100") {
      newOdometer += 100
    }
    if (change === "Increase by 1000") {
      newOdometer += 1000
    }
    this.setState({
      odometer : newOdometer,
    });
    
  }
  render() {
    return (
      <>
      <button onClick={() => this.changeOdometer("Increase by 1")}>Increase by 1</button>
      <button onClick={() => this.changeOdometer("Increase by 10")}>Increase by 10</button>
      <button onClick={() => this.changeOdometer("Increase by 100")}>Increase by 100</button>
      <button onClick={() => this.changeOdometer("Increase by 1000")}>Increase by 1000</button>
      <h2>Odometer: {this.state.odometer}</h2>
      </>
    )
  }
}