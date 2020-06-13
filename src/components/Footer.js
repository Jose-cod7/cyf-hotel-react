import React from "react";

const Footer = props => {
  const list = props.info.map(contactDetails => (
    <li key={contactDetails}>{contactDetails}</li>
  ));
  return <ul>{list}</ul>;
};

export default Footer;
