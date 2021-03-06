const ShoppingListService = {
    getAllListItems(knex) {
        return knex.select('*').from('shopping_list')
    },
    getById(knex, id) {
        return knex.from('shopping_list')
            .select('*')
            .where('item_id', id)
            .first()
    },
    insertItem(knex, newItem) {
        return knex.insert(newItem)
            .into('shopping_list')
            .returning('*')
            .then(rows => {
                return rows[0]
            })
    },
    deleteItem(knex, id) {
        return knex('shopping_list')
            .where('item_id', id)
            .delete()
    },
    updateItem(knex, id, newItemCheckedState) {
        return knex('shopping_list')
            .where('item_id', id)
            .update(newItemCheckedState)
    }
};

module.exports = ShoppingListService;