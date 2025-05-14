import Book from "../model/book.model.js";

export const getBook=async(res,req)=>{
    try{
        const book= await Book.find();
        req.status(200).json(book);
    }catch(error){
        console.log("error: ",error);
        res.status(500).json(error);
    }
}