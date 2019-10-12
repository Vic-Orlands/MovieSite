import React from "react";
import "../styles/Footer.css";

const Footer = () => {

    let handleSubmit;

    handleSubmit = () => {
        const Comment = document.querySelector(".inputField").value;
        console.log(Comment);

        localStorage.setItem("UserComments", JSON.stringify(Comment))
        // Comment.value=""
    }

  return (
    <div className="footerBody">
      <div className="footDiv">
        <ul>
          <li>About</li>
          <li>Contact</li>
          <li>Orlands PortFolio</li>
        </ul>

        <div>
          <h4> Leave a comment Below </h4>
          <input
            type="text"
            className="inputField"
            placeholder="Write a Comment"
          />
          <input
            type="submit"
            value="Comment"
            className="inputbtn"
            onClick={handleSubmit}
          />
        </div>
      </div>

      <p className="footerPar">
        {" "}
        Developed by Vic Orlands &copy;<i>chimezieinnocent39@gmail.com</i>
      </p>
    </div>
  );
};
export default Footer;
