const Blog = require("../models/blgEmbedded");

module.exports = {
  insert: async (req, res) => {
    //Ambil data request dari front end
    const data = new Blog({
      id : req.body.id,
      date: req.body.date,
      tag: req.body.tag,
    });
    try {
      const dataToSave = await data.save();
      res.status(200).json(dataToSave);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
   
  },

  insertAuthor: async (req, res) => {
    const id = req.params.id;

    try {
      await Blog.updateOne(
        { id: id },
        {
          $push: {
            author: {
              author: req.body.author,
              desc: req.body.desc,
             
            },
          },
        }
      );
      res.send("author telah di simpan");
    } catch (error) {
      res.status(409).json({ message: error.message });
    }
  },

  getBlog: async (req, res) => {
    try {
      const result = await Blog.find();
      res.status(200).json(result);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  },
  getBlogById: async (req, res) => {
    const id = req.params.id;
    try {
      const result = await Blog.find().where("id").equals(id);
      res.json(result);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getAuthorByid: async (req, res) => {
    const id = req.params.id;
    try {
      const result = await Blog.findOne(
        { id: id },
        { _id: 0, author: 1, }
      );
      
      res.json(result);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  update: async (req, res) => {
    const filter = { id: req.params.id };
    const updatedData = {
      id: req.body.id,
      date: req.body.date,
      tag: req.body.tag,
    };
    try {
      let result = await Blog.updateOne(filter, updatedData);
      res.send("Data telah terupdate");
    } catch (error) {
      res.status(409).json({ message: error.message });
    }
  },

  delete: async (req, res) => {
    const filter = { id: req.params.id };
    try {
      await Blog.deleteOne(filter);
      res.send("Data telah terhapus");
    } catch (error) {
      res.status(409).json({ message: error.message });
    }
  },
};
