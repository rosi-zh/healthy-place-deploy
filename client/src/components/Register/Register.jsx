import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import "./Register.css";

import AuthContext from "../../contexts/authContext";
import Path from "../../utils/paths";
import registerValidate from "../../validators/registerValidate";

import PageTop from "../PageTop/PageTop";

export default function Register() {
    const { registerSubmitHandler } = useContext(AuthContext);
    const [serverError, setServerError] = useState('');

    const onSubmit = async (values) => {
        try {
            await registerSubmitHandler(values);
        } catch (error) {
            setServerError(error.message);
        }
    }

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            rePassword: ''
        },
        validate: registerValidate,
        onSubmit
    });

    const { values, errors, handleChange, handleBlur, handleSubmit, touched } = formik;

    return (
        <>
            <PageTop title="Register" />

            <div className="container text-center wow fadeInUp">
                <div className="card mx-4 mx-md-5 form-box">
                    <div className="card-body py-5 px-md-5">
                        <div className="row d-flex justify-content-center">
                            <div className="col-lg-4">

                                <div className="text-center mb-4">
                                    <h2 className="section-heading text-uppercase">Register</h2>
                                    <h3 className="section-subheading text-muted">to HealthyPlace</h3>
                                </div>

                                {serverError && <div className="alert alert-danger" role="alert">{serverError}</div>}

                                <form onSubmit={handleSubmit}>
                                    <div className="form-group mt-4">
                                        <label className="form-label" htmlFor="firstName">First name</label>
                                        <input type="text" id="firstName" name="firstName" className="form-control" value={values.firstName} onChange={handleChange} onBlur={handleBlur} />
                                    </div>

                                    {touched.firstName && errors.firstName && <div className='invalid-feedback'>{errors.firstName}</div>}

                                    <div className="form-group mt-4">
                                        <label className="form-label" htmlFor="lastName">Last Name</label>
                                        <input type="text" id="lastName" name="lastName" className="form-control" value={values.lastName} onChange={handleChange} onBlur={handleBlur}/>
                                    </div>

                                    {touched.lastName && errors.lastName && <div className='invalid-feedback'>{errors.lastName}</div>}

                                    <div className="form-group mt-4">
                                        <label className="form-label" htmlFor="email">Email address</label>
                                        <input type="email" id="email" name="email" className="form-control" value={values.email} onChange={handleChange} onBlur={handleBlur}/>
                                    </div>
                                    
                                    {touched.email && errors.email && <div className='invalid-feedback'>{errors.email}</div>}

                                    <div className="form-group mt-4">
                                        <label className="form-label" htmlFor="password">Password</label>
                                        <input type="password" id="password" name="password" className="form-control" value={values.password} onChange={handleChange} onBlur={handleBlur}/>
                                    </div>
                                    
                                    {touched.password && errors.password && <div className='invalid-feedback'>{errors.password}</div>}

                                    <div className="form-group mt-4">
                                        <label className="form-label" htmlFor="rePassword">Repeat Password</label>
                                        <input type="password" id="rePassword" name="rePassword" className="form-control" value={values.rePassword} onChange={handleChange} onBlur={handleBlur}/>
                                    </div>

                                    {touched.rePassword && errors.rePassword && <div className='invalid-feedback'>{errors.rePassword}</div>}

                                    <div className="form-check d-flex justify-content-center my-4">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="rememberCheck" defaultChecked />
                                        <label className="form-check-label" htmlFor="rememberCheck">Remember me</label>
                                    </div>

                                    <button type="submit" className="btn text-uppercase mb-4 px-4 btn-base">Register</button>

                                    <div>
                                        <h6>Already have an account? <Link to={Path.Login}>Login</Link></h6>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}