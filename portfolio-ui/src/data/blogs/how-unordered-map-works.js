export const meta = {
  slug: "how-unordered-map-works",
  title: "How unordered_map Works Internally in C++",
  date: "2026-07-17",
  excerpt:
    "Learn how unordered_map achieves average O(1) insert, search, and delete by understanding hashing, buckets, collisions, load factor, and rehashing.",
  tags: ["C++", "Backend", "Internal Workings"],
  readingTime: "10 min read"
};


export const blog = `
## What is \`unordered_map\` and Why Do We Even Need It?

\`unordered_map<Key, Value>\` is a data structure in C++ that is widely used in competitive programming because of its fast operations such as insertion, deletion, and searching. While other data structures may excel at one operation but perform slower for others, \`unordered_map\` provides average constant-time complexity for all three.

But is \`unordered_map\` always fast? Does it perform well at every scale? How much data can we insert? Is there a limit? Can it ever become slower?

Let's dive deep into how \`unordered_map\` works internally to answer these questions.

In competitive programming, choosing the right data structure gives you a significant advantage. It can solve many problems more efficiently and reduce the overall execution time. However, every data structure has its own caveats. Sometimes a data structure may start performing differently than expected. Understanding how it works internally helps us know when to use it and when to avoid it.

---

## Why Do We Need \`unordered_map\`?

* It provides average **O(1)** complexity for insertion, deletion, and searching.
* Other data structures may not perform as efficiently for these operations.

| Data Structure  | Insert   | Search   | Delete   |
| --------------- | -------- | -------- | -------- |
| \`unordered_map\` | O(1)     | O(1)     | O(1)     |
| \`map\`           | O(log n) | O(log n) | O(log n) |
| Tree            | O(log n) | O(log n) | O(log n) |

However, these are **average-case** complexities. The worst-case complexities are:

| Operation | Average | Worst |
| --------- | ------- | ----- |
| Insert    | O(1)    | O(n)  |
| Search    | O(1)    | O(n)  |
| Delete    | O(1)    | O(n)  |

---

## How Does \`unordered_map\` Work Internally?

There are several concepts working together behind the scenes. Let's understand each one individually.

### 1. Hashing

* Hashing is the process of generating a hash value from a given key using a hash function. The same key always produces the same hash value.
* \`unordered_map\` uses a single hash function (by default \`std::hash<Key>\`).
* Whenever we insert, search, or update a key, the hash function generates a hash value for that key.
* That hash value is then used to determine the bucket index where the key-value pair should be stored.
* Internally, \`unordered_map\` contains multiple buckets (the initial bucket count depends on the implementation).

---

### 2. Bucket

* Internally, an \`unordered_map\` is divided into multiple buckets.
* Conceptually, each bucket can either be empty or contain a list of nodes.
* When a collision occurs, multiple nodes may exist inside the same bucket.
* Each node stores the key, value, and links to the next node (conceptually represented as a linked list).
* The bucket index is generally determined using:

\`\`\`
bucket_index = hash_value % bucket_count
\`\`\`

---

### 3. Collision

* A collision occurs when different keys end up mapping to the same bucket.
* Since two different key-value pairs cannot overwrite each other, they are stored within the same bucket.
* Conceptually, the first node becomes the head of the list, and the remaining nodes are connected to it.
* Collisions are common, but their impact is minimized by controlling the load factor.

> Lower load factor → Fewer collisions → More buckets

---

### 4. Load Factor

The load factor is calculated as:

\`\`\`
load_factor = size() / bucket_count()
\`\`\`

* \`max_load_factor()\` is the maximum load factor allowed by the implementation (typically 1.0 by default).
* After every insertion, the implementation checks whether the current load factor exceeds the maximum allowed load factor.
* If it does, a rehash is triggered automatically.

---

### 5. Rehash

Rehashing is the process of increasing the number of buckets and redistributing all existing elements.

For example:

* Current bucket count = 8
* After rehash = 16 buckets

Once the bucket count changes, every existing element is redistributed into the appropriate bucket according to the new bucket count.

As a result:

* The load factor decreases.
* Collisions are reduced.
* Future operations remain efficient.

---

## How Does \`unordered_map\` Perform Operations?

Now let's understand what happens internally during insertion, deletion, and searching.

### 1. Insertion

1. Compute the hash value for the key.
2. Determine the bucket index using the hash value.
3. Check whether inserting this element would trigger a rehash.
4. Check whether the bucket is empty.

#### If the bucket is empty

* Create a new node.
* Insert the node into the bucket.

#### If the bucket is not empty

* Traverse the nodes in the bucket (linear search).
* Compare the existing keys with the new key.
* If the key already exists:

  * Update the value.
  * Return.
* Otherwise:

  * This is a collision.
  * Create a new node.
  * Append it to the bucket.
  * Update the links.
  * Return.

---

### 2. Deletion

1. Compute the hash value.
2. Determine the bucket index.
3. Traverse the bucket.

#### If the bucket is empty

* Nothing to delete.
* Return.

#### If the bucket contains nodes

* Traverse the nodes until the key is found.
* If found:

  * Update the links so the remaining nodes stay connected.
  * Remove the node.
* Otherwise:

  * Return.

---

### 3. Search

1. Compute the hash value.
2. Determine the bucket index.
3. Traverse the bucket.

#### If the bucket is empty

* Return "not found".
* \`find()\` simply returns \`end()\`.
* \`operator[]\` performs a **lookup-or-insert**, inserting the key with a default-initialized value if it doesn't exist.

#### If the bucket contains nodes

* Traverse the nodes one by one.
* Compare each key with the requested key.
* If a matching key is found:

  * Return the associated value.
* If the end of the bucket is reached without finding the key:

  * \`find()\` returns \`end()\`.
  * \`operator[]\` inserts the key with its default value and returns a reference to it.

---

## Caveats

Suppose collisions become frequent and the number of nodes in a bucket increases.

* Searching is no longer strictly O(1); it gradually moves toward O(n).
* Insertion also becomes slower because the implementation must traverse more nodes before inserting or updating.
* Keeping the load factor low helps reduce collisions, but it also increases the number of buckets and therefore the memory overhead.

This is why \`unordered_map\` provides **average O(1)** complexity rather than guaranteed O(1) complexity.

`;