<?php
    include ('includes/config.php');
?>

<html>
    <head>
        <title>PHP Ajax</title>
       </head>
    <body>
        <div>
            <h2>php ajax assignment</h2>
        </div>
        <div>
            <table rules=all border=1 width=40%>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Message</th>
                    <th>Date</th>
                </tr>
                    <?php
                        $query="SELECT * FROM `users` order by id desc limit 0,5";
                        $data=mysqli_query($config,$query);
                        if(mysqli_num_rows($data) > 0) {
                        while($row=mysqli_fetch_assoc($data))
                        {
                    ?>
                <tr>
                    <td><?php echo $row['id']; ?></td>
                    <td><?php echo $row['name']; ?></td>
                    <td><?php echo $row['email']; ?></td>
                    <td><?php echo $row['message']; ?></td>
                    <td><?php echo $row['date']; ?></td>                
                </tr>
                    <?php } } ?>
            </table>
        </div>
    </body>
</html>

