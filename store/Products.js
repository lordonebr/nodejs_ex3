const knex = require('knex')
const knexConfigs = require('../knexfile')
const db = knex(knexConfigs.development)

const TABLE_NAME = 'products'

module.exports = {
    get() {
        return db(TABLE_NAME).select('*')
    },
    getById(id) {
        return db(TABLE_NAME).select('*')
        .where('id', id)
    },
    getIds() {
        return db(TABLE_NAME).select('id')
        .orderBy('id', 'desc')
    },
    insert(product) {
        return db(TABLE_NAME).insert(product);
    },
    delete(product) {
        return db(TABLE_NAME)
            .where('id', product.id)
            .del();
    },
    deleteById(id) {
        return db(TABLE_NAME)
            .where('id', id)
            .del();
    },
    update(product) {
        return db(TABLE_NAME)
            .where('id', product.id)
            .update({
                name: product.name,
                description: product.description,
                price: product.price
            });
    }
}