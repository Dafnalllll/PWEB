import React from "react";
import {
  sampleDataHistory,
  sampleDataRequest,
  sampleDataList,
} from "./js/sampledataReturn";
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

// Data untuk grafik
const data = {
  labels: ["Request", "List", "History"],
  datasets: [
    {
      label: "Statistik Pengembalian",
      data: [
        sampleDataRequest.length,
        sampleDataList.length,
        sampleDataHistory.length,
      ],
      backgroundColor: [
        "#BAE6FD", // Request (biru)
        "#FDE68A", // List (kuning)
        "#86efac", // History (hijau)
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
      text: "Grafik Statistik Pengembalian",
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

export default function StatisticReturn() {
  return (
    <div
      className="p-8 bg-white rounded-xl shadow max-w-6xl mx-auto"
      style={{ height: 450 }}
    >
      <Bar data={data} options={options} height={550} />
    </div>
  );
}
