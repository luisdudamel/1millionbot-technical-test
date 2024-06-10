describe("Given a general layout", () => {
  describe("When the user clicks on the avatar icon of the chat agent", () => {
    const expectedCallToActionText = "Chat agent with headphones"

    it("Then it should open a chat window with predefined messages from chat agent", () => {
      const expectedFirstGreetingMessage = "Hi! I'm Leia. How can I help you today?"

      cy.visit("http://localhost:5173")
      cy.get(`[alt="${expectedCallToActionText}"]`).click()

      cy.get(".chat-container")
        .should("be.visible")
        .children()
        .get(".chat-message-list > :nth-child(1)")
        .contains(expectedFirstGreetingMessage)
    })

    describe("And the user types 'I need to ask a question' on the message input", () => {
      it("Then it should show the same text on the chat window and receive a message from agent", () => {
        const expectedInputPlaceholder = "Ask me anything..."
        const userHelpMessage = "I need to ask a question"

        cy.visit("http://localhost:5173")
        cy.get(`[alt="${expectedCallToActionText}"]`).click()

        cy.get(`[placeholder="${expectedInputPlaceholder}"]`).type(`${userHelpMessage}{enter}`)

        cy.get(".chat-container")
          .should("be.visible")
          .children()
          .get(".chat-message-list > :last-child")
          .contains(userHelpMessage)

        cy.get(".is-typing-container")
        cy.get(".chat-message-list > .chat-message--agent")
      })
    })

    describe("And the user types four consecutive messages on the message input", () => {
      it("Then it receive only one response message from agent", () => {
        const expectedInputPlaceholder = "Ask me anything..."
        const userHelpMessage = "I need to ask a question"

        cy.visit("http://localhost:5173")
        cy.get(`[alt="${expectedCallToActionText}"]`).click()

        cy.get(".chat-container").should("be.visible")
        cy.get(`[placeholder="${expectedInputPlaceholder}"]`).type(`${userHelpMessage}{enter}`)
        cy.get(`[placeholder="${expectedInputPlaceholder}"]`).type(`${userHelpMessage}{enter}`)
        cy.get(`[placeholder="${expectedInputPlaceholder}"]`).type(`${userHelpMessage}{enter}`)
        cy.get(`[placeholder="${expectedInputPlaceholder}"]`).type(`${userHelpMessage}{enter}`)

        cy.get(".is-typing-container")
        cy.get(".chat-message-list > :last-child").get(".chat-message--agent")
      })
    })

    describe("And the user clicks on the icon to minimize chat", () => {
      it("Then it should hide the chat window and show an avatar icon of the chat agent", () => {
        cy.visit("http://localhost:5173")
        cy.get(`[alt="${expectedCallToActionText}"]`).click()
        cy.get(".chat-container").should("be.visible")

        cy.get('[aria-label="Minimize chat"] > img').click()
        cy.get(".chat-container").should("not.be.visible")

        cy.get(`[alt="${expectedCallToActionText}"]`).click()
        cy.get(".chat-container").should("be.visible")
      })
    })
  })

  describe("When the user screen width is smaller than 500px", () => {
    it("Then the chat window should be fullscreen", () => {
      const expectedCallToActionText = "Chat agent with headphones"
      const viewportWidth = 480
      const viewportHeight = 1000

      cy.viewport(viewportWidth, viewportHeight)
      cy.visit("http://localhost:5173")
      cy.get(`[alt="${expectedCallToActionText}"]`).click()

      cy.get(".chat-layout__container")
        .should("be.visible")
        .invoke("height")
        .should("equal", viewportHeight)
    })
  })
})
