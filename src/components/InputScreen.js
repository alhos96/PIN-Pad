import { React, Component } from "react";
//import Buttons from "./Buttons";
var i = 0;
var PIN = [];
class InputScreen extends Component {
  state = {
    secretPassword: 1234,
    inputPassword: "",
    placeholder: "",
    counter: i,
    disabled: false,
  };

  changeHandler = (e) => {
    this.setState({ inputPassword: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.secretPassword === parseInt(this.state.inputPassword)) {
      this.setState({ inputPassword: (PIN = []), placeholder: "OK" });
      i = 0;
      PIN = [];
    } else {
      this.setState({ inputPassword: (PIN = []), placeholder: "ERROR" });
      i++;
      PIN = [];
      console.log(PIN);
    }

    if (i === 3) {
      this.setState({ placeholder: "LOCKED", disabled: true });
      setTimeout(() => {
        this.setState({ disabled: false });
        i = 0;
      }, 30000);
    }
  };

  onClick = (e) => {
    PIN.push(e.target.value);
    this.setState({ inputPassword: PIN.join("") });
  };

  onClickClear = () => {
    this.setState({ inputPassword: (PIN = []) });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            name="inputPassword"
            placeholder={this.state.placeholder}
            className={this.props.className}
            value={this.state.inputPassword}
            onChange={this.changeHandler}
            disabled={this.state.disabled}
          />

          {/* <Buttons></Buttons>*/}
          <input type="button" className="button one" value="1" onClick={this.onClick} disabled={this.state.disabled} />
          <input type="button" className="button two" value="2" onClick={this.onClick} disabled={this.state.disabled} />
          <input type="button" className="button three" value="3" onClick={this.onClick} disabled={this.state.disabled} />
          <input type="button" className="button four" value="4" onClick={this.onClick} disabled={this.state.disabled} />
          <input type="button" className="button five" value="5" onClick={this.onClick} disabled={this.state.disabled} />
          <input type="button" className="button six" value="6" onClick={this.onClick} disabled={this.state.disabled} />
          <input type="button" className="button seven" value="7" onClick={this.onClick} disabled={this.state.disabled} />
          <input type="button" className="button eight" value="8" onClick={this.onClick} disabled={this.state.disabled} />
          <input type="button" className="button nine" value="9" onClick={this.onClick} disabled={this.state.disabled} />
          <input type="button" className="button zero" value="0" onClick={this.onClick} disabled={this.state.disabled} />
          <input type="button" className="button clear" value="clear" onClick={this.onClickClear} disabled={this.state.disabled} />
          <input type="submit" className="button enter" value="enter" disabled={this.state.disabled} />
        </form>
      </div>
    );
  }
}

export default InputScreen;
