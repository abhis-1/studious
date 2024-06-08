import React from "react";
import { Link } from "react-router-dom";
import aboutimg from "../../public/about.jpg"

function AboutUs() {

    return (
        <>
            <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
                <div className=" order-2 md:order-1 w-full md:w-1/2 mt-12 md:mt-32">
                    <div className="space-y-12">
                        <h1 className="text-4xl font-bold">
                            Get to know {" "}
                            <span className="text-purple-700">US</span>
                        </h1>
                        <p className="text-xl">
                            Studious is a platform developed by IICians, for IICians.
                            <br /> <br />
                            Start Learning Today
                        </p>
                        <br /> <br />
                        <Link to="/" >
                        <button className="text-white font-semibold text-xl bg-purple-700 rounded-md px-3 py-2">Get Started</button></Link>
                    </div>
                </div>
                <div className=" order-1 w-full md:w-1/2 my-20">
                    <img src={aboutimg} alt="" className="w-92 h-92" />
                </div>
            </div >
        </>
    )

}

export default AboutUs;