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
      for(let i=0; i<this.books.length; i++){
        console.log('--------'+this.books[i].price+'-------'+this.books[i].count);
        sum += this.books[i].price * this.books[i].count;
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