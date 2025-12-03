import React from "react";
import { Outlet } from "react-router-dom";

export default function Layout1() {
    return (
        <>
            <div className="flex w-full bg-blue-100 p-2 my-border">Custom Layout -- 1</div>
            <div className="p-2 rounded shadow bg-blue-100 ">
                <Outlet />
            </div>
        </>
    );
}
