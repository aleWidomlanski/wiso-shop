import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../../database'
import { Product } from '../../../models'
import { IProduct } from '../../../interfaces/products';

type Data = IProduct[] | {message: string}


export default function handler (req: NextApiRequest, res: NextApiResponse<Data>) {
    switch (req.method) {
        case 'GET':
            return getProducts(req, res)
      
        default:
            return res.status(400).json({
                message: 'Bad request'
            })
    }
}

async function getProducts (req: NextApiRequest, res: NextApiResponse<Data>) {
    
    const {gender= 'all'} = req.query 

    console.log(gender)

    let condition = {}

    if(gender !== 'all') {
        condition = {gender}
    }
  
    await db.connect();
    const products = await Product.find(condition)
                                   .select('title images price inStock -_id')
                                   .lean()
    await db.disconnect()
    return res.status(200).json(products)
}
