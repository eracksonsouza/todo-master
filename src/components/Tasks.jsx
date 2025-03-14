import React, { useState } from "react";
import Button from "./Button";
import AddIcon from "../assets/icons/add.svg?react";
import TrashIcon from "../assets/icons/trash.svg?react";
import SunIcon from "../assets/icons/sun.svg?react";
import CloudSon from "../assets/icons/cloud-sun.svg?react";
import MoonIcon from "../assets/icons/moon.svg?react";
import TasksSeparator from "./TasksSeparator";
import { TASKS } from "./constants/tasks";
import TaskItem from "./TaskItem";

const Tasks = () => {
  const [tasks, setTasks] = useState(TASKS);

  const morningTasks = tasks.filter((tasks) => tasks.time === "morning");

  const afternoonTasks = tasks.filter((tasks) => tasks.time === "afternoon");

  const nightTasks = tasks.filter((tasks)=> tasks.time === "evening");

  return (
    <div className="w-full px-8 py-16">
      <div className="flex w-full justify-between">
        <div>
          <span className="text-xs font-semibold text-[#00ADB5] ">
            Minhas Tarefas
          </span>
          <h2 className="text-xl font-semibold"> Minhas Tarefas </h2>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="ghost">
            Limpar Tarefas
            <TrashIcon />
          </Button>

          <Button>
            Adicionar Tarefa
            <AddIcon />
          </Button>
        </div>
      </div>

      <div className="rounded-xl bg-white p-6">
        <div className="space-y-3">
          <TasksSeparator title="Manhã" icon={<SunIcon />} />

          {/* tarefas de manha */}
          { morningTasks.map((task)=> (
            <TaskItem key={task.id} task={task}/>
          )) }
        </div>

        <div className="space-y-3 my-6">
          <TasksSeparator title="Tarde" icon={<CloudSon />} />

          {/* tarefas de tarde */}
          { afternoonTasks.map((task) => (
            <TaskItem key={task.id} task={task}/>
          ))}
        </div>

        <div className="space-y-3">
          <TasksSeparator title="Noite" icon={<MoonIcon />} />

          {/* tarefas de noite */}
          { nightTasks.map((task) => (
            <TaskItem key={task.id} task={task}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tasks;
