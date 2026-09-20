const assert = require("node:assert");
const { invoiceTotal } = require("./index.js");

const items = [{ price: 100, qty: 2 }]; // 200 subtotal
const total = invoiceTotal(items, 0.08); // expect 216 with 8% tax

assert.strictEqual(total, 216, `expected 216, got ${total}`);
console.log("PASS");
