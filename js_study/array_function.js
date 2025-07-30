const arr = [10, 20, 30];
//모든 배열 요소 출력하기
// for (let i = 0; i < arr.length; ++i) {
//   console.log(arr[i]);
// }

// for (a of arr) {
//   console.log(a);
// }

// forEach를 사용해서 요소하나씩 사용
// arr.forEach(f01);
// forEach : 어떤 함수를 인자값으로 받음

// function f01(x) {
//   console.log(x);
// }

// forEach 사용
// arr.forEach((x) => {
//   console.log(x);
// });

// filter 사용
// 리턴값이 true인 경우에 해당하는 요소들을 걸러서 새로운 배열 만듦(단, 리턴값이 false 인 경우는 제외)
// const result = arr.filter((x) => {
//   return x >= 20;
// });
// console.log('result :', result);
//+ 는 연산을 가지고 출력되고 , 는 그대로 출력되므로 값이 다르게 나옴
/*
  log 에서 arr 출력할때 [10, 20, 30] 으로 보이는건 json 형식으로 출력되는 거고 
  10,20,30 이 되는건 string 형으로 나오는건데 
  js에서 배열을 string형으로 만들어주는건 arr.join(",") 이랑 똑같이 동작한다고 보시면됩니다.
 */
/*
  forEach와 filter의 차이점 리턴값이 다름
*/

//map : 함수를 전달받아 동작 | 리턴값들을 모아 새로운 배열을 만듦
// const result = arr.map((x) => {
//   return '안녕';
// });
// console.log(result);

// const result = arr.map((x) => {
//   return x * 10;
// });
// console.log(result);

// const result = arr.map((x, y) => {
//   console.log('x :', x);
//   console.log('y :', y);

//   return x * 10;
// });
// console.log(result);

// reduce : 함수와 초기값 전달받아 동작 | 배열의 요소들로 결과값 만듦
// 함수만 사용 = (리턴값,현재값) => {}
// arr.reduce((x, y) => {
//   console.log('x :', x);
//   console.log('y :', y);
// }, 0);
const result = arr.reduce((x, y) => {
  return 'kkk';
}, 100);
console.log(result);
