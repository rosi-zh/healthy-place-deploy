import { useContext, useEffect, useState } from "react";
import AuthContext from "../contexts/authContext";
import { Navigate, Outlet, useParams } from "react-router-dom";
import Path from "../utils/paths";
import * as dataService from "../services/dataService";

export default function OwnerGuard() {
    const { isAuth, userId } = useContext(AuthContext);
    const [isOwner, setIsOwner] = useState(true);
    const { articleId } = useParams();

    useEffect(() => {
        dataService.getById(articleId)
            .then(result => {
                setIsOwner(result._ownerId === userId);
            })
            .catch(err => console.log(err));
    }, [])

    if (!isAuth || !isOwner) {
        return <Navigate to={Path.Articles} />;
    }

    return <Outlet />
}