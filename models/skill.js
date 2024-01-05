const skills = [
  {id:1234, language:'JavaScript', learned: true},
  {id:1235, language:'HTML', learned: true},
  {id:1236, language:'CSS', learned: false},
  {id:1236, language:'Express', learned: false}
];

module.exports = {
  getAll,
  getOne,
  create,
  update,
  deleteOne
}

function update(id, updatedSkills) {
  id = parseInt(id);
  const skills = skills.find(skill => skill.id === id);
  Object.assign(skills, updatedSkills);
}

function create(skill) {
  // Add the id
  skill.id = Date.now() % 10000;
  skill.learned = false;
  skills.push(skill);
}


function deleteOne(id) {
  id = parseInt(id);
  // Find the index for the todo
  const idx = skills.findIndex(skills => skills.id === id);
  skills.splice(idx, 1);
}

function getAll(){
  return skills;
}

function getOne(id){
  id = parseInt(id);
  return skills.find((skills) => skills.id === id);
}