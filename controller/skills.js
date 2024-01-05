const Skills = require('../models/skill');

module.exports = {
  index,
  show,
  new: newSkills,
  create,
  delete: deleteSkill,
  update
};

function update(req, res) {
  req.body.done = !!req.body.done;
  Skills.update(req.params.id, req.body);
  res.redirect(`/skills/${req.params.id}`);
}

function create(req, res) {
  console.log(req.body);
  // Models are responible for CRUD'ing the data
  Skills.create(req.body);
  // Always do a redirect when data has been changed
  res.redirect('/skills');
}

function newSkills(req, res) {
  res.render('skills/new', { title: 'New Skill' });
}

function deleteSkill(req, res) {
  Skills.deleteOne(req.params.id);
  res.redirect('/skills');
}

function show(req, res){
  const skills = Skills.getOne(req.params.id);
  res.render('skills/show', { skills });
}

function index(req, res) {
  res.render("skills/index", {
    todos: Skills.getAll(),
  });
}