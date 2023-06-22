const router = require('express').Router();
const { where } = require('sequelize');
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products

  Category.findAll({
    include: [Product]
  }).then(categories => res.json(categories))
    .catch((error) => res.status(500).json(error))
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const categories = await Category.findOne({
      where: {
        id: req.params.id
      },
      include: [Product]
    })
    res.json(categories)
  } catch (error) {
    console.log(error)
  }
});

router.post('/', async (req, res) => {
  // create a new category
  /*
   {
    "category_name": "tools"
   }
  */
  try {
    const categories = await Category.create(req.body)
    res.json(categories)
  } catch (error) {
    console.log(error)
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const categories = await Category.update(req.body, {
      where: {
        id: req.params.id
      },
    })
    res.json(categories)
  } catch (error) {
    console.log(error)
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const categories = await Category.destroy({
      where: {
        id: req.params.id
      },
    })
    res.json(categories)
  } catch (error) {
    console.log(error)
  }
});

module.exports = router;
