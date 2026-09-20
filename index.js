/**
 * A tiny invoice total calculator. Returns the sum of the line items
 * plus tax charged at the given rate.
 */
function invoiceTotal(lineItems, taxRate) {
  const subtotal = lineItems.reduce((sum, item) => sum + item.price * item.qty, 0);
  const tax = subtotal * taxRate;
  return subtotal + tax;
}

module.exports = { invoiceTotal };
