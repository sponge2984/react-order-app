import { makeStyles } from "@material-ui/core/styles";
export const useStylesOrder = makeStyles((theme) => ({
    orderCount: {
        width: "30px",
        textAlign: "end",
    },
    orderPrice: { margin: " 0 10px", width: "50px", textAlign: "end" },
    totalPrice: {
        fontSize: "20px",
        position: "absolute",
        bottom: "10px",
        right: "10px",
        width: "180px",
    },
    itemWrapper: {
        height: "100%",
        background: "#3b3d46",
        width: "100%",
        flexDirection: "column",
        display: "flex",

        position: "relative",
    },
    itemCardContainer: {
        boxSizing: "border-box",
        width: "100%",
        display: "flex",
        justifyContent: "flex-start",
        flexDirection: "row",
        flexWrap: "wrap",
        overflowY: "auto",
        padding: "5px 8px",
    },

    classifyTabs: {
        width: "100%",
        //height: "50px",
        color: "#fff",
        backgroundColor: "#1976d2",
    },
    Pagination: {
        position: "absolute",
        bottom: "66px",
        left: "50%",
        transform: "translateX(-50%)",
        "& li > button": {
            background: "#ffffff66",
        },
    },
    orderFooter: {
        width: "100%",
        height: "56px",
        position: "absolute",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        bottom: 0,
        boxShadow:
            "0px 2px 4px -1px rgba(0,0,0,0.12), 0px 4px 5px 0px rgba(0,0,0,0.24), 0px 1px 10px 0px rgba(0,0,0,0.42)",
    },
    SendOrderBtn: {
        marginRight: "10px",
        width: "80px",
        height: "36px",
        background:
            "radial-gradient(circle, rgba(171,130,9,0.9990371148459384) 5%, rgba(159,120,5,1) 34%, rgba(124,95,9,1) 68%, rgba(78,58,0,1) 100%)",
    },
}));
