document.addEventListener('DOMContentLoaded', () => {
    const card = document.getElementById('birthdayCard');
    const btnSurprise = document.getElementById('btnSurprise');
    
    // Menghubungkan wadah yang ada di HTML
    const container = document.getElementById('magic-container');

    // Daftar emoji dan teks yang akan diterbangkan
    const targetItems = ['🎈', '🎉', '⚡', '✨', '👑', '🔥', 'Kiki'];

    // Event untuk membalik kartu
    card.addEventListener('click', (e) => {
        if (e.target !== btnSurprise) {
            card.classList.toggle('open');
        }
    });

    // Event tombol kejutan diklik
    btnSurprise.addEventListener('click', () => {
        if (container) {
            createFlyingEffects(60); // Terbangkan 60 elemen campuran
        } else {
            console.error("Wadah background tidak ditemukan di HTML!");
        }
        btnSurprise.textContent = "Enjoy the Day! 🤜🤛";
        btnSurprise.disabled = true;
    });

    function createFlyingEffects(num) {
        for (let i = 0; i < num; i++) {
            const item = document.createElement('div');
            
            // Memberikan class yang sesuai dengan selector CSS (.magic-particle)
            item.classList.add('magic-particle');
            
            // Ambil acak konten (emoji atau tulisan Kiki)
            const randomContent = targetItems[Math.floor(Math.random() * targetItems.length)];
            item.textContent = randomContent;
            
            // Atur posisi horizontal secara acak
            item.style.left = `${Math.random() * 100}vw`;
            
            // Penyesuaian ukuran font dinamis
            if (randomContent === 'Kiki') {
                item.style.fontSize = `${18 + Math.random() * 6}px`;
                item.style.fontWeight = 'bold';
            } else {
                item.style.fontSize = `${24 + Math.random() * 20}px`;
            }
            
            // Variasi delay dan durasi animasi agar tampak natural alami
            item.style.animationDelay = `${Math.random() * 2.5}s`;
            item.style.animationDuration = `${4 + Math.random() * 3}s`;
            
            container.appendChild(item);

            // Hapus elemen setelah selesai terbang agar memori browser tetap bersih
            item.addEventListener('animationend', () => {
                item.remove();
            });
        }
    }
});
