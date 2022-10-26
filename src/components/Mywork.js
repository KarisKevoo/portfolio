import $ from 'jquery';

//hovering the images
$(window).ready(function () {
    //image click
    $('#mywork img').on('click', function () {
        var imgsrc = $(this).attr('src');
        var link = $(this).next().attr('href');
        //var icon = <BiLinkExternal/>;
        var div = "<div id='imageDiv'><img src='" + imgsrc + "' alt='image'/><a href='" + link + "' target='_blank' className='bg-light mt-3'>This is the link to the project <i class='fa fa-external-link' aria-hidden='true'></i></a><button>Close</button></div>";
        $('html').append(div);

        $('button').on('click', function () {
            $('#imageDiv').remove();
        });
    });
});
const Mywork = () => {
    const mystyle = {
        width: "30%",
        height: "auto",
    }
    const imgstyle = {
        width: "100%",
        height: "auto",
        cursor: "pointer"
    }
    const linkstyle = {
        display: "none"
    }
    return (
        <div className="content" id="mywork">
            <section className="row" style={{ marginTop: "8%" }}>
                <div className="col-12 row" style={{ paddingRight: "20vmin" }}>
                    <p>My work</p>
                    <div style={mystyle} id="imageHolder"><img src="./Screenshot (75).png" alt="" style={imgstyle}></img><a href='https://www.agrotekplus.com' target="_blank" style={linkstyle}>Mylink</a></div>
                    <div style={mystyle} id="imageHolder"><img src="./Screenshot (397).png" alt="" style={imgstyle}></img><a href='#' target="_blank" style={linkstyle}>Mylink</a></div>
                    <div style={mystyle} id="imageHolder"><img src="./Screenshot (397).png" alt="" style={imgstyle}></img><a href='#' target="_blank" style={linkstyle}>Mylink</a></div>
                    {/* <div style={mystyle} id="imageHolder"><img src="./Screenshot (93).png" alt="" style={imgstyle}></img><a href='#' target="_blank" style={linkstyle}>Mylink</a></div> */}
                </div>
            </section>
        </div>
    );
}
export default Mywork;