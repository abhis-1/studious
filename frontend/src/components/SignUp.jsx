import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";

function SignUp() {

    return (
        <>
            <div className="flex h-screen items-center justify-center">
                <div className="w-[600px]">
                    <div className="modal-box">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
                        </form>
                        <h3 className="font-bold text-lg">SignUp</h3>

                        <div className="mt-4 space-y-2">
                            <span>First Name</span>
                            <br />
                            <input type="text"
                                placeholder="Enter your first"
                                className="w-80 px-3 border rounded-md outline-none" />
                        </div>

                        <div className="mt-4 space-y-2">
                            <span>Last Name</span>
                            <br />
                            <input type="text"
                                placeholder="Enter your last name"
                                className="w-80 px-3 border rounded-md outline-none" />
                        </div>

                        <div className="mt-4 space-y-2">
                            <span>Email</span>
                            <br />
                            <input type="email"
                                placeholder="Enter your email"
                                className="w-80 px-3 border rounded-md outline-none" />
                        </div>

                        <div className="mt-4 space-y-2">
                            <span>Password</span>
                            <br />
                            <input type="text"
                                placeholder="Enter your password"
                                className="w-80 px-3 border rounded-md outline-none" />
                        </div>

                        <div className="flex justify-around mt-4">
                            <button className="bg-purple-700 text-white rounded-md px-3 py-1 hover:bg-blue-700 hover:text-white duration-200">Signup</button>
                            <p className="text-xl">Already registered? {" "}
                                <button className="underline text-blue-500 cursor-pointer"
                                    onClick={() => document.getElementById("my_modal_3").showModal()}
                                >Login</button> {" "}
                                <Login />
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )

}

export default SignUp;