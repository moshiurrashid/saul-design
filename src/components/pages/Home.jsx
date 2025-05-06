import React from "react";
import Banner from "../Banner";
import { useState } from "react";
import { getDatabase, ref, set, push } from "firebase/database";

const Home = () => {
  const [data, setData] = useState("");
  const [data2, setData2] = useState("");

  const handleChange = (e) => {
    setData(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!data) {
      setData2("Task is Required");
    } else {
      setData2("");
      const db = getDatabase();
      set(push(ref(db, "todolist/")), {
        name: data,
      })
        .then(() => {
          console.log("Data send successfull");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  console.log(data);

  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-2xl px-4 py-8 lg:py-16">
          <form action="#">
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div className="sm:col-span-2">
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Product Name
                </label>
                <input
                  onChange={handleChange}
                  type="text"
                  name="name"
                  id="name"
                  className="focus:ring-primary-600 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                  placeholder="Type product name"
                  required=""
                />
                {setData2 && <p className="text-red-500">{data2}</p>}
              </div>

              <button
                onClick={handleSubmit}
                type="submit"
                className="hover:bg-primary-800 text-gray inline-flex items-center rounded-lg bg-white px-5 py-2.5 text-center text-sm font-medium focus:ring-1"
              >
                Add product
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
