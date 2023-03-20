import React, { useState } from "react";
import { Link } from "react-router-dom";
import Top from "../components/Top";
import Accessibility from "../components/Accessibility";
import Footer from "../components/Footer";
//import Tabs from "../components/Tabs";

//Application Procedure component
const ApplicationProcedure = () => {
  return (
    <div>
      <h3 class="pb-4 font-bold text-2xl py-5 font-body">
        Application Procedure
      </h3>
      <p className="text-2xl">
        In order to register for a Retailer License, the following must be
        <br />
        provided, met, or acknowledged:
      </p>
      <ul className="list-disc text-2xl py-5 space-y-5 text-justify">
        <li>
          <p>
            A <b>letter of intent</b>
          </p>
        </li>
        <li>
          <p>
            A <b>receipt of payment</b>
          </p>
        </li>
        <li>
          <p>
            Applicants are required to <b> meet all costs</b> arising from:
            <br />
            <b> 1.</b> The preparation and submission of applications.
            <br />
            <b> 2.</b> Providing any additional information requested.
            <br />
            <b> 3.</b>The processing of each application including responding to
            comments and attending at, and making submissions to PURA concerning
            these applications.
          </p>
        </li>
        <li>
          <p>
            All{" "}
            <b>
              {" "}
              applications and supporting documentation become the property of
              PURA
            </b>{" "}
            upon submission.
          </p>
        </li>
        <li>
          <p>
            All supporting material submitted which may contain
            <b>
              {" "}
              sensitive/confidential information should be highlighted or marked
              "confidential information"
            </b>{" "}
            <br />
            <b> NB:</b> PURA reserves the right to request applicants conduct
            presentations, if necessary.
          </p>
        </li>
        <li>
          <p>
            Applicants should be prepared to{" "}
            <b>
              {" "}
              send a representative(s) to PURA to discuss their applications and
              supporting documentation, if requested by PURA.
            </b>
          </p>
        </li>
      </ul>
    </div>
  );
};

//key submission documents component
const SubmissionDocuments = () => {
  return (
    <div>
      <h3 class="pb-4 font-bold text-2xl py-5 font-body">
        Key Submission Documents
      </h3>
      <ul className="list-disc text-2xl py-5 space-y-5 text-justify">
        <li>
          <p>
            <b> Fire Certificate</b>
          </p>
        </li>
        <li>
          <p>
            <b>Environmental Impact Assessment</b> from (NEA)
          </p>
        </li>
        <li>
          <p>
            A Detailed <b>Engineering Design</b> of the Fuel Station
          </p>
        </li>
        <li>
          <p>
            <b>Development Permit</b> From Physical Planning
          </p>
        </li>
        <li>
          <p>
            <b> Official Bank Statements</b> <br />
            <b>NB:</b>Bank statements Must Cover 75% of Submitted BOQ's at the
            Time of Application.
          </p>
        </li>
        <li>
          <a
            href="#"
            className="text-primary underline text-md hover:text-blue-800"
          >
            Tin Certificate
          </a>
        </li>
        <li>
          <p>
            <b>Business Plan</b>
          </p>
        </li>
        <li>
          <p>
            <b>Certificate of Good Character</b>
          </p>
        </li>
        <li>
          <p>
            <b>Copies of ID or Passport</b>
          </p>
        </li>
        <li>
          <p>
            <b>Business Registration Certificate</b>
          </p>
        </li>
        <li>
          <p>
            <b> Memo and Articles</b> of Association(provided that the business
            is a company)
          </p>
        </li>
        <li>
          <p>
            <b>Cover Letter</b>
          </p>
        </li>
        <li>
          <p>
            <b>Affidavit</b> sworn to by the applicant or its representative
          </p>
        </li>
      </ul>
    </div>
  );
};

//root component
const ApplicationDocumentsRetailer = () => {
  const [procedurePressed, setProcedurePressed] = useState(true);
  const [documentPressed, setDocumentPressed] = useState(false);

  const updateProcedurePressed = () => {
    setProcedurePressed(true);
    setDocumentPressed(false);
  };
  const updateDocumentPressed = () => {
    setDocumentPressed(true);
    setProcedurePressed(false);
  };

  return (
    <div>
      <Top />
      {/**custom tabs */}
      <div className="px-52">
        <div className="flex justify-start  font-bold py-10 items-center">
          <span
            onClick={updateProcedurePressed}
            className={`p-5 cursor-pointer border-b-4 border-primary hover:bg-dark hover:text-white  transition ease-out duration-300 ${
              procedurePressed && "bg-primary text-white"
            }`}
          >
            Application Procedure
          </span>
          <span
            onClick={updateDocumentPressed}
            className={`p-5 cursor-pointer border-b-4 border-primary hover:bg-dark hover:text-white transition ease-out duration-300 ${
              documentPressed && "bg-primary text-white"
            }`}
          >
            Key Submission Documents
          </span>
        </div>
      </div>
      <main className="px-52" id="main">
        {procedurePressed && <ApplicationProcedure />}
        {documentPressed && <SubmissionDocuments />}
        {procedurePressed && (
          <div className="py-5">
            <a
              href="#main"
              onClick={updateDocumentPressed}
              className="cursor-pointer border-2 border-primary p-5 font-bold text-xl hover:bg-primary hover:text-white transition ease-out duration-500"
            >
              See: Key Submission Documents
            </a>
          </div>
        )}
        {documentPressed && (
          <div className="py-5">
            <Link
              to={`/login`}
              //onClick={updateDocumentPressed}
              className="cursor-pointer border-2 border-primary p-5 font-bold text-xl hover:bg-primary hover:text-white transition ease-out duration-500"
            >
              Apply Now
            </Link>
          </div>
        )}
      </main>
      <Accessibility />
      <Footer />
    </div>
  );
};

export default ApplicationDocumentsRetailer;
