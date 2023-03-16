class PriceRangeClass {
  constructor(stock) {
    this.stock = stock.filter((car) => car.priceArs != null);
    this.cheapestCar = this.stock.reduce((prev, curr) => prev.priceArs < curr.priceArs ? prev : curr );
    this.priceyCar = this.stock.reduce((prev, curr) => prev.priceArs > curr.priceArs ? prev : curr);
  }
  getMinPriceArs() {
    const minPriceArs =
      Math.floor(this.cheapestCar.priceArs / 1000000) * 1000000;
    return minPriceArs;
  }

  getMaxPriceArs() {
    const maxPriceArs = Math.ceil(this.priceyCar.priceArs / 1000000) * 1000000;
    return maxPriceArs;
  }

  getMinPriceUsd() {
    const minPriceUsd = Math.floor(this.cheapestCar.priceUsd / 1000) * 1000;
    return minPriceUsd;
  }

  getMaxPriceUsd() {
    const maxPriceUsd = Math.ceil(this.priceyCar.priceUsd / 1000) * 1000;
    return maxPriceUsd;
  }

  createPriceRangeObject() {
    return {
      minArs: this.getMinPriceArs(),
      maxArs: this.getMaxPriceArs(),
      minUsd: this.getMinPriceUsd(),
      maxUsd: this.getMaxPriceUsd()
    };
  }
}

const getPriceRange = (stock) => {
  const PriceRangeInst = new PriceRangeClass(stock);
  return PriceRangeInst.createPriceRangeObject();
};

export { getPriceRange };
