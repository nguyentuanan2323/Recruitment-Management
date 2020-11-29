
$("#tablecompany").ready( function(){
    $.ajax({
        url: "/company/get",
        type: "GET",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (result) {
            bindDataToTableCompany(result.data, "#tablecompany")
        },
        error: function (e){
            console.log(e);
            console.log("Lỗi không thể load dữ liệu")
        }
    })
})

/////////////////////////////////////////
//utill function
//delete function
function deteteCompanyById(id){
    $.ajax({
        url: `/company/delete?Id=${id}`,
        type: "DELETE",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (result) {
            console.log("Xoa thanh cong")
        },
        error: function (e){
            console.log(e);
            console.log("xoa that bai")
        }
    })
}
//update function
function updateCompany(Id,data){
    data.Id = Id;
    $.ajax({
        url: `/company/put`,
        type: "PUT",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        data: JSON.stringify(data),
        success: function (result) {
            console.log("Xoa thanh cong")
            DevExpress.ui.notify("update thành công", "success", 200);
        },
        error: function (e){
            console.log(e);
            console.log("xoa that bai")
            DevExpress.ui.notify(e, "error", 200);
        }
    })
}

function createCompany(data){
    $.ajax({
        url: `/company/post`,
        type: "POST",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        data: data,
        success: function (result) {
            console.log("Thêm Thành công")
            DevExpress.ui.notify("Thêm mới thành công", "success", 200);
        },
        error: function (e){
            console.log(e);
            console.log("Thêm thất bại")
            DevExpress.ui.notify(e, "error", 200);
        }
    })
}

//bind data to table

function bindDataToTableCompany(data, tableid) {
    $(function() {
        $(`${tableid}`).dxDataGrid({
            dataSource: data,
            keyExpr: "Id",
            filterRow: { visible: true },
            searchPanel: { visible: true },
            groupPanel: { visible: true },
            columnChooser: { enabled: true },
            columnFixing: {
                enabled: true
            },
            onRowRemoving : function (e){
                deteteCompanyById(e.data.Id);
                DevExpress.ui.notify("Xóa thành công", "success", 200);
            },
            onRowUpdating: function(e) {
               
                console.log(e);
                updateCompany(e.oldData.Id, e.newData);
                  
            },
            onRowInserting: function(e) {
                console.log(e);
                createCompany(JSON.stringify(e.data))
            },
            editing: {
                allowAdding: true,
                allowUpdating: true,
                allowDeleting: true,
                mode: "popup",
                form: {
                    labelLocation: "top"
                },
                popup: {
                    showTitle: true,
                    title: "Chỉnh sửa company"
                },
            }

        });
    });



}

