// app/page.tsx
export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        Selamat Datang, Admin 👋
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card title="Jumlah Pengguna" value="128" />
        <Card title="Transaksi Hari Ini" value="Rp12.500.000" />
        <Card title="Laporan Masuk" value="23" />
      </div>
    </main>
  );
}

// Komponen kecil: Card
type CardProps = {
  title: string;
  value: string;
};

function Card({ title, value }: CardProps) {
  return (
    <div className="bg-white rounded-xl shadow p-4">
      <h2 className="text-sm text-gray-500">{title}</h2>
      <p className="text-2xl font-semibold text-gray-900">{value}</p>
    </div>
  );
}
