const obj = {};

let i = 0;
function handler(req, res) {
  i++;
  obj[i] = "*".repeat(100000).split("");
  res.end(`your request number is: ${i}`);
}

// module.exports
export default handler;
