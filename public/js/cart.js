// const shoppingCart = function() {
// Private methods and properties
let cart = [];
function Item(name, price, count) {
  this.name = name;
  this.price = price;
  this.count = count;
}
function saveCart() {
  localStorage.setItem("shoppingCart", JSON.stringify(cart));
}
function loadCart() {
  cart = JSON.parse(localStorage.getItem("shoppingCart"));
  if (cart === null) {
    cart = [];
  }
}
loadCart();
// Public methods and properties
const shoppingCart = {};
shoppingCart.addItemToCart = function(name, price, count) {
  for (const i in cart) {
    if (cart[i].name === name) {
      cart[i].count += count;
      saveCart();
      alert("Item added to your cart!");
      return;
    }
  }
  console.log("addItemToCart:", name, price, count);
  const item = new Item(name, price, count);
  cart.push(item);
  saveCart();
};
shoppingCart.setCountForItem = function(name, count) {
  for (const i in cart) {
    if (cart[i].name === name) {
      cart[i].count = count;
      break;
    }
  }
  saveCart();
};
shoppingCart.removeItemFromCart = function(name) {
  // Removes one item
  for (const i in cart) {
    if (cart[i].name === name) {
      // "3" === 3 false
      cart[i].count--; // cart[i].count --
      if (cart[i].count === 0) {
        cart.splice(i, 1);
      }
      break;
    }
  }
  saveCart();
};
shoppingCart.removeItemFromCartAll = function(name) {
  // removes all item name
  for (const i in cart) {
    if (cart[i].name === name) {
      cart.splice(i, 1);
      break;
    }
  }
  saveCart();
};
shoppingCart.clearCart = function() {
  cart = [];
  saveCart();
};
shoppingCart.countCart = function() {
  // -> return total count
  let totalCount = 0;
  for (const i in cart) {
    totalCount += cart[i].count;
  }
  return totalCount;
};
shoppingCart.totalCart = function() {
  // -> return total cost
  let totalCost = 0;
  for (const i in cart) {
    totalCost += cart[i].price * cart[i].count;
  }
  return totalCost.toFixed(2);
};
shoppingCart.listCart = function() {
  // -> array of Items
  const cartCopy = [];
  console.log("Listing cart");
  console.log(cart);
  for (const i in cart) {
    console.log(i);
    const item = cart[i];
    const itemCopy = {};
    for (const p in item) {
      itemCopy[p] = item[p];
    }
    itemCopy.total = (item.price * item.count).toFixed(2);
    cartCopy.push(itemCopy);
  }
  return cartCopy;
};
// ----------------------------
// return obj;
// };
// shoppingCart();

// EVENT LISTENING JS
$(document).on("click", ".add-to-cart", event => {
  event.preventDefault();
  const name = $(event.target).attr("data-name");
  const price = Number($(event.target).attr("data-price"));
  shoppingCart.addItemToCart(name, price, 1);
  displayCart();
  console.log("test");
});
$("#clear-cart").click(() => {
  shoppingCart.clearCart().empty(), displayCart();
});
function displayCart() {
  const cartArray = shoppingCart.listCart();
  console.log(cartArray);
  let output = "";
  for (const i in cartArray) {
    output +=
      "<li>" +
      cartArray[i].name +
      " <input class='item-count' type='number' data-name='" +
      cartArray[i].name +
      "' value='" +
      cartArray[i].count +
      "' >" +
      " x " +
      cartArray[i].price +
      " = " +
      cartArray[i].total +
      " <button class='plus-item' data-name='" +
      cartArray[i].name +
      "'>+</button>" +
      " <button class='subtract-item' data-name='" +
      cartArray[i].name +
      "'>-</button>" +
      " <button class='delete-item' data-name='" +
      cartArray[i].name +
      "'>X</button>" +
      "</li>";
  }
  $("#show-cart").html(output);
  $("#count-cart").html(shoppingCart.countCart());
  $("#total-cart").html(shoppingCart.totalCart());
}
$("#show-cart").on("click", ".delete-item", function() {
  const name = $(this).attr("data-name");
  shoppingCart.removeItemFromCartAll(name);
  displayCart();
});
$("#show-cart").on("click", ".subtract-item", function() {
  const name = $(this).attr("data-name");
  shoppingCart.removeItemFromCart(name);
  displayCart();
});
$("#show-cart").on("click", ".plus-item", function() {
  const name = $(this).attr("data-name");
  shoppingCart.addItemToCart(name, 0, 1);
  displayCart();
});
$("#show-cart").on("change", ".item-count", function() {
  const name = $(this).attr("data-name");
  const count = Number($(this).val());
  shoppingCart.setCountForItem(name, count);
  displayCart();
});
displayCart();
