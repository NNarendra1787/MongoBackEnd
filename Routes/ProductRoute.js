const { addProducts, addProductsTodb, fetchData, fetchPerticularbyCat, fetchParticularbysubCat, deleteProduct, searchproduct, getProductsByFilter, addNewProduct } = require("../DatabaseController/Products");

const productRoute = require("express").Router();

productRoute.post('/data', addProducts);
productRoute.post('/newProd', addNewProduct);
productRoute.post("/datas", addProductsTodb);

productRoute.get("/fetchdata", fetchData);
productRoute.get("/fetchbycart/:cat", fetchPerticularbyCat)
productRoute.get("/fetchbysubcat/:comp", fetchParticularbysubCat)
productRoute.delete("/deleteall", deleteProduct);
// productRoute.get("/search/:title", searchproduct)
productRoute.get("/search/:title", getProductsByFilter)
// productRoute.get("/search/:decriptions", getProductsByFilter)


module.exports = productRoute;