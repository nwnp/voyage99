/** 생년월일을 입력 받아 만 나이로 계산 */
function getAge(dateOfBirth) {
  // 자바스크립트에 내장된 Date 객체를 이용하면 현재 시간을 구할 수 있다.
  const now = new Date();
  const birth = new Date(dateOfBirth);

  const age = now.getFullYear() - birth.getFullYear();
  const isBirthdayOver =
    now.getMonth() - birth.getMonth() >= 0 &&
    now.getDate() - birth.getDate() >= 0;

  if (isBirthdayOver) {
    return age;
  }

  return age - 1;
}
