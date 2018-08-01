import React from "react";
import AddFishForm from "./AddFishForm";

class Inventory extends React.Component {
  render() {
    return (
     <div className="inventory">
         Inventory
         <AddFishForm addFish= {this.props.addFish}/>
     </div>
    );
  }
}
export default Inventory;
