import { Link } from "react-router-dom";

import { FaPlus, FaRegEdit } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import { useEffect, useState } from "react";
import type { Task } from "../types";
import { deleteTask, getTasks } from "../api";

const MyTask = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  // Step1: load the tasks once, hwen the page first appears
  useEffect(() => {
    const fetchTasks = async () => {
      const data = await getTasks();
      setTasks(data);
      console.log(data);
    };

    fetchTasks();
  }, []);

  // Step 2 :delete one task
  const handleDelete = async (id: string) => {
    if (!confirm("Delete this task?")) {
      return;
    }
    await deleteTask(id);
    // Keep every task EXCEPT the deleted one (no need to reload from the server)
    setTasks(
      tasks.filter((task) => {
        return task._id !== id;
      }),
    );
  };

  return (
    <main className="max-w-360 mx-auto px-5 md:px-42.5 py-8 md:py-13.25 flex flex-col items-start gap-7.25">
      <div className="flex flex-col md:flex-row items-start md:items-center w-full justify-between gap-4">
        <h1 className="font-medium text-3xl md:text-[50px] text-[#292929]">
          My Task
        </h1>
        <Link to="/new" className="flex items-center gap-2">
          <FaPlus className="text-lg md:text-[24px] font-medium text-[#974fd0]" />
          <span className="text-lg md:text-[24px] font-medium text-[#974fdf0]">
            Add New Task
          </span>
        </Link>
      </div>

      <div className="flex flex-col items-start gap-8 w-full">
        {tasks.length === 0 && <p> No tasks yet. Create one!</p>}
        {tasks.map((task) => {
          return (
            <div
              key={task._id}
              className="border-[0.5px] border-[#B8B6B6] rounded-[10px] flex flex-col pt-5 pb-10 px-3 items-start w-full text-start"
            >
              <div className="pb-5 flex flex-col md:flex-row md:items-end justify-between w-full gap-4 border-b-[0.5px] border-b-[#b8b6b6]">
                <p
                  className={`font-normal text-xl md:text-[24px] ${task.tag === "Urgent" ? "text-[#f38383]" : "text-[#73c3a6]"}`}
                >
                  {task.tag}
                </p>

                <div className="flex flex-wrap gap-3">
                  <Link
                    to={`/edit/${task._id}`}
                    className="w-31.5 h-12.5 flex justify-center items-center gap-2.5 bg-[#974fd0] rounded-lg"
                  >
                    <FaRegEdit className="text-[24px] font-medium text-[#faf9fb]" />
                    <span className="text-[24px] font-medium text-[#faf9fb]">
                      Edit
                    </span>
                  </Link>

                  <button
                    onClick={() => {
                      return handleDelete(task._id);
                    }}
                    className="border border-[#974fd0] w-37.75 h-12.5 flex justify-center items-center gap-2.5 rounded-lg"
                  >
                    <FaRegTrashCan />
                    <span className="text-[24px] font-medium text-[#974fd0]">
                      Delete
                    </span>
                  </button>
                </div>
              </div>

              <div className="flex flex-col items-start mt-4 ">
                <h2
                  className="font-norm;
            text-2xl md:text-[35px] text-[#292929] "
                >
                  {task.title}
                </h2>
                <p className="text-[#737171] font-normaltext-base md:text-[24px] leading-tight">
                  {task.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default MyTask;
