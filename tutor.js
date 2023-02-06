const tendoibong = ["ten1","ten2","ten3","ten4"];
console.log(tendoibong);

//1
for (let item of tendoibong){
    console.log(item);
}
//
for (let item in tendoibong){
    console.log(item);
}
//foreach
tendoibong.forEach(function(team, index){
    console.log(team + "-" + index);
})
//2. thêm cuối mảng
tendoibong.push("ten5");
console.log(tendoibong);
//splice
const length = tendoibong.length
tendoibong.splice(length,1, "ten6");
console.log(tendoibong);
//3.Xóa
const index = tendoibong.indexOf("ten6");
console.log(tendoibong);
//splice
tendoibong.splice(index-1);
console.log(tendoibong);
//4. Sửa 
// const indexsua = tendoibong.indexOf("ten4");
// tendoibong[indexsua] = "5";
// const newArray = tendoibong.map(function(team, index){
//     if(team == "ten4"){
//         return "ten7";
//     }
//     return team;
// })
//5. find
const team = tendoibong.find(function(team){
    return team.toLowerCase() === "ten3".toLowerCase();
})
console.log(team);
// Tìm đội bóng chỉ nhập 3 chữ cái đầu

//6. lọc
const filtered = tendoibong.filter(function(team){
    return team = "ten";
})
console.log(filtered);