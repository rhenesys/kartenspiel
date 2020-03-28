import React, { Component } from "react";

class Karte extends Component {
  render() {
    return (
      <div className="card">
        <h2>{this.props.setWert}</h2>
        <h3 style={{marginTop: '-60px'}}>{this.props.setFigur}</h3>

        <h3 style={{textAlign: 'center'}}>{this.props.setFigur}</h3>
        {this.props.uebung}
        <h3 style={{marginBottom: '-60px', textAlign: 'right', marginRight: '15px'}}>{this.props.setFigur}</h3>
        <h2 style={{textAlign: 'right', marginTop: '50px'}}>{this.props.setWert}</h2>
      </div>
    );
  }
}

export default Karte;
