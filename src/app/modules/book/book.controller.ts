import httpStatus from 'http-status'
import sendResponse from '../../../shared/sendResponse'
import { IBook } from './book.interface'
import { BookService } from './book.service'
import catchAsync from '../../../shared/catchAsync'
import { Request, Response } from 'express'

const createBook = catchAsync(async (req: Request, res: Response) => {

  const { ...book } = req.body
  const result = await BookService.createBook(book)

  sendResponse<IBook>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book created successfully',
    data: result,
  })
})
const createBookComment = catchAsync(async (req: Request, res: Response) => {
  const bookId = req.params.id
  const comment = req.body.reviews
  console.log(bookId,"book id")
  console.log(comment,"user comment")
  const result = await BookService.createBookComment(bookId, comment)

  sendResponse<IBook>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book created successfully',
    data: result,
  })
})
const getAllBookComment = catchAsync(async (req: Request, res: Response) => {
  const bookId = req.params.id
  console.log(bookId),"service product"
  const result = await BookService.getAllBookComment(bookId)

  sendResponse<IBook>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book Comment retrieved successfully',
    data: result,
  })
})
const getLimitBook = catchAsync(async (req: Request, res: Response) => {
  const result = await BookService.getLimitBook()

  sendResponse<IBook[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book retrieved  successfully',
    data: result,
  })
})
const getAllBook = catchAsync(async (req: Request, res: Response) => {
  const result = await BookService.getAllBook()

  sendResponse<IBook[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book retrieved successfully',
    data: result,
  })
})
const getSingleBook = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id
  const result = await BookService.getSingleBook(id)

  sendResponse<IBook>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'SingleBook get successfully',
    data: result,
  })
})
const deleteBook = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id
  const result = await BookService.deleteBook(id)

  sendResponse<IBook>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book deleted successfully',
    data: result,
  })
})
const updateBook = catchAsync(async (req: Request, res: Response) => {
  console.log(req.body)
  const { id } = req.params
  const updateBook = req.body
  const result = await BookService.updateBook(id, updateBook)

  sendResponse<IBook>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book updated successfully',
    data: result,
  })
})

export const BookController = {
  createBook,
  createBookComment,
  getAllBookComment,
  getAllBook,
  getLimitBook,
  getSingleBook,
  deleteBook,
  updateBook,
}
