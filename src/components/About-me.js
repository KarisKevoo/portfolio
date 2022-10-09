const Aboutme = () => {
    return ( 
        <div className="content" id="about">
                <section className="row" style={{marginTop: "15%"}}>
                    <div className="col-5 column">
                        <p>About me</p>
                        <span style={{color: "#c1c1c1"}}>Well experienced in the industry of web development.<br></br>
                        Well-organised person, problem solver, curious to learn with high intention to detail. A fan of exploring nature, automotives and electronics lover.<br></br>
                        A family person, having both lovely parents and several siblings though still single. However, a remote job would be much more preferred.
                        </span>
                        <a href="https://drive.google.com/file/d/1KmZJ2hozyvGum165QmOcY0ZCfWh04PHI/view?usp=sharing" target="_blank" className="btn mt-4 px-2 py-1">My resume</a>
                    </div>
                    <div className="col-7 column px-5">
                    <img src="./profilepic.jpg" alt="my image" style={{border: "3px ridge rgb(167, 248, 255)"}}></img>
                    </div>
                </section>
        </div>
    );
}
export default Aboutme;