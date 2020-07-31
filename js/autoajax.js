function loadOrg() {
          window.tbl.ajax.reload(null, false);
      }
    
      $(document).ready(function () {
          var tbl = $('#userTable').DataTable({
              "bProcessing": false,
              "serverSide": false,
              "ajax": {
                  url: 'server.php',
                  type: "GET", 
                  error: function () {  
                      $("#userTable").css("display", "none");
                  }
              },
              "columns": [
                  {
                      "data": null, "sortable": false,
                      render: function (data, type, row, meta) {
                          return meta.row + meta.settings._iDisplayStart + 1;
                      }
                  },
                  { "data": "id" },
                  { "data": "name" },
                  { "data": "email" },
                  { "data": "message" },
                  { "data": "date" },
              ],
          });
          window.tbl = tbl;
      });
      
      setInterval(function() {
        loadOrg();
        console.log(1);
      },3000);