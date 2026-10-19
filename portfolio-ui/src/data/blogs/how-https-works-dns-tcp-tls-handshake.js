export const meta = {
  slug: "how-https-works-dns-tcp-tls-handshake",
  title: "How HTTPS Works: DNS, TCP, and TLS Handshake",
  date: "2026-10-19",
  excerpt:
    "Understanding the underlying mechanisms of HTTPS and how it ensures secure communication over the internet.",
  tags: ["HTTPS", "Network Security", "Web Development"],
  readingTime: "6 min read"
};

export const blog = `
Let’s start from the beginning.

We open a device, search for a browser, and type what we want to search in the text field provided. But did we notice that the website, Google, is already there, waiting for us to start the search? Let’s take a different approach. Someone sent you a link to a website where you can plan your travel, something like \`https://travelwithme.com\`, and once you click that link, depending on certain conditions and within a few seconds, travelwithme opens and you start your planning.

But what happens in those few seconds will decide if you will be able to plan that trip on that website or not. Let’s take a deep dive into those few seconds.

## 1. DNS Resolver

We will start with the DNS resolver. The internet does not understand the strings you send in the form of a URL; what it understands is an IP and a port. An IP is like an internet address of your device; it tells other applications/devices where to look or where to send the response for this user whose IP this is (your public IP). A port is a kind of door on your device through which any mail/data can come in. That makes a complete address. The DNS stores this mapping, the mapping of a certain URL to its public IP and port (if the port is not defined, then for HTTP the default port is 80, and for HTTPS it’s 443, configured in the protocol itself).

In a day you open roughly 100-200 websites (sometimes by clicking the URL), so within a month the storage size should increase, right?

No. It’s managed at different levels, and TTL also helps to evict stale data.

### 1.1. DNS Storage Levels

Now let’s go a little deeper. There are different places where these URLs are stored.

First is your **browser**: Chrome/Firefox have a DNS cache, which stores URLs against their IPs with a TTL (Time to Live), i.e., the duration after which they become stale (or unusable) and are then deleted.

Next is your **OS (Windows/Ubuntu/macOS)**. This is a bigger/longer-lived storage than the browser cache.

Next up we have the **ISP (Internet Service Provider): Airtel/Jio/local** (which in turn use the Jio/Airtel cable itself in the background). They maintain it for all the connections they provide. If the IP is not found within the ISP, then the ISP would ask the registry for the IP, store it with itself, and pass it downstream.

What is a registry?

### 1.2. DNS Registry

When you write a URL, at the end you write .com/.in/.co/.org; each and every one of them, and more, is called a registry. They are organisations that maintain every URL published in their registry, and they have their own data centres and their own hosting, which receive these requests and tell you where to go.

Here is a **small catch**: the registry doesn’t store an IP address; it stores which **nameserver** owns this URL. Let me explain. When you want to buy a domain, you don’t go to the .com registry but to a registrar like GoDaddy/Namecheap and others, and for a price (which varies) they give you access to a URL of your choice for a duration (like a subscription), which you use. So the registry redirects the request towards the nameserver, which in turn provides the IP back to your device.

## 2. TCP

Now you have the IP address of the device you want to connect to, but the connection has not happened yet. This comes under the TCP connection. Next, your device makes a TCP connection with the requested IP.

What is a connection?

### 2.1. Connection

It’s basically an agreement between your device and the connecting device that there is some data that needs to be transferred. Both have each other’s IPs, and both of them agree to send/receive the data from each other. Now this is achieved using a handshake between the devices.

### 2.2. 3-Way Handshake

So your device sends a request to that IP, the connecting IP acknowledges that request and sends back another request to your device, then your device acknowledges that request and sends the accepted confirmation. So 3 requests in total are sent, 2 from your device and 1 from the connecting device.

What do they communicate in that? The devices acknowledge a random number (independently) which would be used as a sequence number (for each packet sent, so that the sequence doesn’t break the data), the sequence of packets. A packet is a broken-down part of your request; every piece of data being sent is broken down into various pieces before being sent over a connection. This 3-way handshake is also called the SYN, SYN-ACK, ACK handshake.

But now the issue arises: what if someone is watching this? Someone on your router, or on the connecting IP’s router, or on an in-between hop router would be able to read all the data, as they have all the packets and can put them together and read them (there is software for this too, like Wireshark, tcpdump, and more). So now we need to secure this, so no one can read your passwords or sensitive data.

## 3. TLS

This is the security layer, Transport Layer Security, where all the packets are secured before being sent out to the next device. How is this achieved? (Through the TLS 1.3/1.2 protocol.)

### 3.1. TLS Handshake

This refers to a secondary handshake after the TCP 3-way handshake, which focuses on the reliability of the server, the validity of the server. Currently your device has your IP and port and the destination device’s IP and port, so both devices do a TLS handshake, where information about server validation and encryption/decryption keys is shared.

Basically, it’s again a 3-way handshake, where the client first sends the request with some parameters, which are then computed and sent back with parameters from the server, and lastly the client acknowledges the response and starts sending the requests (data packets). The first request that the client sends to the server is called Client Hello, and the first response from the server is called Server Hello. They both consist of the following values to proceed.

#### 3.1.1. Client Hello

1. **Random nonce** -> This is generated per handshake to keep the handshake non-replayable/non-repeatable.
2. **Cipher suites** -> These contain the encryption and hashing algorithms allowed by the client, from which the server can pick to proceed (e.g., AES-128-GCM + SHA-256).
3. **Key share** -> This is called the ECDHE public key.
4. **Supported groups** ->
5. **Signature algorithms** -> This shares a list of signature algorithms that the client can use to verify the signature from the server.
6. **Supported versions** -> TLS 1.2, TLS 1.3. The list of versions that the client supports.
7. **Server name** -> The name of the server for which this request originated (this sits outside the destination IP and port).
8. **ALPN (Application Layer Protocol Negotiation)** -> The list of application protocols that the client supports (HTTP 2/1.1/1.0).

...and other fields.

#### 3.1.2. Server Hello

This is divided into 2 messages, sent back to back.

1. **Message One**
   1. **Random nonce** -> The server’s random nonce, same work.
   2. **Cipher suite** -> The one chosen from the client’s list.
   3. **Key share** -> This is the ECDHE public key.
   4. **Supported version** -> Picked from the list provided by the client.
   5. **Other legacy fields** kept for compatibility: \`legacy_version\`, \`legacy_session_id_echo\`, \`legacy_compression_method\` (fixed values).
2. **Message Two** (encrypted message, encrypted with handshake traffic keys)
   1. **Certificate** -> This is the certificate of the server, with its chain for the verification of the server.
   2. **Certificate Verify** -> Signature over the transcript by the certificate’s private key.
   3. **Encrypted Extensions** -> This contains the chosen ALPN network.
   4. **Finished** -> This is the message generated by concatenating everything so far and taking the MAC of the hash of the total transcript (all the variables of the conversation).

#### 3.1.3. Client Acknowledge

1. **Finished** -> This is the message generated by concatenating everything so far and taking the MAC of the hash of the total transcript (all the variables of the conversation).

### 3.2. Key Share & Supported Groups

ECDHE (Elliptic Curve Diffie-Hellman Ephemeral) is an algorithm where two parties derive the same shared secret using their own private key and the other side’s public key, with only public keys crossing the network. The shared secret is then run through HKDF to derive the handshake traffic keys, and later the application traffic keys. The exchange involves four keys:

1. Client ephemeral private key (\`a\`): stays with the client, never sent.
2. Client ephemeral public key (\`A\`): sent in ClientHello (\`key_share\`).
3. Server ephemeral private key (\`b\`): stays with the server, never sent.
4. Server ephemeral public key (\`B\`): sent in ServerHello (\`key_share\`).

\`supported_groups\` is the list of curves the client supports. The chosen curve fixes the public parameters: the equation, the field size, and a base point \`G\`. Each side multiplies \`G\` by its random private scalar to get its public key. Each side then multiplies the other’s public key by its own private scalar and arrives at the same shared secret, which is different from both public keys. That secret is never used to encrypt directly. If decryption or the Finished check fails later, the connection is aborted with a TLS alert.

\`\`\`text
# public parameters
curve = X25519
G = curve.base_point

# client
a = random_scalar()          # private, never sent
A = a * G                    # public, sent in ClientHello.key_share

# server
b = random_scalar()          # private, never sent
B = b * G                    # public, sent in ServerHello.key_share
shared_s = b * A

# client, after receiving ServerHello
shared_c = a * B             # shared_c == shared_s

# both sides, independently (simplified)
transcript = Hash(ClientHello || ServerHello)
handshake_secret = HKDF_Extract(early_secret, shared_secret)
client_hs_secret = HKDF_Expand(handshake_secret, "c hs traffic", transcript)
server_hs_secret = HKDF_Expand(handshake_secret, "s hs traffic", transcript)
# the actual key and IV for each direction are derived from these secrets
\`\`\`

### 3.3. Certificate

So a domain has a certificate issued to it when the site registers. At that time, 2 keys are provided: a public key and a private key. So when the 2 servers talk to each other, the client provides the certificate to the server, and that server verifies that registry from a trusted CA and receives the public key of the certificate. Many trusted CAs are cached on the server for quick use.

And that’s how we have a secure channel that transfers the data packets which make up a stunning-looking page (travelwithme.com) that opens up. There are several other parts down the line, which we will discuss in later blogs.
`;