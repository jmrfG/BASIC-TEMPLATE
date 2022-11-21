import React from "react";
import { Box } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid'
import request from "../Helpers/connection"
export default function MainPageTemplate() {
    //const [appContext, setAppContext] = useAppContext()
    const [rows, setRows] = React.useState([])

    const columns = [
        {
            field: "id",
            headerName: "Id",
            flex: 1,
            hide: true,
        },
        {
            field: "type",
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
            field: "value",
            headerName: "Valor",
            flex: 1,
        },
        {
            field: "description",
            headerName: "Descrição",
            flex: 1,
        },
    ]

    React.useEffect(() => {
        request.get('/finance/').then((res) => {
            let data = res.data;
            //console.log(data[0].opLis);
            let json = data[0].opLis
            setRows(json);
        }).catch(err => {
            console.log(err)
        })
    }, [])

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
                getRowClassName={(params) => {
                    if (params.row.type === "credit") {
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