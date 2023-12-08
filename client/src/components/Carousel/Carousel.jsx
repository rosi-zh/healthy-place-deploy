import { Link } from "react-router-dom";
import "./Carousel.css";
import Path from "../../utils/paths";

export default function Carousel() {

    return (
        <div className="container-fluid px-0 mb-5">
        <div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="w-100" src="img/carousel-1.jpg" alt="Image" />
                    <div className="carousel-caption">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-7 text-center">
                                    <p className="fs-4 text-white animated zoomIn">Welcome to <strong className="text-dark">HEALTY PLACE</strong></p>
                                    <h1 className="display-1 text-dark mb-4 animated zoomIn">Everything you need to know about your health</h1>
                                    <Link to={Path.Articles} className="btn btn-light rounded-pill py-3 px-5 animated zoomIn">Explore More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="w-100" src="img/carousel-2.jpg" alt="Image" />
                    <div className="carousel-caption">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-7 text-center">
                                    <p className="fs-4 text-white animated zoomIn">Welcome to <strong className="text-dark">HEALTY PLACE</strong></p>
                                    <h1 className="display-1 text-dark mb-4 animated zoomIn">Diet & Fitness</h1>
                                    <Link to={Path.Articles} className="btn btn-light rounded-pill py-3 px-5 animated zoomIn">Explore More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel"
                data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#header-carousel"
                data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </div>
    );
}