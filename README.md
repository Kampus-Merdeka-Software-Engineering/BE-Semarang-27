# 🧠 BE-Semarang-27 – Backend API

Repository ini merupakan hasil pengembangan backend untuk program **Kampus Merdeka - Software Engineering** batch 27 dari Semarang. Proyek ini dibangun menggunakan **Node.js**, **Express.js**, dan **MySQL** sebagai basis data utama.

## 🚀 Teknologi yang Digunakan

- **Node.js**
- **Express.js**
- **MySQL**
- **Sequelize ORM** (jika digunakan)
- **Postman** (untuk pengujian API)
- **Dotenv** (untuk konfigurasi environment)

## 📁 Struktur Direktori

├── controllers/ # Berisi logic untuk masing-masing endpoint
├── models/ # Berisi definisi model database
├── routes/ # Berisi definisi endpoint API
├── src/config/ # Konfigurasi koneksi database
├── index.js # Entry point server
├── package.json # Konfigurasi package npm
├── .env # File konfigurasi environment (tidak di-push ke GitHub)
└── README.md # Dokumentasi proyek ini

## 🗃️ ERD (Entity Relationship Diagram)

ERD proyek ini dapat dilihat pada file berikut:

📷 [`erd-cp27.jpg`](./erd-cp27.jpg)

## 📦 Instalasi & Setup

### 1. Clone repositori

```bash
git clone https://github.com/Kampus-Merdeka-Software-Engineering/BE-Semarang-27.git
cd BE-Semarang-27
```

### 2. Install dependency

```bash
npm install
```

### 3. Buat file .env

Buat file .env di root project dan isi dengan konfigurasi database, contoh:

```ini
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=nama_database
DB_PORT=3306
PORT=5000
```

### 4. Jalankan server

```bash
npm start
Server akan berjalan di: http://localhost:5000
```

🧪 Pengujian API
Gunakan Postman atau API testing tools lainnya untuk mencoba endpoint. Pastikan server sudah dijalankan sebelum testing.

## 📝 Lisensi

Project ini hanya digunakan untuk keperluan pembelajaran dan pengembangan. Tidak untuk tujuan komersial.

[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/yZWC7OmO)
