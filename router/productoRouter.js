const router = require("express").Router();
const productoController = require("../controller/productosController");

router.get("/",productoController.home)
router.get("/products/list",productoController.list);

router.get("/products/create",productoController.create);

router.get("/create",productoController.stock);
router.post("/create",productoController.stock);

/*** DETAIL ONE PRODUCT ***/ 
router.get("/products/:id", productoController.detail)
router.get("/products/delete/:id", productoController.delete)
router.delete("/:id", productoController.destroy)

/*** EDIT ONE PRODUCT ***/
router.get("/products/:id/edit", productoController.editProd)
router.patch("/:id", productoController.update);



module.exports = router;
