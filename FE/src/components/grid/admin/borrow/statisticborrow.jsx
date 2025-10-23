import React from "react";
import {
  sampleDataHistory,
  sampleDataList,
  sampleDataRequest,
} from "./js/sampledataBorrow";
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
      label: "Statistik",
      data: [
        sampleDataRequest.length,
        sampleDataList.length,
        sampleDataHistory.filter((h) => h.status === "Selesai").length, // hanya yang selesai
      ],
      backgroundColor: [
        "#BAE6FD", // Request (biru)
        "#E9D5FF", // List (ungu)
        "#86efac", // History (hijau muda)
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
  maintainAspectRatio: false, // Agar bisa custom height
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
      style={{ height: 475 }}
    >
      <Bar data={data} options={options} height={450} />
    </div>
  );
}
