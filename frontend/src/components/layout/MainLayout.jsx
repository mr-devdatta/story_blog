import { Outlet } from "react-router-dom";
import NavigationBar from "./Sidebar/NavigationBar";

export default function MainLayout() {
    return (
        <div className="flex flex-col p-1 my-2 my-border bg-gray-300">
            <div className="p-1 text-center font-medium my-2 my-border bg-gray-400">Main Layout</div>
            <div className="bg-gray-400 p-1 my-2 my-border">
                <NavigationBar />
            </div>
            <div className="bg-gray-400 p-1 space-y-2 my-2 my-border">
                <Outlet />
            </div>
            <div className="bg-gray-400 p-1 my-2 text-center my-border">bottom layout, fix to bottom</div>
        </div>
    );
}
