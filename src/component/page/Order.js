import React, { useState } from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import AppBar from "@material-ui/core/AppBar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FolderIcon from "@material-ui/icons/Folder";
import DeleteIcon from "@material-ui/icons/Delete";
import ProductItem from "../ProductItem";
import { useStylesMain } from "../styled/styledMain";
import { useStylesOrder } from "../styled/styledOrder";
import Button from "@material-ui/core/Button";
import Pagination from "@material-ui/lab/Pagination";
import { itemLists } from "./fakeItem";
function Order() {
    const mainClasses = useStylesMain();
    const orderClasses = useStylesOrder();
    const [dense, setDense] = useState(true);
    const [secondary, setSecondary] = useState(true);
    const [selectItems, setSelectItems] = useState([]);
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleClickAddItem = (o) => {
        const findItem = selectItems.find((el) => el.id === o.id);
        if (findItem === undefined) {
            setSelectItems([...selectItems, { ...o, count: 1 }]);
        } else {
            setSelectItems(
                selectItems.map((el) =>
                    el.id === o.id ? { ...o, count: el.count + 1 } : el
                )
            );
        }
    };
    const handlClickRemoveItem = (o) => {
        setSelectItems([...selectItems].filter((el) => el.id !== o.id));
    };
    return (
        <div className={mainClasses.root}>
            <Grid item xs={12} md={3} style={{ position: "relative" }}>
                <Typography variant="h6" className={orderClasses.title}>
                    {` 訂單編號:xxxxxxxx 共${selectItems.length}項`}
                </Typography>

                <List dense={dense}>
                    {selectItems.map((item) => (
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
                            <div className={orderClasses.orderCount}>
                                {item.count}
                            </div>
                            <div className={orderClasses.orderPrice}>{`$${
                                item.price * item.count
                            }`}</div>
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
                <div
                    className={orderClasses.totalPrice}
                >{`總金額: ${selectItems.reduce(
                    (acc, item) => item.price * item.count + acc,
                    0
                )} 元`}</div>
            </Grid>
            <Grid item xs={12} md={9} className={orderClasses.itemWrapper}>
                {/*<AppBar position="static" className={orderClasses.classifyTabs}>
                    <Tabs
                        value={value}
                        variant="fullWidth"
                        onChange={handleChange}
                        aria-label="simple tabs example"
                    >
                        <Tab label="開胃菜" />
                        <Tab label="主餐" />
                        <Tab label="飲品" />
                        <Tab label="甜點" />
                        <Tab label="其他" />
                    </Tabs>
                </AppBar>*/}

                <div className={orderClasses.itemCardContainer}>
                    {itemLists.map((item, idx) => (
                        <ProductItem
                            key={idx}
                            itemInfo={item}
                            onSelect={handleClickAddItem}
                        />
                    ))}
                </div>

                {/*<Pagination
                    className={orderClasses.Pagination}
                    count={10}
                    variant="outlined"
                    color="primary"
                />*/}
                <div className={orderClasses.orderFooter}>
                    <Button
                        className={orderClasses.SendOrderBtn}
                        variant="contained"
                        color="primary"
                    >
                        Pay
                    </Button>
                </div>
            </Grid>
        </div>
    );
}

export default Order;
