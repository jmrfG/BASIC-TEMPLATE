import React from "react";
import { Box, Tab } from '@mui/material';
import { TabContext, TabList, TabPanel } from "@mui/lab";
import MainPageTemplate from '../Components/MainPageTemplate'

export default function MainPage() {
    const [tab, setTab] = React.useState("1")
    const changeTab = (event, newValue) => {
        setTab(newValue);
    };

    return (
        <Box sx={{
            width: "100%",
        }}>
            <TabContext value={tab} sx={{ width: "100%" }}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                    <TabList
                        onChange={changeTab}
                        sx={{ display: "flex", flexDirection: "space-around" }}
                    >
                        <Tab label="Finance" value="1">

                        </Tab>
                        <Tab label="Dashboard" value="2">

                        </Tab>
                    </TabList>
                </Box>
                <TabPanel value="1">
                    <MainPageTemplate></MainPageTemplate>
                </TabPanel>
                <TabPanel value="2">
                    <MainPageTemplate></MainPageTemplate>
                </TabPanel>
            </TabContext>
        </Box>
    )
}