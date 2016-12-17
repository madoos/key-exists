'use strict'

const chai = require('chai')
const expect = chai.expect
const keyExists = require('../lib/keyExists')

describe('Import keyExists', function () {
  it('should to be a Function', function () {
      expect(keyExists).to.be.a('function')
  })
})

describe('To check if a key ".a.b.c[0]" exists', function () {
  it('should to be a true', function () {
      const test = {
        b:{
          c: [{}]
        }
      }
      expect(keyExists(test, '.a.b.c[0]')).to.be.true
  })
})
