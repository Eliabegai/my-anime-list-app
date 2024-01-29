import React from "react";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { Button } from "../Button";


type ModalProps = {
  openModal: boolean
  handleOpen?: () => void
  onConfirm?: (event: React.MouseEvent<MouseEvent>) => void
  children: React.ReactNode
  message?: boolean
}
 
export const Modal = ({ openModal, handleOpen, onConfirm, children, message }:ModalProps) => {

  return (
    <>
      <Dialog 
        open={openModal} 
        handler={handleOpen as () => void} 
        placeholder={''} 
        className="flex flex-col bg-gray-800 m-auto p-2 w-[400px] border-2 border-green-400 overflow-auto"
      >

        {
          !message &&
            <DialogHeader placeholder={'header-modal'} className="text-white">Cadastro</DialogHeader>
        }

        <DialogBody placeholder={'body-modal'}>
          {
            !message &&
            <div className="flex justify-center items-center overflow-auto">
              {children}
            </div>
          }
          <div className="flex justify-center items-center overflow-auto p-4">
              {children}
          </div>

        </DialogBody>
        {
          !message &&
          <DialogFooter placeholder={"footer-modal"}>
            <div className="flex flex-row w-full justify-between -mb-4">
              <Button onClick={handleOpen as () => void} size="large" > Cancel </Button>
              <Button onClick={onConfirm as () => void} typeButton="bold" size="large" >Confirm</Button>
            </div>
          </DialogFooter>
        }
      </Dialog>
    </>
  );
}