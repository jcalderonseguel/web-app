import React, { Component } from "react";
import Button from "react-bootstrap/Button";

class MenuAction extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    const { backStep, nextStep, btnSend, step, isloading } = this.props;

    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div style={{ float: "right", margin: 40 }}>
                <Button
                  type="button"
                  className="btn btn-outline-primary"
                  onClick={backStep}
                  disabled={step <= 1 ? true : false}
                >
                  Previous
                </Button>

                <Button
                  type="button"
                  className="btn btn-outline-primary"
                  onClick={nextStep}
                  disabled={step > 3 ? true : false}
                >
                  Next
                </Button>

                <Button
                  type="button"
                  className="btn btn-outline-primary"
                  onClick={!isloading ? () => btnSend() : null}
                >
                  {isloading ? "...loading" : "Send"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

MenuAction.propTypes = {};

export default MenuAction;
