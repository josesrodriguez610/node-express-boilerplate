import * as example2Service from "./example2.service.js";

export const getExample2 = async (req, res, next) => {
  try {
    const items = await example2Service.fetchAll();
    res.json(items);
  } catch (err) {
    next(err);
  }
};

export const createExample2 = async (req, res, next) => {
  try {
    const newItem = await example2Service.create(req.body);
    res.status(201).json(newItem);
  } catch (err) {
    next(err);
  }
};
