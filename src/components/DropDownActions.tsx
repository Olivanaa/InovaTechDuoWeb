'use client'

import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem
} from "@nextui-org/react";
import { ChevronDown, Compass, Edit, Trash } from "lucide-react";
import { MouseEventHandler } from "react";

interface DropDownActionsProps {
    onExplorar: MouseEventHandler,
    onDelete: MouseEventHandler
}

// 

export function DropDownActions({ onExplorar, onDelete }: DropDownActionsProps) { 
    return (
        <Dropdown>
            <DropdownTrigger>
                <ChevronDown />
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions" className="w-auto">
                <DropdownItem
                    key="explorar"
                    startContent={<Edit size={18} />}
                    onClick={onExplorar} 
                    >
                    editar
                </DropdownItem>
                <DropdownItem
                    key="delete"
                    startContent={<Trash size={18} />}
                    className="text-danger"
                    color="danger"
                    onClick={onDelete}
                    >
                    apagar
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    )
}