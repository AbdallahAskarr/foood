
import "./Contact.css";
const Contact = () => {
    return (
        <>
            <section id="big" className="container-fluid bg-dark">
                <section className="container">
                    <div className="row">

                        <div className="col-md-5 col-12">
                            <img id="image9" src={require("./order_image.png")} />
                        </div>
                        <div id="hh" className="col-md-4  col-6 p-3">
                            <div >
                                <label  style={{paddingLeft:"35px"}} >Name</label>
                                <input type="text" placeholder="name..." />
                            </div>
                            <div >
                                <label style={{ paddingLeft: "50px" }} >Number</label>
                                <input type="text" placeholder="number..." />
                            </div>
                            <div >
                                <label style={{ paddingLeft: "67px" }}  >Your Order</label>
                                <input type="text" placeholder="order..." />
                            </div>
                            <button id="btn66" >Order Now</button>
                        </div>

                        <div id="hh" style={{position:"relative",right:"10px"}} className="col-md-2 col-3 p-3 ">
                            <div >
                                <label style={{ paddingLeft: "66px" }}  >Email</label>
                                <input type="email"placeholder="email..." />
                            </div>
                            <div >
                                <label style={{ paddingLeft: "66px"  }}  >Much</label>
                                <input type="number" placeholder="coast..." />
                            </div>
                            <div >
                                <label style={{ paddingLeft: "66px" }}  >Address</label>
                                <input type="text" placeholder="address..." />
                            </div>
                        </div>







                    </div>
                </section>
            </section>

        </>
    )
}
export { Contact };