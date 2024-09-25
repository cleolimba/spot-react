import { Outlet } from "react-router-dom";

function NewsLayout() {
    return (
        <>
            <h1>News</h1>
            <Outlet />
        </>
    );
}

export default NewsLayout;