"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookRoutes = void 0;
const express_1 = __importDefault(require("express"));
const book_controller_1 = require("./book.controller");
const router = express_1.default.Router();
router.post('/add-book', book_controller_1.BookController.createBook);
router.post('/comment/:id', book_controller_1.BookController.createBookComment);
router.get('/comment/:id', book_controller_1.BookController.getAllBookComment);
router.get('/limit', book_controller_1.BookController.getLimitBook);
router.get('/', book_controller_1.BookController.getAllBook);
router.get('/:id', book_controller_1.BookController.getSingleBook);
router.patch('/:id', book_controller_1.BookController.updateBook);
router.delete('/:id', book_controller_1.BookController.deleteBook);
exports.BookRoutes = router;
