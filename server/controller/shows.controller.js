import { single } from "../services/single.js";
import { byCategory } from "../services/byCategory.js";
import { featured } from "../services/featured.js";

export const singleShow = async (req, res) => {
  const { type, id } = req.params;
  const data = await single(type, id);
  if (data.success) {
    res.status(200).json(data);
  } else {
    res.status(400).json({ message: "failed to get the show" });
  }
};

export const getByCategory = async (req, res) => {
  const { type, category } = req.params;
  const { page } = req.query;
  const data = await byCategory(type, category, page);
  if (data.success) {
    res.status(200).json(data);
  } else {
    res.status(400).json({ message: "cannot get this movie category" });
  }
};

export const getFeatured = async (req,res) => {
  const response = await featured();
  if (response.success) {
    res.status(200).json(response);
  } else {
    res.status(400).json({ message: "cannot get this movie category" });
  }
};
