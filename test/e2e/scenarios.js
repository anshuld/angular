'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('my app', function() {

  it("index url should redirect to /index.html/#/phones", function() {
      browser.get('app');
      browser.getLocationAbsUrl().then(function(url){
        expect(url.split('#')[1]).toBe('/phones');
      });
  });

  describe('Phone list view', function() {

    beforeEach(function() {
      browser.get('app/index.html');
    });

    var query = element(by.model("query"));
    
    it("Should filter the list of phones based on the search criteria", function() {

     var phoneList = element.all(by.repeater("phone in phones"));

     expect(phoneList.count()).toBe(20);

     query.sendKeys("nexus");
     expect(phoneList.count()).toBe(1);

     query.clear();
     query.sendKeys("moto");
     expect(phoneList.count()).toBe(8);

     query.clear();
     query.sendKeys("anshul");
     expect(phoneList.count()).toBe(0);

   });

    it("Should be able to click on the thumbnail image", function(){
      query.sendKeys('nexus');
      
      var anchor = element.all(by.css('.phones li a')).first();
      console.log(anchor.getTagName());

      anchor.click().then(function () {
        browser.getLocationAbsUrl();
      });
    });
  });

  describe('Phone detail view', function() {
    beforeEach(function() {
      browser.get('app/#/phones/nexus-s');
    });

    it("Should display phone specific page", function() {
      expect(element(by.binding('phoneId')).getText()).toBe('nexus-s');
    });

  });
});
