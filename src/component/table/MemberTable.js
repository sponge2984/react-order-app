import React from "react";
import MaterialTable from "material-table";

function MemberTable() {
    const [data, setData] = React.useState([]);
    return (
        <div style={{ maxWidth: "100%" }}>
            <MaterialTable
                title="員工基本資料表"
                columns={[
                    { title: "姓名", field: "name" },
                    { title: "員工編號", field: "uid" },

                    {
                        title: "部門",
                        field: "department",
                    },
                    {
                        title: "職稱",
                        field: "role",
                    },
                ]}
                data={[
                    {
                        name: "Josh",
                        uid: 109101,
                        department: "Baran",
                        role: "Baran",
                    },
                    {
                        name: "Tommy",
                        uid: 109102,
                        department: "Baran",
                        role: "Baran",
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
