import "./About.css";
import PageTop from "../PageTop/PageTop";

export default function About() {

    return(
        <>  
            <PageTop title="About Us" />

            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-6">
                            <div className="row g-3">
                                <div className="col-6 text-end">
                                    <img className="img-fluid bg-white w-100 mb-3 wow fadeIn" data-wow-delay="0.1s" src="img/about-1.jpg" alt="About page image" />
                                    <img className="img-fluid bg-white w-50 wow fadeIn" data-wow-delay="0.2s" src="img/about-3.jpg" alt="About page image" />
                                </div>
                                <div className="col-6">
                                    <img className="img-fluid bg-white w-50 mb-3 wow fadeIn" data-wow-delay="0.3s" src="img/about-4.jpg" alt="About page image" />
                                    <img className="img-fluid bg-white w-100 wow fadeIn" data-wow-delay="0.4s" src="img/about-2.jpg" alt="About page image" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                            <div className="section-title">
                                <p className="fs-5 fw-medium fst-italic text-primary">About Us</p>
                                <h2 className="display-6">You are the key of your health</h2>
                            </div>
                            <div className="row g-3 mb-4">
                                <div className="col-sm-4">
                                    <img className="img-fluid bg-white w-100" src="img/about-5.jpg" alt="About page image" />
                                </div>
                                <div className="col-sm-8">
                                    <h5>Our passion is to build knowledge for healthier diet</h5>
                                    <p className="about-text">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit</p>
                                </div>
                            </div>
                            <div className="divider"></div>
                            <div className="row g-3">
                                <div className="col-sm-8">
                                    <h5>Healthy mind for healthy body</h5>
                                    <p className="about-text">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit</p>
                                </div>
                                <div className="col-sm-4">
                                    <img className="img-fluid bg-white w-100" src="img/about-6.jpg" alt="About page image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}