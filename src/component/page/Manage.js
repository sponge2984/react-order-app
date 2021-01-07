import React from "react";
import { useStylesMain } from "../styled/styledMain";
import ItemTable from "../table/ItemTable";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { useStylesManage } from "../styled/styledManage";
import PeopleIcon from "@material-ui/icons/People";
import AssessmentIcon from "@material-ui/icons/Assessment";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import ListAltIcon from "@material-ui/icons/ListAlt";

function Manage() {
    const classes = useStylesMain();
    const classesManage = useStylesManage();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div
            className={classes.root}
            style={{ justifyContent: "flex-start", position: "relative" }}
        >
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                className={classesManage.tabs}
            >
                <Tab
                    icon={<FastfoodIcon />}
                    label="品項管理"
                    {...a11yProps(0)}
                />
                <Tab icon={<PeopleIcon />} label="用戶管理" {...a11yProps(1)} />
                <Tab
                    icon={<ListAltIcon />}
                    label="訂單查詢"
                    {...a11yProps(2)}
                />
                <Tab
                    icon={<AssessmentIcon />}
                    label="統計圖表"
                    {...a11yProps(3)}
                />
            </Tabs>
            <TabPanel
                value={value}
                index={0}
                className={value === 0 && classesManage.tabPanel}
            >
                品項管理
                <ItemTable />
            </TabPanel>
            <TabPanel
                value={value}
                index={1}
                className={value === 1 && classesManage.tabPanel}
            >
                用戶管理
                <ItemTable />
            </TabPanel>
            <TabPanel
                value={value}
                index={2}
                className={value === 2 && classesManage.tabPanel}
            >
                訂單查詢
            </TabPanel>
            <TabPanel
                value={value}
                index={3}
                className={value === 3 && classesManage.tabPanel}
            >
                統計圖表
            </TabPanel>
        </div>
    );
}

export default Manage;

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        "aria-controls": `vertical-tabpanel-${index}`,
    };
}

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}
