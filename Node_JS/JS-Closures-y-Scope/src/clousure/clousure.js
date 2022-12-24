function greting() {
  let userName = 'Angel';

  function displayUserName() {
    return `Hi ${userName}`;
  }
  return displayUserName;
}

const g = greting();

console.log(g());
