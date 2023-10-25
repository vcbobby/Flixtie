document
    .getElementById('subscribe-button')
    .addEventListener('click', function () {
        // Recolecta los datos que deseas enviar al servidor, por ejemplo, un correo electrónico
        const email = 'correo@ejemplo.com'

        // Configura los datos de la solicitud
        const data = {
            email: email,
        }

        fetch('URL_DEL_BACKEND', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => {
                if (response.ok) {
                    // La solicitud fue exitosa
                    alert('¡Te has suscrito exitosamente!')
                } else {
                    // La solicitud falló
                    alert(
                        'Hubo un problema al suscribirse. Inténtalo de nuevo más tarde.'
                    )
                }
            })
            .catch((error) => {
                console.error('Error:', error)
            })
    })
