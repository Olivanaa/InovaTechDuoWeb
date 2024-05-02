'use client'

import { getExames } from "@/app/actions/exames/get"
import { MesesSelect } from "@/components/MesesSelect"
import { Button, Pagination, Table, TableBody, TableHeader } from "@nextui-org/react"
import { Filter, PlusIcon } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { ExamesItem } from "./ExamesItem"

interface ExamesDataProps {
    exames: Array<Exame>
}

export function ExamesData({ exames }: ExamesDataProps) {

    const [filteredExames, setFilteredExames] = useState(exames)
    const [filter, setFilter] = useState({ mes: 0 })
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)

    useEffect(() => {
        const fecthData = async () => {
            try {
                const data = await getExames(Number(filter.mes), page)
                setFilteredExames(data.content)
                setTotalPages(data.totalPages)
            } catch (error) {
                throw new Error("falha ao filtrar registros")
            }
        }
        fecthData()
    }, [filter, page])

    const changeFilter = (e: any) => {
        setFilter({ ...filter, [e.target.name]: e.target.value })
    }

    const cleanFilter = () => {
        setFilter({ mes: 0 })
    }

    const handlePageChange = (page: number) => {
        setPage(page)
    }

    return (
        <>
            <section className="flex flex-col gap-4 bg-slate-900 w-full max-w-[1024px] mx-auto mt-4 p-6 rounded">
                <div className="flex justify-between">
                    <h2 className="text-2xl font-bold">Exames e Consultas</h2>
                    <Link href="/explorar/exames/new">
                        <Button color="primary" startContent={<PlusIcon />}>novo registro</Button>
                    </Link>
                </div>

                <div className="flex flex-row gap-4 items-center border-1 border-white/10 p-4 rounded">

                    <Filter size={20} />
                    <MesesSelect onChange={changeFilter} mes={filter.mes} />
                    <Button onClick={cleanFilter} >limpar</Button>
                </div>
                <div>
                
                    {filteredExames.map(exame =>
                        <ExamesItem key={exame.id} exame={exame} />
                    )}
                
                </div>
                {/* <Table aria-label="Exames e Consultas" className="w-full max-w-[1024px] mx-auto mt-4 rounded">
                    <TableHeader>
                        <TableColumn>NOME</TableColumn>
                        <TableColumn>DATA</TableColumn>
                        <TableColumn>HORÁRIO</TableColumn>
                        <TableColumn>LOCALIZAÇÃO</TableColumn>
                        <TableColumn> </TableColumn>
                    </TableHeader>
                        <TableBody>
                            {filteredExames.map(exame =>
                                <ExamesItem key={exame.id} exame={exame} />
                            )}
                        </TableBody>                   
                </Table> */}
            </section>
            <Pagination
                onChange={handlePageChange}
                isCompact
                showControls
                total={totalPages}
                page={1}
                className="mt-6"
            />

        </>
    )
}