import "./App.scss";
import CustomModal from "./CustomModal";
import { useState } from "react";
import { Button } from "@material-tailwind/react";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalStatus, setModalStatus] = useState("");

  const closeModal = () => setIsOpen(false);
  const showModal = () => setIsOpen(true);

  const onYesPressed = () => {
    setModalStatus("User pressed yes");
    closeModal();
  };

  const onNoPressed = () => {
    setModalStatus("User pressed no");
    closeModal();
  };

  return (
    <div>
      <div>
        <Button onClick={showModal}>Open</Button>
        {modalStatus ?? <span>{modalStatus}</span>}
      </div>
      <CustomModal
        isOpen={isOpen}
        onRequestClose={closeModal}
        onYesPressed={onYesPressed}
        onNoPressed={onNoPressed}
      />
    </div>
  );
}

export default App;
