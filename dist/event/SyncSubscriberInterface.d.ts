export default interface SyncSubscriberInterface<EventDataType> {
    /**
     * Handle event
     * @param {EventDataType}
     */
    handle(data?: EventDataType): void;
}
