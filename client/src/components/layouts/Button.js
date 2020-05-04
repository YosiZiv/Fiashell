import React from "react";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
const ButtonUi = ({ id, type, text, color, loading }) => (
  <Button
    id={id}
    type={type}
    variant='contained'
    color={color}
    disabled={loading}
  >
    {text}
  </Button>
);

const mapStateToProps = ({ ui: { loading } }) => {
  return {
    loading,
  };
};
export default connect(mapStateToProps, null)(ButtonUi);
