import React, { useEffect, useState } from "react";
import { MdErrorOutline } from "react-icons/md";
import {
  getDatabase,
  push,
  ref,
  set,
  onValue,
  remove,
} from "firebase/database";
import { useNavigate } from "react-router";

const App = () => {
  const [task, setTask] = useState("");
  const [taskError, setTaskError] = useState("");
  const [tasklist, setTasklist] = useState([]);
  const [loading, setLoading] = useState(true);
  const db = getDatabase();
  const navigate = useNavigate();

  const handleTask = (e) => {
    setTask(e.target.value);
  };
  // Create Data
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task) {
      setTaskError("Task is Required");
    } else {
      setTaskError("");
      const db = getDatabase();
      set(push(ref(db, "todolist/")), {
        name: task,
      })
        .then(() => {
          setTask("");
          console.log("Data send successfull");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  // Read Data
  function Todolist() {
    const todolistRef = ref(db, "todolist/");
    onValue(todolistRef, (snapshot) => {
      let arr = [];
      snapshot.forEach((item) => {
        arr.push({ ...item.val(), id: item.key });
        setLoading(false);
      });
      setTasklist(arr);
    });
  }

  useEffect(() => {
    Todolist();
  }, []);

  const handleDelete = (id) => {
    remove(ref(db, "todolist/" + id));
    console.log("deleted", id);
  };

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  return (
    <>
      <section className="h-screen">
        <div className="mx-auto max-w-2xl px-4 py-8 lg:py-16">
          <form action="#">
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div className="relative sm:col-span-2">
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-white"
                >
                  Enter Your Task
                </label>
                <input
                  onChange={handleTask}
                  type="text"
                  name="name"
                  id="name"
                  value={task}
                  className={`focus:ring-primary-600 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border ${
                    taskError ? "border-red-500" : "border-gray-300"
                  } bg-gray-50 p-2.5 text-sm text-gray-900`}
                  placeholder="Enter Your Task"
                  required=""
                />
                {taskError && (
                  <MdErrorOutline className="absolute top-1/2 right-4 text-2xl text-red-500" />
                )}
              </div>
            </div>
            <button
              onClick={handleSubmit}
              type="submit"
              className="mt-4 items-center rounded-lg border border-gray-300 bg-gray-50 px-5 py-2.5 text-center text-sm font-medium text-gray-900"
            >
              Add Task
            </button>
          </form>

          <div className="mx-auto mt-5 max-w-2xl rounded-xl border border-gray-300 bg-gray-50 p-5">
            {loading ? (
              <div
                role="status"
                className="animate-pulse rounded-sm p-4 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="mb-2.5 h-2.5 w-24 rounded-full bg-gray-200 dark:bg-gray-200" />
                    <div className="h-2 w-32 rounded-full bg-gray-200 dark:bg-gray-200" />
                  </div>
                  <div className="h-2.5 w-12 rounded-full bg-gray-200 dark:bg-gray-200" />
                </div>
                <div className="flex items-center justify-between pt-4">
                  <div>
                    <div className="mb-2.5 h-2.5 w-24 rounded-full bg-gray-200 dark:bg-gray-200" />
                    <div className="h-2 w-32 rounded-full bg-gray-200 dark:bg-gray-200" />
                  </div>
                  <div className="h-2.5 w-12 rounded-full bg-gray-200 dark:bg-gray-200" />
                </div>
                <div className="flex items-center justify-between pt-4">
                  <div>
                    <div className="mb-2.5 h-2.5 w-24 rounded-full bg-gray-200 dark:bg-gray-200" />
                    <div className="h-2 w-32 rounded-full bg-gray-200 dark:bg-gray-200" />
                  </div>
                  <div className="h-2.5 w-12 rounded-full bg-gray-200 dark:bg-gray-200" />
                </div>
                <div className="flex items-center justify-between pt-4">
                  <div>
                    <div className="mb-2.5 h-2.5 w-24 rounded-full bg-gray-200 dark:bg-gray-200" />
                    <div className="h-2 w-32 rounded-full bg-gray-200 dark:bg-gray-200" />
                  </div>
                  <div className="h-2.5 w-12 rounded-full bg-gray-200 dark:bg-gray-200" />
                </div>
                <div className="flex items-center justify-between pt-4">
                  <div>
                    <div className="mb-2.5 h-2.5 w-24 rounded-full bg-gray-200 dark:bg-gray-200" />
                    <div className="h-2 w-32 rounded-full bg-gray-200 dark:bg-gray-200" />
                  </div>
                  <div className="h-2.5 w-12 rounded-full bg-gray-200 dark:bg-gray-200" />
                </div>
                <span className="sr-only">Loading...</span>
              </div>
            ) : (
              <ul>
                {tasklist.map((item, i) => (
                  <li className="flex items-center justify-between p-2 font-medium">
                    <span className="w-1/2">
                      {i + 1}. {item.name}{" "}
                    </span>
                    <div>
                      <button
                        onClick={() => handleDelete(item.id)}
                        type="button"
                        className="pr- mr-4 rounded-lg bg-red-600 px-5 py-2.5 text-sm font-medium text-white"
                      >
                        Delete
                      </button>
                      <button
                        onClick={() => handleEdit(item.id)}
                        type="button"
                        className="rounded-lg bg-green-500 px-5 py-2.5 text-sm font-medium text-white"
                      >
                        Edit
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default App;
