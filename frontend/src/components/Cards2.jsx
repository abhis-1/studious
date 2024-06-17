import React from "react";
import { useNavigate } from "react-router-dom";

export default function Cards2() {

    const navigate = useNavigate();

    const handleSemesterClick = (semester) => {
        navigate(`/semester/${semester}`);
    }


    return (
        <>

            <div className="mt-20 mb-10">
                <div className="flex justify-evenly mx-auto border-2 rounded-full py-1 px-4 sm:w-2/3 md:w-1/2 border-slate-400 bg-white text-black">
                    <button
                        onClick={() => handleSemesterClick("semester1")}
                        className="inline-flex items-center justify-center
                    whitespace-nowrap text-lg font-medium transition-colors
                    focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring
                    disabled:pointer-events-none disabled:opacity-50 hover:bg-slate-200
                    h-9 px-4 py-2 rounded-full">Sem 1</button>

                    <button
                        onClick={() => handleSemesterClick("semester2")}
                        className="inline-flex items-center justify-center
                    whitespace-nowrap text-lg font-medium transition-colors
                    focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring
                    disabled:pointer-events-none disabled:opacity-50 hover:bg-slate-200
                    h-9 px-4 py-2 rounded-full">Sem 2
                    </button>

                    <button
                        onClick={() => handleSemesterClick("semester3")}
                        className="inline-flex items-center justify-center
                    whitespace-nowrap text-lg font-medium transition-colors
                    focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring
                    disabled:pointer-events-none disabled:opacity-50 hover:bg-slate-200
                    h-9 px-4 py-2 rounded-full">Sem 3
                    </button>

                    <button
                        onClick={() => handleSemesterClick("semester4")}
                        className="inline-flex items-center justify-center
                    whitespace-nowrap text-lg font-medium transition-colors
                    focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring
                    disabled:pointer-events-none disabled:opacity-50 hover:bg-slate-200
                    h-9 px-4 py-2 rounded-full">Sem 4
                    </button>

                </div></div>

        </>
    )
}