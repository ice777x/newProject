"use client";
import React, {useEffect} from "react";
import Link from "next/link";

export default function Page() {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const [email, password, _, checked] = e.target;
    console.log("submit");
  };
  const [form, setForm] = React.useState({
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const [disabled, setDisabled] = React.useState(true);
  const handleCheck = (e: any) => {
    e.preventDefault();
    setForm({...form, [e.target.name]: e.target.value});
  };
  useEffect(() => {
    if (
      form.password === form.passwordConfirm &&
      form.passwordConfirm !== "" &&
      form.password !== "" &&
      form.password.length >= 8 &&
      form.passwordConfirm.length >= 8 &&
      form.email !== "" &&
      form.email.includes("@") &&
      form.username.length > 3
    ) {
      console.log(form.username);
      setDisabled(false);
    } else {
      setDisabled(true);
    }
    console.log(form);
  }, [form]);
  return (
    <div className="max-w-2xl mx-auto h-full w-full min-h-[calc(100vh-60px)] px-4 py-12">
      <div className="bg-white dark:bg-gradient-to-tr dark:from-[#031c32] dark:to-[#17334F] shadow-2xl dark:shadow-none rounded-lg">
        <div className="h-full w-[85%] sm:w-[65%] mx-auto py-10 md:py-20">
          <div className="ust prose dark:prose-invert max-w-full mb-16">
            <h1 className="">Sign Up</h1>
          </div>
          <div className="form prose dark:prose-invert">
            <form className="" onChange={handleCheck} onSubmit={handleSubmit}>
              <div className="form-group flex flex-col mb-6">
                <label
                  htmlFor="username"
                  className="text-lg font-medium mb-1.5"
                >
                  Username
                  <span className="text-sm align-text-top">*</span>
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  className="focus:ring bg-white dark:bg-[#162447] transition-all duration-150 ease-linear text-slate-500 dark:text-slate-300 px-1.5 py-[3px] outline outline-[1.5px] outline-gray-300 focus:outline-none dark:outline-[#1D2D50] focus:border-blue-600 focus:ring-blue-600 rounded-md"
                  placeholder="john77"
                />
              </div>
              <div className="form-group flex flex-col mb-6">
                <label htmlFor="email" className="text-lg font-medium mb-1.5">
                  Email
                  <span className="text-sm align-text-top">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="focus:ring bg-white dark:bg-[#162447] transition-all duration-150 ease-linear text-slate-500 dark:text-slate-300 px-1.5 py-[3px] outline outline-[1.5px] outline-gray-300 dark:outline-[#1D2D50] focus:border-blue-600 focus:ring-blue-600 rounded-md"
                  placeholder="ice777@serkan.com"
                />
              </div>
              <div className="form-group flex flex-col mb-6">
                <label
                  htmlFor="password"
                  className="text-lg font-medium mb-1.5"
                >
                  Password
                  <span className="text-sm align-text-top">*</span> {""}
                  <span className="text-sm text-gray-500">(min 8)</span>
                </label>
                <div className="flex w-full">
                  <input
                    type="password"
                    name="password"
                    placeholder="********"
                    className="w-full focus:ring bg-white transition-all duration-150 ease-linear dark:bg-[#162447] text-slate-500 dark:text-slate-300 px-1.5 py-[3px] outline outline-[1.5px] outline-gray-300 dark:outline-[#1D2D50] focus:border-blue-600 focus:ring-blue-600 rounded-md"
                    id="password"
                  />
                </div>
              </div>
              <div className="form-group flex flex-col mb-6">
                <label
                  htmlFor="password2"
                  className="text-lg font-medium mb-1.5"
                >
                  Confirm Password
                  <span className="text-sm align-text-top">*</span>
                </label>
                <div className="flex w-full">
                  <input
                    type="password"
                    name="passwordConfirm"
                    placeholder="********"
                    className="w-full focus:ring bg-white transition-all duration-150 ease-linear dark:bg-[#162447] text-slate-500 dark:text-slate-300 px-1.5 py-[3px] outline outline-[1.5px] outline-gray-300 dark:outline-[#1D2D50] focus:border-blue-600 focus:ring-blue-600 rounded-md"
                    id="passwordConfirm"
                  />
                </div>
              </div>
              <div className="form-group w-full mb-6">
                <button
                  disabled={disabled}
                  type="submit"
                  className="w-full py-2 bg-indigo-700 disabled:opacity-30 rounded-xl text-white font-medium text-lg"
                >
                  Sign Up
                </button>
              </div>
              <div className="form-group mb-6">
                <p className="text-sm text-gray-500">
                  Have an account?{" "}
                  <Link href="/accounts/login" className="text-sky-500">
                    Log in
                  </Link>
                </p>
              </div>
              <div className="mt-20 mb-0">
                <p className="text-sm text-gray-500 mb-0">
                  © 2022 ice777. All rights reserved.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
