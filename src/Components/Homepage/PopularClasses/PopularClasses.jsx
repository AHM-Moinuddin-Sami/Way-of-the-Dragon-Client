import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../SharedComponents/Section Title/SectionTitle";
import { useState } from "react";
import anime from "animejs";

const Popularclasses = () => {
    const { data: popularclasses = [], isLoading: loading } = useQuery({
        queryKey: ["popularclasses"],
        queryFn: async () => {
            const res = await fetch("https://way-of-the-dragon-server.vercel.app/classes/popular");
            return res.json();
        },
    });

    const [hoveredItem, setHoveredItem] = useState(null);

    const handleHover = (index) => {
        setHoveredItem(index);
        anime({
            targets: `.class-card-${index}`,
            scale: 1.2,
            duration: 500,
        });
    };

    const handleMouseExit = (index) => {
        setHoveredItem(null);
        anime({
            targets: `.class-card-${index}`,
            scale: 1,
            duration: 500,
        });
    };

    return (
        <div className="mt-auto">
            <SectionTitle title={"Popular classes"}></SectionTitle>
            <div className="grid md:grid-cols-3 gap-8 gap-y-10 justify-items-center">
                {popularclasses.map((item, index) => (
                    <div
                        onMouseEnter={() => handleHover(index)}
                        onMouseLeave={() => handleMouseExit(index)}
                        className={`relative class-card-${index}`}
                        key={item._id}
                    >
                        <img
                            className="object-cover border-primary border rounded-full w-72 h-72 md:h-96 md:w-96"
                            src={item.image}
                            alt="https://img.icons8.com/external-filled-outline-icons-maxicons/85/external-japan-japan-filled-outline-filled-outline-icons-maxicons-3.png"
                        />
                        {hoveredItem === index && (
                            <p className="text-2xl -mt-[50%] px-10 text-center text-red-600 bg-gradient-to-r from-transparent via-black to-transparent absolute top-full left-0 -translate-y-1/2 w-full py-4">
                                {item.name} <br/> by {item.instructorName}
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Popularclasses;
