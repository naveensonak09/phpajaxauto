$(document).ready(function()
{
    $.ajaxSetup(
    {
        cache: false,
        beforeSend: function() {
            $('#content').hide();
            $('#loading').show();
        },
        complete: function() {
            $('#loading').hide();
            $('#content').show();
        },
        success: function() {
            $('#loading').hide();
            $('#content').show();
        }
    });
    var $container = $("#content");
    $container.load("index.php");
    var refreshId = setInterval(function()
    {
        $container.load('index.php');
    }, 4000);
});
