import { Outlet, Link } from "react-router-dom";

const InstructorDashboard = () => {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col m-4">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                    {/* Sidebar content here */}
                    <li><Link to={"/dashboard/instructor/addclass"}>Add A Class</Link></li>
                    <li><Link to={"/dashboard/instructor/myclasses"}>My Classes</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default InstructorDashboard;