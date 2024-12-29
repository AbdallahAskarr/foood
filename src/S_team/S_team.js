import "./S_team.css";
export default function S_team() {
    return (

        <>


            <section id="ahaa" className="conatiner-fluid  p-2 ">
                <section className="container">
                    <h1 style={{ textAlign: "center", fontWeight: "500", marginBottom: '45px' }} >Our <span id="spann">Team</span> </h1>

                    <div className="row">

                        <div className="col-md-4  col-12 p-3 " >
                            <div className="team" >
                                <div className="team_box ">
                                    <div className="profile">
                                        <img src={require("./chef1.png")} />
                                        <div className="info" >
                                            <h2 className="name">Chef</h2>
                                            <p className="bio" >Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                            <div className="team_icon" >
                                                <i class="fa-brands fa-facebook"></i>
                                                <i class="fa-brands fa-instagram"></i>
                                                <i class="fa-brands fa-twitter"></i>
                                                <i class="fa-brands fa-linkedin-in"></i>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4  col-12 p-3 " >
                            <div className="team" >
                                <div className="team_box ">
                                    <div className="profile">
                                        <img src={require("./chef2.png")} />
                                        <div className="info" >
                                            <h2 className="name">Chef</h2>
                                            <p className="bio" >Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                            <div className="team_icon" >
                                                <i class="fa-brands fa-facebook"></i>
                                                <i class="fa-brands fa-instagram"></i>
                                                <i class="fa-brands fa-twitter"></i>
                                                <i class="fa-brands fa-linkedin-in"></i>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>




                        <div className="col-md-4  col-12 " >
                            <div className="team" >
                                <div className="team_box ">
                                    <div className="profile">
                                        <img src={require("./chef3.jpg")} />
                                        <div className="info" >
                                            <h2 className="name">Chef</h2>
                                            <p className="bio" >Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                            <div className="team_icon" >
                                                <i class="fa-brands fa-facebook"></i>
                                                <i class="fa-brands fa-instagram"></i>
                                                <i class="fa-brands fa-twitter"></i>
                                                <i class="fa-brands fa-linkedin-in"></i>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>










                    </div>
                </section>
            </section>







            {/* <div className="team" >

                <div className="team_box">
                    <div className="profile">
                        <img src={require("./review_1.png")} />
                        <div className="info" >
                            <h2 className="name">Chef</h2>
                            <p className="bio" >lorem lorem loerm loerm</p>
                            <div className="team_icon" >
                                <i class="fa-brands fa-facebook"></i>
                                <i class="fa-brands fa-instagram"></i>
                                <i class="fa-brands fa-twitter"></i>
                                <i class="fa-brands fa-linkedin-in"></i>
                            </div>

                        </div>

                    </div>
                </div>
            </div> */}
        </>

    )
}