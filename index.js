/**
 * A tiny invoice total calculator. Sums the line items and adds tax.
 */
function invoiceTotal(lineItems, taxRate) {
  const subtotal = lineItems.reduce((sum, item) => sum + item.price * item.qty, 0);
  const tax = subtotal * taxRate;
  return subtotal + tax;
}

module.exports = { invoiceTotal };
