import { useContext, useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import "./ArticleDetails.css";

import * as dataService from "../../services/dataService";
import * as likeService from "../../services/likeService";
import AuthContext from "../../contexts/authContext";
import Path from "../../utils/paths";

import PageTop from "../PageTop/PageTop";
import Loader from "../Loader/Loader";
import ArticleDelete from "../ArticleDelete/ArticleDelete";

export default function ArticleDetails() {
    const navigate = useNavigate();
    const { isAuth, userId } = useContext(AuthContext);
    const { articleId } = useParams();
    const [article, setArticle] = useState([]);
    const [likes, setLikes] = useState(0);
    const [hasLiked, setHasLiked] = useState(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [deleteError, setDeleteError] = useState('');

    useEffect(() => {
        Promise.all([dataService.getById(articleId), likeService.getAll(articleId)])
            .then(([resArticle, resLikes]) => {
                setArticle(resArticle);
                setLikes(resLikes.length);
            })
            .catch((error) => {
                if (error.code === 404) {
                    navigate(Path.NotFound)
                }
                console.log(error);
            })
            .finally(() => setLoading(false));

        if (isAuth) {
            likeService.getUserLikes(articleId, userId)
                .then(result => {
                    setHasLiked(result > 0)
                })
                .catch(error => console.log(error.message));
        }
        
    }, [articleId, isAuth, hasLiked]);

    const deleteButtonHandler = async () => {
        setShowDeleteModal(true);
    }

    const onModalClose = () => {
        setShowDeleteModal(false);
    }
    
    const handleDelete = async() => {
        try {
            await dataService.remove(articleId);
            
            setShowDeleteModal(false);
            navigate(Path.Articles);
        } catch (error) {
            setDeleteError(error.message);
        }
    }
    
    const likeButtonHandler = async () => {
        if (!hasLiked) {
            try {
                await likeService.like(articleId);
    
                setLikes(value => value + 1);
                setHasLiked(true);
            } catch (error) {
                setError('Sorry! This action cannot be done.');
            }
        } else {
            try {                
                const result = await likeService.unlike(articleId, userId);
    
                setLikes(value => value - 1);
                setHasLiked(false);
            } catch (error) {
                setError('Sorry! This action cannot be done.');
            }
        }
    }

    return (
        <>
            <PageTop title="Article" />

            <div className="container-xxl py-5">
                {loading 
                    ? <Loader /> 
                    : (
                        <div className="container">
                            <div className="row g-5">
                                <div className="col-lg-5 wow fadeIn" data-wow-delay="0.1s">
                                    <img className="img-fluid" src={article.imageUrl} alt={article.title} />
                                    {userId === article._ownerId && (
                                        <div className="buttons">
                                            <Link to={`/articles/${articleId}/edit`} className="btn rounded-pill py-3 px-5 me-3 btn-base">Edit</Link>
                                            <button onClick={deleteButtonHandler} className="btn rounded-pill py-3 px-5 btn-sec">Delete</button>
                                        </div>
                                    )}
                                    <div className="buttons">
                                        <button  className="btn rounded-pill py-3 px-5 me-3 btn-sec" disabled>Likes: {likes}</button>
                                        {userId !== article._ownerId && isAuth && (
                                            <button onClick={likeButtonHandler} className="btn rounded-pill py-3 px-5 btn-base">{!hasLiked ? "Like" : "Unlike"}</button>
                                        )}
                                    </div>

                                    {error && <div className="alert alert-danger my-3" role="alert">{error}</div>}

                                </div>
                                <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                                    <div className="section-title">
                                        <p className="fs-5 fw-medium fst-italic text-primary">Featured Acticle</p>
                                        <h2 className="display-6">{article.title}</h2>
                                    </div>
                                    <p className="mb-4">{article.text}</p>
                                </div>
                            </div>
                        </div>
                    )
                }

                <ArticleDelete show={showDeleteModal} close={onModalClose} handleDelete={handleDelete} title={article.title} deleteError={deleteError} />

            </div>
        </>
    );
}