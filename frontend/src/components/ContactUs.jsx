import React from "react";
import contactimg from "../../public/contact.jpg"

function ContactUs() {

    return (
        <>
            <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
                <div className=" order-2 md:order-1 w-full md:w-1/2 mt-12 md:mt-32">
                    <div className="space-y-12">
                        <h1 className="text-4xl font-bold">
                            Reach Out to {" "}
                            <span className="text-purple-700">US</span>
                        </h1>
                        <p className="text-xl">
                            Have a query? an unanswered doubt? or a seemingly wonderful suggestion?
                            <br /> <br />
                            We are here to hear you out!
                            <br />
                            Reach out to us @ 
                        </p>
                        <br /> <br />
                        <span className="text-purple-700 font-semibold text-xl">help@studious.com</span>
                    </div>
                </div>
                <div className=" order-1 w-full md:w-1/2 my-20">
                    <img src={contactimg} alt="" className="w-92 h-92" />
                </div>
            </div >
        </>
    )

}

export default ContactUs;