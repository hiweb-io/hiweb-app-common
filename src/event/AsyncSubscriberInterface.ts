export default interface AsyncSubscriberInterface<EventDataType> {

  /**
   * Handle event
   * @param {EventDataType}
   */
  handle(data?: EventDataType): Promise<any>
}
