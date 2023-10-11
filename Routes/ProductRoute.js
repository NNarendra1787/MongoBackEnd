const { addProducts, addProductsTodb, fetchData, fetchPerticularbyCat, fetchParticularbysubCat, deleteProduct, searchproduct } = require("../DatabaseController/Products");

const productRoute = require("express").Router();

productRoute.post('/data', addProducts);
productRoute.post("/datas", addProductsTodb);

productRoute.get("/fetchdata", fetchData);
productRoute.get("/fetchbycart/:cat", fetchPerticularbyCat)
productRoute.get("/fetchbysubcat/:comp", fetchParticularbysubCat)
productRoute.delete("/deleteall", deleteProduct);
productRoute.get("/search", searchproduct)

module.exports = productRoute;