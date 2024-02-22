import React from "react";
import { Dialog, Typography, Button } from "@material-tailwind/react";

const CustomModal = (isOpen, onRequestClose, onYesPressed, onNoPressed) => {
  return (
    <Dialog open={isOpen} handler={onRequestClose}>
      <Typography>Enjoy this awesome to-do app? Upgrade to premium!</Typography>

      <div>Are you sure?</div>

      <div>
        <Button onClick={onYesPressed}>Yes</Button>
        <Button onClick={onNoPressed}>No</Button>
      </div>
    </Dialog>
  );
};

export default CustomModal;
