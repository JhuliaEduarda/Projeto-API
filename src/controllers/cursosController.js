const { Curso, Aluno } = require("../models");

async function list(req, res) {
    try {
        const cursos = await Curso.findAll();
        res.json(cursos);
    } catch {
        res.status(500).json({ erro: "Erro ao listar cursos" });
    }
}

async function listStudent(req, res) {
  try {
    const curso = await Curso.findByPk(req.params.id, {
      include: {
        model: Aluno,
        through: { attributes: [] }
      }
    });

    if (!curso) {
      return res.status(404).json({ erro: "Curso não encontrado" });
    }

    res.json(curso.Alunos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: "Erro ao buscar alunos do curso" });
  }
}

async function searchById(req, res) {
    try {
        const curso = await Curso.findByPk(req.params.id);
        if (!curso) return res.status(404).json({ erro: "Curso não encontrado" });
        res.json(curso);
    } catch {
        res.status(500).json({ erro: "Erro ao buscar curso" });
    }
}

async function create(req, res) {
    try {
        const novo = await Curso.create(req.body);
        res.status(201).json(novo);
    } catch {
        res.status(500).json({ erro: "Erro ao criar curso" });
    }
}

async function update(req, res) {
    try {
        const curso = await Curso.findByPk(req.params.id);
        if (!curso) return res.status(404).json({ erro: "Curso não encontrado" });
        await curso.update(req.body);
        res.json(curso);
    } catch {
        res.status(500).json({ erro: "Erro ao atualizar curso" });
    }
}

async function remove(req, res) {
    try {
        const curso = await Curso.findByPk(req.params.id);
        if (!curso) return res.status(404).json({ erro: "Curso não encontrado" });
        await curso.destroy();
        res.json({ mensagem: "Curso removido com sucesso!" });
    } catch {
        res.status(500).json({ erro: "Erro ao excluir curso" });
    }
}

module.exports = { list, listStudent, searchById, create, update, remove };