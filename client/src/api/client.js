import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:5000",
  timeout: 2000,
});

export const getByID = async (type, id) => {
  try {
    const response = (await client.get(`/${type}/${id}`)).data;
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const getByCategory = async (type, category, page = 1) => {
  try {
    const response = await client.get(`/${type}/category/${category}`, {
      params: { page: page },
    });
    const { results, total_pages } = response.data.shows;
    return results;
  } catch (error) {
    console.log(error);
  }
};

export const getFeatured = async () => {
  try {
    const response = await client.get("/featured");
    if (response.data.success) {
      return response.data.featured
    } else {
      return null
    }
  } catch (error) {
    throw new Error("Cant get Featured Movies");
  }
};
