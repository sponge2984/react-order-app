import { makeStyles } from "@material-ui/core/styles";
export const useStylesManage = makeStyles({
    tabs: {
        left: 0,
        position: "absolute",
        height: "100%",
        background: "aliceblue",
        minWidth: "160px",
        boxShadow:
            "0px 2px 4px -1px rgba(0,0,0,0.12), 0px 4px 5px 0px rgba(0,0,0,0.24), 0px 1px 10px 0px rgba(0,0,0,0.42)",
        "& .Mui-selected": {
            background: "#caddef",
        },
        "& .MuiTabs-indicator": {
            backgroundColor: "#3f67a3",
            width: "4px",
        },
        "& .MuiTab-wrapper": {
            color: "#02102d",
            fontSize: "16px",
            fontWeight: "bold",
            "& svg": { width: "1.2em", height: "1.2em" },
        },
    },
    tabPanel: {
        position: "absolute",
        left: "160px",
        width: "calc( 100% - 160px )",
        height: "100%",
        boxShadow: "inset 1px 1px 4px 0px #0000006b",
        display: "flex",
        justifyContent: "center",
        background: "#f3f3f3",
        flex: 1,
    },
});
