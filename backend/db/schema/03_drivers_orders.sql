DROP TABLE IF EXISTS drivers_orders CASCADE;
CREATE TABLE drivers_orders(
  start_time DATE,
  end_time DATE,
  driver_id INTEGER REFERENCES drivers(id) ON DELETE CASCADE,
  order_id INTEGER REFERENCES orders(id) ON DELETE CASCADE
);