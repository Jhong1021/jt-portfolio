import React from "react";
import backgroundImage from "../assets/images/greybg.jpg";

const GreyWallpaper = ({ children }) => {
    return (
        <div
            className="bg-fixed bg-cover bg-center min-h-screen"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="relative z-10 min-h-screen">{children}</div>
        </div>
    );
};

export default GreyWallpaper;
