import React from "react";
import "./applicationcontent.css";

function ApplicationContent() {
  return (
    <>
      <div className="applcontent1">
        <h3>
          Using the Image Forgery Detection Application in 5 Methodical Steps:
        </h3>
        <p>
          <ol>
            <li>
              Image Submission: Initiate the process by selecting the "Upload"
              button, and proceed to upload the image of interest from your
              device.
            </li>
            <br />
            <li>
              Analysis Awaits: Patiently await the application's meticulous
              analysis of the uploaded image, which will provide insights into
              its authenticity.
            </li>
            <br />
            <li>
              Review Analysis Results: Examine the results of the analysis
              closely. The application will offer an assessment of the image,
              indicating its authenticity or highlighting areas of potential
              concern.
            </li>
            <br />
            <li>
              Optional In-Depth Exploration: For those desiring a more
              comprehensive understanding, the option to delve deeper exists.
              Users can explore specific regions of the image marked as
              suspicious or access detailed analytical reports.
            </li>
            <br />
            <li>
              Conclusion: Conclude the image assessment process, ensuring a
              seamless experience with the application.
            </li>
            <br />
          </ol>
        </p>
      </div>
    </>
  );
}

export default ApplicationContent;
