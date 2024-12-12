import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

const Error = (errorMsg) => (
    Swal.fire({
        title: 'Error',
        text: `Hubo un problema al solicitar los vehículos disponibles al servidor:"\n${errorMsg}`,
        icon: 'error',
        confirmButtonText: 'Ok'
    })
)
export default Error