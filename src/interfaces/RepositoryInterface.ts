import ModelInterface from "./ModelInterface"
import FilterInterface from "./FilterInterface"
import PaginationInterface from "./PaginationInterface"

export default interface RepositoryInterface <M extends ModelInterface> {

  /**
   * Find by ID
   *
   * @param {string}
   * @return {Promise<ModelInterface>}
   */
  findById(id: string): Promise<M>

  /**
   * Get list models
   *
   * @param {FilterInterface} filter
   * @param {PaginationInterface} pagination
   * @param {string} sort
   * @return {Promise<M[]>}
   */
  list(filter?: FilterInterface, pagination?: PaginationInterface, sort?: string): Promise<M[]>

  /**
   * Create new resource
   *
   * @param {ModelInterface} model
   * @return {Promise<string>} id
   */
  create(model: M): Promise<string>

  /**
   * Update model
   *
   * @param {ModelInterface} model
   * @return {Promise<boolean>}
   */
  update(model: M): Promise<boolean>

  /**
   * Delete model
   *
   * @param id
   * @return {Promise<boolean>}
   */
  deleteById(id: string): Promise<boolean>
}
