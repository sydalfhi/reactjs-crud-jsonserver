import { useRef } from "react";
import { useAddDataBarang } from "../../../hook/useDataBarang";
import { useNavigate } from "react-router-dom";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import Ilustration from "../../../assets/img/(10).png";

const Create = () => {
  const NamaRef = useRef();
  const HargaRef = useRef();
  const JumlahRef = useRef();
  const ExpireRef = useRef();
  const navigate = useNavigate();
  const { mutate: tambahDataBarang } = useAddDataBarang();

  const handSubmit = (even) => {
    even.preventDefault();

    //validasi

    const endpoin = "/barang";
    const newData = {
      namaBarang: NamaRef.current.value,
      hargaBarang: HargaRef.current.value,
      jumlahBarang: JumlahRef.current.value,
      kadalwarsa: ExpireRef.current.value,
    };

    const dataKiriman = { endpoin, newData };
    tambahDataBarang(dataKiriman);
    return navigate("/user/table");
  };

  return (
    <div className="w-full grid lg:grid-cols-2 place-items-center">
      <div className="w-full h-screen  grid place-items-center">
        <form method="post w-full " onSubmit={handSubmit}>
          <table className="w-full">
            <tr>
              <td className="p-2">Nama Barang</td>
              <td>
                <Input
                  styled={"default-input"}
                  reference={NamaRef}
                  type={"text"}
                  placeholder={"masukan nama barang"}
                />
              </td>
            </tr>

            <tr>
              <td className="p-2">Harga Barang</td>
              <td>
                <Input
                  styled={"default-input"}
                  reference={HargaRef}
                  type={"number"}
                  placeholder={"masukan harga barang"}
                />
              </td>
            </tr>

            <tr>
              <td className="p-2">jumlah Barang</td>
              <td>
                <Input
                  styled={"default-input"}
                  reference={JumlahRef}
                  type={"number"}
                  placeholder={"masukan jumlah barang"}
                />
              </td>
            </tr>

            <tr>
              <td className="p-2">expire</td>
              <td>
                <Input
                  styled={"default-input w-[220px]"}
                  reference={ExpireRef}
                  type={"date"}
                  placeholder={"masukan jumlah barang"}
                />
              </td>
            </tr>
          </table>
          <Button styled="button-submit" type="submit" text="Kirim" />
        </form>
      </div>
      <div className="w-full  h-screen grid place-items-center">
        <div className="relative w-full  lg:mt-0">
          <img className="lg:mx-auto max-w-lg" src={Ilustration} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Create;
