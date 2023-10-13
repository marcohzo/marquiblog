// data/users.js

// Simulación de una lista de usuarios registrados
const registeredUsers = [
  { email: "usuario1@example.com", password: "contraseña1" },
  { email: "usuario2@example.com", password: "contraseña2" },
  // Agrega más usuarios si es necesario
];

// Función para verificar si un correo electrónico ya está registrado
export async function isRegistered(email) {
  const user = registeredUsers.find((user) => user.email === email);
  return !!user;
}

// Función para registrar un nuevo usuario
export async function registerUser({ name, email, password }) {
  // Aquí puedes agregar la lógica real para registrar al usuario en tu sistema.
  // Por ejemplo, puedes guardar la información en una base de datos.
  // En este ejemplo, solo simulamos el registro.
  const newUser = { name, email, password };
  registeredUsers.push(newUser);
}
