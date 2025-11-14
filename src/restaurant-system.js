/* eslint-disable max-classes-per-file */

class MenuItem {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  getDescription() {
    return `$${this.price} - ${this.name}`;
  }
}

class Entree extends MenuItem {
  constructor(name, price, protein) {
    super(name, price);
    this.protein = protein;
  }

  getDescription() {
    return `${super.getDescription()} (${this.protein})`;
  }
}

class Dessert extends MenuItem {
  constructor(name, price, isGlutenFree) {
    super(name, price);
    this.isGlutenFree = isGlutenFree;
  }

  getDescription() {
    if (this.isGlutenFree) {
      return `${super.getDescription()} [GF]`;
    }
    return `${super.getDescription()}`;
  }
}

class Beverage extends MenuItem {
  constructor(name, price, size) {
    super(name, price);
    this.size = size;
  }

  getDescription() {
    return `${super.getDescription()} (${this.size})`;
  }
}

const printDescriptions = (menu) => {
  menu.forEach((item) => {
    console.log(item.getDescription());
  });
};

module.exports = {
  MenuItem,
  Entree,
  Dessert,
  Beverage,
  printDescriptions,
};
