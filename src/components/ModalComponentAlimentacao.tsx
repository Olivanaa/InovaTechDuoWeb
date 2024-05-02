'use client'

import { useDisclosure, Button, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@nextui-org/react";
import { create } from "domain";
import { Plus } from "lucide-react";
import { SubmitButton } from "./SubmitButton";


export default function ModalComponentAlimentacao(){

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
              <ModalHeader className="flex flex-col gap-1">Cadastrar Refeição</ModalHeader>
                <form action={create}>
              <ModalBody>
              <div className="mb-4">
                    <label htmlFor="dataRefeicao" className="block text-sm font-medium text-gray-700">Data da Refeição:</label>
                    <input
                      type="date"
                      id="dataRefeicao"
                      name="dataRefeicao"
                      className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                    </div>
                
              <div className="mb-4">
                  <label htmlFor="tipoRefeicao" className="block text-sm font-medium text-gray-700">Tipo de Refeição:</label>
                  <select
                    id="tipoRefeicao"
                    name="tipoRefeicao"
                    className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option value="cafeDaManha">Café da Manhã</option>
                    <option value="almoco">Almoço</option>
                    <option value="jantar">Jantar</option>
                    <option value="lanche">Lanche</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label htmlFor="alimentosConsumidos" className="block text-sm font-medium text-gray-700">Alimentos Consumidos:</label>
                  <input
                    type="text"
                    id="alimentosConsumidos"
                    name="alimentosConsumidos"
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