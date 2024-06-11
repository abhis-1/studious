import React from "react";

<<<<<<< HEAD
function Login() {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => console.log(data);

    return (
        <>
            <div>
                <dialog id="my_modal_3" className="modal">
                    <div className="modal-box">
                        <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
                            {/* if there is a button in form, it will close the modal */}
                            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
                        </form>
                        <h3 className="font-bold text-lg">Login</h3>
                        <div className="mt-4 space-y-2">
                            <span>Email</span>
                            <br />
                            <input type="email"
                                placeholder="Enter your email"
                                className="w-80 px-3 border rounded-md outline-none"
                                {...register("email", { required: true })} />
                            <br />
                            {errors.email && (<span className="text-sm text-red-500">This field is required</span>)}
                        </div>

                        <div className="mt-4 space-y-2">
                            <span>Password</span>
                            <br />
                            <input type="password"
                                placeholder="Enter your password"
                                className="w-80 px-3 border rounded-md outline-none"
                                {...register("password", { required: true })} />
                            <br />
                            {errors.password && (<span>This field is required</span>)}
                        </div>

                        <div className="flex justify-around mt-4">
                            <button className="bg-purple-700 text-white rounded-md px-3 py-1 hover:bg-blue-700 hover:text-white duration-200">Login</button>
                            <p>Not registered? {" "}
                                <Link to="/signup" className="underline text-blue-500 cursor-pointer">Signup</Link>
                            </p>
                        </div>

                    </div>
                </dialog>
            </div>
        </>
    )

}

export default Login;
=======
export default function Login() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="bg-white bg-opacity-70 p-8 sm:p-16 hover:shadow-2xl hover:scale-105 border-2 rounded-lg w-full sm:w-96">
        <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>
        <form>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Email Address"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter Password"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 outline-none focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold transition duration-300 hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}
>>>>>>> 4328b13d9802d96ab76f9fffba9253c74616c19d
