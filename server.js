const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

mongoose.connect('mongodb://localhost:27017/dashboarddb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const GenericSchema = new mongoose.Schema({}, { strict: false });

app.get('/data/:collection', async (req, res) => {
  const collectionName = req.params.collection;
  try {
    const Model = mongoose.model(collectionName, GenericSchema, collectionName);
    const docs = await Model.find({}).lean();
    res.json(docs);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
