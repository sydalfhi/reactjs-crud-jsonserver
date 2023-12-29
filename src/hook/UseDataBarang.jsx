import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  getAllData,
  getOneData,
  createData,
  deleteData,
  updateData,
} from "../service/api.service";

//? get all barang
export const useDataBarang = (endpoinUrl, pageNumber) => {
  endpoinUrl = endpoinUrl + `?_limit=2&_page=${pageNumber}`;
  return useQuery(["barang", endpoinUrl], () => getAllData(endpoinUrl), {
    keepPreviousData: true,
  });
};

// ? get satu barang
export const useSatuDataBarang = (endpoinUrl, id) => {
  return useQuery(["barang", id], () => getOneData(endpoinUrl, id));
};

// ?create barang
export const useAddDataBarang = () => {
  function tambahBarang({ endpoin, newData }) {
    return createData(endpoin, newData);
  }
  const queryClient = useQueryClient();

  return useMutation(tambahBarang, {
    onSuccess: (data) =>
      queryClient.setQueriesData("barang", (oldQueryData) => {
        return {
          ...oldQueryData,
          data: [...oldQueryData.data, data.data],
        };
      }),
  });
};

//todo update barang
export const useUpdateDataBarang = () => {
  function updateBarang({ endpoin, id, patchData }) {
    return updateData(endpoin, id, patchData);
  }
  const queryClient = useQueryClient();
  return useMutation(updateBarang, {
    onSuccess: () => {
      queryClient.invalidateQueries("barang");
    },
  });
};

//! delete barang
export const useDeleteDataBarang = () => {
  function deleteBarang({ endpoin, id }) {
    return deleteData(endpoin, id);
  }

  const queryClient = useQueryClient();
  return useMutation(deleteBarang, {
    onSuccess: () => {
      queryClient.invalidateQueries("barang");
    },
  });
};
