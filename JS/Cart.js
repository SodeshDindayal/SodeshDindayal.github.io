if (document.readyState == 'loading'){
      document.addEventListener('DOMContentLoaded', ready)
} else {
      ready()
}
function ready(){
      var removeCartItemButtons = document.getElementsByClassName('removeButton')
      console.log(removeCartItemButtons)
      for ( var i = 0; i < removeCartItemButtons.length; i++ ) {
            var button = removeCartItemButtons [i]
            button.addEventListener ('click', removeCartItem) 
      }

      var quantityInput = document.getElementsByClassName('number')
      for ( var i = 0; i < quantityInput.length; i++ ) {
            var input = quantityInput[i]
            input.addEventListener('change', quantityChanged)
      }
}

function quantityChanged(event) {
      var input = event.target
      if (isNaN(input.value) || input.value <= 0){
            input.value = 1
      }
      updateCartTotal()
}

function removeCartItem(event){
      var buttonClicked = event.target
      buttonClicked.parentElement.parentElement.remove()
      updateCartTotal()
}

function updateCartTotal() {
      var cartItemContainer = document.getElementsByClassName('cartColumn')[0]
      var itemsContainer = cartItemContainer.getElementsByClassName('itemscontainer')
      var total = 0
      for ( var i = 0; i < itemsContainer.length; i++ ) {
            var itemsContainer = itemsContainer[i]
            var priceElement = itemsContainer.getElementsByClassName('price')[0]
            var quantity = itemsContainer.getElementsByClassName('number')[0]

            var price = parseFloat(priceElement.innerText.replace('$', ''))
            var quantity = quantity.value
            total = total + (price * quantity)
            console.log(price * quantity)
      }
      document.getElementsByClassName('cartDetails')[0].innerText = '$' + total
}
