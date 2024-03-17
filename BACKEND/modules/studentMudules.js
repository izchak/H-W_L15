"use strict";
const { getCollection, toObjectId } = require("./dbModules");

const entity = "students";

async function addStudents(name, age, major, university, averageGrade) {
  try {
    const collection = await getCollection(entity);
    await collection.insertOne({
      name,
      age,
      major,
      university,
      averageGrade,
    });
    console.log(`student have been added successfully`);
  } catch (error) {}
}

async function getStudets() {
  try {
    const collection = await getCollection(entity);
    const students = await collection.find({}).toArray();

    return students;
  } catch (error) {
    console.log(error);
  }
}

async function updateStudent(id, name, age, major, university, averageGrade) {
  try {
    const collection = await getCollection(entity);
    collection.updateOne(
      { _id: toObjectId(id) },
      {
        $set: {
          name: name,
          age: age,
          major: major,
          university: university,
          averageGrade: averageGrade,
        },
      }
    );
  } catch (error) {
    console.log(error);
  }
}

async function removeStundent(userID) {
  try {
    const collection = await getCollection(entity);
    collection.deleteOne({ _id: toObjectId(userID.id) });
  } catch (error) {
    console.log(error);
  }
}

module.exports = { addStudents, getStudets, removeStundent, updateStudent };
