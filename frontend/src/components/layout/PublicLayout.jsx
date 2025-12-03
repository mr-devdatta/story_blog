import React from "react";
import { Outlet } from "react-router-dom";

export default function PublicLayout() {
    return (
        <>
            <div className="flex items-center justify-center bg-gray-100 p-2 my-border">Public Layout</div>
            <div className="bg-gray-100 p-2 rounded shadow">
                <Outlet />
            </div>
        </>
    );
}
