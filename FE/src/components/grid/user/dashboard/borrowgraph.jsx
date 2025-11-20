import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Registrasi ChartJS untuk grafik garis
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "Mei",
    "Jun",
    "Jul",
    "Agu",
    "Sep",
    "Okt",
    "Nov",
    "Des",
  ],
  datasets: [
    {
      label: "Barang Dipinjam",
      data: [10, 15, 7, 12, 9, 11, 14, 13, 8, 10, 6, 12],
      borderColor: "rgba(34,197,94,1)",
      backgroundColor: "rgba(34,197,94,0.2)",
      tension: 0.4,
      pointBackgroundColor: "rgba(34,197,94,1)",
      pointBorderColor: "#fff",
      pointRadius: 4,
      fill: true,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true,
      position: "top",
      labels: {
        color: "#0f172a",
        font: { size: 13, weight: "bold" },
      },
    },
    title: {
      display: true,
      text: "Grafik Barang Dipinjam per Bulan",
      color: "#0f172a",
      font: { size: 16, weight: "bold" },
    },
  },
  scales: {
    x: {
      grid: { display: false },
      ticks: { color: "#334155", font: { size: 12 } },
    },
    y: {
      beginAtZero: true,
      grid: { color: "#e2e8f0" },
      ticks: { color: "#334155", font: { size: 12 } },
    },
  },
};

export default function BorrowGraph() {
  return (
    <div
      className="bg-white/80 backdrop-blur-lg rounded-xl shadow p-4 w-full cursor-pointer"
      style={{ height: 300, minWidth: 0 }}
    >
      <Line data={data} options={options} />
    </div>
  );
}
