# 🎂 Interactive Glassmorphism Birthday Card ✨

Sebuah proyek berbasis web sederhana yang interaktif untuk merayakan hari ulang tahun berupa kartu ucapan digital berkonsep **Glassmorphism (Efek Kaca)** dengan animasi kejutan elemen terbang (*flying particles*) di latar belakang.

Proyek ini dibangun menggunakan **HTML5, CSS3 murni, dan JavaScript (Vanilla JS)** tanpa menggunakan *library* atau *framework* pihak ketiga, sehingga sangat ringan dan optimal untuk dipelajari.

---

## 🚀 Fitur Utama

*   **Interactive 3D Card Flip:** Efek transisi membalikkan kartu (Depan ke Dalam) secara mulus memanfaatkan properti CSS 3D Transform (`perspective` & `rotateY`).
*   **Modern Glassmorphism UI:** Desain visual estetis bergaya efek kaca transparan menggunakan teknik `backdrop-filter: blur()`.
*   **Dynamic Particles Generator:** JavaScript secara dinamis memproduksi partikel (emoji & teks) acak yang melayang ke atas setelah tombol kejutan diklik.
*   **Memory Management Optimization:** Setiap elemen animasi terbang yang telah selesai mencapai batas atas layar akan otomatis dihapus dari DOM (`animationend` event listener) untuk mencegah kebocoran memori pada browser.

---

## 📂 Struktur Folder Proyek

Proyek ini menggunakan pemisahan file (*separation of concerns*) yang bersih dan terstruktur:

```text
├── index.html       # Struktur markup kartu dan kontainer efek
├── style.css        # Desain layout, variabel tema, gaya glassmorphism, dan keyframes animasi
└── script.js        # Logika interaksi membalik kartu dan generator partikel terbang
