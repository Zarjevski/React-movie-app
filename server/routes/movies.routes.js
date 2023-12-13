import express from 'express'
import { singleShow, getByCategory, getFeatured } from '../controller/shows.controller.js'

const router = express.Router()


router.get('/:type/:id', singleShow)
router.get('/:type/category/:category', getByCategory)
router.get("/discover/:type")
router.get("/featured", getFeatured)

export default router