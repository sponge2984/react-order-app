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
        background: "#EAEAEA",
        width: "100%",
        flexDirection: "column",
        display: "flex",
    },
    itemCardContainer: {
        width: "100%",

        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
        flexWrap: "wrap",
        overflowY: "auto",
    },

    classifyTabs: {
        width: "100%",
        //height: "50px",
        color: "#fff",
        backgroundColor: "#1976d2",
    },
    Pagination: {
        position: "absolute",
        bottom: "60px",
        left: "50%",
        "& li > button": {
            background: "#ffffff66",
        },
    },
    SendOrderBtn: {
        position: "absolute",
        bottom: "10px",
        right: "10px",
        width: "80px",
    },
}));
