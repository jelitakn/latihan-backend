const express = require ('express');
const mahasiswaRoutes = require('./routes/mahasiswaRoutes');

const app = express();

app.use(express.json());
app.use('/api/mahasiswa', mahasiswaRoutes);

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});