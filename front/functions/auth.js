// auth.js (o algún archivo similar para gestionar la autenticación)

export const isAuthenticated = () => {
    const accessToken = localStorage.getItem('access_token');
    // Aquí puedes agregar lógica adicional para verificar si el token es válido
    return accessToken !== null; // Devuelve true si el token de acceso está presente
};
