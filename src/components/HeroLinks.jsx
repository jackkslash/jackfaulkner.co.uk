import React from "react";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";

export default function HeroLinks(props) {
  const notify = () => {
    navigator.clipboard.writeText("jackfaulknerbis@hotmail.co.uk");
    toast("✅ Email copied!");
  };

  return (
    <>
      <main className="ml-8">
        <div>
          <div className="text-6xl font-bold dark:text-white pb-4">jack</div>
          <div className="text-lg text-gray-600 dark:text-gray-400 max-w-sm mt-2">
            software dude
          </div>
        </div>
        <div className="grid grid-flow-col w-48 mt-3 text-lg gap-2">
          <a
            href="https://github.com/jackkslash"
            className="cursor-pointer fill-current focus:outline-none transition duration-300 ease-in-out hover:text-indigo-900 dark:hover:text-indigo-200"
          >
            github
          </a>
          <a
            href="https://twitter.com/jackkslash"
            className="cursor-pointer fill-current focus:outline-none transition duration-300 ease-in-out hover:text-indigo-900 dark:hover:text-indigo-200"
          >
            twitter
          </a>
          <a
            href="https://www.linkedin.com/in/jackaaronfaulkner/"
            className="cursor-pointer fill-current focus:outline-none transition duration-300 ease-in-out hover:text-indigo-900 dark:hover:text-indigo-200"
          >
            linkedin
          </a>
          <button
            onClick={notify}
            className="cursor-pointer fill-current focus:outline-none transition duration-300 ease-in-out hover:text-indigo-900 dark:hover:text-indigo-200"
          >
            email
          </button>
        </div>
        <Toaster />
      </main>
    </>
  );
}
