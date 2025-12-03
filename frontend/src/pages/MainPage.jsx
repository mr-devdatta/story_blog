import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "../config/router";

export default function MainPage() {
    //const isAuthenticate = localStorage.getItem("secrete-token-auth-key") ? true : false;
    return (
        <>
            <div className="my-border bg-gray-200 p-1 my-2">
                <RouterProvider router={router} /> {/* <RouterProvider> does not render its children at all. */}
            </div>
        </>
    );
}
