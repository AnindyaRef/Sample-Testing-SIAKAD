/// <reference types="cypress" />

describe('User Login SIAKAD', () => {
    it('Check open SIAKAD POLINEMA', () => {
      cy.visit("http://siakad.polinema.ac.id/")
      cy.url().should('eq','http://siakad.polinema.ac.id/')
    })

    it('Check href pembayaran daftar ulang', () => { //lama load jadi error
        cy.visit("http://siakad.polinema.ac.id/")
        cy.get('#form_login > div:nth-child(3) > a').click()
        cy.url().should('eq','https://www.polinema.ac.id/pengumuman/daftar-ulang-semester-genap-2018-2019/')
    })

    it('Check href check lihat mekanisme', () => { //lama load jadi error
        cy.visit("http://siakad.polinema.ac.id/")
        cy.get('#form_login > div:nth-child(4) > a').click()
        cy.url().should('eq','http://spmb.polinema.ac.id/pembayaran/mekanisme')
    })

    it('login without username', () => {
        cy.visit("http://siakad.polinema.ac.id/")
        cy.get('#username').type(' ')
        cy.get('.btn-success').click()
        cy.contains('Username harus diisi')
    })
    
    it('login without password', () => {
        cy.visit("http://siakad.polinema.ac.id/")
        cy.get('#username').type('1831710017')
        cy.get('.btn-success').click()
        cy.contains('Password harus diisi')
    })

    it('login with incorrect username', () => {
        cy.visit("http://siakad.polinema.ac.id/")
        cy.get('#username').type('1831710016')
        cy.get('#password').type('1831710000')
        cy.get('.btn-success').click()
        cy.contains('Username / Password Salah')
    })

    it('login with incorrect password', () => {
        cy.visit("http://siakad.polinema.ac.id/")
        cy.get('#username').type('1831710017')
        cy.get('#password').type('1831710017')
        cy.get('.btn-success').click()
        cy.contains('Username / Password Salah')
    })

    it('Check tampilkan password', () => {
        cy.visit("http://siakad.polinema.ac.id/")
        cy.get('#password').type('1831710017')
        cy.get('#chk_tampilkan').check() 
        // cy.get('#password').should('eq','1831710017')
    })

    
    it('Check href lupa password', () => { //lama load jadi error
        cy.visit("http://siakad.polinema.ac.id/")
        cy.get('#forget-password').click()
        cy.url().should('eq','https://helpakademik.polinema.ac.id/ajukan-pertanyaan')
    })

    it('Check responsive on iphone 4', () => {
        cy.viewport('iphone-4')
        cy.visit("http://siakad.polinema.ac.id/")
        cy.get('#form_login > div:nth-child(1) > img').should('be.visible')
        cy.get('#alert-login').should('be.visible')
        cy.get('#form_login > div:nth-child(3) > a').should('be.visible')
        cy.get('#form_login > div:nth-child(4) > a').should('be.visible')
        cy.get('#username').should('be.visible')
        cy.get('#password').should('be.visible')
        cy.get('#form_login > div.form-actions > button').should('be.visible')
        cy.get('#form_login > div:nth-child(7)').should('be.visible')
        cy.get('#forget-password').should('be.visible')
        cy.get('#form_login > div.create-account').should('be.visible')
      })

    it('Check responsive alert on iphone 4', () => {
        cy.visit("http://siakad.polinema.ac.id/")
        cy.viewport('iphone-4')
        cy.get('#username').type('1831710017')
        cy.get('#password').type('1831710017')
        cy.get('.btn-success').click()
        cy.contains('Username / Password Salah')
      })
    
    it('Check responsive checkbox on iphone 4', () => {
        cy.visit("http://siakad.polinema.ac.id/")
        cy.viewport('iphone-4')
        cy.get('#password').type('1831710017')
        cy.get('#chk_tampilkan').check() 
    })

    it('Login responsive on iphone 4', () => {
        cy.visit("http://siakad.pgitolinema.ac.id/")
        cy.viewport('iphone-4')
        cy.get('#username').type('1831710017')
        cy.get('#password').type('1831710000') //use your account
        cy.get('.btn-success').click()
        cy.url().should('eq','http://siakad.polinema.ac.id/beranda')
    })

    it('login with correct username and password', () => {
        cy.visit("http://siakad.polinema.ac.id/")
        cy.get('#username').type('1831710017')
        cy.get('#password').type('1831700000') //use your account
        cy.get('.btn-success').click()
        cy.url().should('eq','http://siakad.polinema.ac.id/beranda')
    })
});