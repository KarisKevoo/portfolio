import $ from "jquery";
import { TbExternalLink } from "react-icons/tb";

//hovering the images
$(window).ready(function () {
  //image click
  $("#mywork img").on("click", function () {
    var imgsrc = $(this).attr("src");
    var link = $(this).next().attr("href");
    //var icon = <BiLinkExternal/>;
    var div =
      "<div id='imageDiv'><img src='" +
      imgsrc +
      "' alt='image'/><div className='row'><a href='" +
      link +
      "' target='_blank' className='bg-light mt-3'>This is the link to the project'" +
      <TbExternalLink /> +
      "'</a><button className='mx-3'>Close</button></div></div>";
    $("html").append(div);

    $("button").on("click", function () {
      $("#imageDiv").remove();
    });
  });
});
const Mywork = () => {
  const mystyle = {
    width: "30%",
    height: "auto",
    marginBottom: "20px",
  };
  const imgstyle = {
    width: "100%",
    height: "auto",
    cursor: "pointer",
  };
  const linkstyle = {
    display: "none",
  };
  return (
    <div className="content" id="mywork">
      <section className="row" style={{ marginTop: "8%" }}>
        <div className="col-12 row" style={{ paddingRight: "20vmin" }}>
          <p>My work</p>
          <div style={mystyle} id="imageHolder">
            <img
              src={process.env.PUBLIC_URL + "/Screenshot (75).png"}
              alt=""
              style={imgstyle}
            ></img>
            <a
              href="https://www.agrotekplus.com"
              target="_blank"
              style={linkstyle}
            >
              Mylink
            </a>
          </div>
          <div style={mystyle} id="imageHolder">
            <img
              src={process.env.PUBLIC_URL + "/Screenshot (397).png"}
              alt=""
              style={imgstyle}
            ></img>
            <a href="#" target="_blank" style={linkstyle}>
              Mylink
            </a>
          </div>
          <div style={mystyle} id="imageHolder">
            <img
              src={process.env.PUBLIC_URL + "/Screenshot (93).png"}
              alt=""
              style={imgstyle}
            ></img>
            <a
              href="https://github.com/KarisKevoo/pcea"
              target="_blank"
              style={linkstyle}
            >
              Mylink
            </a>
          </div>
          <div style={mystyle} id="imageHolder">
            <img
              src={process.env.PUBLIC_URL + "/Screenshot (209).png"}
              alt=""
              style={imgstyle}
            ></img>
            <a
              href="https://github.com/KarisKevoo/career-guidance"
              target="_blank"
              style={linkstyle}
            >
              Mylink
            </a>
          </div>
          <div style={mystyle} id="imageHolder">
            <img
              src={process.env.PUBLIC_URL + "/Screenshot (161).png"}
              alt=""
              style={imgstyle}
            ></img>
            <a href="#" target="_blank" style={linkstyle}>
              Mylink
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Mywork;
