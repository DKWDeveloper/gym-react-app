import React from "react";
import "./Subscriber.css";

const Subscriber = () => {
  return (
    <div className="subscribe-container display-hori-center">
      <div className="subscribe-inner-container">
        <div className="subscribe-fields display-row">
          <div className="subscribe-left-side">
            <h2>SUBSCRIBE TO GET IN TOUCH</h2>
            <p style={{ marginTop: "8px" }}>
              Nunc feugiat mi a tellus consequat imperdiet vestibulum
            </p>
          </div>

          <form action="" className="subscribe-left-side">
            <div className="email-btn-contaniner">
              <input
                type="email"
                className="email-input"
                id="email"
                placeholder="Enter Your email address"
              />
              <button
                type="text"
                className="email-button display-vertical-center">
                Go
              </button>
            </div>

            <div
              id="error-handler"
              className="error-handler email-error"
              style={{ marginTop: "12px" }}>
              <span className="">Email not valid</span>
            </div>

            <div className="checkbox display-vertical-center">
              <input type="checkbox" id="check" />
              <label className="label-checkbox">Accept GDPR Terms</label>
            </div>

            <div
              id="error-handler-2"
              className="error-handler email-error email-error-2">
              <span className="">The field is required</span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Subscriber;
