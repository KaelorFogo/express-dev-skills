const skills = [
  {id:1234, language:'JavaScript', learned: true},
  {id:1235, language:'HTML', learned: true},
  {id:1236, language:'CSS', learned: false},
  {id:1236, language:'Express', learned: false}
];

module.exports = {getAll,getOne}

function getAll(){
  return skills;
}

function getOne(id){
  id = parseInt(id);
  return skills.find((skills) => skills.id === id);
}