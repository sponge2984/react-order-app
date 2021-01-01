import { makeStyles } from "@material-ui/core/styles";
export const useStylesMeals = makeStyles((theme) => ({
    mealsLeftSide: {},
    mealsRightSide: { background: "#8099af", color: "#FFF" },
    prepareList: {
        "& .listItem span": {
            textAlign: "center",
            fontSize: "36px",
        },
    },
    alreadyList: {
        "& .listItem span": {
            textAlign: "center",
            fontSize: "36px",
        },
    },
}));
