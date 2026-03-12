exports.handler = async function () {

  const data = {
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
  }

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }

}