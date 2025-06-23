import express from 'express'

const allStudents = (req,res) => res.send("All students");
const newStudent = (req,res) => res.send("Create students");
const updateStudent = (req,res) => res.send("Update students");
const deleteStudent = (req,res) => res.send("Delete students");

export {allStudents,newStudent,updateStudent,deleteStudent};