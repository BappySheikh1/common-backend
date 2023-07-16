import express from 'express'
import { BookController } from './book.controller'
const router = express.Router()

router.post('/add-book', BookController.createBook)
router.post('/comment/:id', BookController.createBookComment)
router.get('/comment/:id', BookController.getAllBookComment)
router.get('/limit', BookController.getLimitBook)
router.get('/', BookController.getAllBook)
router.get('/:id', BookController.getSingleBook)
router.patch('/:id', BookController.updateBook)
router.delete('/:id', BookController.deleteBook)

export const BookRoutes = router;
