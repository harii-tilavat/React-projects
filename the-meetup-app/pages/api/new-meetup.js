// POST /api/new-meetup
function handler(req, res) {
  if (req.method === "POST") {
    const { id, title, image, address, description } = req.body;
  }
}
export default handler;
