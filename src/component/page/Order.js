import React, { useState } from "react";
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
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { itemLists } from "./fakeItem";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import SimpleDialog from "../SimpleDialog";

function Order() {
    const theme = useTheme();
    const isWebSize = useMediaQuery(theme.breakpoints.up("md"));
    const mainClasses = useStylesMain();
    const orderClasses = useStylesOrder();
    const [dense, setDense] = useState(true);
    const [secondary, setSecondary] = useState(true);
    const [selectItems, setSelectItems] = useState([]);
    const [value, setValue] = React.useState(0);
    const [openDialog, setOpenDialog] = React.useState(false);
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
            {isWebSize && (
                <Grid
                    item
                    xs={12}
                    md={4}
                    className={orderClasses.orderLeftSide}
                >
                    <Typography variant="h6" className={orderClasses.title}>
                        {` 訂單編號: xxxxxxxxxxxx `}
                    </Typography>
                    <div className={orderClasses.listInfo}>
                        <div className="thName">商品名稱</div>
                        <div className="thCount">數量</div>
                        <div className="thPrice">金額</div>
                        <div className="thSet">操作</div>
                    </div>
                    {selectItems.length === 0 && (
                        <div style={{ margin: "10px", color: "#ababab" }}>
                            請點擊右方菜單新增品項
                        </div>
                    )}
                    <List dense={dense} className={orderClasses.orderList}>
                        {selectItems.map((item, idx) => (
                            <ListItem key={idx}>
                                <ListItemAvatar>
                                    <Avatar>
                                        <FolderIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary={item.name}
                                    secondary={
                                        secondary ? "Secondary text" : null
                                    }
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
                                        onClick={() =>
                                            handlClickRemoveItem(item)
                                        }
                                    >
                                        <DeleteIcon />
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                        ))}
                    </List>
                    <div className={orderClasses.totalPrice}>
                        總金額: $
                        <span
                            style={{
                                minWidth: "50px",
                                display: "inline-block",
                            }}
                        >
                            {selectItems.reduce(
                                (acc, item) => item.price * item.count + acc,
                                0
                            )}
                        </span>
                        元
                    </div>
                </Grid>
            )}
            <Grid item xs={12} md={8} className={orderClasses.orderRightSide}>
                <AppBar position="static" className={orderClasses.classifyTabs}>
                    <Tabs
                        value={value}
                        variant="fullWidth"
                        onChange={handleChange}
                        variant="scrollable"
                        scrollButtons="auto"
                        aria-label="scrollable auto tabs example"
                    >
                        <Tab label="開胃菜" />
                        <Tab label="主餐" />
                        <Tab label="飲品" />
                        <Tab label="甜點" />
                        <Tab label="其他" />
                    </Tabs>
                </AppBar>

                <div className={orderClasses.itemCardContainer}>
                    {itemLists.map((item, idx) => (
                        <ProductItem
                            key={idx}
                            itemInfo={item}
                            onSelect={handleClickAddItem}
                        />
                    ))}
                </div>

                <div className={orderClasses.orderFooter}>
                    {!isWebSize && (
                        <>
                            <div className={orderClasses.totalPriceBottom}>
                                總金額: $
                                <span
                                    style={{
                                        minWidth: "50px",
                                        display: "inline-block",
                                    }}
                                >
                                    {selectItems.reduce(
                                        (acc, item) =>
                                            item.price * item.count + acc,
                                        0
                                    )}
                                </span>
                                元
                            </div>
                            <div
                                onClick={() => {
                                    setOpenDialog(true);
                                }}
                                style={{ marginRight: "20px" }}
                            >
                                <Badge
                                    badgeContent={selectItems.length}
                                    color="primary"
                                >
                                    <ShoppingCartIcon
                                        style={{ color: "#fff" }}
                                    />
                                </Badge>
                            </div>
                            <SimpleDialog
                                open={openDialog}
                                onClose={() => {
                                    setOpenDialog(false);
                                }}
                            />
                        </>
                    )}
                    <Button
                        className={orderClasses.SendOrderBtn}
                        variant="contained"
                        color="primary"
                    >
                        送出訂單
                    </Button>
                </div>
            </Grid>
        </div>
    );
}

export default Order;
