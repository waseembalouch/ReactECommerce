import React from "react";
import { css } from "@emotion/react";
import { useSelector } from "react-redux";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

const overlayStyle = {
  position: "fixed",
  width: "100%",
  height: "100%",
  top: "0",
  left: "0",
  right: "0",
  bottom: "0",
  backgroundColor: "rgba(0,0,0,0.5)",
  zIndex: "1040",
};

const override = css`
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 50px;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  z-index: 1050;
`;

const mapState = ({ appData }) => ({
  appState: appData,
});

const Loader = (props) => {
  const { appState } = useSelector(mapState);
  const { loading } = appState;
  return (
    <>
      {loading && <div id="overlay" style={overlayStyle}></div>}

      <ClimbingBoxLoader color="white" loading={loading} css={override} size={20} />
    </>
  );
};

export default Loader;
