import { makeAutoObservable } from "mobx";
import Products from "../Products";
import generateId from "../IDGenerator";

class ProductStore{
  //observable
  
  products = Products
  product= {
    category : "",
    price : "",
    stocked : true,
    name : "",
    id :  generateId(5)
  }
  filterText = "";
  inStockOnly = false;
  

  constructor(){
    makeAutoObservable(this)
  }

  //action 
  handlerFilterTextChange(filterText){
    this.filterText = filterText // argument로 들어온 filterText로 바꿔준다 
  }

 handlerInStockChange(inStockChange){
   this.inStockOnly = inStockChange
 }

  handlerChange=(value,name)=>{
    console.log(value,name)
    this.product = {...this.product, [name]:value}
  }

 handlerAdd=()=>{
  
  let price = "$" + this.product.price;
  this.product = {...this.product, price:price , id :  generateId(5)};
  this.products = this.products.concat(this.product).sort(function(a,b) {
    return a.category > b.category ? -1 : a.category < b.category ? 1: 0;
  })
  this.init();
  
 };

 handlerSelect=(product)=>{
   console.log(product.id)
  this.product = product
 }

 handlerRemove=()=>{
   this.products = this.products.filter((element)=> element.id !== this.product.id)
   this.init();
 }

 handlerModify=()=>{
  this.products = this.products.map((element)=>(element.id === this.product.id ? this.product:element))
  this.init();
 }

 init=()=>{
   this.product= {
  category : "",
  price : "",
  stocked : "",
  name : "",
}

 }
}


export default new ProductStore(); 