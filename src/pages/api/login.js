import usersData from "../../data/users.json";


export default function handler(req, res) {
  if (req.method === "POST") {
    const { username, password } = req.body;

    const user = usersData.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      res.status(200).json({ message: "Inicio de sesión exitoso" });
    } else {
      res
        .status(401)
        .json({ message: "Nombre de usuario o contraseña incorrectos" });
    }
  } else {
    res.status(405).end();
  }
}
