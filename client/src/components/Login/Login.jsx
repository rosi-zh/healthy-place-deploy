import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import "./Login.css";

import AuthContext from "../../contexts/authContext";

import PageTop from "../PageTop/PageTop";
import Path from "../../utils/paths";
import loginValidate from "../../validators/loginValidate";

const LoginFormKeys = {
    Email: 'email',
    Password: 'password'
};

export default function Login() {
    const { loginSubmitHandler } = useContext(AuthContext);
    const [serverError, setServerError] = useState('');

    const onSubmit = async (values) => {
        try {
            await loginSubmitHandler(values);
        } catch (error) {
            setServerError(error.message);
        } 
    }

    const formik = useFormik({
        initialValues: {
            [LoginFormKeys.Email]: '',
            [LoginFormKeys.Password]: ''
        },
        validate: loginValidate,
        onSubmit
    });

    const { values, errors, handleChange, handleBlur, handleSubmit, touched } = formik;

    return (
        <>
            <PageTop title="Login" />

            <div className="container text-center wow fadeInUp">
                <div className="card mx-4 mx-md-5 form-box">
                    <div className="card-body py-5 px-md-5">
                        <div className="row d-flex justify-content-center">
                            <div className="col-lg-4">

                                <div className="text-center mb-4">
                                    <h2 className="section-heading text-uppercase">Login</h2>
                                    <h3 className="section-subheading text-muted">to HealthyPlace</h3>
                                </div>

                                {serverError && <div className="alert alert-danger" role="alert">{serverError}</div>}
                                

                                <form onSubmit={handleSubmit}>
                                    <div className="form-group mt-4">
                                        <label className="form-label" htmlFor={LoginFormKeys.Email}>Email address</label>
                                        <input type="email" id={LoginFormKeys.Email} name={LoginFormKeys.Email} className="form-control" value={values.email} onChange={handleChange} onBlur={handleBlur}/>
                                    </div>

                                    {touched.email && errors.email && <div className='invalid-feedback'>{errors.email}</div>}

                                    <div className="form-group mt-4">
                                        <label className="form-label" htmlFor={LoginFormKeys.Password}>Password</label>
                                        <input type="password" id={LoginFormKeys.Password} name={LoginFormKeys.Password} className="form-control" value={values.password} onChange={handleChange} onBlur={handleBlur} />
                                    </div>
                                    
                                    {touched.password && errors.password && <div className='invalid-feedback'>{errors.password}</div>}

                                    <div className="form-check d-flex justify-content-center my-4">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="rememberCheck" defaultChecked />
                                        <label className="form-check-label" htmlFor="rememberCheck">Remember me</label>
                                    </div>

                                    <button type="submit" className="btn text-uppercase mb-4 px-4 btn-sec">Login</button>

                                    <div>
                                        <h6>Not a member? <Link to={Path.Register}>Register</Link></h6>
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