import { makeStyles } from "@material-ui/core/styles";
export const useStylesOrder = makeStyles((theme) => ({
    orderLeftSide: {
        position: "relative",
        background: "#f7fbfd",
        boxShadow:
            "inset 0px 2px 4px -1px rgba(0,0,0,0.12),inset  0px 4px 5px 0px rgba(0,0,0,0.24),inset  0px 1px 10px 0px rgba(0,0,0,0.42)",
    },
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

    orderRightSide: {
        boxShadow:
            "inset 0px 2px 4px -1px rgba(0,0,0,0.12), inset 0px 4px 5px 0px rgba(0,0,0,0.24)",
        height: "100%",
        background: "#2f3038",
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
        width: "100px",
        height: "36px",
        background:
            "radial-gradient(circle, rgba(171,130,9,0.9990371148459384) 5%, rgba(159,120,5,1) 34%, rgba(124,95,9,1) 68%, rgba(78,58,0,1) 100%)",
    },
    title: {
        fontWeight: "bold",
        color: "#031146",
        height: "40px",
        display: "flex",
        padding: "5px",
        alignItems: "center",
        background: "#a2a2a27a",
        boxShadow:
            "inset 0px 2px 4px -1px rgba(0,0,0,0.12), inset 0px 4px 5px 0px rgba(0,0,0,0.24), inset 0px 1px 10px 0px rgba(0,0,0,0.42)",
    },
    listInfo: {
        height: "36px",
        display: "flex",
        padding: "5px 10px",
        alignItems: "center",
        color: "#fff",
        fontSize: "18px",
        background:
            "linear-gradient(180deg, rgb(165 165 165 / 100%) 5%, rgb(134 134 134) 34%, rgb(101 101 101) 68%, rgb(86 86 86))",
        boxShadow:
            "0px 2px 4px -1px rgba(0,0,0,0.12), 0px 4px 5px 0px rgba(0,0,0,0.24), 0px 1px 10px 0px rgba(0,0,0,0.42)",
        "& .thName": {
            marginLeft: "12px",
        },
        "& .thCount": {
            position: "absolute",
            right: "120px",
        },
        "& .thPrice": {
            position: "absolute",
            right: "63px",
        },
        "& .thSet": {
            position: "absolute",
            right: "17px",
        },
    },
    orderList: {
        maxHeight: "363px",
        overflowY: "auto",
        "& li": {
            borderBottom: "1px solid #9e9e9e",
            margin: "0 8px",
        },
    },
}));
