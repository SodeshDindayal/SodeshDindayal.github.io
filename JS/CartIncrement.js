
[...document.getElementsByClassName('value-button')]
  .forEach(button => 
    button
      .addEventListener('click', ({target}) => {
        const numberInput = target.parentNode.getElementsByClassName('number')[0],
              currentValue = numberInput.value,
              newValue = +currentValue + (target.className.includes('increase') ? 1 : -1)      
        numberInput.value = newValue
      })
  )