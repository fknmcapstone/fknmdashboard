describe('Test case for landing page', () => {
  beforeEach(() => {
    //visiting localhost 
    cy.visit("http://127.0.0.1:5500/")
  })

  it('UserFlow landing page', () => {
    cy.get('.symbol > img').should('have.attr',"src").should('eq','images/logo.svg')
    cy.get('.title').contains('span','FKNM Capstone')
    cy.get('h1').contains('h1','Feeding Kids, Nourishing Minds Data Visualisation')
    cy.get('header > p').contains('p','A collaboration with the ')
    cy.get('header > p').contains('a','Centre for Global Engineering')
    cy.get('header > p').contains('p','and the')
    cy.get('header > p').contains('a','Centre for Child Nutrition') 
    cy.get('header > p').contains('p','at the University of Toronto')

    cy.get('[href="https://cgen.utoronto.ca/"]').should('have.attr','href').and('include','https://cgen.utoronto.ca/')
    cy.get('[href="https://childnutrition.utoronto.ca/"]').should('have.attr','href').and('include','https://childnutrition.utoronto.ca/')

    cy.get('.tiles').should('have.length',1)
    cy.get('.tiles > article').should('have.length', 3); 
    
    
    cy.get('.style1') .find('a') .should('have.attr', 'href').and('equal', 'track1.html'); 
    cy.get('.style1 > a').contains('h2','Current Programs');
    cy.get('.style1 > a').contains('p','Review and assess the national school food programs currently in place in Canada (Track 1)');

    cy.get('.style2') .find('a') .should('have.attr', 'href').and('equal', 'track2.html'); 
    cy.get('.style2 > a').contains('h2','COVID-19 Impact');
    cy.get('.style2 > a').contains('p','Assess the impact of COVID-19 pandemic on addressing nutrition gaps and delivery of school food programs (Track 2)');

    cy.get('.style3') .find('a') .should('have.attr', 'href').and('equal', 'track3.html'); 
    cy.get('.style3 > a').contains('h2','Measurement Tool Assessment');
    cy.get('.style3 > a').contains('p','Review and adapt measurement tools and design pilot trials to assess school food environment (Track 3)');

    //* for footer
    cy.get('#footer')
    cy.get('.button').contains('a','Project Credits')
    cy.get('.button').should('have.attr','href').and('equal','webcredits.html')

    //* for navbar
    cy.get('nav > ul > li > a');









    
    
  })
})