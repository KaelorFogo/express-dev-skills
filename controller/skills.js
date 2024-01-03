const Skills = require('../models/skill');

module.exports = {
  index,
  show
};

function show(req, res){
  const skills = Skills.getOne(req.params.id);
  res.render('skills/show', { skills });
}

function index(req, res) {
  res.render("skills/index", {
    todos: Skills.getAll(),
  });
}