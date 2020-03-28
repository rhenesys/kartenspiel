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
    let randomCard = Math.floor(Math.random() * 52);
    let uebungen = ["sit-up", "liegestuetze", "squat", "suspension", "burpee"];
    let randomUebung = Math.floor(Math.random() * 5);

    this.setState({
      card: this.state.stappel[randomCard],
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
    let figNumberIndex = 1; //für die jeweilige Gruppennummerierungen

    for (let i = 1; i < 53; i++) {
      if (i % 11 === 0) {
        stappel.push(
          <Karte key={i} setWert={"J"} setFigur={figuren[figIndex]} />
        );
      } else if (i % 12 === 0) {
        stappel.push(
          <Karte key={i} setWert={"Q"} setFigur={figuren[figIndex]} />
        );
      } else if (i % 13 === 0) {
        stappel.push(
          <Karte key={i} setWert={"K"} setFigur={figuren[figIndex]} />
        );
      } else {
        stappel.push(
          <Karte
            key={i}
            setWert={figNumberIndex}
            setFigur={figuren[figIndex]}
          />
        );
      }
      figNumberIndex += 1;

      if (i % 13 === 0) {
        figIndex += 1;
        figNumberIndex = 1;
      }
    }
    return stappel;
  };

  render() {
    return (
      <div className="App container">
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
