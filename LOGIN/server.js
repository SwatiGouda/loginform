app.get('/submissions', async (req, res) => {
  try {
    const data = await FormSubmission.find().sort({ _id: -1 }); // Sort descending for LIFO
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch submissions' });
  }
});
