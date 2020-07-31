<?php
    include ('includes/config.php');
?>
 
<?php
    $query="SELECT * FROM `users` order by id desc limit 0,5";
    $data=mysqli_query($config,$query);
    $json_array = array();
    while($row=mysqli_fetch_assoc($data))
    {
        $json_array[] = $row;
    }
        echo json_encode(['data'=>$json_array]);
?>
              

