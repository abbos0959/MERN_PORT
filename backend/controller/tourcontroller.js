const Tour=require("../model/tourmodel")

const createTour= async(req,res)=>{
    const tour=req.body
    const newTour=new Tour({
        ...tour,
        createdAt:new Date().toISOString()
    })

    try {
        await newTour.save()
        res.status(200).json({newTour})
        
    } catch (error) {
      res.status(500).json({
        message:"tour yaratilmadi"
      })   
    }
}

const getTours= async(req,res)=>{

    try {
        const tourlar=await Tour.find()
        res.status(200).json({
            tourlar,
            status:"success"
        })
        
    } catch (error) {

        res.status(404).json({
            message:"Tourlar mavjud emas"
        })
        
    }
}
module.exports={getTours,createTour}