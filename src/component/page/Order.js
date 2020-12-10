import React, { useState } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FolderIcon from "@material-ui/icons/Folder";
import DeleteIcon from "@material-ui/icons/Delete";
import ProductItem from "../ProductItem";
import { useStylesMain } from "../styled/styledMain";
import { useStylesOrder } from "../styled/styledOrder";
import itemImg1 from "../../assets/images/item1.jpg";
import itemImg2 from "../../assets/images/item2.jpg";
import itemImg3 from "../../assets/images/item3.jpg";
const itemLists = [
    { name: "珍珠奶茶", id: "123534234", img: itemImg1 },
    { name: "抹茶拿鐵", id: "564651351", img: itemImg2 },
    { name: "四季春茶", id: "123123123123", img: itemImg3 },
];
function Order() {
    const mainClasses = useStylesMain();
    const orderClasses = useStylesOrder();
    const [dense, setDense] = useState(true);
    const [secondary, setSecondary] = useState(true);
    const [selectItem, setSelectItem] = useState([]);
    const handleClickAddItem = (o) => {
        if (selectItem.every((el) => el.id !== o.id)) {
            setSelectItem([...selectItem, o]);
        }
    };
    const handlClickRemoveItem = (o) => {
        console.log("r: ", o);
        setSelectItem([...selectItem].filter((el) => el.id !== o.id));
    };
    return (
        <div className={mainClasses.root}>
            <Grid item xs={12} md={4}>
                <Typography variant="h6" className={orderClasses.title}>
                    {` 訂單編號:xxxxxxxx 共${selectItem.length}項`}
                </Typography>

                <List dense={dense}>
                    {selectItem.map((item) => (
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <FolderIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary={item.name}
                                secondary={secondary ? "Secondary text" : null}
                            />
                            <ListItemSecondaryAction>
                                <IconButton
                                    edge="end"
                                    aria-label="delete"
                                    onClick={() => handlClickRemoveItem(item)}
                                >
                                    <DeleteIcon />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    ))}
                </List>
            </Grid>
            <Grid
                item
                xs={12}
                md={8}
                className={orderClasses.itemCardContainer}
            >
                {itemLists.map((item) => (
                    <ProductItem
                        itemInfo={item}
                        onSelect={handleClickAddItem}
                    />
                ))}
            </Grid>
        </div>
    );
}

export default Order;
