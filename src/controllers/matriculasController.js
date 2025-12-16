const { Aluno, Curso, Matricula } = require("../models");

async function list(req, res) {
   try {
      const matriculas = await Matricula.findAll({
         include: [Aluno, Curso]
      });
      res.json(matriculas);
   } catch {
      res.status(500).json({ erro: "Erro ao listar matrículas" });
   }
}

async function searchById(req, res) {
   try {
      const matricula = await Matricula.findByPk(req.params.id, {
         include: [Aluno, Curso]
      });
      if (!matricula) return res.status(404).json({ erro: "Matrícula não encontrada" });
      res.json(matricula);
   } catch {
      res.status(500).json({ erro: "Erro ao buscar matrícula" });
   }
}

async function create(req, res) {
   try {
      const { alunoId, cursoId} = req.body;

      if (!alunoId || !cursoId) {
         return res.status(400).json({
            erro: "alunoId e cursoId são obrigatórios"
         });
      }

      const aluno = await Aluno.findByPk(alunoId);
      const curso = await Curso.findByPk(cursoId);

      if (!aluno || !curso) {
         return res.status(400).json({ erro: "Aluno ou Curso inválido" })
      }

      const nova = await Matricula.create({
         alunoId,
         cursoId
      })

      res.status(201).json(nova);
   } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao criar matrícula" });
   }
}

async function remove(req, res) {
   try {
      const matricula = await Matricula.findByPk(req.params.id);
      if (!matricula) return res.status(404).json({ erro: "Matrícula não encontrada" });
      await matricula.destroy();
      res.json({ mensagem: "Matrícula removida com sucesso!" });
   } catch {
      res.status(500).json({ erro: "Erro ao excluir matrícula" });
   }
}

module.exports = { list, searchById, create, remove };