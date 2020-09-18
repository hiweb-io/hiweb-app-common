import Model from '../models/Model'

export default interface Repository<M extends Model> {

  /**
   * Find by ID
   * 
   * @param {string}
   * @return {Promise<M>}
   */
  findById(id: string): Promise<M | null>
}