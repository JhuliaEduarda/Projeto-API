const { Aluno, Curso } = require("../models");

async function list(req, res) {
  try {
      const alunos = await Aluno.findAll();
      res.json(alunos);
  } catch {
      res.status(500).json({ erro: "Erro ao listar alunos" });
  }
}

async function listCourses(req, res) {
  try {
    const aluno = await Aluno.findByPk(req.params.id, {
      include: {
        model: Curso,
        through: { attributes: [] }
      }
    });

    if (!aluno) {
      return res.status(404).json({ erro: "Aluno não encontrado" });
    }

    res.json(aluno.Cursos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: "Erro ao buscar cursos do aluno" });
  }
}

async function searchById(req, res) {
    try {
        const aluno = await Aluno.findByPk(req.params.id);
        if (!aluno) return res.status(404).json({ erro: "Aluno não encontrado" });
        res.json(aluno);
    } catch {
        res.status(500).json({ erro: "Erro ao buscar aluno" });
    }
}

async function create(req, res) {
    try {
        const novo = await Aluno.create(req.body);
        res.status(201).json(novo);
    } catch {
        res.status(500).json({ erro: "Erro ao criar aluno" });
    }
}

async function update(req, res) {
    try {
        const aluno = await Aluno.findByPk(req.params.id);
        if (!aluno) return res.status(404).json({ erro: "Aluno não encontrado" });
        await aluno.update(req.body);
        res.json(aluno);
    } catch {
        res.status(500).json({ erro: "Erro ao atualizar aluno" });
    }
}

async function remove(req, res) {
    try {
        const aluno = await Aluno.findByPk(req.params.id);
        if (!aluno) return res.status(404).json({ erro: "Aluno não encontrado" });
        await aluno.destroy();
        res.json({ mensagem: "Aluno removido com sucesso!" });
    } catch {
        res.status(500).json({ erro: "Erro ao excluir aluno" });
    }
}

module.exports = { list, listCourses, searchById, create, update, remove };