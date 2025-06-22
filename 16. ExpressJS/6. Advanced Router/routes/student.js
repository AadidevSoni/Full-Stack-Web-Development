import express from 'express'

const router = express.Router();
router.get('/all', (req,res) => {
  res.send("All students");
})

router.post('/create', (req,res) => {
  res.send("Sign in new students");
})

router.put('/update', (req,res) => {
  res.send("Update student");
})

router.delete('/delete', (req,res) => {
  res.send("Delete student");
})

export default router; 