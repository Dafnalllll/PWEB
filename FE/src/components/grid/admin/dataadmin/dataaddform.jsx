import React, { useState } from "react";
import { AddIcon } from "../../../icon/sidebaricon";
export default function DataAddForm() {
  const [form, setForm] = useState({
    kode: "",
    nama: "",
    kategori: "",
    jumlah: "",
    kondisi: "",
    foto: null,
  });
  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "foto" && files && files[0]) {
      setForm((prev) => ({ ...prev, foto: files[0] }));
      setPreview(URL.createObjectURL(files[0]));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Proses submit data di sini
    alert("Data berhasil disimpan!");
    console.log(form);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="min-h-screen w-full p-16 bg-white rounded-2xl shadow-xl border border-slate-200 flex flex-col justify-center"
      style={{ maxWidth: "100vw" }}
    >
      <h2 className="text-4xl font-extrabold mb-12 text-black flex items-center gap-4 justify-center">
        <AddIcon size={36} />
        Tambah Data Barang
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-5xl mx-auto">
        <div>
          <label className="block mb-3 font-semibold text-slate-700 text-lg">
            Kode Barang
          </label>
          <input
            type="text"
            name="kode"
            value={form.kode}
            onChange={handleChange}
            className="w-full border border-slate-300 px-6 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-300 text-lg"
            placeholder="Contoh: BRG001"
            required
          />
        </div>
        <div>
          <label className="block mb-3 font-semibold text-slate-700 text-lg">
            Nama Barang
          </label>
          <input
            type="text"
            name="nama"
            value={form.nama}
            onChange={handleChange}
            className="w-full border border-slate-300 px-6 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-300 text-lg"
            placeholder="Contoh: Laptop Lenovo"
            required
          />
        </div>
        <div>
          <label className="block mb-3 font-semibold text-slate-700 text-lg">
            Kategori
          </label>
          <select
            name="kategori"
            value={form.kategori}
            onChange={handleChange}
            className="w-full border border-slate-300 px-6 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-300 text-lg"
            required
          >
            <option value="">Pilih Kategori</option>
            <option value="Elektronik">Elektronik</option>
            <option value="Furniture">Furniture</option>
            <option value="Lainnya">Lainnya</option>
          </select>
        </div>
        <div>
          <label className="block mb-3 font-semibold text-slate-700 text-lg">
            Jumlah
          </label>
          <input
            type="number"
            name="jumlah"
            value={form.jumlah}
            onChange={handleChange}
            className="w-full border border-slate-300 px-6 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-300 text-lg"
            min={1}
            placeholder="Contoh: 5"
            required
          />
        </div>
        <div>
          <label className="block mb-3 font-semibold text-slate-700 text-lg">
            Kondisi
          </label>
          <select
            name="kondisi"
            value={form.kondisi}
            onChange={handleChange}
            className="w-full border border-slate-300 px-6 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-300 text-lg"
            required
          >
            <option value="">Pilih Kondisi</option>
            <option value="Baik">Baik</option>
            <option value="Cukup">Cukup</option>
            <option value="Rusak">Rusak</option>
          </select>
        </div>
        <div>
          <label className="block mb-3 font-semibold text-slate-700 text-lg">
            Foto Barang
          </label>
          <input
            type="file"
            name="foto"
            accept="image/*"
            onChange={handleChange}
            className="w-full border border-slate-300 px-6 py-4 rounded-xl bg-white text-lg"
          />
          {preview && (
            <img
              src={preview}
              alt="Preview"
              className="mt-4 w-40 h-32 object-cover rounded-xl shadow border"
            />
          )}
        </div>
      </div>
      <div className="mt-12 flex justify-center">
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 transition text-white px-16 py-4 rounded-2xl font-bold shadow text-xl"
        >
          Simpan
        </button>
      </div>
    </form>
  );
}
