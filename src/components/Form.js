/** @jsx jsx */
import { jsx } from "../context";
import styled from "@emotion/styled";
import React, { useState } from "react";
import axios from "axios";

const FlexContainer = styled.main`
  display: flex;
  justify-content: space-between;
`;

const MainForm = styled.main`
  margin: 0;
  font-size: 21px;
  line-height: 1.65;
  width: 100%;
`;

const FormContainer = styled.form`
  display: grid;
  grid-row-gap: 1em;
`;
const FormLabel = styled.label`
  font-size: 21px;
  font-weight: 500;
  text-align: left;
  color: #fff;
  @media (max-width: 760px) {
    margin-bottom: 20px;
  }
`;

const TextArea = styled.textarea`
  margin: 0;
  border-radius: 5px;
  padding: 0.5em;
  vertical-align: middle;
  white-space: normal;
  background: white;
  line-height: 1;
  font-size: 1rem;
  font-family: inherit;
  transition: all 0.2s ease;
  height: 70px;
  width: 100%;
  margin-right: 20px;
  border: none;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12);
`;

const Button = styled.button`
  padding: 0.65em 1em;
  background: #fec16d;
  border: 1px solid #d1d1d1;
  border-radius: 5px;
  color: #000;
  border: none;
  cursor: pointer;
  line-height: 1;
  font-size: 1rem;
  font-weight: 500;
  font-family: monospace;
  transition: all 0.2s ease;
  @media (max-width: 512px) {
    margin-top: 8px;
  }
`;

const Error = styled.div`
  background: #ee0000;
  color: #fff;
  margin-top: 16px;
  text-align: center;
`;

const Message = styled.p`
  font-size: 16px;
`;

const FormText = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 512px) {
    display: unset;
  }
`;

const FormFlex = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 512px) {
    flex-direction: column;
  }
`;

export default () => {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });
  const [inputs, setInputs] = useState({
    message: "",
  });
  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        message: "",
      });
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };
  const handleOnChange = (e) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    axios({
      method: "POST",
      url: "https://formspree.io/mbjzvqkv",
      data: inputs,
    })
      .then((response) => {
        handleServerResponse(
          true,
          "Thank you, your message has been submitted."
        );
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error);
      });
  };

  return (
    <>
      <FlexContainer>
        <MainForm>
          <FormContainer onSubmit={handleOnSubmit}>
            <FormLabel htmlFor="message">
              Lorem ipsum dolor sit amet, consectetur adipiscing
            </FormLabel>
            <FormFlex>
              <TextArea
                id="message"
                name="message"
                onChange={handleOnChange}
                required
                value={inputs.message}
              />
              <Button type="submit" disabled={status.submitting}>
                {!status.submitting ? (
                  !status.submitted ? (
                    <FormText>
                      <span
                        style={{ fontFamily: "monospace", fontSize: "14px" }}
                      >
                        Submit
                      </span>
                      <span
                        style={{
                          marginLeft: "5px",
                          fontFamily: "monospace",
                          fontSize: "14px",
                        }}
                      >
                        →
                      </span>
                    </FormText>
                  ) : (
                    "Submitted"
                  )
                ) : (
                  "Submitting..."
                )}
              </Button>
            </FormFlex>
          </FormContainer>
          {status.info.error && <Error>Error: {status.info.msg}</Error>}
          {!status.info.error && status.info.msg && (
            <Message>{status.info.msg}</Message>
          )}
        </MainForm>
      </FlexContainer>
    </>
  );
};
