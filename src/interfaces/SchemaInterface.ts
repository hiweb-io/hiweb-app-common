import ModelInterface from './ModelInterface'

export default interface SchemaInterface {
  id: string,
  type: string,
  [key: string]: any,
  relationships?: {[key: string]: ModelInterface | ModelInterface[]}
}