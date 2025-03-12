import SideBarButton from "./SideBarButton";

const SideBar = () => {
  return (
    <div className="h-screen bg-green-50 w-[272px]">
      <div className="px-8 py-6 space-y-4">
        <h1 className="text-xl font-semibold text-[#00ADB5] ">Task Manager</h1>
        <p>
          Um simples {""}
          <span className="text-[#00ADB5] ">organizador de tarefas</span>
        </p>
      </div>

      <div className="flex flex-col p-2 gap-2">
        <SideBarButton variant="unselected"> Inicio </SideBarButton>

        <SideBarButton variant="selected"> Minhas Tarefas </SideBarButton>
      </div>
    </div>
  );
};

export default SideBar;
