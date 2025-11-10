import * as example1Service from "./example1.service.js";

export const getExample1 = async (req, res, next) => {
  try {
    // 💥 Intentionally cause an error
    throw new Error("Intentional test error from getExample1");

    const data = await example1Service.fetchAll();
    res.json(data);
  } catch (err) {
    next(err); // 👈 sends it to errorHandler
  }
};

export const createExample1 = async (req, res, next) => {
  try {
    const newItem = await example1Service.create(req.body);
    res.status(201).json(newItem);
  } catch (err) {
    next(err);
  }
};
