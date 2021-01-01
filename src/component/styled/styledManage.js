import { makeStyles } from "@material-ui/core/styles";
export const useStylesManage = makeStyles({
    tabs: {
        background: "aliceblue",
        boxShadow:
            "0px 2px 4px -1px rgba(0,0,0,0.12), 0px 4px 5px 0px rgba(0,0,0,0.24), 0px 1px 10px 0px rgba(0,0,0,0.42)",
        "& .Mui-selected": {
            background: "#caddef",
        },
    },
});
