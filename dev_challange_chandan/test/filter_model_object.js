"use strict";
var expect = require('chai').expect;
var assert = require('chai').assert;

const { filterObject } = require('../site/public/js/filter_model_object.js');
const dataOject = { byId: {}, items: []};
const sOject = {};

const obj = {
  bestAsk:1.4792691736169286,
  bestBid:1.4485625303570557,
  lastChangeAsk:-0.041095562109916495,
  lastChangeBid:-0.04013291345509962,
  name:"euraud",
  openAsk:1.5072435626803966,
  openBid:1.4595564373196035,
}

describe('Sort Table and Sparkline test case for function', function() {
    describe('filterObject()', function() {
        it('should return filterObject dataObj and sparkObject', function() {
          const extectedObj = { dataObj: {
            byId: {
              euraud: {
                  bestAsk: 1.4792691736169286,
                  bestBid: 1.4485625303570557,
                  lastChangeAsk: -0.041095562109916495,
                  lastChangeBid: -0.04013291345509962,
                  name: 'euraud',
                  openAsk: 1.5072435626803966,
                  openBid: 1.4595564373196035
                }
          }, items: [ 'euraud' ] } ,
            sLObject: { euraud: [ 1.4639158519869921 ] } }

          expect(filterObject(obj, dataOject, sOject)).to.deep.equal(extectedObj);
        });
    });
});
