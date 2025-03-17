import { createPortal } from "react-dom";
import Input from "./Input";
import Button from "./Button";

const AddTaskDialog = ({ isOpen, handleClose }) => {
  if (!isOpen) return null;
  //o createPortal foi utilizado para igualar o componente AddTaskDialog junto com a div root
  //ele vai ser renderizado onde a gente colocar como segundo parametro
  return createPortal(
    <div className="fixed bottom-0 backdrop-blur left-0 top-0 flex h-screen w-screen items-center justify-center">
      {/* Criando a caixa do dialog */}
      <div className="p-5 rounded-xl text-center bg-white shadow">
        <h2 className="text-[#35383e] text-xl font-semibold ">Nova Tarefa</h2>
        <p className="text-[#9a9c9f] my-1 text-sm mt-1 mb-4 ">
          Insira as informações abaixo
        </p>

        <div className="space-y-4 flex flex-col w-[336px]">
          <Input
            id="title"
            label="Titulo"
            placeholder="Insira o titulo da Tarefa"
          />
          <Input id="time" label="Horário" placeholder="Horário" />
          <Input
            id="description"
            label="Descrição"
            placeholder="Descreva a tarefa"
          />
          <div className="flex gap-3">
            <Button
              size="large"
              className="w-full"
              variant="secondary"
              onClick={handleClose}
            >
              Cancelar
            </Button>
            <Button size="large" className="w-full">
              Salvar
            </Button>
          </div>
        </div>
      </div>
    </div>,
    document.body
    //aqui vai ser onde eu vou querer renderizar
  );
};

export default AddTaskDialog;
