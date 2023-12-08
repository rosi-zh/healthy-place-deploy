import "./PageTop.css";

export default function PageTop(props) {

    return (
        <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
            <div className="container text-center py-5">
                <h2 className="display-2 text-dark mb-4 animated slideInDown">{props.title}</h2>
            </div>
        </div>
    );
}