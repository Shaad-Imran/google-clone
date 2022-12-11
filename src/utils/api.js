import axios from "axios";

const BASE_URL = "https://www.googleapis.com/customsearch/v1";

const params = {
  key: "AIzaSyBk_fZAPP_4iUWf10srgqvWXhCav8xiz14",
  cx: "b0da6ef1b103248c9",
};

export const fetchDataFromApi = async (payload) => {
  const { data } = await axios.get(BASE_URL, {
    params: { ...params, ...payload },
  });

  return data;
};
