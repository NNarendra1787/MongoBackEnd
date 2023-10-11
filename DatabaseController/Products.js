const product  = require("../ModuleSchema/ProductsSchema");
const data = require("./data");
const searchbar = require("./searchbar")

const addProducts = async (req, res)=>{
    const result = await product.insertMany(data);
    return res.send({msg: "user data has been stored", result})
};

const addProductsTodb = async (req, res)=>{
    const data = req.body;
    const {no,title,title2,image,rating,price,crossPrice,decription,cat,comp} = data
    
    const result = await product.insertMany({no,title,title2,image,rating,price,crossPrice,decription,cat,comp})

    return res.send({msg: "User data has been stored", result: result});
}

const fetchData = async (req, res)=>{
    const data = req.body;
    const result = await product.find();
    return res.send({result:result})
}

const fetchPerticularbyCat = async (req, res)=>{
    const data = req.body;
    const {cat } = req.params;
    const result = await product.find({cat: cat});
    return res.send({result: result})
}
const fetchParticularbysubCat = async (req, res)=>{
    const data = req.body;
    const { comp } = req.params;
    const result = await product.find({comp: comp});
    res.send({result: result})
}

const deleteProduct = async (req, res) => {
    const data = req.body;
    const result = await product.deleteMany();
    return res.send({ msg: "data has been deleted", result: result });
  };
  const searchproduct = async (req, res) => {
    const data = req.query;
    const result = new searchbar(product.find(), data).search();
    const products = await result.query;
    return res.send(products);
  };

  module.exports = {
    addProducts,
    addProductsTodb,
    fetchData,
    fetchPerticularbyCat,
    fetchParticularbysubCat,
    deleteProduct,
    searchproduct,
  }