import React from "react";
var curr_year = new Date().getFullYear();
function Footer() {
  return (
    <footer>
      <p>All right reserved with Copyright @ {curr_year}</p>
    </footer>
  );
}

export default Footer;
