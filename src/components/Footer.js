import React from "react";

const Footer = props => {
  const list = props.info.map(contacDetails => (
    <li key={contacDetails}>{contacDetails}</li>
  ));
  return <ul>{list}</ul>;
};

export default Footer;
