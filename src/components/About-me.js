const Aboutme = () => {
  return (
    <div className="content" id="about">
      <section className="row" style={{ marginTop: "15%" }}>
        <div className="col-5 column">
          <p>About me</p>
          <span style={{ color: "#c1c1c1" }}>
            Well experienced in the industry of web development.<br></br>
            Well-organised person, problem solver, curious to learn with high
            intention to detail. A fan of exploring nature, automotives and
            electronics lover.<br></br>A family person, having both lovely
            parents and several siblings though still single. However, a remote
            job would be much more preferred.
          </span>{" "}
          <br></br>
          <a
            href="https://drive.google.com/file/d/12shACID8fpn-6UdumBwdVR5dRDP1ZUd-/view?usp=sharing"
            target="_blank"
            className="btn mt-4 px-2 py-1"
          >
            My resume
          </a>
        </div>
        <div className="col-7 column px-5">
          <img
            src={process.env.PUBLIC_URL + "/profilepic2.JPG"}
            alt="my image"
            className="profilename"
            style={{ borderRadius: "5px" }}
          ></img>
        </div>
      </section>
    </div>
  );
};
export default Aboutme;
