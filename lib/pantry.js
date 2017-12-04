

export default class Pantry {
  constructor (stock) {
    this.stock = stock
  }

  stock () {
   return this.stock
  }

  stockCheck (item) {
    return stock.item || 0
  }

  restock (item, amount) {
     this.stock.item = item
     this.stock.amount += amount
  }

}

