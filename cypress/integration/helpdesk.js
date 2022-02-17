describe("Help-desk",() => {
    it("rejestracja",()=>{
        cy.visit("http://localhost:8080/logowanie_pracownik");
        cy.get("input[id='email']").type("pracownik@gmail.com");
        cy.get("input[id='password']").type("pracownik");

        cy.contains("button","Zaloguj").click({force:true});

        cy.contains("div","Odpowiedz na pytanie").click({force:true});
        cy.contains("button","Szczegóły").click({force:true});

        cy.get("textarea[name='name']").type("Prawdopodobnie w samochodzie do wymiany jest termostat");
   
        
    })
})