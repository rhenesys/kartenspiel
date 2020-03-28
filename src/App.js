import React, { Component } from "react";
import Karte from "./components/Karte";
import { Button } from "@material-ui/core";

import Karo from "./karo.png";
import Kreuz from "./kreuz.png";
import Herz from "./herz.png";
import Pik from "./pik.png";

class App extends Component {
  state = {
    stappel: [],
    card: "",
    uebung: ""
  };

  componentDidMount() {
    this.setState({
      stappel: this.createStappel()
    });
  }

  getACard = () => {
    let randomKartenBlock = Math.floor(Math.random() * 4);
    let randomCard = Math.floor(Math.random() * 13);

    let uebungen = ["sit-up", "liegestuetze", "squat", "suspension", "burpee"];
    let randomUebung = Math.floor(Math.random() * 5);

    this.setState({
      card: this.state.stappel[randomKartenBlock][randomCard],
      uebung: uebungen[randomUebung]
    });
  };

  createStappel = () => {
    let stappel = [];
    let figuren = [
      <img src={Karo} alt="card" />,
      <img src={Kreuz} alt="card" />,
      <img src={Herz} alt="card" />,
      <img src={Pik} alt="card" />
    ];

    let figIndex = 0;
    let kartBlock = [];

    for (let k = 0; k < 4; k++) {
      for (let i = 0; i < 13; i++) {
        if (i === 0) {
          kartBlock.push(
            <Karte key={i} setWert={"A"} setFigur={figuren[figIndex]} />
          );
        } else if (i % 10 === 0) {
          kartBlock.push(
            <Karte key={i} setWert={"Q"} setFigur={figuren[figIndex]} />
          );
        } else if (i % 11 === 0) {
          kartBlock.push(
            <Karte key={i} setWert={"J"} setFigur={figuren[figIndex]} />
          );
        } else if (i % 12 === 0) {
          kartBlock.push(
            <Karte key={i} setWert={"K"} setFigur={figuren[figIndex]} />
          );
        } else {
          kartBlock.push(
            <Karte key={i} setWert={i} setFigur={figuren[figIndex]} />
          );
        }
      }
      stappel.push(kartBlock);
      figIndex += 1;
      kartBlock = [];
    }
    console.log(stappel);
    return stappel;
  };

  render() {
    return (
      <div className="App container">
        <h1>Übungskarten :D</h1>
        <Button variant="contained" color="primary" onClick={this.getACard}>
          Zieh ne Karte für eine Übung!
        </Button>
        <span>
          {this.state.card}
          <h2 style={{ textAlign: "left" }}>{this.state.uebung}</h2>
        </span>
      </div>
    );
  }
}

export default App;
