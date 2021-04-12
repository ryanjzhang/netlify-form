import "./App.css";
import React from "react";

export default class Form extends React.Component {
  render() {
    return (
      <div>
        <h1>File Upload</h1>
        <form
          name="file-upload"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="file-upload" />
          <p hidden>
            <label>
              Don’t fill this out:
              <input name="bot-field" />
            </label>
          </p>
          <p>
            <label>
              Your name:
              <br />
              <input type="text" name="name" />
            </label>
          </p>
          <p>
            <label>
              File:
              <br />
              <input type="file" name="attachment" />
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </div>
    );
  }
}
