'use client'

import { useDisclosure, Button, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Input } from "@nextui-org/react";
import { PlusIcon } from "lucide-react";
import { SubmitButton } from "./SubmitButton";
import { create } from "@/app/actions/exames/create";
import { useFormState, useFormStatus } from "react-dom";

const initialState = {
  message_nome: '',
  message_data: '',
  message_horario: '',
  message_localizacao: '',
}

export default function ModalComponentExames() {

  const [state, formAction] = useFormState(create, initialState)
  const { pending } = useFormStatus();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  

  return (
    <>
      <Button onPress={onOpen} startContent={<PlusIcon />} >novo registro</Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="top-center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Cadastrar Exames e Consultas</ModalHeader>
              <form action={formAction}>
                <ModalBody>
                  <div className="mb-4">
                    <Input
                      key="nome"
                      type="text"
                      label="Descrição"
                      name="nome"
                      labelPlacement={"outside"}
                      placeholder="Nome do exame ou consulta"
                      isRequired= {true}
                      isInvalid={state?.message_nome != ''}
                      onError={state?.message_nome}

                      className="block text-sm font-medium text-gray-700"
                    />
                  </div>
                  <div className="mb-4">
                    
                    <Input
                      key={"data"}
                      type="date"
                      label="Data"
                      labelPlacement={"outside"}
                      name="data"
                      isRequired={true}
                      isInvalid={state?.message_data != ''}
                      onError={state?.message_data}
                      className="block text-sm font-medium text-gray-700"
                    />
                  </div>
                  <div className="mb-4">
                    
                    <Input
                      key={"horario"}
                      type="time"
                      label="Horário"
                      labelPlacement={"outside"}
                      name="horario"
                      isRequired={true}
                      isInvalid = {state?.message_horario != ''}
                      onError={state?.message_horario}
                      className="block text-sm font-medium text-gray-700"
                    />
                  </div>
                  <div className="mb-4">
                    
                    <Input
                      key={"localizacao"}
                      type="text"
                      name="localizacao"
                      label="Localização"
                      labelPlacement={"outside"}
                      placeholder="Local do exame ou consulta"
                      isRequired={true}
                      isInvalid = {state?.message_localizacao != ''}
                      onError={state?.message_localizacao}
                      className="block text-sm font-medium text-gray-700"
                    />

                  </div>


                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="flat" onPress={onClose}>
                    Cancelar
                  </Button>
                  <Button type="submit" color="primary" isLoading={pending} onPress={onClose}>
                    Salvar
                  </Button>

                </ModalFooter>
              </form>
            </>
          )}
        </ModalContent>
      </Modal>
    </>

  );
}