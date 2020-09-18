import { v4 as uuidv4 } from 'uuid'

export default new class StringHelper {

  /**
   * Generate an ordered uuid
   */
  orderedUuid(): string {

    // Generate an uuid v4
    let uuid = uuidv4()

    // Get milliseconds
    const milliseconds = (new Date()).getTime()

    // Convert ms to hex
    const millisecondsHex = milliseconds.toString(16)

    // Make uuid prefix
    const uuidTimestampPrefix = millisecondsHex.slice(0, 8) + '-' + millisecondsHex.slice(8)

    return uuidTimestampPrefix + uuid.slice(12)
  }

}
