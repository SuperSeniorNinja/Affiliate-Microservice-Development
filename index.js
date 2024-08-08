const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Affiliate = require('./models/Affiliate');
const affiliateRoutes = require('./routes/affiliateRoutes');
const bodyParser = require('body-parser');

dotenv.config();

const app = express();
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('Error connecting to MongoDB:', err));

const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');

// Setup the /api-docs route to serve Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Helper function to generate a unique affiliate code
async function generateUniqueAffiliateCode() {
  let code;
  let isUnique = false;

  while (!isUnique) {
    code = Math.random().toString(36).substring(2, 8).toUpperCase();
    const existing = await Affiliate.findOne({ affiliateCode: code });
    isUnique = !existing;
  }

  return code;
}

app.use('/', affiliateRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});