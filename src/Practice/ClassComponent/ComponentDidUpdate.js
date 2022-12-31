import React from "react";

export default class ComponentDidUpdate extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    console.log("constructor");
    this.state = {
      count: 0,
    };
  }
  componentDidUpdate(prevProps, prevState) {
    console.warn("This is previous state", prevState.count, this.state.count);
    // console.warn(prevProps);
    if (prevState.count === this.state.count) {
      console.log("state and count is equal");
    }
  }

  render() {
    console.log("render");
    return (
      <div>
        <h1>Hi i am {this.props.name} ComponentDidUpdate</h1>
        <button
          type="button"
          onClick={() => {
            this.setState({ count: 1 });
          }}>
          Update
        </button>
      </div>
    );
  }
}
