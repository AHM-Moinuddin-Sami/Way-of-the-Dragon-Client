import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../Hooks/useAuth";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import SectionTitle from "../../../../SharedComponents/Section Title/SectionTitle";
import { Helmet } from "react-helmet-async";

const PaymentHistory = () => {

    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { data: paymentHistory = [], isLoading, refetch } = useQuery({
        queryKey: ["paymentHistory"],
        queryFn: async () => {
            const res = await axiosSecure.get(
                `payments/history/${user.email}`
            );
            return res.data;
        },
    });

    paymentHistory.sort((a, b) => new Date(b.date) - new Date(a.date));

    return (
        <div className="overflow-x-auto">
            <Helmet>
                <title>
                    Payment History | Way of the Dragon
                </title>
            </Helmet>
            <SectionTitle title={"Payment History"}></SectionTitle>
            <table className="table">
                <thead>
                    <tr className="text-center">
                        <th>No</th>
                        <th>Class Name</th>
                        <th>Instructor Name</th>
                        <th>Instructor Email</th>
                        <th>Price</th>
                        <th>Transaction ID</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        paymentHistory.map((payment, index) => (
                            <tr className="w-full text-center overflow-hidden" key={payment._id}>
                                <td>{index + 1}</td>
                                <td>
                                    <p>{payment.className}</p>
                                </td>
                                <td>{payment.instructorName}</td>
                                <td>{payment.instructorEmail}</td>
                                <td>{payment.price}$</td>
                                <td>{payment.transactionId}</td>
                                <td>{new Date(payment.date).toLocaleDateString('en-GB', {
                                    day: '2-digit',
                                    month: '2-digit',
                                    year: '2-digit'
                                })}</td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
};

export default PaymentHistory;