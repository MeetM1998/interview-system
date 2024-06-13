import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  DialogContentText,
} from "@mui/material";

import DeleteOutlineTwoToneIcon from "@mui/icons-material/DeleteOutlineTwoTone";

import { useDispatch } from "react-redux";

import { removeResult } from "../../Store/actions";

const AlertDialog = ({ id }) => {
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const removeHandler = () => {
    dispatch(removeResult(id));

    setOpen(false);
  };
  return (
    <>
      <Button onClick={handleClickOpen} sx={{ color: "red" }}>
        <DeleteOutlineTwoToneIcon />
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
      >
        <DialogTitle id="alert-dialog-title">Delete Record</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are You Sure Delete This Record?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={removeHandler} sx={{ color: "red" }} autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AlertDialog;
