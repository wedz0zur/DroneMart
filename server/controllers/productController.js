import Product from "../models/Product.js";

class ProductController {
  async addProduct(req, res) {
    try {
      const { name, price, description } = req.body;
      
      const product = new Product({
        name,
        description,
        price,
        // createdBy: req.user.id 
      });

      await product.save();
      return res.status(200).json("Продукт успешно добавлен!");
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: "Ошибка добавления продукта" });
    }
  }

  async deleteOneProduct(req, res) {
    try {

    //   if(req.user.roles[0] !== "Admin") {
    //     console.log('Нет доступа');
    //     return res.status(200).json({error: "Нет доступа"})
    //   }

      const id = req.params.id;
      const product = await Product.findByIdAndDelete({ "_id": id });
      res.json({message: "Product deleted", product});
    } catch (e) {}
  }

  async getProducts(req, res) {
    try {
      const products = await Product.find();
      res.json(products);
    } catch (e) {}
  }

  async getOneProduct(req, res) {
    console.log(req.params);
    
    try {
      const id = req.params.id;
      const product = await Product.findById({ "_id": id });
      res.json(product);
    } catch (e) {}
  }

  async updateProduct(req, res) {
    try {

    //   if(req.user.roles[0] !== "Admin") {
    //     console.log('Нет доступа');
    //     return res.status(200).json({error: "Нет доступа"})
    //   }

      const id = req.params.id;
      const {name, price, description} = req.body;
      const product = await Product.findByIdAndUpdate({ "_id": id }, {name: name, price: price, description: description});
      
      res.status(200).json({message: "Продукт изменен"})
    } catch (e) {
      console.log(e);
    }
  }


}

export default new ProductController();
