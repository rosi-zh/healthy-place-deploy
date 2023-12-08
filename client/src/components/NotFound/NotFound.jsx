import { Link } from "react-router-dom";
import Path from "../../utils/paths";
import PageTop from "../PageTop/PageTop";

export default function NotFound() {

    return (
       <>
            <PageTop title="404 Error" />

            <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container text-center">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <i className="bi bi-exclamation-triangle display-1 text-primary"></i>
                            <h2 className="display-1">404</h2>
                            <h2 className="mb-4">Page Not Found</h2>
                            <p className="mb-4">We're sorry, the page you have looked for does not exist in our website! Maybe go to our home page.</p>
                            <Link className="btn btn-primary rounded-pill py-3 px-5" to={Path.Home}>Go Back To Home</Link>
                        </div>
                    </div>
                </div>
            </div>
       </> 
    );
}