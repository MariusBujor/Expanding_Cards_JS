const panels = document.querySelectorAll(".panel");

panels.forEach(panel => { // for loop going trough each panel
    panel.addEventListener('click',() => { // this will add a fuction to each panel when clicked
        //console.log(123)
        removeActiveClases() // function inside that need to be done after first function is done...this function is written below
        panel.classList.add('active') // adding the active function when a panel is clicked
    })
})

function removeActiveClases(){// this is the function that remove the first function that made the panel activ after pressing
    panels.forEach(panel => {
        panel.classList.remove('active')
              

            })
        }