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
const getAllBook = catchAsync(async (req: Request, res: Response) => {
  const result = await BookService.getAllBook()

  sendResponse<IBook[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Book get successfully',
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
  const { id } = req.params
  const updateBook  = req.body
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
  getAllBook,
  getSingleBook,
  deleteBook,
  updateBook,
}
