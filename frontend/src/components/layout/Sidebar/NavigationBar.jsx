import { Link } from "react-router-dom";

export default function NavigationBar() {
    return (
        <div className="bg-gray-300 m-1 p-1 my-border">
            <Link to="/" className=" px-3 py-2 rounded hover:bg-gray-200">
                Home
            </Link>
            <Link to="/aboutus" className="  px-3 py-2 rounded hover:bg-gray-200">
                AboutUs
            </Link>
            <Link to="/login" className="  px-3 py-2 rounded hover:bg-gray-200">
                Login
            </Link>
            <Link to="/forgetpassword" className="  px-3 py-2 rounded hover:bg-gray-200">
                ForgetPassword
            </Link>
            <Link to="/employee" className="  px-3 py-2 rounded hover:bg-gray-200">
                EmployeeList
            </Link>
            <Link to="/employee/add" className="  px-3 py-2 rounded hover:bg-gray-200">
                EmployeeForm
            </Link>
        </div>
    );
}
