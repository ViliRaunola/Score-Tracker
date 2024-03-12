import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material'
import React from 'react'

type Props = {
  open: boolean,
  handleCancel: Function,
  handleConfirm: Function,
  text: string,
  header: string,
}

const Alert = ({open, handleCancel, handleConfirm, text, header}: Props) => (
  <Dialog
    open={open}
    onClose={() => handleCancel()}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description">
    <DialogTitle id="alert-dialog-title">{header}</DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-description">{text}</DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={() => handleCancel()} variant="outlined">
        Takaisin
      </Button>
      <Button onClick={() => handleConfirm()} autoFocus variant="outlined">
        Ok
      </Button>
    </DialogActions>
  </Dialog>
)

export default Alert
