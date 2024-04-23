class Twitter {
    constructor() {
        this.count = 0;
        this.tweetMap = new Map(); // userId -> list of [count, tweetIds]
        this.followMap = new Map(); // userId -> set of followeeId
    }

    postTweet(userId, tweetId) {
        if (!this.tweetMap.has(userId)) {
            this.tweetMap.set(userId, []);
        }
        this.tweetMap.get(userId).push([this.count, tweetId]);
        this.count--;
    }

    getNewsFeed(userId) {
        const res = [];
        const minHeap = [];

        if (!this.followMap.has(userId)) {
            this.followMap.set(userId, new Set());
        }
        this.followMap.get(userId).add(userId);

        for (const followeeId of this.followMap.get(userId)) {
            if (this.tweetMap.has(followeeId)) {
                const tweets = this.tweetMap.get(followeeId);
                const index = tweets.length - 1;
                const [count, tweetId] = tweets[index];
                minHeap.push([count, tweetId, followeeId, index - 1]);
            }
        }

        while (minHeap.length && res.length < 10) {
            const [count, tweetId, followeeId, index] = this.extractMin(minHeap);
            res.push(tweetId);
            if (index >= 0) {
                const [nextCount, nextTweetId] = this.tweetMap.get(followeeId)[index];
                minHeap.push([nextCount, nextTweetId, followeeId, index - 1]);
            }
        }

        return res;
    }

    extractMin(minHeap) {
        minHeap.sort((a, b) => b[0] - a[0] || b[1] - a[1]); // Sorting to simulate min-heap behavior
        return minHeap.pop();
    }

    follow(followerId, followeeId) {
        if (!this.followMap.has(followerId)) {
            this.followMap.set(followerId, new Set());
        }
        this.followMap.get(followerId).add(followeeId);
    }

    unfollow(followerId, followeeId) {
        if (this.followMap.has(followerId)) {
            this.followMap.get(followerId).delete(followeeId);
        }
    }
}
