import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Box from '@mui/material/Box';
import MainPage from './Pages/MainPage';

function App() {
    //const [appContext, setAppContext] = useContext(AppContext)

    return (
        <>
            <Router>
                <Box>
                    Trabalho da Faa
                </Box>
                <Box component={"main"} sx={{
                    marginTop: 3, zIndex: 3
                }}>
                    <Routes>
                        <Route path="/" element={<MainPage />}></Route>
                    </Routes>
                </Box>
            </Router>
        </>
    )

}

export default App