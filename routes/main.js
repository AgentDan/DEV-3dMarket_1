const {Router, request, response} = require("express")
const router = Router()
const Main = require('../models/Main')
const multer = require("multer")
const fs = require("fs")

const storageConfig = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "./client/public/uploads/");
    },
    filename: (req, files, callback) => {
        callback(null, files.originalname)
    }
})

const upload = multer({storage: storageConfig})

router.get("/", async (request, response) => {
    let main = await Main.find()
    response.json(main)
})

router.get('/get', async (req, res) => {
    try {
        const {id} = req.query
        const main = await Main.find({_id: id})
        res.json(main)
    } catch (error) {
        console.log(error)
    }
})

router.post("/addmain", upload.array("myfile", 4), (req, res) => {
    const newMain = new Main({
        owner: req.body.userId,
        paramA: req.body.paramA,
        paramB: req.body.paramB,
        paramC: req.body.paramC,
        paramD: req.body.paramD,
        title: req.body.title,
        author: req.body.author,
        designer: req.body.designer,
        description: req.body.description,
        img: req.files[0].originalname,
        fileObj: req.files[1].originalname
    })

    newMain
        .save()
        .then(main => res.json("The Article ADD!!!"))
        .catch(err => res.status(400).json(`Error my: ${err}`))
})

router.post("/file", upload.array("myfile", 4), (req, res) => {
    const newMain = new Main({
        owner: req.body.userId,
        paramA: req.body.paramA,
        paramB: req.body.paramB,
        paramC: req.body.paramC,
        paramD: req.body.paramD,
        title: req.body.title,
        author: req.body.author,
        designer: req.body.designer,
        description: req.body.description,
        img: req.files[0].originalname,
        fileObj: req.files[1].originalname
    })
    console.log(newMain)
    // newMain
        // .save()
        // .then(mail => res.json("The Article ADD!!!"))
        // .catch(err => res.status(400).json(`Error my: ${err}`))
})

module.exports = router