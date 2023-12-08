import { useContext } from "react";
import "./Profile.css";

import useAsync from "../../hooks/useAsync";
import AuthContext from "../../contexts/authContext";
import * as dataService from "../../services/dataService";

import PageTop from "../PageTop/PageTop";
import ArticleListItem from "../ArticleListItem/ArticleListItem";
import Loader from "../Loader/Loader";

export default function Profile() {
    const { userId, email, fullName } = useContext(AuthContext);

    const { loading, error, value } = useAsync(async() => {
        return await dataService.getByOwnerId(userId)
    });

    return (
        <>
            <PageTop title="My Profile" />
            
            <div className="container-xxl py-6">
                <div className="card profile-card mx-auto">
                    <div className="row g-0">
                        <div className="col-md-4 card-image">
                            <img src="/img/avatar.png" className="card-img-top profile-image" alt="Profile picture" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Email:</h5>
                                <p className="card-text">{email}</p>
                                <h5 className="card-title">Full name:</h5>
                                <p className="card-text">{fullName}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="last-articles section-header text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s">
                        <h2 className="display-5 mb-3">My Articles</h2>
                    </div>

                    {loading && <Loader />}

                    <div className="row g-4">
                        {value.map(article => (
                            <ArticleListItem key={article._id} {...article} />
                        ))}
                        
                        {(value.length === 0 || error) &&
                            <h3 className="text-center wow fadeInUp">No articles yet.</h3>
                        }
                    </div>
                </div>
            </div>
        
        </>
    );
}