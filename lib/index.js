'use strict'
const CommonExceptions = require('quantal-errors')

class BaseRepository {
  /**
   *
   * @param model {Object}  - The type (class type) of the model that this repository manages e.g. GiphyModel
   */
  constructor (model) {
    if (!model) {
      throw new CommonExceptions.IllegalArgumentException('model must be an instance of ModelBase of bookshelf plugin bookshelf-modelbase')
    }

    this.model = model
  }

  /**
   * Returns a single instance of a model
   * @param data - the data to pass fetch
   * @param options {Object} - the options to pass to model.fetch
   * @returns {Promise}
   */
  findOne (data, options) {
    return this.model.findOne(data, options)
  }

  /**
   * Naive add - create and save a model based on data
   * @param {Object} data
   * @param {Object} options (optional)
   * @return {Promise(bookshelf.Model)} single Model
   */
  create (data) {
    return this.model.create(data)
  }

  /**
   * Naive destroy
   * @param {Object} options
   * @param options.id {Number|String} - The id of the model to be deleted
   * @return {Promise(bookshelf.Model)} empty Model
   */
  destroy (options) {
    return this.model.destroy(options)
  }

  /**
   * Naive findAll - fetches all data for `this`
   * @param {Object} options (optional)
   * @return {Promise(bookshelf.Collection)} Bookshelf Collection of all Models
   */
  findAll (options) {
    return this.model.findAll(options)
  }

  /**
   * Find a model based on it's ID
   * @param {String | Number} id The model's ID
   * @param {Object} [options] Options used of model.fetch
   * @return {Promise(bookshelf.Model)}
   */
  findById (id, options) {
    return this.model.findById(id, options)
  }

  /**
   * Find or create - try and find the model, create one if not found
   * @param {Object} data
   * @param {Object} options
   * @return {Promise(bookshelf.Model)} single Model
   */
  findOrCreate (data, options) {
    return this.model.findOrCreate(data, options)
  }

  /**
   * Naive update - update a model based on data
   * @param {Object} data
   * @param {Object} options
   * @return {Promise(bookshelf.Model)} edited Model
   */
  update (data, options) {
    return this.model.update(data, options)
  }

  /**
   * Upsert - select a model based on data and update if found, insert if not found
   * @param {Object} selectData Data for select
   * @param {Object} updateData Data for update
   * @param {Object} [options] Options for model.save
   * @return {Promise(bookshelf.Model)} edited Model
   */
  upsert (selectData, updateData, options) {
    return this.upsert(selectData, updateData, options)
  }
}

module.exports = BaseRepository
