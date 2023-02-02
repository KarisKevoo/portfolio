const Home = () => {
  return (
    <div className="content" id="home">
      <section className="row" style={{ marginTop: "15%", overflow: "hidden" }}>
        <div className="col-5 column">
          <p>Hello,</p>
          <p className="d-flex flex-row flex-nowrap">
            I'm&nbsp;
            <p
              style={{
                color: "rgb(172, 47, 70)",
                textShadow: "-3px 1px 0px rgb(167, 248, 255)",
              }}
            >
              Kevin Kariuki
            </p>
            .
          </p>
          <p>A web developer.</p>
          <span>--full-stack developer--</span>
          <br></br>
          <a href="#contact" className="btn mt-4 px-2 py-1">
            Contact Me
          </a>
        </div>
        <div className="col-7 row px-5">
          <h1>K.K</h1>
        </div>
      </section>
    </div>
  );
};
export default Home;
