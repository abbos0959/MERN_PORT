const Tour = require("../model/tourmodel");

const createTour = async (req, res) => {
   const tour = req.body;
   const newTour = new Tour({
      ...tour,
      createdAt: new Date().toISOString(),
   });

   try {
      await newTour.save();
      res.status(200).json(newTour);
   } catch (error) {
      res.status(500).json({
         message: "tour yaratilmadi",
      });
   }
};

const getTours = async (req, res) => {
   try {
      const tourlar = await Tour.find();
      res.status(200).json(tourlar);
   } catch (error) {
      res.status(404).json({
         message: "Tourlar mavjud emas",
      });
   }
};

const getTourById = async (req, res) => {
   try {
      const data = await Tour.findById(req.params.id);
      if (!data) {
         return res.status(404).json({ message: "bunday id mavjud emas" });
      }
      res.status(200).json({
         data,
      });
   } catch (error) {
      res.status(404).json({
         message: "getbyid error",
      });
   }
};
module.exports = { getTours, createTour ,getTourById};
