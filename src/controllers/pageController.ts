import { Request, Response } from "express";

 export const home = (req: Request, res: Response) =>{
    res.send('Home no controller')
    //res.render('pages/page')
}

export const cats = (req: Request, res: Response) =>{
    res.send('Cats funcionando')
    //res.render('pages/cats')
}

export const dogs = (req: Request, res: Response) =>{
    //res.render('pages/dogs')
}

export const fishes = (req: Request, res: Response) =>{
    //res.render('pages/fishes')
}