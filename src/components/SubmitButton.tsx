'use client'

import { Button, useDisclosure, useModal } from "@nextui-org/react";
import { useFormStatus } from "react-dom";


export function SubmitButton(){
    const { pending } = useFormStatus();
    const { onClose } = useDisclosure()

    const handleSave = () => {
        
    };

    return (
        <Button type="submit" color="primary" isLoading={pending} onPress={handleSave}>
            Salvar
        </Button>
    )
}