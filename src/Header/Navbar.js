
import "./Navbar.css";
export default function Nav() {

    return (
        <>
            <nav  class="navbar navbar-expand-lg shadow navbar-light bg-light">
                <div class="container-fluid ">
                    <img id="image1" className="navbar-brand" style={{
                        width: "100px",
                        height: "40px",
                        marginLeft: "10px",
                        paddingLeft: "0px"
                    }} src={require('./logo.png')} />
                    <button style={{ border: "none" }} class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler" style={{ border: "none" }}><i id="menubar" class="fa-solid fa-ellipsis-vertical"></i> </span>
                    </button>
                    <div class="collapse navbar-collapse  " id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2  ms-auto mb-lg-0 ">
                            <li style={{ paddingLeft: "10px" }} class="nav-item">
                                <a id="a" class="nav-link " aria-current="page" href="#parent1">Home</a>
                            </li>
                            <li style={{ paddingLeft: "10px" }} class="nav-item ">
                                <a id="a" class="nav-link" href="#abou">About</a>
                            </li>

                            <li style={{ paddingLeft: "10px" }} class="nav-item">
                                <a id="a" class="nav-link" href="#aha">Menu</a>
                            </li>

                            <li style={{ paddingLeft: "10px" }} class="nav-item">
                                <a id="a" class="nav-link" href="#galla">Galary</a>
                            </li>

                            <li style={{ paddingLeft: "10px" }} class="nav-item">
                                <a id="a" class="nav-link" href="#tea">Review</a>
                            </li>
                            <li style={{ paddingLeft: "10px" }} class="nav-item">
                                <a id="a" class="nav-link" href="#big">Order</a>
                            </li>
                            <li style={{ paddingLeft: "10px" }} class="nav-item">
                                <a id="a" class="nav-link" href="#ahaa">Team</a>
                            </li>



                        </ul>
                        <form class="d-flex ms-auto me-auto">
                            {/* <button id="btn" class="btn btn-success" type="submit"> Sign Up</button> */}
                            <i id="icon1" class="fa-solid fa-magnifying-glass ml-auto ms-auto me-auto"></i>
                            <i id="icon1" class="fa-solid fa-heart ml-auto ms-auto me-auto"></i>
                            <i id="icon1" class="fa-solid fa-cart-shopping ml-auto ms-auto me-auto"></i>
                        </form>
                    </div>
                </div>
            </nav>
        </>


    )
}