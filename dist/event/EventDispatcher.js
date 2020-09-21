"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EventDispatcher {
    constructor() {
        /**
         * List of async subscribers
         */
        this.asyncSubscribers = [];
        /**
         * List of sync subscribers
         */
        this.syncSubscribers = [];
    }
    /**
     * Add an async subscriber in runtime
     * @param {AsyncEventSubscriber}
     * @return {EventDispatcher} this
     */
    addAsyncSubscriber(subscriber) {
        this.asyncSubscribers.push(subscriber);
        return this;
    }
    /**
     * Add a sync subscriber in runtime
     * @param {SyncSubscriberInterface}
     * @return {EventDispatcher} this
     */
    addSyncSubscriber(subscriber) {
        this.syncSubscribers.push(subscriber);
        return this;
    }
    /**
     * Add sync subscriber in runtime
     */
    /**
     * Dispatch an event
     * @param {EventData} eventName
     */
    fire(data) {
        // Trigger sync subscribers
        this.syncSubscribers.forEach(subscriber => {
            subscriber.handle(data);
        });
        // Trigger async subscribers
        this.asyncSubscribers.forEach(subscriber => {
            subscriber.handle(data);
        });
    }
}
exports.default = EventDispatcher;
//# sourceMappingURL=EventDispatcher.js.map