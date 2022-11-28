import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Paper, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import request from "../Helpers/connection";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const defaultValues = {

}

export default function RegistrarOperacao() {
    const [name, setName] = React.useState("")
    const [tipoOperacao, setTipoOperacao] = React.useState("")
    const [valorTotal, setValorTotal] = React.useState(0)
    const [valorOperacao, setValorOperacao] = React.useState(0)
    const [dataRef, setDataRef] = React.useState(new Date())
    const [dataPag, setDataPag] = React.useState(new Date())
    const methods = useForm({ defaultValues: defaultValues })
    const { handleSubmit, reset, control, setValue, watch } = methods;
    const onSubmit = () => {
        let data = {
            'descricao': name,
            'tipoOperacao': tipoOperacao,
            'valorTotal': valorTotal,
            'valorOperacao': valorOperacao,
            'dataRef': dataRef,
            'dataPag': dataPag
        }
        try {
            request.post('/finance/registrarOperacao', data)
            setName("")
            setTipoOperacao("")
            setValorOperacao(0)
            setValorTotal(0)
            setDataRef(new Date())
            setDataPag(new Date())
        } catch (err) {
            alert(err)
            console.log(err)
        }
    }
    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Paper sx={{
                    display: "grid",
                    padding: "10px",
                    margin: "5px 0",
                    width: "100%",
                    maxWidth: "750px",
                    fontFamily: 'cursive'
                }}>
                    <Typography variant="h6">
                        FAA Cred
                    </Typography>
                    <Box>
                        <FormControl
                            sx={{
                                display: "grid",
                                gridRowGap: "20px",
                                padding: "20px",
                                margin: "10px 0",
                                wdth: "100%",
                                maxWidth: "750px",
                                fontFamily: 'cursive'
                            }}
                        >

                            <FormLabel id="demo-row-radio-buttons-group-label">Tipo de Gasto</FormLabel>
                            <TextField
                                label="Descrição"
                                value={name}
                                onChange={(event) => {
                                    setName(event.target.value)
                                }}
                            />

                            <FormLabel id="demo-row-radio-buttons-group-label">Tipo de Operação</FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                                value={tipoOperacao}
                                onChange={(event) => {
                                    setTipoOperacao(event.target.value)
                                }}
                            >
                                <FormControlLabel value="credit" control={<Radio />} label="Crédito" />
                                <FormControlLabel value="debt" control={<Radio />} label="Débito" />
                            </RadioGroup>

                            <FormLabel id="demo-row-radio-buttons-group-label">Valores da Operação</FormLabel>
                            <TextField
                                type={"number"}
                                label={"Valor Total"}
                                value={valorTotal}
                                onChange={(event) => {
                                    setValorTotal(event.target.value)
                                }}
                            />
                            <TextField
                                type={"number"}
                                label={"Valor Pago/Recebido"}
                                value={valorOperacao}
                                onChange={(event) => {
                                    setValorOperacao(event.target.value)
                                }}
                            />

                            <FormLabel id="demo-row-radio-buttons-group-label">Datas da Operação</FormLabel>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                    label="Data de Referência"
                                    value={dataRef}
                                    onChange={(newValue) => {
                                        setDataRef(newValue.toISOString());
                                    }}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </LocalizationProvider>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                    label="Data de Pagamento"
                                    value={dataPag}
                                    onChange={(newValue) => {
                                        setDataPag(newValue.toISOString());
                                    }}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </LocalizationProvider>

                        </FormControl>
                    </Box>
                    <Button variant={"contained"} onClick={handleSubmit(onSubmit)}>
                        Submit
                    </Button>
                </Paper>
            </Box>
        </>
    )
}