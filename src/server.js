const express = require("express");
const app = express();
// Permite JSON
app.use(express.json());
// Rotas de alunos
const alunosRoutes = require("./routes/alunosRoutes");
const cursosRoutes = require("./routes/cursosRoutes");
const matriculasRoutes = require("./routes/matriculasRoutes");

app.use("/alunos", alunosRoutes);
app.use("/cursos", cursosRoutes);
app.use("/matriculas", matriculasRoutes);

app.get("/", (req, res) => {
res.json({ mensagem: "API Express funcionando!" });
});
app.listen(3000, () => {
console.log("Servidor rodando em http://localhost:3000");
});