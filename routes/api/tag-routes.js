const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tags = await Tag.findAll({
      include: [{
        model: Tag,
        through: ProductTag
      }]
    })
    res.json(tags)
  } catch (error) {
    console.log(error)
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tag = await Tag.findOne({
      where: {
        id: req.params.id
      },
      include: [{
        model: Product,
        through: ProductTag
      }]
    })
    res.json(tag)
  } catch (error) {
    console.log(error)
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const tag = await Tag.create(req.body)
    res.json(tag)
  } catch (error) {
    console.log(error)
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const tag = await Tag.update(req.body, {
      where: {
        id: req.params.id
      },
    })
    res.json(tag)
  } catch (error) {
    console.log(error)
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const tag = await Tag.destroy({
      where: {
        id: req.params.id
      },
    })
    res.json(tag)
  } catch (error) {
    console.log(error)
  }
});

module.exports = router;
