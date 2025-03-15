import CheckIcon from "../assets/icons/check.svg?react";
import LoaderIcon from "../assets/icons/loader.svg?react";
import DetailsIcon from "../assets/icons/details.svg?react";
import TrashIcon from "../assets/icons/trash.svg?react";
import Button from "./Button";

const TaskItem = ({ task, handleCheckedBoxClick, handleDeleteClick }) => {
  const getStatusClasses = () => {
    if (task.status === "done") {
      return "bg-[#00ADB5] text-[#00ADB5]";
    }

    if (task.status === "in_progress") {
      return "bg-[#FFAA04] text-[#FFAA04]";
    }

    if (task.status === "not_started") {
      return "bg-[#35383e] bg-opacity-10 text-[#35383e]";
    }
  };

  return (
    <div
      className={`transition bg-opacity-10 px-4 py-2 flex justify-between items-center gap-2 text-sm rounded-lg ${getStatusClasses()}`}
    >
      <div className="flex items-center gap-2">
        <label
          className={`relative flex h-7 w-7 cursor-pointer items-center justify-center rounded-lg ${getStatusClasses()}`}
        >
          <input
            type="checkbox"
            checked={task.status === "done"}
            className="absolute h-full w-full cursor-pointer opacity-0"
            onChange={() => handleCheckedBoxClick(task.id)}
          />
          {task.status === "done" && <CheckIcon />}
          {task.status === "in_progress" && (
            <LoaderIcon className="animate-spin text-white" />
          )}
        </label>
        <p> {task.title}</p>
      </div>

      <div className="flex items-center">
        <Button variant="ghost" onClick={() => handleDeleteClick(task.id)}>
          <TrashIcon className="text-[#9a9c9f]"/>
        </Button>

        <a href="#" className="flex justify-end">
          <DetailsIcon />
        </a>
      </div>
    </div>
  );
};

export default TaskItem;
