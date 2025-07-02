<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json");

    include 'config.php';

    $sql = "SELECT * FROM Exercises";
    $stmt = $conn->prepare($sql);
    $stmt->execute();
    $exercises = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($exercises);
?>
