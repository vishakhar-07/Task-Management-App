
import {
  Plus,
  ListTodo,
  Clock3,
  CheckCircle,
  Circle,
  Check,
  Edit3,
  Trash2,
} from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import React, { useState, useEffect } from "react";

const Home = () => {
  const [allTask, setAllTask] = useState([]);

  const fetchTask = async () => {
    try {
      const response = await fetch("/api/tasks");
      const data = await response.json();
      if (data.success) {
        setAllTask(data.tasks);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTask();
  }, []);

  const totalTask = allTask.length;
  const completedTask = allTask.filter((task) => task.status === "Completed").length;
  const pendingTask = allTask.filter((task) => task.status === "Pending").length;

  //Format Date 
  const formatDate = (date) => {
    if (!date) return "no due date";

    return new Date(date).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  // status change function
  const handleStatusChange = async (task) => {
    const newStatus = task.status === "Completed" ? "Pending" : "Completed";

    try {
      const response = await fetch(`/api/status/${task._id}`, {
        method: "PUT",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify({
          status: newStatus,
        }),
      });

      const data = await response.json();
      if (data.success) {
        setAllTask((prevTask) =>
          prevTask.map((item) =>
            item._id === task._id
              ? {
                  ...item,
                  status: newStatus,
                }
              : item
          )
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  // handleDelete function (Fixed parameter reference)
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`/api/delete-task/${id}`, {
        method: "DELETE",
      });
      const data = await response.json();
      if (data.success) {
        setAllTask((prevTask) => prevTask.filter((item) => item._id !== id));
        toast.success(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-[#f7f8fc] text-slate-800">
      {/* Main Div  */}
      <div className="mx-auto max-w-7xl px-5 lg:px-8 lg:py-10">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-2 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
              <span className="text-sm font-medium text-emerald-400">
                {" "}
                You are Doing great
              </span>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Hello , Dev{" "}
            </h2>
            <p className="mt-2 text-sm text-slate-500">
              Here's What's Happening With your Task today.
            </p>
          </div>

          {/* Add task */}
          <Link to="/addtask">
            <button className="group flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-300 transition duration-200 hover:translate-y-0.5 hover:bg-indigo-600 cursor-pointer">
              <Plus
                size={20}
                className="transition-transform group-hover:rotate-180"
              />
              Add Task
            </button>
          </Link>
        </div>

        {/* States  */}
        <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {/* Total Task  */}
          <div className="group rounded-2xl border border-slate-300 bg-white p-5 shadow-sm transition hover:translate-y-1 hover:shadow-md">
            <div className="flex item-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">Total Task </p>
                <h3 className="mt-2 text-3xl font-bold text-slate-900">{totalTask}</h3>
                <p className="mt-1 text-xs text-slate-400">All Your Task </p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 transition group-hover:scale-110">
                <ListTodo size={22} />
              </div>
            </div>
          </div>
          {/* Pending Task */}
          <div className="group rounded-2xl border border-slate-300 bg-white p-5 shadow-sm transition hover:translate-y-1 hover:shadow-md">
            <div className="flex item-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">Pending Task </p>
                <h3 className="mt-2 text-3xl font-bold text-slate-900">{pendingTask}</h3>
                <p className="mt-1 text-xs text-slate-400">Task Remaining </p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-orange-500 transition group-hover:scale-110">
                <Clock3 size={22} />
              </div>
            </div>
          </div>

          {/* Completed Task */}
          <div className="group rounded-2xl border border-slate-300 bg-white p-5 shadow-sm transition hover:translate-y-1 hover:shadow-md">
            <div className="flex item-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">Completed Task </p>
                <h3 className="mt-2 text-3xl font-bold text-slate-900">{completedTask}</h3>
                <p className="mt-1 text-xs text-slate-400">Task Completed </p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-500 transition group-hover:scale-110">
                <CheckCircle size={22} />
              </div>
            </div>
          </div>
        </div>

        {/* Task Area  */}
        <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          {/* Task Header */}
          <div className="mb-6">
            <div>
              <h3 className="text-xl font-bold text-slate-900">MY Task's</h3>
              <p className="mt-1 text-sm text-slate-400">
                {" "}
                Manage and Organize you daily tasks
              </p>
            </div>
          </div>

          {/* Task Counts */}
          <div className="mb-4 flex items-center justify-between border-b border-slate-200 pb-4">
            <div className="flex items-center gap-2 ">
              <span className="text-sm font-semibold text-slate-700">Tasks</span>
              <span className="rounded-full bg-indigo-50 px-2 py-0.5 text-sm font-bold text-indigo-600">
                {totalTask}
              </span>
            </div>
          </div>

          {/* Task List  */}
          <div className="w-full space-y-3">
            {allTask.map((task) => (
              <div
                key={task._id}
                className={`group rounded-2xl border p-4 transition duration-200 hover:translate-y-0.5 hover:shadow-md sm:p-5 ${
                  task.status === "Completed"
                    ? " border-emerald-100 bg-emerald-50/40"
                    : "border-slate-100 bg-slate-50/50 hover:border-indigo-100 hover:bg-white"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4 min-w-0 flex-1">
                    <button
                      className="mt-1 shrink-0 cursor-pointer"
                      onClick={() => {
                        handleStatusChange(task);
                      }}
                    >
                      {task.status === "Completed" ? (
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 text-white shadow-sm">
                          <Check size={14} strokeWidth={3} />
                        </div>
                      ) : (
                        <Circle
                          size={24}
                          className="text-slate-300 transition group-hover:text-indigo-400"
                        />
                      )}
                    </button>

                    {/* content  */}
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2 ">
                        <h4
                          className={`text-sm font-bold sm:text-base ${
                            task.status === "Completed"
                              ? "text-slate-400 line-through "
                              : "text-slate-800"
                          }`}
                        >
                          {task.title}
                        </h4>
                        <span className="rounded-full px-2.5 py-0.5 text-xs font-semibold capitalize bg-slate-100 text-slate-600 border border-slate-200">
                          {task.priority}
                        </span>
                      </div>
                      <p className="mt-1 text-sm text-slate-500">{task.description}</p>

                      {task.dueDate && (
                        <p className="mt-2 text-xs font-medium text-slate-400">
                          Due: {formatDate(task.dueDate)}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Edit and Delete Action Buttons */}
                  <div className="flex items-center gap-2 shrink-0">
                    <Link
                      to={`/update-task/${task._id}`}
                      className="rounded-xl p-2 text-slate-400 hover:bg-indigo-50 hover:text-indigo-600 transition"
                      title="Edit Task"
                    >
                      <Edit3 size={18} />
                    </Link>

                    <button
                      onClick={() => handleDelete(task._id)}
                      className="rounded-xl p-2 text-slate-400 hover:bg-rose-50 hover:text-rose-600 transition cursor-pointer"
                      title="Delete Task"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;