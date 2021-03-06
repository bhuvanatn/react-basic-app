import React from "react";
import Header from "./Header"
import Inventory from "./Inventory"
import Order from "./Order"

class App extends React.Component {
    state = {
        fishes: {},
        order: {}
    };
    addFish = fish => {
        console.log("Adding fish from app.js");
    };
  render() {
    return (
        <div className="catch-of-the-day">
            <div className="menu">
                <Header tagline="New World" add =" Thank you"/>
            </div>
            <Order />
            <Inventory  addFish ={this.addFish}/>
        </div>
    );
  }
}

export default App;
