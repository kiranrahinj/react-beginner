import React from "react";

class User extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      planet: "jupiter",
    };
    console.log("hey im from constructor");
  }
  
componentDidMount (){
    this.setState({
        planet:"pluto"
    })
    console.log("im from component did mount");
}

  shouldComponentUpdate(nextProp, nextState) {
    console.log("from component update");
    console.log({
      nextProp,
      nextState,
    });
    return true;
    
  }

  getSnapshotBeforeUpdate(prevProp, prevState) {
    console.log("from snapshot");
    console.log({ prevProp, prevState });
    return true;
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  render() {
    console.log("im from render");
    return (
      <div>
        <h1>{this.props.name}</h1>
        <p>{this.props.desc}</p>
        <h4>{this.state.planet}</h4>
      </div>
    );
  }
}
export default User;
