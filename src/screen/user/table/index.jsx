import EditIcon from "../../../assets/img/edit.svg";
import PrevIcon from "../../../assets/img/prev.svg";
import DeleteIcon from "../../../assets/img/delete.svg";
import { Link } from "react-router-dom";
import Sidebar from "../../../layout/back-end/Sidebar";
import Isloading from "./utils/Isloading";
import {
  useDataBarang,
  useDeleteDataBarang,
} from "../../../hook/useDataBarang";
import { useState } from "react";

function UserTabel() {
  const [pageNumber, setPageNumber] = useState(1);
  const endpoin = "/barang";
  const { data, isLoading, isError, error, refetch } = useDataBarang(
    endpoin,
    pageNumber
  );
  const { mutate: hapusData } = useDeleteDataBarang();

  const handlePiginateClick = (type) => {
    if (type == "plus") {
      setPageNumber(pageNumber + 1);
    } else if (type == "min") {
      setPageNumber(pageNumber - 1);
    } else {
      throw new Error();
    }
  };

  if (isLoading) return <Isloading />;
  if (isError) return <h1>{error.massage}</h1>;

  function handleDelete(param) {
    const kirimanData = { endpoin, id: param };
    hapusData(kirimanData);
    refetch();
  }
  return (
    <section className="grid lg:grid-cols-8">
      <div className="hidden lg:block lg:col-span-2  w-64">
        <Sidebar />
      </div>
      <div className="container px-4 justify-self-center mx-auto w-full flex justify-center  col-span-5">
        <div className="pt-10 w-full">
          <h2 className="text-lg font-medium text-gray-800 dark:text-white">
            Data Barang
          </h2>
          <div className="flex justify-between items-center">
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-300">
              Semua data barang masuk
            </p>
            <Link
              to={"/user/table/create"}
              className="w-1/2 px-5 py-2 text-sm   tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg sm:w-auto gap-x-2 hover:bg-blue-600"
            >
              Tambah Data
            </Link>
          </div>
          <div className="flex flex-col mt-6">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden border border-gray-200  md:rounded-lg">
                  <table className="min-w-full  divide-y divide-gray-200 ">
                    <thead className="bg-gray-50 ">
                      <tr className="text-center ">
                        <th scope="col" className="table-header">
                          No
                        </th>
                        <th scope="col" className="table-header">
                          Nama Barang
                        </th>
                        <th scope="col" className="table-header">
                          Harga Barang
                        </th>
                        <th scope="col" className="table-header">
                          Jumlah Barang
                        </th>
                        <th scope="col" className="table-header">
                          expire
                        </th>
                        <th scope="col" className="table-header">
                          aksi
                        </th>
                        <th scope="col" className="relative py-3.5 px-4">
                          <span className="sr-only">Edit</span>
                        </th>
                      </tr>
                    </thead>
                    {/* tidak loading dan looping data */}
                    {isLoading || (
                      <tbody className="bg-white divide-y divide-gray-200">
                        {data?.data.map((item) => (
                          <tr className=" capitalize text-center" key={item.id}>
                            <td className="py-2" scope="col">
                              {item.id}
                            </td>
                            <td className="py-2" scope="col">
                              {item.namaBarang ? item.namaBarang : "-"}
                            </td>
                            <td className="py-2" scope="col">
                              {item.hargaBarang ? item.hargaBarang : "-"}
                            </td>
                            <td className="py-2" scope="col">
                              {item.jumlahBarang ? item.jumlahBarang : "-"}
                            </td>
                            <td className="py-2" scope="col">
                              {item.kadalwarsa ? item.kadalwarsa : "-"}
                            </td>
                            <td className="py-2" scope="col">
                              <div className="flex space-x-2 justify-center">
                                <Link to={`/user/table/edit/${item.id}`}>
                                  <img
                                    src={EditIcon}
                                    alt="edit"
                                    className="w-[20px] h-auto"
                                  />
                                </Link>
                                <button onClick={() => handleDelete(item.id)}>
                                  <img
                                    src={DeleteIcon}
                                    alt="delete"
                                    className="w-[20px] h-auto"
                                  />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    )}

                    {/* saat loading */}
                    {isLoading && (
                      <tbody className="bg-white dark:divide-gray-700">
                        <tr>
                          <td colSpan={6} className="text-center">
                            Loading Data
                          </td>
                        </tr>
                      </tbody>
                    )}

                    {/* data tidak ditemukan */}
                    {data?.data.length == 0 && (
                      <tbody className="bg-white dark:divide-gray-700">
                        <tr>
                          <td colSpan={6} className="text-center">
                            Belum Ada Data Barang
                          </td>
                        </tr>
                      </tbody>
                    )}
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between mt-6">
            <button
              className="button__prev__table  disabled:cursor-not-allowed"
              onClick={() => handlePiginateClick("min")}
              disabled={pageNumber === 1}
            >
              <img src={PrevIcon} alt="prev" className="w-5" />
              <span>previous</span>
            </button>
            <div className="items-center hidden md:flex gap-x-3">
              <a
                href="#"
                className="px-2 py-1 text-sm text-blue-500 rounded-md dark:bg-gray-800 bg-blue-100/60"
              >
                1
              </a>
              <a
                href="#"
                className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
              >
                2
              </a>
              <a
                href="#"
                className="px-2 py-1 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
              >
                3
              </a>
            </div>
            <button
              onClick={() => handlePiginateClick("plus")}
              className="button__prev__table"
            >
              <span>Next</span>
              <img src={PrevIcon} alt="prev" className="w-5 rotate-180" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UserTabel;
