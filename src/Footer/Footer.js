import "./Footer.css";
export const Foot = () => {
    return (
        <>
            <section id="foo" className="container-fluid p-3">
                <div className="row">
                    <div className="col-md-2 col-6 p-2">
                        <h3 id="aaa">Location</h3>
                        <h5>sri lanka</h5>
                        <h5>USA</h5>
                        <h5>india</h5>
                        <h5>Japan</h5>
                        <h5>italy</h5>
                    </div>

                    <div className="col-md-2 p-2 col-6">
                        <h3 id="aaa">Quick Link</h3>
                        <h5>Home </h5>
                        <h5>About </h5>
                        <h5>Menu </h5>
                        <h5>Gallary </h5>
                        <h5> Order</h5>
                    </div>
                    <div className="col-md-3 p-2 col-6 ">
                        <h3 id="aaa">Contact</h3>
                        <h5>+94 12 3456 789</h5>
                        <h5>+49 25 5566456</h5>
                        <h5>johndo123@gamil.com</h5>
                        <h5>foodshop123@gamil.com</h5>
                    </div>
                    <div className="col-md-3 p-2 col-6 ">
                        <h3 id="aaa">Our Service</h3>
                        <h5>fast Delivery</h5>
                        <h5>Easy payments</h5>
                        <h5>24 x 7 Service</h5>
                    </div>

                    <div className="col-md-2 p-2 col-6 ">
                        <h3 id="aaa">Follows</h3>
                        <i style={{padding:"6px"}} class="fa-brands fa-facebook"></i>
                        <i style={{padding:"6px"}} class="fa-brands fa-instagram"></i>
                        <i style={{padding:"6px"}} class="fa-brands fa-twitter"></i>
                        <i style={{padding:"6px"}} class="fa-brands fa-linkedin-in"></i>
                    </div>

                    <p  style={{ marginTop: "30px" }} className="text-center text-dark p-4"> &copy;copyright developed by <span id="span9" style={{
                        color: "red",fontSize:"21px"
                    }}>" Abdallah Askar "</span> All right reserved.</p>
                </div>
            </section>


        </>
    )
}