export default class CartService {

  constructor($http, Auth, $cookies) {
    'ngInject';
    this.$http = $http;
    this.Auth = Auth;
    this.$cookies = $cookies;
    this.data = {};
    this.data.cart = {};

    this.loadCart();
  }

  loadCart() {
    return this.getCart();
  }

  getMyCart() {
    return this.data.cart;
  }

  getMyCartSize() {
    return this.data.cart.size;
  }

  getMyCartPrice() {
    if (this.data.cart.seats) {
      return this.data.cart.seats.reduce((price, seat) => {
        return price + seat.price;
      }, 0);
    }
  }

  createCart() {
    return this.$http.post('/api/carts')
      .then(response => {
        this.data.cart = response.data;
        this.$cookies.put('cart', response.data.publicId);

        return this.data.cart;
      });
  }

  getCart() {
    return this.$http.get('/api/carts/my-cart')
      .then(response => {
        this.data.cart = response.data;
        return this.data.cart;
      }, error => this.createCart());
  }

  addSeatToCart(slug) {
    return this.$http.post('/api/carts/addSeat', {slug: slug})
      .then(response => this.data.cart = response.data);
  }

  removeSeatFromCart(slug) {
    return this.$http.delete('/api/carts/seat/' + slug)
      .then(response => {
        this.data.cart = response.data;
      });
  }

  checkout() {
    return this.$http.post('/api/orders/checkout');
  }

}

