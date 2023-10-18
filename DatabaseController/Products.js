const product = require("../ModuleSchema/ProductsSchema");
const data = require("./data");
const searchbar = require("./searchbar");

const addProducts = async (req, res) => {
  const result = await product.insertMany(data);
  return res.send({ msg: "user data has been stored", result });
};

async function addNewProduct(req, res) {
  try {
    const deta = req.body;
    const newuser = await product.create(deta);
    res.status(200).send({ Client: newuser });
  } catch (e) {
    res.status(500).send({ err: e });
  }
}

const addProductsTodb = async (req, res) => {
  const data = req.body;
  const {
    no,
    title,
    title2,
    image,
    rating,
    price,
    crossPrice,
    decription,
    cat,
    comp,
  } = data;

  const result = await product.insertMany({
    no,
    title,
    title2,
    image,
    rating,
    price,
    crossPrice,
    decription,
    cat,
    comp,
  });

  return res.send({ msg: "User data has been stored", result: result });
};

const fetchData = async (req, res) => {
  const data = req.body;
  const result = await product.find();
  return res.send({ result: result });
};

const fetchPerticularbyCat = async (req, res) => {
  const data = req.body;
  const { cat } = req.params;
  const result = await product.find({ cat: cat });
  return res.send({ result: result });
};
const fetchParticularbysubCat = async (req, res) => {
  const data = req.body;
  const { comp } = req.params;
  const result = await product.find({ comp: comp });
  res.send({ result: result });
};

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

const getProductsByFilter = async (req, res) => {
  try {
    const title = req.params.title;
    const regex = new RegExp(title, "i");
    const Product = await product.find({ title: regex });
    res.send(Product);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error while getting a category",
      error,
    });
  }
};
// const getProductsByFilter = async(req,res)=>{
//     try{
//       const decriptions = req.params.decriptions;
//       const regex = new RegExp(decriptions, 'i')
//    const Product = await product.find({ decriptions: regex });
//       res.send(Product);
//     } catch (error) {
//       res.status(500).json({
//         success: false,
//         message: "Error while getting a category",
//         error,
//       });
//     }
//   }

module.exports = {
  addNewProduct,
  addProducts,
  addProductsTodb,
  fetchData,
  fetchPerticularbyCat,
  fetchParticularbysubCat,
  deleteProduct,
  searchproduct,
  getProductsByFilter,
};
