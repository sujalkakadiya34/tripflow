<?php
// 🔐 CORS FIX (IMPORTANT)
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Handle preflight request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

$data = json_decode(file_get_contents("php://input"), true);

// DB connection (LOCALHOST)
$conn = mysqli_connect("localhost", "root", "", "trip");

if (!$conn) {
    echo json_encode(["success" => false, "message" => "Database connection failed"]);
    exit;
}

$sql = "INSERT INTO trip (name, age, gender, email, phone, other, dt)
        VALUES (?,?,?,?,?,?,NOW())";

$stmt = mysqli_prepare($conn, $sql);

mysqli_stmt_bind_param(
    $stmt,
    "sissss",
    $data['name'],
    $data['age'],
    $data['gender'],
    $data['email'],
    $data['phone'],
    $data['other']
);

if (mysqli_stmt_execute($stmt)) {
    echo json_encode(["success" => true, "message" => "Form submitted successfully"]);
} else {
    echo json_encode(["success" => false, "message" => "Insert failed"]);
}

mysqli_close($conn);
