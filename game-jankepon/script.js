function play(userChoice) {
    fetch('game.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'choice=' + encodeURIComponent(userChoice)
    })
    .then(response => response.json())
    .then(data => {
        // Tampilkan hasil
        document.getElementById('result').classList.remove('hidden');
        
        // Update gambar dan teks untuk pilihan pengguna
        document.getElementById('user-icon').src = 'images/' + data.userChoice + '.png';
        document.getElementById('user-text').textContent = 'Pilihan Anda: ' + data.userChoice.charAt(0).toUpperCase() + data.userChoice.slice(1);
        
        // Update gambar dan teks untuk pilihan komputer
        document.getElementById('computer-icon').src = 'images/' + data.computerChoice + '.png';
        document.getElementById('computer-text').textContent = 'Pilihan Komputer: ' + data.computerChoice.charAt(0).toUpperCase() + data.computerChoice.slice(1);
        
        // Update hasil permainan
        document.getElementById('outcome-text').textContent = data.outcome;
    })
    .catch(error => console.error('Error:', error));
}
