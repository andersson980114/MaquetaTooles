import React, { Component } from "react";
import Switch from "react-switch"; 

class Switche extends Component {
  constructor() {
    super();
    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(checked) {
    this.setState({ checked });
  }

  render() {
    return (
      <div className="example"> 
        <label htmlFor="material-switch">
          {this.state.checked  ?
            <span className="inactive">Renovacion automática </span>:
            <span className="active">Renovacion automática </span>
          }
          <Switch
            checked={this.state.checked}
            onChange={this.handleChange}
            onColor="#717577"
            offColor="#5feec8"
            onHandleColor="#ffff"
            handleDiameter={15}
            uncheckedIcon={false}
            checkedIcon={false}
            boxShadow="0px 1px 5px rgba(95, 238, 200, 0.6)"
            activeBoxShadow="0px 0px 1px 10px rgba(95, 238, 200, 0.2)"
            height={12}
            width={25}
            rotate = '180'
            className="react-switch"
            id="material-switch"
          />
          {this.state.checked  ?
            <span className="active"> Renovacion Manual</span>:
            <span className="inactive"> Renovacion Manual</span>
          } 
        </label>
      </div>
    )
  }
}

export default Switche