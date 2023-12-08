import { Link } from "react-router-dom";
import './Footer.css';
import Path from "../../utils/paths";

export default function Footer() {

    return (
        <>
            <div className="container-fluid bg-dark footer mt-5 py-5 wow fadeIn" data-wow-delay="0.1s">
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-lg-3 col-md-6">
                            <h4 className="text-primary mb-4">Our Office</h4>
                            <p className="mb-2"><i className="fa fa-map-marker-alt text-primary me-3"></i>123 Street, Plovdiv, Bulgaria</p>
                            <p className="mb-2"><i className="fa fa-phone-alt text-primary me-3"></i>+359 888 123456</p>
                            <p className="mb-2"><i className="fa fa-envelope text-primary me-3"></i>support@healthyplace.com</p>
                            <div className="d-flex pt-3">
                                <a className="btn btn-square btn-primary rounded-circle me-2" href="https://twitter.com/"><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-square btn-primary rounded-circle me-2" href="https://facebook.com/"><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-square btn-primary rounded-circle me-2" href="https://youtube.com"><i className="fab fa-youtube"></i></a>
                                <a className="btn btn-square btn-primary rounded-circle me-2" href="https://www.linkedin.com/"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h4 className="text-primary mb-4">Quick Links</h4>
                            <Link className="btn btn-link" to={Path.About}>About Us</Link>
                            <Link className="btn btn-link" to={Path.Contacts}>Contact Us</Link>
                            <Link className="btn btn-link" to={Path.Articles}>Articles</Link>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h4 className="text-primary mb-4">Used Content</h4>
                            <p className="mb-1">Royalty free images:</p>
                            <h6 className="text-light">Pixabay</h6>
                            <p className="mb-1">Used icons:</p>
                            <h6 className="text-light">Font Awesome</h6>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h4 className="text-primary mb-4">Author</h4>
                            <p>Rositsa Zhelyazkova</p>
                            <p>rosi.zheliazkowa@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid copyright py-4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            &copy; <Link className="fw-medium" to={Path.Home}>Healthy Place</Link>, All Right Reserved.
                        </div>
                        <div className="col-md-6 text-center text-md-end">
                            Designed By <a className="fw-medium" href="https://htmlcodex.com">HTML Codex</a> Distributed By <a className="fw-medium" href="https://themewagon.com">ThemeWagon</a>
                        </div>
                    </div>
                </div>
            </div>
        </>  
    );
}