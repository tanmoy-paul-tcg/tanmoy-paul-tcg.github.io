const { MongoClient } = require('mongodb');
const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '..', '.env.local') });

async function sync() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.error('MONGODB_URI is not set! Ensure it is set in the environment or .env.local.');
    process.exit(1);
  }

  const client = new MongoClient(uri);
  try {
    await client.connect();
    const db = client.db('tcg-lab'); // Adjust DB name if different
    const collection = db.collection('publications');

    const jsonPath = path.join(__dirname, 'fetch-publications', 'publications.json');
    if (!fs.existsSync(jsonPath)) {
      console.error('publications.json not found at', jsonPath);
      process.exit(1);
    }

    const rawData = fs.readFileSync(jsonPath, 'utf8');
    const publications = JSON.parse(rawData);

    console.log(`Loaded ${publications.length} publications from Scholar JSON.`);

    let added = 0;
    for (const pub of publications) {
      // Clean string fields
      const pubDoc = {
        title: pub.title || "Untitled",
        authors: pub.authors || "",
        journal: pub.journal || "",
        date: pub.date || "",
        link: pub.link || ""
      };

      // Check if it already exists by Title to avoid duplication
      // Using a regex for case-insensitive exact matching
      const existing = await collection.findOne({ 
        title: { $regex: new RegExp(`^${pubDoc.title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}$`, 'i') } 
      });

      if (!existing) {
        await collection.insertOne(pubDoc);
        added++;
        console.log(`[Added] ${pubDoc.title.substring(0, 50)}...`);
      }
    }

    console.log(`Sync complete! Safely added ${added} new publications to database.`);

  } catch (error) {
    console.error('Failed to sync to MongoDB:', error);
    process.exit(1);
  } finally {
    await client.close();
  }
}

sync();
