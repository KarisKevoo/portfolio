import $ from "jquery";
import {
  FaTwitter,
  FaFacebookF,
  FaWhatsapp,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { TiTick } from "react-icons/ti";
import React, { useRef } from "react";

//checking whether input are empty or not
$(window).ready(function () {
  //hovering social links
  $(".social a").hover(
    function () {
      $(this).css("width", "19vh").css("height", "19vh");
    },
    function () {
      $(this).css("width", "20vh").css("height", "20vh");
    }
  );

  //empty fields not notification
  $("#submit-button").on("click", function (e) {
    if (!$("#name").val()) {
      e.preventDefault();
      $("#name").addClass("formerror");
      $("#nameEmpty").html("*Name is required");
      $("#nameEmpty").show();
    } else if (!$("#email").val()) {
      e.preventDefault();
      $("#email").addClass("formerror");
      $("#emailEmpty").html("*Email is required");
      $("#emailEmpty").show();
    } else if (!$("#message").val()) {
      e.preventDefault();
      $("#message").addClass("formerror");
      $("#messageEmpty").html("*Write something here");
      $("#messageEmpty").show();
    } else {
      $("#messageEmpty").hide();
      $("#emailEmpty").hide();
      $("#nameEmpty").hide();
    }
  });
  $("#name").on("change", function () {
    $("#name").removeClass("formerror");
    $("#nameEmpty").hide();
  });
  $("#email").on("change", function () {
    $("#email").removeClass("formerror");
    $("#emailEmpty").hide();
  });
  $("#message").on("change", function () {
    $("#message").removeClass("formerror");
    $("#messageEmpty").hide();
  });
});

const Contact = () => {
  const socialCover = {
    width: "20vh",
    height: "20vh",
    margin: "10px",
    borderRadius: "15px",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0",
  };
  const socialstyle = {
    width: "100%",
    height: "100%",
    color: "white",
    borderRadius: "15px",
    fontSize: "4vmin",
    transition: ".4s",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  const tickStyle = {
    background: "transparent",
    fontSize: "40px",
    paddingRight: "3px",
  };

  //form handler
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_e9u9u1u",
        "template_ca8wkxj",
        form.current,
        "R4IdCsR1kcUa4ae0R"
      )
      .then(
        (result) => {
          console.log(result.text);
          $("#name, #email, #message").val("");
          $("span").show();
          setTimeout(function () {
            $("span").fadeOut(1000);
          }, 8000);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="content" id="contact">
      <section className="row" style={{ marginTop: "12%" }}>
        <div className="col col-5 column">
          <p>Contact me</p>
          <span className="bg-light" id="messageSent">
            <TiTick style={tickStyle} />
            Message sent successfully! You will be contacted through the email
            you've sent.
          </span>
          <form
            className="column col-10 form-group"
            ref={form}
            onSubmit={sendEmail}
          >
            <input
              type="text"
              className="form-control mb-2 bg-dark"
              name="user_name"
              placeholder="Enter your name"
              id="name"
            />
            <div id="nameEmpty"></div>
            <input
              type="email"
              className="form-control mb-2 bg-dark"
              name="user_email"
              placeholder="Enter your email"
              id="email"
            />
            <div id="emailEmpty"></div>
            <textarea
              className="form-control mb-2 bg-dark"
              rows="8"
              name="message"
              placeholder="Enter your message"
              id="message"
            ></textarea>
            <div id="messageEmpty"></div>
            <button
              type="submit"
              className="form-control w-25 bg-dark"
              name="submit"
              id="submit-button"
            >
              Send
            </button>
          </form>
        </div>
        <div className="col-6 row px-5 social">
          <div id="social-cover" style={{ ...socialCover }}>
            <a
              href="https://www.facebook.com/profile.php?id=100014259484012"
              target="_blank"
              style={{ ...socialstyle, background: "#4267B2" }}
            >
              <FaFacebookF style={{ background: "transparent" }} />
            </a>
          </div>
          <div id="social-cover" style={{ ...socialCover }}>
            <a
              href="https://twitter.com/KarisKevin_001"
              target="_blank"
              style={{ ...socialstyle, background: "#00acee" }}
            >
              <FaTwitter style={{ background: "transparent" }} />
            </a>
          </div>
          <div id="social-cover" style={{ ...socialCover }}>
            <a
              href="https://wa.me/+254746182038"
              target="_blank"
              style={{ ...socialstyle, background: "#075e54" }}
            >
              <FaWhatsapp style={{ background: "transparent" }} />
            </a>
          </div>
          <div id="social-cover" style={{ ...socialCover }}>
            <a
              href="https://www.linkedin.com/in/kevin-kariuki-1b8a58213/"
              target="_blank"
              style={{ ...socialstyle, background: "#0072b1" }}
            >
              <FaLinkedinIn style={{ background: "transparent" }} />
            </a>
          </div>
          <div id="social-cover" style={{ ...socialCover }}>
            <a
              href="https://github.com/KarisKevoo"
              target="_blank"
              style={{ ...socialstyle, background: "#171515" }}
            >
              <FaGithub style={{ background: "transparent" }} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Contact;
