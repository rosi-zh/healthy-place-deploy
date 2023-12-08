import "./Contacts.css";
import PageTop from "../PageTop/PageTop";

export default function Contacts() {

    return (
        <>
            <PageTop title="Contact Us" />

            <div className="container-xxl contact py-5">
                <div className="container">
                    <div className="section-title text-center mx-auto wow fadeInUp contact-header" data-wow-delay="0.1s">
                        <p className="fs-5 fw-medium fst-italic text-primary">Contact Us</p>
                        <h2 className="display-6">If You Have Any Query, Please Contact Us</h2>
                    </div>
                    <div className="row g-5 mb-5">
                        <div className="col-md-4 text-center wow fadeInUp" data-wow-delay="0.3s">
                            <div className="btn-square mx-auto mb-3">
                                <i className="fa fa-envelope fa-2x text-white"></i>
                            </div>
                            <p className="mb-2">support@healthyplace.com</p>
                        </div>
                        <div className="col-md-4 text-center wow fadeInUp" data-wow-delay="0.4s">
                            <div className="btn-square mx-auto mb-3">
                                <i className="fa fa-phone fa-2x text-white"></i>
                            </div>
                            <p className="mb-2">+359 888 123456</p>
                        </div>
                        <div className="col-md-4 text-center wow fadeInUp" data-wow-delay="0.5s">
                            <div className="btn-square mx-auto mb-3">
                                <i className="fa fa-map-marker-alt fa-2x text-white"></i>
                            </div>
                            <p className="mb-2">123 Street</p>
                            <p className="mb-0">Plovdiv, Bulgaria</p>
                        </div>
                    </div>
                    <div className="row g-5">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                            <form>
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="name" placeholder="Your Name"/>
                                            <label htmlFor="name">Your Name</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="email" className="form-control" id="email" placeholder="Your Email"/>
                                            <label htmlFor="email">Your Email</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="subject" placeholder="Subject"/>
                                            <label htmlFor="subject">Subject</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <textarea className="form-control text-field" placeholder="Leave a message here" id="message"></textarea>
                                            <label htmlFor="message">Message</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-primary rounded-pill py-3 px-5" type="submit">Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="h-100">
                                <iframe className="w-100 rounded map"
                                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d23668.398184018282!2d24.7693312!3d42.138520799999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sbg!2sbg!4v1699876486363!5m2!1sbg!2sbg"
                                allowFullScreen="" aria-hidden="false"
                                tabIndex="0"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}