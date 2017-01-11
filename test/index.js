'use strict'

const chai = require('chai')
const expect = chai.expect
const keyExists = require('../lib/keyExists')

describe('Import keyExists', function () {
  it('should to be a Function', function () {
      expect(keyExists).to.be.a('function')
  })
})

describe('To check if a key "b" exists', function () {
  it('should to be a false', function () {
      let obj = {}
      expect(keyExists(obj, 'b')).to.be.false
  })
})

describe('To check if a key "b.c[0]" exists', function () {
  it('should to be a true', function () {
      let obj = {
        b:{
          c: [{}]
        }
      }
      expect(keyExists(obj, 'b.c[0]')).to.be.true
  })
})

describe('To check if a key "a[2].b[0]" exists', function () {
  it('should to be a true', function () {
      let obj = {
        a: [
          {},
          {},
          {b: [undefined]}
        ]
      }
      expect(keyExists(obj, 'a[2].b[0]')).to.be.true
  })
})

describe('To check if a key "a[2].b[1]" exists', function () {
  it('should to be a false', function () {
      let obj = {
        a: [
          {},
          {},
          {b: [undefined]}
        ]
      }
      expect(keyExists(obj, 'a[2].b[1]')).to.be.false
  })
})

describe('To check if a key "a[0].b" exists', function () {
  it('should to be a true', function () {
      let obj = {
        a: [
          {b: null},
          {},
          {b: [undefined]}
        ]
      }
      expect(keyExists(obj, 'a[0].b')).to.be.true
  })
})

describe('To check if a key "[0].a[1]" exists', function () {
  it('should to be a true', function () {
      let arr = [{a: [1, 2, 3]}]
      expect(keyExists(arr, '[0].a[1]')).to.be.true
  })
})

describe('To check if a key "[0].a[3]" exists', function () {
  it('should to be a false', function () {
      let arr = [{a: [1, 2, 3]}]
      expect(keyExists(arr, '[0].a[3]')).to.be.false
  })
})

describe('To check if a key "[0][0][0]" exists', function () {
  it('should to be a true', function () {
      let arr = [
        [
          [1, 2, 3],
          [1, 2, 3]
        ],
        [],
        []
      ]
      expect(keyExists(arr, '[0][0][1]')).to.be.true
  })
})

describe('To check if a key "[0]" exists', function () {
  it('should to be a true', function () {
      let arr = [
        [
          null,
          [1, 2, 3]
        ],
        [],
        []
      ]
      expect(keyExists(arr, '[0]')).to.be.true
  })
})