const router = require("express").Router();
const User = require("../models/User");
const house = require("../models/house");

//CREATE house
router.post("/", async (req, res) => {
  const newhouse = new house(req.body);
  try {
    const savedhouse = await newhouse.save();
    res.status(200).json(savedhouse);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE house
router.put("/:id", async (req, res) => {
  try {
    const house = await house.findById(req.params.id);
    if (house.username === req.body.username) {
      try {
        const updatedhouse = await house.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedhouse);
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can update only your house!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE house
router.delete("/:id", async (req, res) => {
  try {
    const house = await house.findById(req.params.id);
    if (house.username === req.body.username) {
      try {
        await house.delete();
        res.status(200).json("house has been deleted...");
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can delete only your house!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET house
router.get("/:id", async (req, res) => {
  try {
    const house = await house.findById(req.params.id);
    res.status(200).json(house);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL houseS
router.get("/", async (req, res) => {
  const username = req.query.user;
  const catName = req.query.cat;
  try {
    let houses;
    if (username) {
      houses = await house.find({ username });
    } else if (catName) {
      houses = await house.find({
        categories: {
          $in: [catName],
        },
      });
    } else {
      houses = await house.find();
    }
    res.status(200).json(houses);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;