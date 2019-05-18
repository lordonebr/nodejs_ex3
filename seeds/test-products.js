
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('products').del()
    .then(function () {
      // Inserts seed entries
      return knex('products').insert([
        { id: 1, name: 'iPhone X', description: 'Amazing cellphone', price: 999.00 },
        { id: 2, name: 'Smartwatch', description: 'Amazing smartwatch', price: 349.00 },
        { id: 3, name: 'Samsung S9+', description: '128GB', price: 699.00 },
        { id: 4, name: 'Samsung S10', description: '128GB', price: 799.99 },
        { id: 5, name: 'Samsung S10+', description: '512GB', price: 1006.00 },
        { id: 6, name: 'Motorola G7', description: '64GB', price: 299.99 }
      ]);
    });
};
