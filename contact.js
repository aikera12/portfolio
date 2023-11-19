const scriptURL = 'https://script.google.com/macros/s/AKfycbyWieTQCJIX9MNQ4cBIP_yksdHDbe6PFQN7hLsXj124L_ELF6r_vTrsBWSBeliXCdrB1Q/exec'
    const form = document.forms['submit-to-google-sheet']
  
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => console.log('Success!', response))
        .catch(error => console.error('Error!', error.message))
    })