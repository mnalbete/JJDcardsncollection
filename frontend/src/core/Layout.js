import React from "react";
import Menu from "./Menu";

const Layout = (
    {
        title = "Tittle",
        description = "Description",
        className,
        children
    }) => (
    <div>
        <Menu></Menu>
        <div className="jumbotron jumbotron-fluid">
            <div class="container">
                <h2 className="display-4">
                    {title}
                </h2>
                <p className="lead">
                    {description}
                </p>
            </div>
            <div className={className}>
                {children}
            </div>
        </div>

    </div>
);



export default Layout;
