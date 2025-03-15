import { createPortal } from "react-dom";

const AddTaskDialog = ({ isOpen }) => {
  if (!isOpen) return null;
  //o createPortal foi utilizado para igualar o componente AddTaskDialog junto com a div root
  //ele vai ser renderizado onde a gente colocar como segundo parametro
  return createPortal(
    <div className="fixed bottom-0 backdrop-blur left-0 top-0 flex h-screen w-screen items-center justify-center">
      {/* Criando a caixa do dialog */}
      <div className="p-5 rounded-xl text-center bg-white shadow">
            <h2 className="text-[#35383e] text-xl font-semibold ">Nova Tarefa</h2>
            <p className="text-[#9a9c9f] ">Insira as informações abaixo</p>
      </div>
    </div>,
    document.body
    //aqui vai ser onde eu vou querer renderizar
  );
};

export default AddTaskDialog;
