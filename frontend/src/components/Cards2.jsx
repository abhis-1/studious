import React from "react";
import { useNavigate } from "react-router-dom";

export default function Cards2() {

    const navigate = useNavigate();

    const handleSemesterClick = (semester) => {
        navigate(`/semester/${semester}`);
    }


    return (
        <>

            <div className="xl:block hidden mt-40 mb-20 z-70">
                <div className="flex justify-evenly mx-auto border-2
                rounded-full py-1 w-2/3  border-slate-400 bg-blue-900 text-white">
                    <button
                        onClick={() => handleSemesterClick("semester1")}
                        className="inline-flex items-center justify-center
                    whitespace-nowrap text-lg font-medium transition-colors
                    focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring
                    disabled:pointer-events-none disabled:opacity-50 hover:bg-white hover:text-blue-700
                    h-15 px-4 py-2 rounded-full">Semester 1</button>

                    <button
                        onClick={() => handleSemesterClick("semester2")}
                        className="inline-flex items-center justify-center
                    whitespace-nowrap text-lg font-medium transition-colors
                    focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring
                    disabled:pointer-events-none disabled:opacity-50 hover:bg-white hover:text-blue-700
                    h-15 px-4 py-2 rounded-full">Semester 2
                    </button>

                    <button
                        onClick={() => handleSemesterClick("semester3")}
                        className="inline-flex items-center justify-center
                    whitespace-nowrap text-lg font-medium transition-colors
                    focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring
                    disabled:pointer-events-none disabled:opacity-50 hover:bg-white hover:text-blue-700
                    h-15 px-4 py-2 rounded-full">Semester 3
                    </button>

                    <button
                        onClick={() => handleSemesterClick("semester4")}
                        className="inline-flex items-center justify-center
                    whitespace-nowrap text-lg font-medium transition-colors
                    focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring
                    disabled:pointer-events-none disabled:opacity-50 hover:bg-white hover:text-blue-700
                    h-15 px-4 py-2 rounded-full">Semester 4
                    </button>

                </div></div>

        </>
    )
}