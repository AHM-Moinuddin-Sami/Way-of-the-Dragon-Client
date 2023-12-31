import Swal from "sweetalert2";
import useAdmin from "../../../Hooks/useAdmin";
import useAuth from "../../../Hooks/useAuth";
import useInstructor from "../../../Hooks/useInstructor";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useState } from "react";

const ClassCard = ({ id, name, photo, instructor, available, price }) => {

    const { user } = useAuth();
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    const [axiosSecure] = useAxiosSecure();
    const [enrollmentStatus, setEnrollmentStatus] = useState(false);

    const selectClass = async () => {
        if (!user) {
            Swal.fire({
                icon: 'error',
                title: `You must be logged in to select class!`,
                showConfirmButton: false,
                timer: 1500
            });
        }
        else {
            await axiosSecure
                .post("/payments/check", {
                    id: id,
                    email: user.email,
                })
                .then((res) => {
                    if (res.data.error) {
                        setEnrollmentStatus(true);
                        Swal.fire({
                            icon: "error",
                            title: `${res.data.message}`,
                            showConfirmButton: false,
                            timer: 1500,
                        });
                    }

                });

            if (!enrollmentStatus) {
                try {
                    const response = await axios.patch(
                        `https://way-of-the-dragon-server.vercel.app/users/student/select/${user.email}`,
                        {
                            id: id,
                            payment: "unpaid"
                        }
                    );
                    console.log(response.data); // Response from the backend
                    if (response.data.modifiedCount > 0) {
                        Swal.fire({
                            icon: 'success',
                            title: `${name} class selected!`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                    else if (response.data.error) {
                        Swal.fire({
                            icon: 'error',
                            title: `${response.data.message}`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                }
                catch (error) {
                    console.error(error);
                }
            }
        }
    }

    return (
        <div>
            <Helmet>
                <title>
                    All Classes | Way of the Dragon
                </title>
            </Helmet>
            <div className={`card h-full lg:card-side border-primary border-2 shadow-primary shadow-2xl ${available > 0 ? "bg-base-200" : "bg-red-600"}`}>
                <img className="w-1/2 rounded-xl object-cover" src={photo} alt="Album" />
                <div className="card-body text-center">
                    <h2 className="font-bold text-3xl">{name}</h2>
                    <hr />
                    <p>Instructor: {instructor}</p>
                    <p>Available Seats: {available}</p>
                    <p>Price: {price}$</p>
                    <div className="card-actions justify-end">
                        <button disabled={isAdmin || isInstructor || available === 0} onClick={() => selectClass()} className={`btn btn-primary`}>Select</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClassCard;