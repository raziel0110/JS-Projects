import React, { Component } from "react";
import Button from "../../../components/UI/Button/Button";
import Spinner from "../../../components/UI/Spinner/Spinner";
import "./ContactData.css";
import axios from "../../../axios-orders";
import Input from "../../../components/UI/Input/Input";

class ContactData extends Component {
  state = {
    orderForm: {
      name: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Name"
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        isTouched: false
      },
      street: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Street"
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        isTouched: false
      },
      city: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "City"
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        isTouched: false
      },
      zipcode: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Zip Code"
        },
        value: "",
        validation: {
          required: true,
          minLenght: 5,
          maxLenght: 10
        },
        valid: false,
        isTouched: false
      },
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "Email"
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        isTouched: false
      },
      deliveryMethod: {
        elementType: "select",
        elementConfig: {
          options: [
            {
              value: "Fastest",
              displayValue: "Fastest"
            },
            {
              value: "Cheapest",
              displayValue: "Cheapest"
            }
          ]
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        isTouched: false
      }
    },
    loading: false,
    formIsValid: false
  };

  checkValidation = (value, rules) => {
    let isValid = true;
    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
    }
    if (rules.minLenght) {
      isValid = value.length >= rules.minLenght && isValid;
    }
    return isValid;
  };

  inputChanged = (ev, input) => {
    const updateOrderForm = {
      ...this.state.orderForm
    };
    const updatedFormEl = { ...updateOrderForm[input] };

    updatedFormEl.value = ev.target.value;
    updatedFormEl.isTouched = true;

    updatedFormEl.valid = this.checkValidation(
      updatedFormEl.value,
      updatedFormEl.validation
    );
    updateOrderForm[input] = updatedFormEl;
    let formIsValid = true;
    for (let inputIndetifier in updateOrderForm) {
      formIsValid = updateOrderForm[inputIndetifier].valid && formIsValid;
    }
    console.log(updatedFormEl);
    this.setState({ orderForm: updateOrderForm, formIsValid: formIsValid });
  };

  orderHandler = e => {
    e.preventDefault();

    this.setState({ loading: true });
    const formData = {};
    for (let formElementIdentifier in this.state.orderForm) {
      formData[formElementIdentifier] = this.state.orderForm[
        formElementIdentifier
      ].value;
    }
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      orderData: formData
    };
    axios
      .post("/orders.json", order)
      .then(response => {
        this.setState({ loading: false });
        this.props.history.push("/");
      })
      .catch(error => this.setState({ loading: false }));
  };

  render() {
    const formElements = [];

    for (let key in this.state.orderForm) {
      formElements.push({
        id: key,
        config: this.state.orderForm[key]
      });
    }

    let form = (
      <form onSubmit={this.orderHandler}>
        {/* create input element dynamically */}

        {formElements.map(formElement => (
          <Input
            key={formElement.id}
            formElement={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            sholdValidate={formElement.config.validation}
            changed={ev => this.inputChanged(ev, formElement.id)}
            invalid={!formElement.config.valid}
            touched={formElement.config.isTouched}
          />
        ))}
        <Button btnType="Success">Order</Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className="ContactData">
        <h4>Enter your Contact Data</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
