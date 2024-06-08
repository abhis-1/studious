import React from "react";
import banner from "../../public/Banner.jpg"

function Banner() {

    return (
        <>
            <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
                <div className=" order-2 md:order-1 w-full md:w-1/2 mt-12 md:mt-32">
                    <div className="space-y-12">
                        <h1 className="text-4xl font-bold">
                            Welcome to {" "}
                            <span className="text-purple-700">Studious</span>
                        </h1>
                        <p className="text-xl">
                            Confused on how to get started with your syllabus? We have got you covered! Browse subjects and choose the best one for you.
                            <br /> <br />
                            We at Studious bring learning at your ease!
                            <br />
                            From Discrete Mathematics to Research Methods in Informatics, from Software Engineering to System Design we have got you covered. Head now to our subjects section, signup and get ahead with your syllabus in time.
                        </p>
                        <br/> <br/>
                        <span className="text-purple-700 font-semibold text-xl">Start Learning Today!</span>
                    </div>
                </div>
                <div className=" order-1 w-full md:w-1/2 my-20">
                <img src={banner} alt="" className="w-92 h-92" />
                </div>
            </div >
        </>
    );
}

export default Banner;