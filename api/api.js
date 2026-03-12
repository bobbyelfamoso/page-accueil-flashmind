export default function handler(req, res) {
  res.status(200).json({
    message: "API FlashMind",
    services: [
      {
        name: "StudyFlow",
        url: "https://bobbyelfamoso.github.io/studyflow/"
      },
      {
        name: "Flashcards",
        url: "https://site-flash-card-b59c4.web.app"
      }
    ]
  })
}