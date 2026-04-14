import clientPromise from './mongodb';
import { ObjectId } from 'mongodb';

async function getDb() {
  const client = await clientPromise;
  return client.db('tcg-lab');
}

// ============ PUBLICATIONS ============

export async function getPublications() {
  const db = await getDb();
  return db.collection('publications').find({}).sort({ date: -1, _id: -1 }).toArray();
}

export async function addPublication(data) {
  const db = await getDb();
  const result = await db.collection('publications').insertOne(data);
  return result;
}

export async function updatePublication(id, data) {
  const db = await getDb();
  const { _id, ...updateData } = data;
  return db.collection('publications').updateOne(
    { _id: new ObjectId(id) },
    { $set: updateData }
  );
}

export async function deletePublication(id) {
  const db = await getDb();
  return db.collection('publications').deleteOne({ _id: new ObjectId(id) });
}

// ============ TEAM ============

export async function getTeamMembers() {
  const db = await getDb();
  return db.collection('team').find({}).toArray();
}

export async function addTeamMember(data) {
  const db = await getDb();
  return db.collection('team').insertOne(data);
}

export async function updateTeamMember(id, data) {
  const db = await getDb();
  const { _id, ...updateData } = data;
  return db.collection('team').updateOne(
    { _id: new ObjectId(id) },
    { $set: updateData }
  );
}

export async function deleteTeamMember(id) {
  const db = await getDb();
  return db.collection('team').deleteOne({ _id: new ObjectId(id) });
}

// ============ RESEARCH TOPICS ============

export async function getResearchTopics() {
  const db = await getDb();
  return db.collection('research_topics').find({}).sort({ order: 1 }).toArray();
}

export async function addResearchTopic(data) {
  const db = await getDb();
  return db.collection('research_topics').insertOne(data);
}

export async function updateResearchTopic(id, data) {
  const db = await getDb();
  const { _id, ...updateData } = data;
  return db.collection('research_topics').updateOne(
    { _id: new ObjectId(id) },
    { $set: updateData }
  );
}

export async function deleteResearchTopic(id) {
  const db = await getDb();
  return db.collection('research_topics').deleteOne({ _id: new ObjectId(id) });
}

// ============ POSTERS ============

export async function getPosters() {
  const db = await getDb();
  return db.collection('posters').find({}).sort({ order: 1 }).toArray();
}

export async function addPoster(data) {
  const db = await getDb();
  return db.collection('posters').insertOne(data);
}

export async function deletePoster(id) {
  const db = await getDb();
  return db.collection('posters').deleteOne({ _id: new ObjectId(id) });
}

// ============ MARQUEE ============

export async function getMarquee() {
  const db = await getDb();
  return db.collection('marquee').findOne({});
}

export async function updateMarquee(data) {
  const db = await getDb();
  const { _id, ...updateData } = data;
  return db.collection('marquee').updateOne(
    {},
    { $set: updateData },
    { upsert: true }
  );
}

// ============ EVENTS ============

export async function getEvents() {
  const db = await getDb();
  return db.collection('events').find({}).sort({ order: 1 }).toArray();
}

export async function addEvent(data) {
  const db = await getDb();
  return db.collection('events').insertOne(data);
}

export async function updateEvent(id, data) {
  const db = await getDb();
  const { _id, ...updateData } = data;
  return db.collection('events').updateOne(
    { _id: new ObjectId(id) },
    { $set: updateData }
  );
}

export async function deleteEvent(id) {
  const db = await getDb();
  return db.collection('events').deleteOne({ _id: new ObjectId(id) });
}
