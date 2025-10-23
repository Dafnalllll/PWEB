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
      borderRadius: 12,
      borderSkipped: false,
      barPercentage: 0.6,
      categoryPercentage: 0.5,
    },
  ],
};

const options = {
  plugins: {
    legend: { display: false },
    title: {
      display: true,
      text: "Grafik Statistik",
      align: "start",
      font: { size: 20, weight: "bold" },
      color: "#22223b",
      padding: { bottom: 24 },
    },
  },
  maintainAspectRatio: false,
  animation: {
    duration: 1200,
    easing: "easeOutQuart",
  },
  scales: {
    x: {
      grid: { display: false },
      ticks: { font: { size: 16 } },
    },
    y: {
      beginAtZero: true,
      ticks: { stepSize: 1, font: { size: 16 } },
      grid: { color: "#f3f4f6" },
    },
  },
};

export default function StatisticChart() {
  return (
    <div
      className="p-6 bg-white rounded-xl shadow max-w-6xl mx-auto"
      style={{ height: 535 }}
    >
      <Bar data={data} options={options} height={450} />
    </div>
  );
}
