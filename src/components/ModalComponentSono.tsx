'use client'

import { useDisclosure, Button, Modal, ModalContent, ModalHeader, ModalBody, Select, SelectItem, ModalFooter } from "@nextui-org/react";
import { create } from "domain";
import { Plus } from "lucide-react";
import { SubmitButton } from "./SubmitButton";

export default function ModalComponentSono(){


    const {isOpen, onOpen, onOpenChange} = useDisclosure();

  
  
    return(
        <>
          <Button onPress={onOpen} startContent={<Plus />} >novo registro</Button>
          <Modal 
            isOpen={isOpen} 
            onOpenChange={onOpenChange}
            placement="top-center"
          >
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1">Cadastrar Sono</ModalHeader>
                    <form action={create}>
                  <ModalBody>
                  <div className="mb-4">
                  <label htmlFor="meta" className="block text-sm font-medium text-gray-700">Meta:</label>
                  <input
                    type="text"
                    id="meta"
                    name="meta"
                    className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="tempoSono" className="block text-sm font-medium text-gray-700">Tempo de Sono:</label>
                  <input
                    type="text"
                    id="tempoSono"
                    name="tempoSono"
                    className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>

        
               
                  </ModalBody>
                  <ModalFooter>
                    <Button color="danger" variant="flat" onPress={onClose}>
                      Cancelar
                    </Button>
                    <SubmitButton />
    
                  </ModalFooter>
                  </form>
                </>
              )}
            </ModalContent>
          </Modal>
        </>     
  
    );
  }