"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const book_model_1 = require("./book.model");
const createBook = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield book_model_1.Book.create(payload);
    return result;
});
const createBookComment = (bookId, comment) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield book_model_1.Book.updateOne({ _id: bookId }, { $push: { reviews: comment } });
    console.log(result);
    if (result.modifiedCount !== 1) {
        console.error('Book not found or comment not added');
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, 'Book not found or comment not added');
    }
    const book = yield book_model_1.Book.findOne({ _id: bookId });
    return book;
});
const getAllBookComment = (bookId) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(bookId), 'service product';
    const result = yield book_model_1.Book.findOne({ _id: bookId });
    return result;
});
const getAllBook = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield book_model_1.Book.find({});
    return result;
});
const getLimitBook = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield book_model_1.Book.find({}).sort({ createdAt: -1 }).limit(10);
    return result;
});
const getSingleBook = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield book_model_1.Book.findById(id);
    return result;
});
const deleteBook = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield book_model_1.Book.findByIdAndDelete(id);
    return result;
});
const updateBook = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield book_model_1.Book.findByIdAndUpdate({ _id: id }, payload, {
        new: true,
    });
    return result;
});
exports.BookService = {
    createBook,
    createBookComment,
    getAllBookComment,
    getAllBook,
    getLimitBook,
    getSingleBook,
    deleteBook,
    updateBook,
};
