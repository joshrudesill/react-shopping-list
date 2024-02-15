-- Don't forget to add your create table SQL 
-- It is also helpful to include some test data

CREATE TABLE groceries (
    id SERIAL PRIMARY KEY,
    item_name VARCHAR(80) NOT NULL,
    quantity DECIMAL NOT NULL,
    unit VARCHAR(20),
    purchased BOOLEAN DEFAULT FALSE
);

SELECT * FROM groceries;