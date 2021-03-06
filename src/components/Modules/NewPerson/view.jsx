import React from "react";
import ProfileStep from "./Steps/ProfileStep";
import AddressStep from "./Steps/AddressStep";
import FinishStep from "./Steps/FinishStep";
import MenuAction from "./MenuActions/MenuAction";
import { connect } from "react-redux";
import MenuHeader from "./MenuHeader/MenuHeader";
import { CreatePerson, setOpenModalSuccess } from "./action";

import Modal from "react-bootstrap/Modal";

import Button from "react-bootstrap/Button";

class FormNewPerson extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      summaryValid: true,
      addressValid: true,
      personValidInput: true,
      personValid: true,
      activeStep: 1,
      firstName: "",
      lastName: "",
      email: "",
      street: "",
      phone: "",
      city: "",
      summary: 1,
    };
  }

  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
    switch (input) {
      case "firstName":
        if (e.target.value === "") {
          this.setState({ firstNameError: "Firstname is required" });
        }
        break;
      case "lastName":
        if (e.target.value === "") {
          this.setState({ lastNameError: "Lastname is required" });
        }
        break;
      case "email":
        if (e.target.value === "") {
          this.setState({ emailError: "Email is required" });
        }
        break;
      case "phone":
        if (e.target.value === "") {
          this.setState({
            phoneError: "Phone is required",
          });
        }
        break;
      case "street":
        if (e.target.value === "") {
          this.setState({ streetError: "Street is required" });
        }
        break;
      case "city":
        if (e.target.value === "") {
          this.setState({ cityError: "City is required" });
        }
        break;
      case "summary":
        if (e.target.value === "") {
          this.setState({ cityError: "Summary is required" });
        }
        break;
      default:
        break;
    }
  };

  backStep = () => {
    this.setState({
      activeStep:
        this.state.activeStep > 1
          ? this.state.activeStep - 1
          : this.state.activeStep,
    });
  };

  nextStep = () => {
    const {
      activeStep,
      firstName,
      lastName,
      email,
      street,
      phone,
      summary,
    } = this.state;

    switch (activeStep) {
      case 1:
        if (firstName.trim() === "") {
          this.setState({
            firstNameError: "Firstname is required",
            personValid: false,
          });
        } else {
          this.setState({
            firstNameError: null,
          });
        }
        if (lastName.trim() === "") {
          this.setState({
            lastNameError: "Lastname is required",
            personValid: false,
          });
        } else {
          this.setState({
            lastNameError: null,
          });
        }

        if (email.trim() === "") {
          this.setState({
            emailError: "Email is required",
            personValid: false,
          });
        } else {
          this.setState({
            emailError: null,
          });
        }

        if (phone.trim() === "") {
          this.setState({
            phoneError: "Phone is required",
            personValid: false,
          });
        } else {
          this.setState({
            phoneError: null,
          });
        }

        if (
          firstName.trim() !== "" &&
          lastName.trim() !== "" &&
          email.trim() !== "" &&
          phone.trim() !== ""
        ) {
          this.setState({
            activeStep: activeStep + 1,
            enabledAddress: true,
            personValid: true,
          });
        }
        break;
      case 2:
        if (street.trim() === "") {
          this.setState({
            streetError: "Street is required",
            addressValid: false,
          });
        } else {
          this.setState({
            streetError: null,
          });
        }

        // if (city.trim() === "") {
        //   this.setState({ cityError: "City is required" });
        // } else {
        //   this.setState({
        //     enabledSummary: true,
        //     personValid: true,
        //     cityError: null
        //   });
        // }

        if (street.trim() !== "") {
          this.setState({
            activeStep: activeStep + 1,
            addressValid: true,
            enabledSummary: true,
          });
        }

        // if (city.trim() === "") {
        //   this.setState({ cityError: "City is required" });
        // } else {
        //   this.setState({
        //     enabledSummary: true,
        //     personValid: true,
        //     cityError: null
        //   });
        // }
        break;

      case 3:
        if (summary.trim() !== 1) {
          this.setState({
            summaryValid: true,
          });
        }
        break;
      default:
        break;
    }
  };

  btnProfile = () => {
    this.setState({ activeStep: 1 });
  };

  btnAddress = () => {
    const { firstName, lastName, email, phone, activeStep } = this.state;

    switch (activeStep) {
      case 1:
        if (firstName.trim() === "") {
          this.setState({
            personValid: false,
            firstNameError: "Firstname is required",
          });
        } else {
          this.setState({ firstNameError: null });
        }

        if (lastName.trim() === "") {
          this.setState({
            personValid: false,
            lastNameError: "Lastname is required",
          });
        } else {
          this.setState({ lastNameError: false });
        }

        if (email.trim() === "") {
          this.setState({
            personValid: false,
            emailError: "Email is required",
          });
        } else {
          this.setState({ emailError: false });
        }

        if (phone.trim() === "") {
          this.setState({
            personValid: false,
            phoneError: "Phone is required",
          });
        } else {
          this.setState({ phoneError: false });
        }

        if (
          firstName.trim() !== "" &&
          lastName.trim() !== "" &&
          email.trim() !== "" &&
          phone.trim() !== ""
        ) {
          this.setState({
            activeStep: 2,
            personValid: true,
          });
        }
        break;
      default:
        break;
    }
  };

  btnSummary = () => {
    this.setState({ activeStep: 3 });
  };

  btnSend = () => {
    this.props.dispatch(CreatePerson(this.state));
  };

  handleClose = () => {
    this.props.dispatch(setOpenModalSuccess(false));
  };

  render() {
    const {
      activeStep,
      firstName,
      lastName,
      lastNameError,
      enabledAddress,
      enabledSummary,
      firstNameError,
      email,
      emailError,
      street,
      streetError,
      city,
      cityError,
      phone,
      phoneError,
      personValidInput,
      personValid,
      addressValid,
      summaryValid,
      summary,
    } = this.state;
    const { isLoading, isOpenModalSuccess } = this.props;

    console.log("LOADING", isLoading);
    return (
      <div>
        <Modal
          show={isOpenModalSuccess}
          onHide={this.handleClose}
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>Success!</Modal.Title>
          </Modal.Header>
          <Modal.Body>Person created successfully!</Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={this.handleClose}>
              OK
            </Button>
          </Modal.Footer>
        </Modal>

        <form action="">
          <MenuHeader
            enabledAddress={enabledAddress}
            enabledSummary={enabledSummary}
            btnProfile={this.btnProfile}
            btnAddress={this.btnAddress}
            btnSummary={this.btnSummary}
            personValid={personValid}
            activeStep={activeStep}
            addressValid={addressValid}
            summaryValid={summaryValid}
          ></MenuHeader>
          {this.state.activeStep === 1 && (
            <ProfileStep
              firstName={firstName}
              firstNameError={firstNameError}
              lastName={lastName}
              lastNameError={lastNameError}
              email={email}
              emailError={emailError}
              phone={phone}
              phoneError={phoneError}
              personValidInput={personValidInput}
              handleChange={this.handleChange}
            />
          )}
          {this.state.activeStep === 2 && (
            <AddressStep
              street={street}
              streetError={streetError}
              city={city}
              cityError={cityError}
              handleChange={this.handleChange}
            />
          )}
          {this.state.activeStep === 3 && (
            <FinishStep summary={summary} handleChange={this.handleChange} />
          )}
          <div>
            <MenuAction
              nextStep={this.nextStep}
              backStep={this.backStep}
              step={activeStep}
              btnSend={this.btnSend}
              isLoading={isLoading}
            ></MenuAction>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    activeStep: state.activeStep,
    isLoading: state.personReducer.isLoading,
    isOpenModalSuccess: state.personReducer.isOpenModalSuccess,
    // isOpenModalError: state.personReducer.isOpenModalError
  };
};

const mapDispatchToProps = (dispatch) => ({
  dispatch: (action) => {
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FormNewPerson);
