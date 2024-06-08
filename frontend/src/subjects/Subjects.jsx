import React from "react";
import Navbar from "../components/Navbar";
import Subject from "../components/Subject";
import Footer from "../components/Footer";


function Subjects() {

    return (
        <>
            <Navbar />
            <div className="min-h-screen">
                <Subject />
            </div>
            <Footer />
        </>
    )

}

export default Subjects;