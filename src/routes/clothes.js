'use strict'
const express =require('express')
const {theClothes}=require('../ models/index')
const router =express.Router()

router.get('/clothes',getClothes)
router.get('/clothes/:id',getClothesById)
router.post('/clothes',addClothes)
router.put('/clothes/:id',updateClothesById)
router.delete('/clothes/:id',deleteClothes)


async function getClothes (req,res){
const allClothes = await theClothes.findAll()
res.status(200).json(allClothes)
}


async function getClothesById(req,res){
    const id= req.params.id
    const idClothes = await theClothes.findOne({where:{id} })
    res.status(200).json(idClothes)

}

async function addClothes(req,res){
    const obj = req.body;
    const clothes = await theClothes.create(obj);
    res.status(201).json(clothes)
}
async function updateClothesById(req,res){
    const id= req.params.id
    console.log(req)
    const obj = req.body;
    const clothes = await theClothes.update(obj,{where:{id} })
    res.status(202).json(clothes)
}

async function deleteClothes(req,res){
    const id= req.params.id
    const deleteTheClothes = await theClothes.destroy({where:{id} })
    res.status(204).json(deleteTheClothes)
}

module.exports= router