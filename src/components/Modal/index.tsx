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
  type?: string
}
 
export const Modal = ({ openModal, handleOpen, onConfirm, children, type }:ModalProps) => {

  return (
    <>
      <Dialog 
      open={openModal} 
      handler={handleOpen as () => void} 
      placeholder={''} 
      className="flex flex-col bg-gray-800 m-auto p-2 w-[400px] border-2 border-green-400"
      >
        {
          type !== 'info' &&
            <DialogHeader placeholder={'header-modal'} className="text-white">Cadastro</DialogHeader>

        }

        <DialogBody placeholder={'body-modal'}>
          <div className="flex justify-center items-center">
            {children}
          </div>
        </DialogBody>

        {
          type !== 'info' ?
            <DialogFooter placeholder={"footer-modal"}>
              <div className="flex flex-row w-full justify-between -mb-4">
                <Button onClick={handleOpen as () => void}> Cancel </Button>
                <Button onClick={onConfirm as () => void} typeButton="bold">Confirm</Button>
              </div>
            </DialogFooter>
            :
            <></>

        }

      </Dialog>
    </>
  );
}