import fotosaya from "../DSC_1690_090843.jpg";

function Profile() {
    return (
      <img
        src={fotosaya.src}
        alt="Foto Desi"
        className="fotoku"
      />
    );
  }

export default function Hero(){
    return(
        <div className="container mx-auto p-2 text-center">
      <h1 className="text-gray-300 font-bold">CV Online</h1>
      <h2 className="text-3x1">Yovita Arika Putri</h2>

      <Profile />
      <p>
        Saya adalah seorang mahasiswa prodi Komputerisasi Akuntansi. Saya bercita-cita ingin menjadi seorang akuntan hebat.
      </p>
      </div>
    )
}