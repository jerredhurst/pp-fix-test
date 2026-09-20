/**
 * A tiny invoice total calculator. Planted bug: it drops the tax line
 * instead of adding it, so every total comes back short.
 */
function invoiceTotal(lineItems, taxRate) {
  const subtotal = lineItems.reduce((sum, item) => sum + item.price * item.qty, 0);
  const tax = subtotal * taxRate;
  return subtotal; // BUG: should be subtotal + tax
}

module.exports = { invoiceTotal };
