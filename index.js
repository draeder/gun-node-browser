const Gun = require("gun");

const gun = Gun({ peers: ["https://relay.peer.ooo/gun"] });

function sendMessage(message) {
  gun.get("chat").set({ message: message.trim() });
  console.log(`You: ${message.trim()}`);
}

gun
  .get("chat")
  .map()
  .on((data) => {
    console.log(`Received: ${data.message}`);
  });

console.log("Node Console-based Chat with Gun DB");
console.log("Type your messages below:");

process.stdin.setEncoding("utf8");

process.stdin.on("data", (data) => {
  if (data.trim() === "exit") {
    console.log("Exiting chat...");
    process.exit(0);
  } else {
    sendMessage(data);
  }
});

process.stdin.resume();
