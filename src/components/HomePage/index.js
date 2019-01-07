import React from 'react'
import './style.css'

const Home = () => {
    return (
        <div className="background" >
            <div className="layer">
                <div className="container">
                    <div className="row pt-5">
                        <div className="col-8 text-white">
                            <h1 className="display-3 text-left">Track Your bills</h1>
                            <ul className="text-left list-of-benefits">
                                <li className="h2"><i className="far fa-hand-rock"></i> Control Your home budget</li>
                                <li className="h2"><i className="far fa-eye"></i> Observe Your habits</li>
                                <li className="h2"><i className="fas fa-plus"></i> Get new habit</li>
                                <li className="h2"><i className="far fa-smile-beam"></i> Enjoy with more money in Your pocket</li>
                            </ul>
                            <div className="d-flex justify-content-center">
                                <button style={{ fontSize: "25px" }} className=" p-3 px-4 btn btn-primary btn-lg p-2 float-left">Let's get start it <i className="fas fa-arrow-right"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home