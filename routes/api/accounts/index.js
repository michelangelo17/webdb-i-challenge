const db = require('../../../data/dbConfig')
const router = require('express').Router()
const {
  valAccountsPost,
  valId,
  valAccountsPut,
} = require('../../../middleware')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    console.log(req.query)
    res.status(200).json(await db('accounts'))
  } catch (e) {
    next(e)
  }
})

router.get('/:id', valId(db), async (req, res, next) => {
  try {
    res.status(200).json(
      await db('accounts')
        .where('id', req.params.id)
        .first()
    )
  } catch (e) {
    next(e)
  }
})

router.post('/', valAccountsPost, async (req, res, next) => {
  try {
    const [id] = await db('accounts').insert({
      name: req.body.name,
      budget: req.body.budget,
    })
    res.status(201).json(
      await db('accounts')
        .where('id', id)
        .first()
    )
  } catch (e) {
    next(e)
  }
})

router.put('/:id', valId(db), valAccountsPut, async (req, res, next) => {
  try {
    await db('accounts')
      .where('id', req.params.id)
      .update({ ...req.body })
    res.status(200).json(
      await db('accounts')
        .where('id', req.params.id)
        .first()
    )
  } catch (e) {
    next(e)
  }
})

router.delete('/:id', valId(db), async (req, res, next) => {
  try {
    await db('accounts')
      .where('id', req.params.id)
      .del()
    res.status(200).json(await db('accounts'))
  } catch (e) {
    next(e)
  }
})
