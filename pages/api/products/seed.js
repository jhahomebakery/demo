import nc from 'next-connect';
import Product from '../../../models/Prodeuct';
import db from '../../../utils/db';
import data from '../../../utils/data';


const handler = nc();

handler.get(async (req, res) => {
    console.log("Seed API is called");
  await db.connect();
  await Product.deleteMany();
  await Product.insertMany(data.products);
  await db.disconnect();
  res.send({ message: 'seeded successfully' });
});

export default handler;
