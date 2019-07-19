import React, { Component } from "react";
import { connect } from "react-redux";
import "../App.css";
import {
  Row,
  Form,
  Col,
  Button,
  Container,
  ButtonToolbar,
  Badge
} from "react-bootstrap";
import { convert } from "../actions/actions";

class CurrencyConverter extends Component {
  state = {
    from: "",
    to: "",
    amount: "",
    result: ""
  };

  onChangeHandle = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  swap = () => {
    this.setState({
      from: this.state.to,
      to: this.state.from
    });
  };

  render() {
    const { from, to, amount, result } = this.state;
    return (
      <div>
        <Container>
          <h1 className="header">
            {" "}
            <Badge variant="primary">Currency Converter</Badge>
          </h1>
          <Form
            onSubmit={e => {
              e.preventDefault();
              this.props.convert(this.state.from);
            }}
          >
            <Form.Group as={Row} controlId="formHorizontalEmail">
              <Form.Label column sm={2}>
                Convert From
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  type="text"
                  placeholder="Convert From"
                  name="from"
                  pattern="[A-Z]{3}"
                  title="Three letter country code"
                  value={from}
                  onChange={e => this.onChangeHandle(e)}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formHorizontalEmail">
              <Form.Label column sm={2}>
                Convert To
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  type="text"
                  placeholder="To"
                  name="to"
                  pattern="[A-Z]{3}"
                  title="Enter Three letter country code"
                  value={to}
                  onChange={e => this.onChangeHandle(e)}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formHorizontalEmail">
              <Form.Label column sm={2}>
                Amount
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  type="number"
                  name="amount"
                  placeholder="Amount"
                  value={amount}
                  onChange={e => this.onChangeHandle(e)}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formHorizontalEmail">
              <Form.Label column sm={2}>
                Result
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  type="number"
                  name="result"
                  placeholder="Result"
                  readOnly
                  value={this.props.rates[this.state.to] * this.state.amount}
                  onChange={e => this.onChangeHandle(e)}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formHorizontalEmail">
              <Form.Label column sm={2} />
              <Col sm={10}>
                <ButtonToolbar>
                  <Button type="submit">Convert</Button>
                  <Button type="button" onClick={this.swap}>
                    Swap
                  </Button>
                </ButtonToolbar>
              </Col>
            </Form.Group>
          </Form>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    rates: state.ConvertReducer.rates
  };
};

const mapDispatchToProps = dispatch => {
  return {
    convert: from => dispatch(convert(from))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrencyConverter);
