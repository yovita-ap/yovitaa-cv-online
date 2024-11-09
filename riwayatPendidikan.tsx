interface ItemRiwayat {
    jenjang: string;
    sekolah: string;
    tahun: string;
  }
  
  function ItemRiwayat({ jenjang, sekolah, tahun }: ItemRiwayat) {
    return (
      <div className="border-2 m-2 rounded-lg bg-yellow-200 text-blue-600 p-3">
        <div>{jenjang}</div>
        <div>{sekolah}</div>
        <div>{tahun}</div>
      </div>
    );
  }
  
  export default function RiwayatPendidikan() {
    return (
      <div className="container">
        <h2 className="mt-40 text-2xl text-blue-900 font-bold">Riwayat Pendidikan</h2>
        
        <ItemRiwayat jenjang="SD" sekolah="SDN Jelegong 1" tahun="2010-2016" />
        <ItemRiwayat jenjang="SMP" sekolah="SMPN 1 Rancaekek" tahun="2016-2019" />
        <ItemRiwayat jenjang="SMA" sekolah="MAN 1 Tasikmalaya" tahun="2019-2022" />
        <ItemRiwayat jenjang="Diploma" sekolah="Al Ma'soem" tahun="2022-2025" />
        <ItemRiwayat jenjang="Sarjana" sekolah="UGM" tahun="2025-2027" />
        <ItemRiwayat jenjang="Magister" sekolah="UNPAD" tahun="2027-2029" />
      </div>
    );
  }
  