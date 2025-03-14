import React from "react";
import Button from "./Button";
import AddIcon from "../assets/icons/add.svg?react";
import TrashIcon from "../assets/icons/trash.svg?react";
import SunIcon from "../assets/icons/sun.svg?react";
import CloudSon from "../assets/icons/cloud-sun.svg?react";
import MoonIcon from "../assets/icons/moon.svg?react";

const Tasks = () => {
  return (
    <div className="w-full px-8 py-16">
      <div className="flex w-full justify-between">
        <div>
          <span className="text-xs font-semibold text-[#00ADB5]">
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

      {/* lista de tarefas */}

      <div className="rounded-xl bg-white p-6">
        {/* Manhã */}

        <div className="space-y-3">
          <div className="flex gap-2 pb-1 border-b-2 border-solid border-[#f4f4f5]">
            <SunIcon />
            <p className="text-[#9a9c9f] text-sm">Manhã</p>
          </div>
        </div>

        {/* Tarde  */}
        <div className="space-y-3 my-6">
          <div className="flex gap-2 pb-1 border-b-2 border-solid border-[#f4f4f5]">
            <CloudSon />
            <p className="text-[#9a9c9f] text-sm">Tarde</p>
          </div>
        </div>

        {/* Noite  */}
        <div className="space-y-3">
          <div className="flex gap-2 pb-1 border-b-2 border-solid border-[#f4f4f5]">
            <MoonIcon />
            <p className="text-[#9a9c9f] text-sm">Noite</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
