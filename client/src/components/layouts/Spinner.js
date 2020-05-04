import React from "react";
import { connect } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";

const CircularIndeterminate = ({ loading }) => {
  console.log(loading);
  const loadingUi = loading ? (
    <div style={{ textAlign: "center" }}>
      <CircularProgress size={24} />
    </div>
  ) : null;
  return loadingUi;
};
const mapStateToProps = ({ ui: { loading } }) => {
  return {
    loading,
  };
};
export default connect(mapStateToProps)(CircularIndeterminate);
