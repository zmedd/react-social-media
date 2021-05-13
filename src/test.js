import React from "react";

export class Component extends React.Component {
  constructor(props) {
    fname = this.fname;
    state = this.state;
    super(props);
  }

  doSomething() {
    console.log("ceva");
  }

  render() {
    return (
      <div>
        <h1>hi</h1>
      </div>
    );
  }
}

export const Component = (props) => {
  function doSomething() {
    console.log("ceva");
  }

  return (
    <div>
      <h1>hi</h1>
    </div>
  );
};
