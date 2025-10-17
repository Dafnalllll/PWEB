import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Registrasi Chart.js agar chart bisa dirender
Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Data dari masing-masing file
const items = [
  { id: 1, name: "Laptop", category: "Elektronik" },
  { id: 2, name: "Monitor", category: "Elektronik" },
  { id: 3, name: "Meja", category: "Furniture" },
  // Tambahkan data barang lain di sini
];
const users = [
  { id: 1, name: "Admin", role: "Administrator" },
  { id: 2, name: "Dafa", role: "User" },
  { id: 3, name: "Siti", role: "User" },
  // Tambahkan data user lain di sini
];
const borrows = [
  { id: 1, name: "Laptop", user: "Dafa", date: "2025-10-15" },
  { id: 2, name: "Monitor", user: "Siti", date: "2025-10-16" },
  // Tambahkan data borrow lain di sini
];
const returns = [
  { id: 1, name: "Laptop", user: "Dafa", date: "2025-10-15" },
  { id: 2, name: "Monitor", user: "Siti", date: "2025-10-16" },
  // Tambahkan data return lain di sini
];

// Chart.js data
const data = {
  labels: ["Barang", "User", "Borrow", "Return"],
  datasets: [
    {
      label: "Statistik",
      data: [items.length, users.length, borrows.length, returns.length],
      backgroundColor: [
        "#FDE68A", // Barang (kuning)
        "#BBF7D0", // User (hijau)
        "#E9D5FF", // Borrow (ungu)
        "#BAE6FD", // Return (biru)
      ],
      borderRadius: 8,
    },
  ],
};

const options = {
  plugins: {
    legend: { display: false },
  },
  scales: {
    y: { beginAtZero: true, ticks: { stepSize: 1 } },
  },
};

export default function StatisticChart() {
  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="text-lg font-semibold mb-4">Grafik Statistik</h2>
      <Bar data={data} options={options} />
    </div>
  );
}
