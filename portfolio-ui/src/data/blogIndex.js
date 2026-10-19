import * as paymentSystems from "./blogs/building-reliable-payment-systems";
import * as cppMap from "./blogs/how-unordered-map-works";
import * as httptls from "./blogs/how-https-works-dns-tcp-tls-handshake";
// Add future blogs here:
// import * as redisCaching from "./blogs/redis-caching-patterns";

const blogPosts = [
  paymentSystems,
  cppMap,
  httptls
];

const sortedBlogs = blogPosts
  .map((post) => ({
    meta: post.meta,
    blog: post.blog
  }))
  .sort((a, b) => new Date(b.meta.date) - new Date(a.meta.date));

export default sortedBlogs;