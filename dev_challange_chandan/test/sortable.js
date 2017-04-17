"use strict";
var expect = require('chai').expect;
var assert = require('chai').assert;

const { Sortable } = require('../site/static/js/sortable.js');
const sortable = new Sortable();

const obj = {
  byId : {
    euraud : {
      bestAsk:1.4792691736169286,
      bestBid:1.4485625303570557,
      lastChangeAsk:-0.041095562109916495,
      lastChangeBid:-0.04013291345509962,
      name:"euraud",
      openAsk:1.5072435626803966,
      openBid:1.4595564373196035,
    },
    eurjpy : {
      bestAsk:125.13353604714644,
      bestBid:124.8685114203146,
      lastChangeAsk:-1.160059396706103,
      lastChangeBid:-0.10082111669105132,
      name:"eurjpy",
      openAsk:123.78341944412112,
      openBid:122.03658055587887
    }
 },
items: ['eurjpy', 'euraud']
}

describe('Sort Table test case for function', function() {
    describe('sortObject()', function() {
        it('should return sortObject', function() {
          const extectedObj = {
            eurjpy : {
              bestAsk:125.13353604714644,
              bestBid:124.8685114203146,
              lastChangeAsk:-1.160059396706103,
              lastChangeBid:-0.10082111669105132,
              name:"eurjpy",
              openAsk:123.78341944412112,
              openBid:122.03658055587887
            },
            euraud : {
              bestAsk:1.4792691736169286,
              bestBid:1.4485625303570557,
              lastChangeAsk:-0.041095562109916495,
              lastChangeBid:-0.04013291345509962,
              name:"euraud",
              openAsk:1.5072435626803966,
              openBid:1.4595564373196035,
            }
         }
            expect(sortable.sortObject(obj)).to.deep.equal(extectedObj);
        });
    });

    describe('sparkArray()', function() {
        it('should return sparkArray', function() {
            expect(sortable.sparkArray(obj)).to.deep.equal([125.00102373373052, 1.4639158519869921]);
        });
    });
});
