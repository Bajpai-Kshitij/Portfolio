import * as paymentSystems from "./blogs/building-reliable-payment-systems";

// Add future blogs here:
// import * as redisCaching from "./blogs/redis-caching-patterns";

const blogPosts = [
  paymentSystems
];

const sortedBlogs = blogPosts
  .map((post) => ({
    meta: post.meta,
    blog: post.blog
  }))
  .sort((a, b) => new Date(b.meta.date) - new Date(a.meta.date));

export default sortedBlogs;