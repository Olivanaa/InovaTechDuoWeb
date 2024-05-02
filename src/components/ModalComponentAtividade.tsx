'use client'

import { useDisclosure, Button, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@nextui-org/react";
import { create } from "domain";
import { Plus } from "lucide-react";
import { SubmitButton } from "./SubmitButton";


export default function ModalComponentAtividade(){

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
              <ModalHeader className="flex flex-col gap-1">Cadastrar Atividade</ModalHeader>
                <form action={create}>
              <ModalBody>
              <div className="mb-4">
                    <label htmlFor="dataAtividade" className="block text-sm font-medium text-gray-700">Data da Atividade:</label>
                    <input
                      type="date"
                      id="dataAtividade"
                      name="dataAtividade"
                      className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                    </div>
                
              <div className="mb-4">
                  <label htmlFor="tipoAtividade" className="block text-sm font-medium text-gray-700">Tipo de Atividade:</label>
                  <select
                    id="tipoAtividade"
                    name="tipoAtividade"
                    className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                   <option value="1">Corrida</option>
                    <option value="2">Caminhada</option>
                    <option value="3">Trilha</option>
                    <optgroup label="Esportes de ciclismo">
                        <option value="4">Pedalada</option>
                        <option value="5">Bicicleta Elétrica</option>
                    </optgroup>
                    <optgroup label="Esportes aquáticos">
                        <option value="6">Canoa</option>
                        <option value="7">Caiaque</option>
                        <option value="8">Remo</option>
                        <option value="9">Surfe</option>
                        <option value="10">Natação</option>
                    </optgroup>
                    <option value="0">Outros</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label htmlFor="tempoAtividade" className="block text-sm font-medium text-gray-700">Tempo de atividade: </label>
                  <input
                    type="text"
                    id="tempoAtividade"
                    name="tempoAtividade"
                    className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Tempo de atividade (em minutos)"
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