document.getElementById('open-modal').addEventListener('click', function () {
    document.getElementById('modal').style.display =
        'block' /* Muestra el modal */
})

document.getElementById('close-modal').addEventListener('click', function () {
    document.getElementById('modal').style.display =
        'none' /* Oculta el modal */
})

document
    .getElementById('confirm-button')
    .addEventListener('click', function () {
        // Oculta el primer modal
        document.getElementById('modal').style.display = 'none'
        // Muestra el segundo modal
        document.getElementById('success-modal').style.display = 'block'
    })

document
    .getElementById('close-success-modal')
    .addEventListener('click', function () {
        // Oculta el segundo modal
        document.getElementById('success-modal').style.display = 'none'
    })
