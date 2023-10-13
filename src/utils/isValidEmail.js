// utils/isValidEmail.js

// Función para validar si una dirección de correo electrónico es válida
export function isValidEmail(email) {
  // Aquí puedes implementar una validación más completa según tus requisitos.
  // En este ejemplo, se utiliza una expresión regular simple para verificar el formato.
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
