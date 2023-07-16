import httpStatus from 'http-status'
import ApiError from '../../../errors/ApiError'
import { IBook } from './book.interface'
import { Book } from './book.model'

const createBook = async (payload: IBook): Promise<IBook | null> => {
  const result = await Book.create(payload)
  return result
}
const createBookComment = async (
  bookId: string,
  comment: string
): Promise<IBook | null> => {
  const result = await Book.updateOne(
    { _id: bookId },
    { $push: { reviews: comment } }
  )

  console.log(result)

  if (result.modifiedCount !== 1) {
    console.error('Book not found or comment not added')
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      'Book not found or comment not added'
    )
  }

  const book = await Book.findOne({ _id: bookId })
  return book
}

const getAllBookComment = async (bookId: string): Promise<IBook | null> => {
  console.log(bookId), 'service product'
  const result = await Book.findOne(
    { _id: bookId },
    { projection: { reviews: 1 } }
  )
  return result
}
const getAllBook = async (): Promise<IBook[] | null> => {
  const result = await Book.find({})
  return result
}
const getLimitBook = async (): Promise<IBook[] | null> => {
  const result = await Book.find({}).sort({ createdAt: -1 }).limit(10)
  return result
}
const getSingleBook = async (id: string): Promise<IBook | null> => {
  const result = await Book.findById(id)
  return result
}
const deleteBook = async (id: string): Promise<IBook | null> => {
  const result = await Book.findByIdAndDelete(id)
  return result
}
const updateBook = async (
  id: string,
  payload: Partial<IBook>
): Promise<IBook | null> => {
  const result = await Book.findByIdAndUpdate({ _id: id }, payload, {
    new: true,
  })
  return result
}

export const BookService = {
  createBook,
  createBookComment,
  getAllBookComment,
  getAllBook,
  getLimitBook,
  getSingleBook,
  deleteBook,
  updateBook,
}
