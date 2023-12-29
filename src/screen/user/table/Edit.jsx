import { useEffect } from "react";
import { useRef } from "react";
import { useParams } from "react-router-dom";
import {
  useSatuDataBarang,
  useUpdateDataBarang,
} from "../../../hook/useDataBarang";
import { useNavigate } from "react-router-dom";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import Ilustration from "../../../assets/img/(3).png";

const Edit = () => {
  const NamaRef = useRef();
  const HargaRef = useRef();
  const JumlahRef = useRef();
  const ExpireRef = useRef();
  const navigate = useNavigate();

  const endpoin = "/barang";
  const { id } = useParams();
  const { data, isLoading, isError, error } = useSatuDataBarang(endpoin, id);
  const { mutate: updateBarang } = useUpdateDataBarang();

  useEffect(() => {
    async function pasteData() {
      NamaRef.current.value = await data?.data.namaBarang;
      HargaRef.current.value = await data?.data.hargaBarang;
      JumlahRef.current.value = await data?.data.jumlahBarang;
      ExpireRef.current.value = await data?.data.kadalwarsa;
    }
    pasteData();
  }, [data?.data, id]);

  const handSubmit = (even) => {
    even.preventDefault();
    const dataUpdate = {
      namaBarang: NamaRef.current.value,
      hargaBarang: HargaRef.current.value,
      jumlahBarang: JumlahRef.current.value,
      kadalwarsa: ExpireRef.current.value,
    };
    // updateBarang = endpoin,id,dataUpdate
    const dataKiriman = {
      endpoin,
      id,
      patchData: dataUpdate,
    };
    updateBarang(dataKiriman);
    navigate("/user/table");
  };

  if (isLoading) return <h1>loading</h1>;
  if (isError) return <h1>{error.massage}</h1>;

  return (
    <div className="w-full grid lg:grid-cols-2 place-items-center">
      <div className="w-full h-screen  grid-center">
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

export default Edit;
