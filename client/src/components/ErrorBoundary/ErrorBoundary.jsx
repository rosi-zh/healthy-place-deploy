import { Component } from "react";

export default class ErrorBoundary extends Component {
    constructor() {
        super();

        this.state = {
            hasError: false,
        };
    }

    static getDerivedStateFromError(error) {
        return {
            hasError: true,
        };
    }

    componentDidCatch(error, errorInfo) {
        console.log(error);
    }

    render() {
        if (this.state.hasError) {
            return (
                <>
                    <div className="container-fluid page-header py-5 mb-5">
                        <div className="container text-center py-5">
                            <h2 className="display-2 text-dark mb-4">Ooops!</h2>
                        </div>
                    </div>
                    <div className="container-xxl py-5">
                        <div className="container">
                            <div className="section-header text-center mx-auto mb-5">
                                <h2 className="display-5 mb-3">Something went wrong!</h2>
                                <p>Please come back later.</p>
                            </div>
                        </div>
                    </div>
                </>
            )
        }

        return this.props.children;
    }
}