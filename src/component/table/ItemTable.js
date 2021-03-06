import React from "react";
import MaterialTable from "material-table";

function MemberTable() {
    const [data, setData] = React.useState([]);
    return (
        <div style={{ maxWidth: "100%" }}>
            <MaterialTable
                title="商品列表"
                columns={[
                    { title: "名稱", field: "name" },
                    { title: "價格($)", field: "price" },

                    {
                        title: "代碼",
                        field: "uuid",
                    },
                    {
                        title: "連結",
                        field: "url",
                    },
                ]}
                data={[
                    {
                        name: "bubble tea",
                        price: 80,
                        uuid: "123445",
                        url: "/img/item1.png",
                    },
                    {
                        name: "black tea",
                        price: 50,
                        uuid: "123446",
                        url: "/img/item2.png",
                    },
                ]}
                editable={{
                    onRowAdd: (newData) =>
                        new Promise((resolve, reject) => {
                            setTimeout(() => {
                                setData([...data, newData]);
                                resolve();
                            }, 1000);
                        }),
                    onRowUpdate: (newData, oldData) =>
                        new Promise((resolve, reject) => {
                            setTimeout(() => {
                                const dataUpdate = [...data];
                                const index = oldData.tableData.id;
                                dataUpdate[index] = newData;
                                setData(dataUpdate);

                                resolve();
                            }, 1000);
                        }),
                }}
                /*options={{
                    fixedColumns: {
                        left: 1,
                    },
                }}*/
                localization={{
                    header: {
                        actions: "操作",
                    },
                    body: {
                        emptyDataSourceMessage: "查無資料",
                    },
                    pagination: {
                        labelRowsSelect: "筆",
                    },
                    toolbar: {
                        searchTooltip: "搜尋",
                        searchPlaceholder: "搜尋",
                    },
                }}
            />
        </div>
    );
}

export default MemberTable;
