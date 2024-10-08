<?php
header('Content-Type: application/json');

// Mendapatkan pilihan dari pemain
$userChoice = $_POST['choice'] ?? '';

// Pilihan komputer
$choices = ['batu', 'gunting', 'kertas'];
$computerChoice = $choices[array_rand($choices)];

// Menentukan hasil
function determineOutcome($user, $computer) {
    if ($user === $computer) return 'Seri';
    if (
        ($user === 'batu' && $computer === 'gunting') ||
        ($user === 'gunting' && $computer === 'kertas') ||
        ($user === 'kertas' && $computer === 'batu')
    ) {
        return 'Anda Menang!';
    }
    return 'Komputer Menang!';
}

$outcome = determineOutcome($userChoice, $computerChoice);

// Mengirimkan hasil sebagai JSON
echo json_encode([
    'userChoice' => $userChoice,
    'computerChoice' => $computerChoice,
    'outcome' => $outcome,
]);
