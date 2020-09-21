import AsyncSubscriberInterface from "./AsyncSubscriberInterface";
import SyncSubscriberInterface from "./SyncSubscriberInterface";
export default abstract class EventDispatcher<EventDataType> {
    /**
     * List of async subscribers
     */
    protected asyncSubscribers: AsyncSubscriberInterface<EventDataType>[];
    /**
     * List of sync subscribers
     */
    protected syncSubscribers: SyncSubscriberInterface<EventDataType>[];
    /**
     * Add an async subscriber in runtime
     * @param {AsyncEventSubscriber}
     * @return {EventDispatcher} this
     */
    addAsyncSubscriber(subscriber: AsyncSubscriberInterface<EventDataType>): EventDispatcher<EventDataType>;
    /**
     * Add a sync subscriber in runtime
     * @param {SyncSubscriberInterface}
     * @return {EventDispatcher} this
     */
    addSyncSubscriber(subscriber: SyncSubscriberInterface<EventDataType>): EventDispatcher<EventDataType>;
    /**
     * Add sync subscriber in runtime
     */
    /**
     * Dispatch an event
     * @param {EventData} eventName
     */
    fire(data?: EventDataType): void;
}
