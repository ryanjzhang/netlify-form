import "./App.css";
import React from "react";
import { navigateTo } from "gatsby-link";

function encode(data) {
  const formData = new FormData();

  for (const key of Object.keys(data)) {
    formData.append(key, data[key]);
  }

  return formData;
}

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleAttachment = (e) => {
    this.setState({ [e.target.name]: e.target.files[0] });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state,
      }),
    })
      .then(() => navigateTo(form.getAttribute("action")))
      .catch((error) => alert(error));
  };

  render() {
    return (
      <>
        <form name="contact" method="POST" onSubmit={this.handleSubmit}>
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>
              Don’t fill this out if you’re human:
              <input name="bot-field" />
            </label>
          </p>
          <p>
            <label>
              Dog’s Name: <input type="text" name="name" />
            </label>
          </p>
          <p>
            <label>
              File:{" "}
              <input
                type="file"
                name="test-file"
                onChange={this.handleAttachment}
              />
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </>
    );
  }
}
