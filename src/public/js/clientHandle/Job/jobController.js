
$("#bestjob").ready( function(){
   $.ajax({
       url: "/job/get",
       type: "GET",
       contentType: "application/json;charset=utf-8",
       dataType: "json",
       success: function (result) {
           bindDataToTableJob(result.data, "#bestjob")
       },
       error: function (){
           console.log("Lỗi không thể load dữ liệu")
       }
   })
})
/////////////////////////////////////////
//utill function



/////////////////////////////////////////
//utill function
//delete function
function deteteJobById(id){
    $.ajax({
        url: `/job/delete?Id=${id}`,
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
function updateJob(Id,data){

    data.Id = Id;
    if(data.DeadLine != null){        
        data.DeadLine = convert(data.DeadLine);
    }
    
    console.log("vmsdklgjklfdjgfkldgj");
    console.log(data.DeadLine)
    $.ajax({
        url: `/job/put`,
        type: "PUT",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        data: JSON.stringify(data),
        success: function (result) {
            console.log(data);
            console.log("Cap nhat thanh cong")
            DevExpress.ui.notify("update thành công", "success", 200);
        },
        error: function (e){
            console.log(e);
            console.log("Cap Nhat that bai")
            console.log(convert(data.DeadLine));
            DevExpress.ui.notify(e, "error", 200);
        }
    })
}
//create function
function createJob(data){
    $.ajax({
        url: `/job/post`,
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

function bindDataToTableJob(data, tableid) {
    console.log(data)
    $(function() {
        $(`${tableid}`).dxDataGrid({
            dataSource: data,
            filterRow: { visible: true },
            searchPanel: { visible: true },
            groupPanel: { visible: true },
            columnChooser: { enabled: true },
            columnFixing: {
                enabled: true
            },
            onRowRemoving : function (e){
                deteteJobById(e.data.Id);
                DevExpress.ui.notify("Xóa thành công", "success", 200);
            },
            onRowUpdating: function(e) {
               console.log("t")
                console.log(e);
                updateJob(e.oldData.Id, e.newData);
                  
            },
            onRowInserting: function(e) {
                console.log(e);
                createJob(JSON.stringify(e.data))
            },
            editing: {
                allowAdding: true,
                allowUpdating: true,
                allowDeleting: true,
                mode: "popup",
                form: {
                    labelLocation: "top"
                }
            },
            columns: [
                { dataField: 'JobName'},
                { dataField: 'CompanyName'},
                { dataField: 'DeadLine', dataType: "date",displayFormat: "shortdate"},
                { dataField: 'Quantity'},
                { dataField: 'Salary'},
                { dataField: 'CompanyId'},
                { dataField: 'Exprence'},
                { dataField: 'Gender'},
                { dataField: 'AddressWork'},
                { dataField: 'LocalzoneWork'},
                { dataField: 'Description'},
                { dataField: 'Requirement'},
                { dataField: 'Benifit'},
                { dataField: 'Major'},
                { dataField: 'Skill'},
                { dataField: 'JobType'},
              
            ]
            
            
        });
    });



}
