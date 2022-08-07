import React from "react";
const FeedBackModal = () => {
  return (
    <>
      <div className="modal-dialog feedback-modal-dialog">
        <div className="modal-content feedback-modal-content">
          <div className="modal-header feedback-header">
            <h4 className="modal-title feedback-title">Send Feedback</h4>
          </div>
          <div className="modal-body feedback-body">
            <textarea
              className="form-control"
              id="feedback"
              placeholder="Feedback about this page?"
              rows="5"
            ></textarea>
            <div className="feedback-error">
              <span>Empty feedback cannot be sent.</span>
            </div>
          </div>
          <div className="modal-footer feedback-footer">
            <button
              className="feedback-send win_btn_padding_bottom"
              data-dismiss="modal"
              type="button"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default FeedBackModal;
