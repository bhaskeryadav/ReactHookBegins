import * as io from "socket.io-client";

console.log("connecting...");
const sock = io.connect("https://onhir.sse.codesandbox.io/");

sock.on("connect", () => {
  console.log("connected....");
});

export default function getSocket() {
  return sock;
}
