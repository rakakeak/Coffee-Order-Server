'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('menus', [
      {
        categoryId: 2,
        name: "Cappucino",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcgNlvo49ODHR2pHyTlwyaKe55cPctNCd3H7jtMrBDxvVvhqJU7Q",
        price: 55000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: 2,
        name: "Coffee Latte",
        image: "https://cdn-prod.medicalnewstoday.com/content/images/articles/297/297449/a-cup-of-coffee.jpg",
        price: 65000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: 2,
        name: "Espresso",
        image: "https://miro.medium.com/max/1200/1*4FzJWow3qJOV_O-3iKgBOw.jpeg",
        price: 40000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: 2,
        name: "Black Coffee",
        image: "http://img.mysharing.co/htttp:/mysharing.co/wp-content/uploads//2017/12/black-coffee.jpg",
        price: 38000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: 3,
        name: "Aero Press",
        image: "https://mkfresh.pl/media/catalog/product/cache/1/small_image/9df78eab33525d08d6e5fb8d27136e95/m/k/mk_akcesoria_aeropress_1.jpg",
        price: 35000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: 3,
        name: "V60",
        image: "https://www.acouplecooks.com/wp-content/uploads/2019/03/Coffee-Chemex-014.jpg",
        price: 35000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: 4,
        name: "Cup White",
        image: "https://cdn.shopify.com/s/files/1/0788/5229/products/in_coffee_we_trust_take_away_cup_grande.jpg?v=1551815058",
        price: 100000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: 4,
        name: "Cup Black",
        image: "https://images-na.ssl-images-amazon.com/images/I/61JtZH68lrL._SY355_.jpg",
        price: 100000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: 2,
        name: "Americano",
        image: "https://www.craftcoffeeguru.com/wp-content/uploads/2019/02/americano-9.jpg?x53584",
        price: 45000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('menus', null, {});
  }
};