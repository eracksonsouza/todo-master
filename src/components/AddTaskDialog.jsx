import { createPortal } from "react-dom";
import Input from "./Input";
import Button from "./Button";
import { CSSTransition } from "react-transition-group";
import { v4 } from "uuid";
import { useEffect, useRef } from "react";
import "./AddTaskDialog.css";
import TimeSelect from "./TimeSelect";
import { useState } from "react";
import { toast } from "sonner";

const AddTaskDialog = ({ isOpen, handleClose, handleSubmit }) => {
  const [title, setTitle] = useState();
  const [time, setTime] = useState("morning");
  const [description, setDescription] = useState();

  const nodeRef = useRef(); //useRef serve para criar uma referencia para o componente AddTaskDialog

  useEffect(() => {
    if (!isOpen) {
      setTitle("");
      setTime("");
      setDescription("");
    }
  }, [isOpen]);
  const handleSaveClick = () => {
    if (!title.trim() || !description.trim()) {
      return toast.error("Preencha todos os campos", {
        style: {
          backgroundColor: "#FF0000",
          color: "#FFFFFF",
        },
      });
    }
    handleSubmit({
      id: v4(),
      title,
      time,
      description,
      status: "not_started",
    });
    handleClose();
  };

  //o createPortal foi utilizado para igualar o componente AddTaskDialog junto com a div root
  //ele vai ser renderizado onde a gente colocar como segundo parametro
  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={isOpen}
      timeout={500}
      classNames="add-task-dialog"
      unmountOnExit
    >
      <div>
        {createPortal(
          <div
            ref={nodeRef}
            className="fixed bottom-0 backdrop-blur left-0 top-0 flex h-screen w-screen items-center justify-center"
          >
            {/* Criando a caixa do dialog */}
            <div className="p-5 rounded-xl text-center bg-white shadow">
              <h2 className="text-[#35383e] text-xl font-semibold ">
                Nova Tarefa
              </h2>
              <p className="text-[#9a9c9f] my-1 text-sm mt-1 mb-4 ">
                Insira as informações abaixo
              </p>

              <div className="space-y-4 flex flex-col w-[336px]">
                <Input
                  id="title"
                  label="Titulo"
                  placeholder="Insira o titulo da Tarefa"
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                />

                <TimeSelect
                  value={time}
                  onChange={(event) => setTime(event.target.value)}
                />

                <Input
                  id="description"
                  label="Descrição"
                  placeholder="Descreva a tarefa"
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
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
                  <Button
                    size="large"
                    className="w-full"
                    onClick={handleSaveClick}
                  >
                    Salvar
                  </Button>
                </div>
              </div>
            </div>
          </div>,
          document.body
          //aqui vai ser onde eu vou querer renderizar
        )}
      </div>
    </CSSTransition>
  );
};

export default AddTaskDialog;
