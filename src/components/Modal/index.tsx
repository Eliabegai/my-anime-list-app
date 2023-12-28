import React from "react";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { Button } from "../Button";
import { FormUser } from "../Formulario/FormUser";
import { handleSubmitProps } from "../../App";


type ModalProps = {
  openModal: boolean
  handleOpen: () => void
  onClick?: () => void
  children: React.ReactNode
}
 
export const Modal = ({ openModal, handleOpen, onClick, children }:ModalProps) => {

  return (
    <>
      <Dialog 
      open={openModal} 
      handler={handleOpen} 
      placeholder={''} 
      className="flex flex-col bg-gray-800 text-white m-auto p-2 w-[400px] border-2 border-green-400"
      >
        <DialogHeader placeholder={''}>Cadastro</DialogHeader>

        <DialogBody placeholder={''}>
          <div className="flex justify-center items-center">
            {children}
          </div>
        </DialogBody>

        <DialogFooter placeholder={""}>
          <div className="flex flex-row w-full justify-between -mb-4">
            <Button onClick={handleOpen}> Cancel </Button>
            <Button onClick={() => onClick } typeButton="bold">Confirm</Button>
          </div>
        </DialogFooter>
      </Dialog>
    </>
  );
}