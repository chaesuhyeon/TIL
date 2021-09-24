import generateId from "./IDGenerator";

const Products = [
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" ,id :  generateId(5)},
{category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" ,  id :  generateId(5)},
{category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" , id :  generateId(5)},
{category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" , id :  generateId(5)},
{category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" , id :  generateId(5)},
{category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" , id :  generateId(5)}
];

export default Products;