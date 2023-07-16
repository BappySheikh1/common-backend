import { IBook } from './book.interface'
import { Book } from './book.model'

const createBook = async (payload: IBook): Promise<IBook | null> => {
  const result = await Book.create(payload)
  return result
}
const getAllBook = async (): Promise<IBook[] | null> => {
  const result = await Book.find({})
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
  getAllBook,
  getSingleBook,
  deleteBook,
  updateBook,
}
