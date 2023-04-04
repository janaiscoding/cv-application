import React from "react";
import "../utils/footer.css";

class MyFooter extends React.Component {
  render() {
    return (
      <>
        <footer className="footer">
          <a
            href="https://github.com/janaiscoding"
            class="footer-link"
            rel="noopener noreferrer"
          >
            ©JanaIsCoding
          </a>
        </footer>
      </>
    );
  }
}

export default MyFooter;
