import React from "react";
import { Modal, Typography, Button } from "@material-tailwind/react";

const CustomModal = (isOpen, onRequestClose, onYesPressed, onNoPressed) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} transparent>
      <Typography>Enjoy this awesome to-do app? Upgrade to premium!</Typography>

      <div>Are you sure?</div>

      <div>
        <Button onClick={onYesPressed}>Yes</Button>
        <Button onClick={onNoPressed}>No</Button>
      </div>
    </Modal>
  );
};

export default CustomModal;
