import { Outlet } from "react-router-dom";

export default function Layout2() {
    return (
        <>
            <div className="flex w-full bg-yellow-50 p-1 my-2 my-border">Custom Layout -- 2</div>
            <div className="bg-yellow-50 p-6 item-center my-border">
                <Outlet />
            </div>
        </>
    );
}
