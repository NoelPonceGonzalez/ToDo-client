import { useNavigate } from "react-router-dom";

export const useHandleNavigate = () => {
    const navigate = useNavigate();

    const handleNavigation = (pagename) => {
        navigate(`/${pagename}`)
    };

    return handleNavigation;
};