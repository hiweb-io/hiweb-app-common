export default interface EventSubscriber<EventDataType> {
    /**
     * Handle event
     * @param {EventDataType}
     */
    handle(data?: EventDataType): void;
}
