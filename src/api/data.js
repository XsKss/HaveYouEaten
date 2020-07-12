import axios from "@/api/axios";

export const getPosiDate = () => {
  return axios.request({
    url: "posi",
    method: "get",
  });
};

export const getIndexEntryDate = () => {
  return axios.request({
    url: "index_entry",
    method: "get",
  });
};

export const getRestaurantsDate = () => {
  return axios.request({
    url: "restaurants",
    method: "get",
  });
};
