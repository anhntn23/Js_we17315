// cấu trúc mảng
// mô phỏng ứng dụng giao hàng tận nơi

'use strict';

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian','Pizzeria','Vegetarian','Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    order: function(starterIndex, mainIndex){
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    }
};
const arr = [2,3,4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x,y,z] = arr;
console.log(x,y,z);
console.log(arr);

let [main, secondary] = restaurant.categories; //lấy lần lượt các phần tử trong mảng categories
console.log(main, secondary);
//ví dụ lấy phần tử thứ 1 và thứ 3 và bỏ qua phần tử thứ 2
// const [first, , second] = restaurant.categories; 
// console.log(first, second);

// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main]
console.log(main, secondary);

//cách tạo ngay lập tức hai biến hai biến từ một lệnh gọi hàm
//cách nhận hai giá trị trả về từ một hàm
const [starter, mainCourse] =  restaurant.order(2, 0);
console.log(starter, mainCourse);

//mảng lồng nhau
const nested = [2, 4, [5, 6]];
const [i, ,j] = nested; //khoảng trống ở giữa i vaf j tức là không lấy giá trị ở giữa mà chỉ lấy 2 và mảng 5, 6
console.log(i, j);

//lấy các phần tử 5 và 6 riêng biệt không ở trong cùng 1 mảng mà tách nhau ra
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

//gán trực tiếp các giá trị cho biến
const [p = 1, q = 1, r = 1] = [8]; // kết quả trả về là 8, 1, 1
console.log(p, q, r);