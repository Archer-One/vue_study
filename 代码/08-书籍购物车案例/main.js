const app = new Vue({
  el: '#app',
  data: {
    books: [
      {
      id: 1,
      name: '《算法导论》',
      date: '2006-9',
      price: 85.00,
      count: 1
    },
    {
      id: 2,
      name: '《UNIX编程艺术》',
      date: '2006-9',
      price: 90.00,
      count: 1
    },
    {
      id: 3,
      name: '《编程珠玑》',
      date: '2006-9',
      price: 100.00,
      count: 1
    },
    {
      id: 4,
      name: '《计算机基础》',
      date: '2006-9',
      price: 110.00,
      count: 1
    }
    ]
  },
  methods:{
    getPrice(price){
      return '￥'+price.toFixed(2);
    },
    decrement(index) {
      if(this.books[index].count>0)
        this.books[index].count--;
    },
    increment(index) {
      this.books[index].count++;
    },
    removeHandler(index){
      this.books.splice(index,1);
    }
  },
  computed:{
    totalPrice(){
      let sum = 0;
      // for(let i=0; i<this.books.length; i++){
      //   console.log('--------'+this.books[i].price+'-------'+this.books[i].count);
      //   sum += this.books[i].price * this.books[i].count;
      // }


      for(let i in this.books){
        sum += this.books[i].price * this.books[i].count;
      }

      for(let item of this.books){
        sum += item.count * item.price;
      }

      return sum;
    }
  },
  filters:{
    showPrice(price){
      return '￥'+price.toFixed(2);
    }
  }

})

//filter
//filter中的回调函数有一个要求：返回值必须是Boolean值
//true: 当返true时，函数内部会自动将这次回调的n加入到新的数组中
//false：当返回false时，函数内部会过滤掉这次的n
const  nums = [10, 20, 30, 111, 225, 250, 330]

let newNums = []
newNums = nums.filter(function (n){
  if(n>=100)
    return true;
  else
    return false;
})

newNums.map(function (n){
  return n*2;
})

//reduce作用是对数组中所有元素进行汇总
newNums.reduce(function (preValue,n){
  return preValue+n
},0)

total = nums.filter(function (n){
  return n>100
}).map(function (n){
  return n*2
}).reduce(function (preValue,n){
  return preValue + n
},0)

total = nums.filter(n => n>100).map(n => n*2).reduce((prev,n) => prev + n);


