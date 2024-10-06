const express = require('express');

const ProductService = require('../Services/product.service')

const router = express.Router();
const serviceProduct = new ProductService();


router.get('/', (req, res) => {
  res.json(serviceProduct.find());
});

router.post('/', (req, res) => {
  const body = req.body;
  const product = serviceProduct.create(body);
  res.status(200).json(product);
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const product = serviceProduct.findOne(id);

  try{
    if(product === 'undefined'){
      res.status(202);
    }else{
      res.status(204).json(product);
    }
  }catch(error){
    res.status(500);
  }

});

router.put('/:id', (req, res) => {
  const {id} = req.params;
  const body = req.body;
  const updateProduct = serviceProduct.update(id, body);
  res.status(200).json(updateProduct);

});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const updateProduct = serviceProduct.delete(id);
  res.json(updateProduct);
});

module.exports = router;
