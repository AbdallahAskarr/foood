import "./About.css";
export default function About(props) {
    return (
        <>
            <section id="abou" className="container">
                <div className="row">
                    <div className="col-md-6 col-12 p-2 ">
                        <img className="p-2" id="image5" src={props.image} />

                    </div>
                    <div className="col-md-5 col-12 p-4 text-start">
                        <h2 id="h"><span id="span5">{props.title}</span>  {props.titlee}</h2>
                        <br />
                        <h3>{props.s_title}</h3>
                        <p>{props.des}</p>
                        <button id="btn5" className="btn ">{props.btn}</button>
                    </div>
                </div>
            </section>
        </>

    )
}