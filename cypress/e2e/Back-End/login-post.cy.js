import { faker } from '@faker-js/faker'

describe('Back-End - Login e Pesquisa de Produtos', () => {

    it('Deve realizar login com sucesso', () => {

        cy.api({
            method: 'POST',
            url: 'https://automationexercise.com/api/verifyLogin',
            form: true,
            body: {
                email: 'teste@teste.com',
                password: '123456'
            }
        }).then((response) => { 
            expect(response.status).to.eq(200)
        })
    })
})