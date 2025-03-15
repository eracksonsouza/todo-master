import { Toaster } from "sonner";
import SideBar from "./components/SideBar";
import Tasks from "./components/Tasks";

function App() {
  return (
    <>
      <div className="flex ">
        <Toaster toastOptions={{
          style: {
            color: '#333'
          }
        }}/>
        <SideBar />
        <Tasks />
      </div>
    </>
  );
}

export default App;
