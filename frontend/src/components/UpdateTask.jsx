import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, CalendarDays, FileText, Flag, Plus } from "lucide-react";
import { toast } from "react-hot-toast";
import { API_BASE_URL } from "../config"; // <-- API URL import kiya

const UpdateTask = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    priority: "",
    dueDate: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    const fetchSingleTask = async () => {
      try {
        // Path live kiya
        const response = await fetch(`${API_BASE_URL}/api/getsingletask/${id}`);
        const data = await response.json();

        if (data.success) {
          const task = data.task;
          const formatDate = task.dueDate ? task.dueDate.split("T")[0] : "";
          setFormData({
            title: task.title || "",
            description: task.description || "",
            priority: task.priority || "low",
            dueDate: formatDate,
          });
        }
      } catch (error) {
        console.log("Error fetching task:", error);
      }
    };

    if (id) {
      fetchSingleTask();
    }
  }, [id]);

  const handleForm = async (e) => {
    e.preventDefault();
    try {
      // Path live kiya
      const response = await fetch(`${API_BASE_URL}/api/update-task/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();

      if (data.success) {
        toast.success(data.message || "Task Updated Successfully!");
        navigate("/");
      } else {
        toast.error(data.message || "Failed to update task");
      }
    } catch (error) {
      console.log("Error updating task:", error);
    }
  };

  return (
    <div className="min-h-screen bg-[#f7f8fc] text-slate-800">
      <main className="mx-auto max-w-3xl px-5 py-8 lg:py-12">
        <button
          type="button"
          onClick={() => navigate("/")}
          className="mb-5 flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-indigo-600 cursor-pointer"
        >
          <ArrowLeft size={17} />
          Back To Task
        </button>

        <div className="mb-8">
          <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
            <Plus size={25} />
          </div>
          <h2 className="text-3xl font-bold text-slate-900">Update Task</h2>
        </div>

        <form onSubmit={handleForm}>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg sm:p-8">
            <div className="mb-6">
              <label htmlFor="title" className="mb-2 block text-sm font-semibold text-slate-700">
                Task Title <span className="ml-1 text-red-500">*</span>
              </label>
              <div className="relative">
                <FileText size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  name="title"
                  id="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Add task title"
                  className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm text-slate-800 outline-none transition placeholder:text-slate-500 focus:border-indigo-400 focus:bg-white focus:ring-4 focus:ring-indigo-50"
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="description" className="mb-2 block text-sm font-semibold text-slate-700">
                Task Description
              </label>
              <textarea
                name="description"
                id="description"
                value={formData.description}
                onChange={handleChange}
                rows={5}
                placeholder="Write a short description about your task"
                className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-800 outline-none transition placeholder:text-slate-500 focus:border-indigo-400 focus:bg-white focus:ring-4 focus:ring-indigo-50"
              />
            </div>

            <div className="mb-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="priority" className="mb-2 block text-sm font-semibold text-slate-700">
                  Task Priority
                </label>
                <div className="relative">
                  <Flag size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                  <select
                    name="priority"
                    id="priority"
                    value={formData.priority}
                    onChange={handleChange}
                    className="h-12 w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm text-slate-800 outline-none transition placeholder:text-slate-500 focus:border-indigo-400 focus:bg-white focus:ring-4 focus:ring-indigo-50"
                  >
                    <option value="">Select Priority</option>
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="dueDate" className="mb-2 block text-sm font-semibold text-slate-700">
                  Due Date
                </label>
                <div className="relative">
                  <CalendarDays size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="date"
                    value={formData.dueDate}
                    onChange={handleChange}
                    name="dueDate"
                    id="dueDate"
                    className="h-12 w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm text-slate-800 outline-none transition placeholder:text-slate-500 focus:border-indigo-400 focus:bg-white focus:ring-4 focus:ring-indigo-50"
                  />
                </div>
              </div>
            </div>

            <div className="mb-6 border-t border-slate-300"></div>

            <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={() => navigate("/")}
                className="h-12 rounded-xl border border-slate-200 bg-white px-6 text-sm font-semibold text-slate-600 transition hover:bg-slate-100 cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex h-12 items-center justify-center gap-2 rounded-xl bg-slate-900 px-7 text-sm font-semibold text-white shadow-lg shadow-slate-200 transition hover:bg-indigo-600 cursor-pointer"
              >
                Update Task
              </button>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
};

export default UpdateTask;
