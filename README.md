# metamask-oauth2
## Proof-of-concept zero-client OAuth2 provider for dapps using Metamask

This repo shows how an OAuth2 client (`index.html`) could use implicit flow to redirect to an OAuth2 Provider (`authorize.html`).

The particular OAuth2 Provider implemented here uses Metamask (and MetaMascara) to authenticate a user. 
Authentication happens by the user signing a JWT. This JWT is returned to the OAuth2 client as a bearer token. 
The client page can verify the signature (using web3/Metamask) or send it to a backend for server-side verification in REST APIs.

Because the JWT is signed using the `personal_sign` RPC call, which doesn't allow signing of abritrary hashes, verification should be done using `personal_ecRecover`.
