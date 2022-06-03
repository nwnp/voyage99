/** 20세 미만 출력 함수 */
function getChildren(persons) {
  return persons.filter((person) => person.age < 20);
}
