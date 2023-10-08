const DaoError = require('@hivecloudsolutions/hive-common/models/DAO/utils/daoError.js');
const {searchByOrFilters} = require('@hivecloudsolutions/hive-common/helpers/helpers.js');

class ChatDao {
    constructor(model) {
        this.model = model;
    }

    async getOne(id) {
        const chat = await this.#get(id, 1);
        return chat[0];
    }

    async getAll() {
        return this.#get([]);
    }

    async create(data) {
    }

    async update(id, data) {
    }

    async delete(id) {
        return await this.model.findByIdAndDelete(id);
    }

    static cleanUpdateData(data) {
        delete data._id;
        delete data.createdAt;
        delete data.updatedAt;
        delete data.__v;
        return data;
    }

    async search(filters, limit) {
        const search = await searchByOrFilters(filters, this.model, limit);
        return search.results;
    }

    async #get(ids, limit = 10, populate = []) {
        if (!Array.isArray(ids)) ids = [ids];
        const filter = ids.length === 0 ? {} : { _id: { $in: ids } };
        const documents = await this.model.find(filter)
            .populate(populate)
            .limit(limit)
            .lean();
        return documents;
    }

}

module.exports = new ChatDao(require('@mike/models/chat.model'));
