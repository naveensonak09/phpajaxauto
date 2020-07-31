$(document).ready(function(){
    $.ajax({
        url: 'server.php',
        type: 'get',
        dataType: 'JSON',
        success: function(response){
            var len = response.length;
            for(var i=0; i<len; i++){
                var id = response[i].id;
                var name = response[i].name;
                var email = response[i].email;
                var message = response[i].message;
                var date = response[i].date;

                var tr_str = "<tr>" +
                    "<td align='center'>" + (i+1) + "</td>" +
                    "<td align='center'>" + name + "</td>" +
                    "<td align='center'>" + email + "</td>" +
                    "<td align='center'>" + message + "</td>" +
                    "<td align='center'>" + date + "</td>" +
                    "</tr>";
                $("#userTable tbody").append(tr_str);
                
                setInterval(function(){
                    
                    $("#userTable tbody").load(tr_str);
                   
                    console.log(1);
                },6000);
               
            }

           

        }
    });
   
});

