function isEnoughCapacity(products, containerSize) {
  let totalItems = 0;

  for (let key in products) {
    totalItems += products[key];
  }

  return totalItems <= containerSize;
}
