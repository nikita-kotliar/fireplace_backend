import * as ordersService from '../services/ordersService.js';

export const getAllOrders = async (req, res, next) => {
  try {
    const orders = await ordersService.getAll();
    res.json(orders);
  } catch (error) {
    next(error);
  }
};

export const createOrder = async (req, res, next) => {
  try {
    const { bouquet, quantity, total, customer } = req.body;

    const order = await ordersService.create({
      bouquetId: bouquet.id,
      bouquetTitle: bouquet.title,
      bouquetPrice: bouquet.price,
      quantity,
      total,
      customerName: customer.name,
      customerPhone: customer.phone,
      customerAddress: customer.address,
      customerComment: customer.comment ?? '',
    });

    res.status(201).json(order);
  } catch (error) {
    next(error);
  }
};
