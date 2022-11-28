import React from "react";
import { Box } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid'
import request from "../Helpers/connection"
export default function MainPageTemplate() {
    //const [appContext, setAppContext] = useAppContext()
    const [rows, setRows] = React.useState([])

    const columns = [
        {
            field: "operationId",
            headerName: "Id",
            flex: 1,
            hide: true,
        },
        {
            field: "tipoOperacao",
            headerName: "Tipo",
            renderCell: (e) => {
                if (e.value === "credit") {
                    return "Crédito"
                } else if (e.value === "debt") {
                    return "Débito"
                }
            },
            flex: 1,
        },
        {
            field: "valorTotal",
            headerName: "Despesa/Crédito Total",
            flex: 1,
        },
        {
            field: "valorPago",
            headerName: "Valor Pago/Recebido",
            flex: 1,
        },
        {
            field: "descricao",
            headerName: "Descrição",
            flex: 1,
        },
        {
            field: "dataReferencia",
            headerName: "Data de Referencia",
            flex: 1,
        },
        {
            field: "dataPagamento",
            headerName: "Data de Pagamento",
            flex: 1,
        },
    ]

    const requestData = React.useCallback(async () => {
        try {
            let res = await request.get('/finance/localData')
            let data = res.data
            console.log(data)
            setRows(data)
        }
        catch (err) {
            console.log(err)
        }
    }, [])

    React.useEffect(() => {
        requestData()
    }, [requestData])

    return (
        <Box sx={{
            width: "100%",
            '& .credit': {
                backgroundColor: "#d0ff63"
            },
            '& .debt': {
                backgroundColor: "#ff6363",
            },
        }}>
            <DataGrid
                columns={columns}
                rows={rows}
                getRowId={row => row.operationId}
                getRowClassName={(params) => {
                    if (params.row.tipoOperacao === "credit") {
                        return 'credit'
                    } else {
                        return 'debt'
                    }
                }}
                autoHeight={true}
            />
        </Box>
    )

}