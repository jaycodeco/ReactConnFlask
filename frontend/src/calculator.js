import React from "react";
import BtbBox from "./BtnBox";

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: "",
      nums: ["", ""],
      numId: 0,
      op: "",
    };
  }
  operation(op) {
    if (this.state.numId === 1) {
      this.equal();
      return;
    }

    if (
      (op === "+" || op === "-") &&
      this.state.nums[this.state.numId] === ""
    ) {
      this.number(op);
      return;
    }

    this.updateOp(op);
  }

  updateOp(newOP) {
    this.setState({ op: newOP });
    this.updateNumId();
  }

  updateNumId() {
    const nId = this.state.numId === 1 ? 0 : 1;
    this.setState({
      result: this.state.nums[nId],
      numId: nId,
    });
  }

  number(num) {
    // alert("starting");
    const tmp = this.state.nums[this.state.numId] + num;
    this.updateNum(tmp);
    // alert("end");
  }

  updateNum(newNum) {
    var tmp = this.state.nums;
    tmp[this.state.numId] = newNum;
    this.setState({
      result: tmp[this.state.numId],
      nums: tmp,
    });
  }

  dot() {
    const tmp = this.state.nums[this.state.numId] + ".";
    if (isNaN(tmp)) {
      return;
    }
    this.updateNum(tmp);
  }

  clear() {
    this.setState({
      result: "",
      nums: ["", ""],
      numId: 0,
      op: "",
    });
  }

  equal() {
    if (this.state.nums[0] === "" || this.state.nums[1] === "") {
      return;
    }

    this.props.calcApi.calculate(
      this.state.nums[0],
      this.state.nums[1],
      this.state.op,
      (result) => {
        this.updateResult(result);
      }
    );
  }

  updateResult(result) {
    const newNums = [result, ""];
    this.setState({
      result: newNums[0],
      nums: newNums,
      numId: 0,
      op: "",
    });
  }

  render() {
    return (
      <div className="calc_wrap">
        <BtbBox
          result={this.state.result}
          number={this.number.bind(this)}
          operation={this.operation.bind(this)}
          dot={this.dot.bind(this)}
          clear={this.clear.bind(this)}
          equal={this.equal.bind(this)}
        />
      </div>
    );
  }
}

export default Calculator;
