import "./Menu.css";
export default function Menu(props) {
    return (
        <>
            <section id="aha" className="container-fluid p-4" >

                <h1 style={{ textAlign: "center", fontWeight: "500", marginBottom: '20px' }} >Our <span id="spann">Menu</span> </h1>
                <div className="row">
                    <div className="col-md-3 col-12  p-2">
                        <div id="card" className="card">
                            <img id="image4" src={props.image1} className="card-img-top" />

                            <div className="card-body">
                                <div className="my_heart">
                                    <i class="fa-solid fa-heart"></i>
                                </div>
                                {/* <br /> */}
                                <h2 id="info3" className="card-title" >{props.title}</h2>
                                <p id="text3" className="card-text  ">{props.description1}</p>
                                <h5 id="second_text3">$20.99</h5>
                                <div id="icon5">
                                    <i style={{ padding: "2px " }} class="fa-solid fa-star"></i>
                                    <i style={{ padding: "2px" }} class="fa-solid fa-star"></i>
                                    <i style={{ padding: "2px" }} class="fa-solid fa-star"></i>
                                    <i style={{ padding: "2px" }} class="fa-solid fa-star"></i>
                                    <i style={{ padding: "2px" }} class="fa-solid fa-star-half-stroke"></i>
                                </div>
                                <button id="btn3" ><a id="ancor_1" href="#" style={{ display: "block" }} >Order now</a> </button>
                            </div>

                        </div>
                    </div>



                    <div className="col-md-3 col-12 p-2">
                        <div id="card" className="card">
                            <img id="image4" src={props.image2} className="card-img-top" />

                            <div className="card-body">
                                <div className="my_heart">
                                    <i class="fa-solid fa-heart"></i>
                                </div>
                                {/* <br /> */}
                                <h2 id="info3" className="card-title" >{props.title2}</h2>
                                <p id="text3" className="card-text  ">{props.description1}</p>
                                <h5 id="second_text3">$19.99</h5>
                                <div id="icon5">
                                    <i style={{ padding: "2px " }} class="fa-solid fa-star"></i>
                                    <i style={{ padding: "2px" }} class="fa-solid fa-star"></i>
                                    <i style={{ padding: "2px" }} class="fa-solid fa-star"></i>
                                    <i style={{ padding: "2px" }} class="fa-solid fa-star"></i>
                                    <i style={{ padding: "2px" }} class="fa-solid fa-star-half-stroke"></i>
                                </div>
                                <button id="btn3" ><a id="ancor_1" href="#" style={{ display: "block" }} >Order now</a> </button>
                            </div>

                        </div>
                    </div>


                    <div className="col-md-3 col-12 p-2">
                        <div id="card" className="card">
                            <img id="image4" src={props.image3} className="card-img-top" />

                            <div className="card-body">
                                <div className="my_heart">
                                    <i class="fa-solid fa-heart"></i>
                                </div>
                                {/* <br /> */}
                                <h2 id="info3" className="card-title" >{props.title3}</h2>
                                <p id="text3" className="card-text  ">{props.description1}</p>
                                <h5 id="second_text3">$18.99</h5>
                                <div id="icon5">
                                    <i style={{ padding: "2px " }} class="fa-solid fa-star"></i>
                                    <i style={{ padding: "2px" }} class="fa-solid fa-star"></i>
                                    <i style={{ padding: "2px" }} class="fa-solid fa-star"></i>
                                    <i style={{ padding: "2px" }} class="fa-solid fa-star"></i>
                                    <i style={{ padding: "2px" }} class="fa-solid fa-star-half-stroke"></i>
                                </div>
                                <button id="btn3" ><a id="ancor_1" href="#" style={{ display: "block" }} >Order now</a> </button>
                            </div>

                        </div>
                    </div>


                    <div className="col-md-3 col-12 p-2 ">
                        <div id="card" className="card">
                            <img id="image4" src={props.image4} className="card-img-top" />

                            <div className="card-body">
                                <div className="my_heart">
                                    <i class="fa-solid fa-heart"></i>
                                </div>
                                {/* <br /> */}
                                <h2 id="info3" className="card-title" >{props.title4}</h2>
                                <p id="text3" className="card-text  ">{props.description1}</p>
                                <h5 id="second_text3">$15.99</h5>
                                <div id="icon5">
                                    <i style={{ padding: "2px " }} class="fa-solid fa-star"></i>
                                    <i style={{ padding: "2px" }} class="fa-solid fa-star"></i>
                                    <i style={{ padding: "2px" }} class="fa-solid fa-star"></i>
                                    <i style={{ padding: "2px" }} class="fa-solid fa-star"></i>
                                    <i style={{ padding: "2px" }} class="fa-solid fa-star-half-stroke"></i>
                                </div>
                                <button id="btn3" ><a id="ancor_1" href="#" style={{ display: "block" }} >Order now</a> </button>
                            </div>

                        </div>
                    </div>


                    <div className="col-md-3 col-12  p-2">
                        <div id="card" className="card">
                            <img id="image4" src={props.image5} className="card-img-top" />

                            <div className="card-body">
                                <div className="my_heart">
                                    <i class="fa-solid fa-heart"></i>
                                </div>
                                {/* <br /> */}
                                <h2 id="info3" className="card-title" >{props.title5}</h2>
                                <p id="text3" className="card-text  ">{props.description1}</p>
                                <h5 id="second_text3">$23.99</h5>
                                <div id="icon5">
                                    <i style={{ padding: "2px " }} class="fa-solid fa-star"></i>
                                    <i style={{ padding: "2px" }} class="fa-solid fa-star"></i>
                                    <i style={{ padding: "2px" }} class="fa-solid fa-star"></i>
                                    <i style={{ padding: "2px" }} class="fa-solid fa-star"></i>
                                    <i style={{ padding: "2px" }} class="fa-solid fa-star-half-stroke"></i>
                                </div>
                                <button id="btn3" ><a id="ancor_1" href="#" style={{ display: "block" }} >Order now</a> </button>
                            </div>

                        </div>
                    </div>


                    <div className="col-md-3 col-12 p-2 ">
                        <div id="card" className="card">
                            <img id="image4" src={props.image6} className="card-img-top" />

                            <div className="card-body">
                                <div className="my_heart">
                                    <i class="fa-solid fa-heart"></i>
                                </div>
                                {/* <br /> */}
                                <h2 id="info3" className="card-title" >{props.title6}</h2>
                                <p id="text3" className="card-text  ">{props.description1}</p>
                                <h5 id="second_text3">$26.99</h5>
                                <div id="icon5">
                                    <i style={{ padding: "2px " }} class="fa-solid fa-star"></i>
                                    <i style={{ padding: "2px" }} class="fa-solid fa-star"></i>
                                    <i style={{ padding: "2px" }} class="fa-solid fa-star"></i>
                                    <i style={{ padding: "2px" }} class="fa-solid fa-star"></i>
                                    <i style={{ padding: "2px" }} class="fa-solid fa-star-half-stroke"></i>
                                </div>
                                <button id="btn3" ><a id="ancor_1" href="#" style={{ display: "block" }} >Order now</a> </button>
                            </div>

                        </div>
                    </div>


                    <div className="col-md-3 col-12 p-2 ">
                        <div id="card" className="card">
                            <img id="image4" src={props.image7} className="card-img-top" />

                            <div className="card-body">
                                <div className="my_heart">
                                    <i class="fa-solid fa-heart"></i>
                                </div>
                                {/* <br /> */}
                                <h2 id="info3" className="card-title" >{props.title7}</h2>
                                <p id="text3" className="card-text  ">{props.description1}</p>
                                <h5 id="second_text3">$14.99</h5>
                                <div id="icon5">
                                    <i style={{ padding: "2px " }} class="fa-solid fa-star"></i>
                                    <i style={{ padding: "2px" }} class="fa-solid fa-star"></i>
                                    <i style={{ padding: "2px" }} class="fa-solid fa-star"></i>
                                    <i style={{ padding: "2px" }} class="fa-solid fa-star"></i>
                                    <i style={{ padding: "2px" }} class="fa-solid fa-star-half-stroke"></i>
                                </div>
                                <button id="btn3" ><a id="ancor_1" href="#" style={{ display: "block" }} >Order now</a> </button>
                            </div>

                        </div>
                    </div>


                    <div className="col-md-3 col-12 p-2 ">
                        <div id="card" className="card">
                            <img id="image4" src={props.image8} className="card-img-top" />

                            <div className="card-body">
                                <div className="my_heart">
                                    <i class="fa-solid fa-heart"></i>
                                </div>
                                {/* <br /> */}
                                <h2 id="info3" className="card-title" >{props.title8}</h2>
                                <p id="text3" className="card-text  ">{props.description1}</p>
                                <h5 id="second_text3">$21.99</h5>
                                <div id="icon5">
                                    <i style={{ padding: "2px " }} class="fa-solid fa-star"></i>
                                    <i style={{ padding: "2px" }} class="fa-solid fa-star"></i>
                                    <i style={{ padding: "2px" }} class="fa-solid fa-star"></i>
                                    <i style={{ padding: "2px" }} class="fa-solid fa-star"></i>
                                    <i style={{ padding: "2px" }} class="fa-solid fa-star-half-stroke"></i>
                                </div>
                                <button id="btn3" ><a id="ancor_1" href="#" style={{ display: "block" }} >Order now</a> </button>
                            </div>

                        </div>
                    </div>



                    <div className="col-md-3 col-12 p-2 ">
                        <div id="card" className="card">
                            <img id="image4" src={props.image9} className="card-img-top" />

                            <div className="card-body">
                                <div className="my_heart">
                                    <i class="fa-solid fa-heart"></i>
                                </div>
                                {/* <br /> */}
                                <h2 id="info3" className="card-title" >{props.title9}</h2>
                                <p id="text3" className="card-text  ">{props.description1}</p>
                                <h5 id="second_text3">$25.99</h5>
                                <div id="icon5">
                                    <i style={{ padding: "2px " }} class="fa-solid fa-star"></i>
                                    <i style={{ padding: "2px" }} class="fa-solid fa-star"></i>
                                    <i style={{ padding: "2px" }} class="fa-solid fa-star"></i>
                                    <i style={{ padding: "2px" }} class="fa-solid fa-star"></i>
                                    <i style={{ padding: "2px" }} class="fa-solid fa-star-half-stroke"></i>
                                </div>
                                <button id="btn3" ><a id="ancor_1" href="#" style={{ display: "block" }} >Order now</a> </button>
                            </div>

                        </div>
                    </div>




                    <div className="col-md-3 col-12 p-2 ">
                        <div id="card" className="card">
                            <img id="image4" src={props.image10} className="card-img-top" />

                            <div className="card-body">
                                <div className="my_heart">
                                    <i class="fa-solid fa-heart"></i>
                                </div>
                                {/* <br /> */}
                                <h2 id="info3" className="card-title" >{props.title10}</h2>
                                <p id="text3" className="card-text  ">{props.description1}</p>
                                <h5 id="second_text3">$27.99</h5>
                                <div id="icon5">
                                    <i style={{ padding: "2px " }} class="fa-solid fa-star"></i>
                                    <i style={{ padding: "2px" }} class="fa-solid fa-star"></i>
                                    <i style={{ padding: "2px" }} class="fa-solid fa-star"></i>
                                    <i style={{ padding: "2px" }} class="fa-solid fa-star"></i>
                                    <i style={{ padding: "2px" }} class="fa-solid fa-star-half-stroke"></i>
                                </div>
                                <button id="btn3" ><a id="ancor_1" href="#" style={{ display: "block" }} >Order now</a> </button>
                            </div>

                        </div>
                    </div>

                    <div className="col-md-3 col-12 p-2 ">
                        <div id="card" className="card">
                            <img id="image4" src={props.image11} className="card-img-top" />

                            <div className="card-body">
                                <div className="my_heart">
                                    <i class="fa-solid fa-heart"></i>
                                </div>
                                {/* <br /> */}
                                <h2 id="info3" className="card-title" >{props.title11}</h2>
                                <p id="text3" className="card-text  ">{props.description1}</p>
                                <h5 id="second_text3">$23.99</h5>
                                <div id="icon5">
                                    <i style={{ padding: "2px " }} class="fa-solid fa-star"></i>
                                    <i style={{ padding: "2px" }} class="fa-solid fa-star"></i>
                                    <i style={{ padding: "2px" }} class="fa-solid fa-star"></i>
                                    <i style={{ padding: "2px" }} class="fa-solid fa-star"></i>
                                    <i style={{ padding: "2px" }} class="fa-solid fa-star-half-stroke"></i>
                                </div>
                                <button id="btn3" ><a id="ancor_1" href="#" style={{ display: "block" }} >Order now</a> </button>
                            </div>

                        </div>
                    </div>

                    <div className="col-md-3 col-12 p-2 ">
                        <div id="card" className="card">
                            <img id="image4" src={props.image12} className="card-img-top" />

                            <div className="card-body">
                                <div className="my_heart">
                                    <i class="fa-solid fa-heart"></i>
                                </div>
                                {/* <br /> */}
                                <h2 id="info3" className="card-title" >{props.title12}</h2>
                                <p id="text3" className="card-text  ">{props.description1}</p>
                                <h5 id="second_text3">$30.99</h5>
                                <div id="icon5">
                                    <i style={{ padding: "2px " }} class="fa-solid fa-star"></i>
                                    <i style={{ padding: "2px" }} class="fa-solid fa-star"></i>
                                    <i style={{ padding: "2px" }} class="fa-solid fa-star"></i>
                                    <i style={{ padding: "2px" }} class="fa-solid fa-star"></i>
                                    <i style={{ padding: "2px" }} class="fa-solid fa-star-half-stroke"></i>
                                </div>
                                <button id="btn3" ><a id="ancor_1" href="#" style={{ display: "block" }} >Order now</a> </button>
                            </div>

                        </div>
                    </div>








                </div>
            </section>



        </>
    )
}