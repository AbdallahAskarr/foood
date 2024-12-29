import "./Home.css";
export default function Home() {
    return (
        <>
            <section id="parent1" className="container-fluid">
                <div className="row ">
                    <div className="col-md-6 col-12  order-md-1 order-2 " >
                        <h2 id="info1" className="text-start p-2" >Get Fresh <span id="span1">Food</span><br />in a Easy Way </h2>
                        <br />

                        <p id="text1" className="text-start p-2 "  >Lorem ipsum, dolor sit amem,elit. orem ipsumr adipisicing elit.  dolor sit amet consectetur adipisicin  dolor sit amet consectet odio nostrum, nam quaferendis cupiditate atque dolore, aliquam ipsum impedit eligendi reprehenderit quas id obcaecati, in alias! Fuga quisquam repellat, nihil rem quod ipsum!</p>
                        {/* <br /> */}
                        <button id="btn1" className="btn " >Order Now </button>
                    </div>
                    <div className="col-md-6 col-12 p-3 order-md-2 order-1" >
                        <img id="image2" src={require("./main_img.png")} />
                    </div>
                </div>
            </section >

        </>
    )
}