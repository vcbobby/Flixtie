document.addEventListener('DOMContentLoaded', function () {
    // Tu código JavaScript aquí, incluyendo la lógica para verificar la longitud del campo de entrada.

    document
        .getElementById('open-modal')
        .addEventListener('click', function () {
            document.getElementById('modal').style.display =
                'block' /* Muestra el modal */
        })

    document
        .getElementById('close-modal')
        .addEventListener('click', function () {
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

    // Obtén el campo de entrada y el botón
    const codeInput = document.getElementById('code-input')
    const phoneInput = document.getElementById('phone-input')
    const submitButton = document.getElementById('confirm-button')
    const modalButton = document.getElementById('open-modal')

    // Agrega un evento de escucha al campo de entrada para verificar la longitud
    phoneInput.addEventListener('input', function () {
        // Verifica si la longitud del valor es menor o igual a 6
        if (phoneInput.value.length <= 6) {
            // Si es igual o menor a 6, deshabilita el botón

            modalButton.classList.add('disabled')
        } else {
            // Si es mayor a 6, habilita el botón

            modalButton.classList.remove('disabled')
        }
    })
    codeInput.addEventListener('input', function () {
        // Verifica si la longitud del valor es menor o igual a 6
        if (codeInput.value.length <= 6) {
            // Si es igual o menor a 6, deshabilita el botón

            submitButton.classList.add('disabled')
        } else {
            // Si es mayor a 6, habilita el botón
            submitButton.classList.remove('disabled')
        }
    })
})
