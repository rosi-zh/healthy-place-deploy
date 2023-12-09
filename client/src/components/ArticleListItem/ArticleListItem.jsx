import { Link } from "react-router-dom";
import "./ArticleListItem.css";
import Path from "../../utils/paths";
import convertDate from "../../utils/convertDate";

export default function ArticleListItem({
    _id,
    title,
    imageUrl,
    _createdOn
}) {

    return (
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="img-container">
                <img className="img-fluid article-img" src={imageUrl} alt={title} />
            </div>
            <div className="bg-light p-4">
                <Link to={`${Path.Articles}/${_id}`} className="d-block h5 lh-base mb-4" title={title}>{title.length > 36 ? title.substring(0, 34) + '...' : title}</Link>
                <div className="text-muted border-top pt-4">
                    <small className="me-3"><i className="fa fa-calendar text-primary me-2"></i>{convertDate(_createdOn)}</small>
                </div>
            </div>
        </div>
    );
}