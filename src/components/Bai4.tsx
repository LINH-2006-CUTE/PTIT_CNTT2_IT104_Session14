import { Component } from "react";

class Slogan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slogan: "Học code để đi làm"
    };
  }

  changeState = () => {
    this.setState({
      slogan: "Học code để đi làm !!!"
    });
  };

  render() {
    return (
      <div>
        <h1>Slogan: "{this.state.slogan}"</h1>
        <button onClick={this.changeState}>Change state</button>
      </div>
    );
  }
}

export default Slogan;
