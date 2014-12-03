'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('my app', function() {

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
     query.sendKeys("moto")
     expect(phoneList.count()).toBe(8);

     query.clear();
     query.sendKeys("anshul")
     expect(phoneList.count()).toBe(0);

   });

    it("Should have query in the title", function() {

      query.clear();
      expect(browser.getTitle()).toMatch(/AKD with\s*/);

      query.sendKeys('Jyoti Dutta');
      expect(browser.getTitle()).toMatch(/AKD with\s+Jyoti Dutta/);


    });

    it("Should be able to click on the thumbnail image", function(){
      query.sendKeys('nexus');
      
      var anchor = element.all(by.css('.phones li a')).first();
      browser.debugger();
      console.log(anchor.getTagName());

      anchor.click().then(function () {
        browser.getLocationAbsUrl();
      });
    });
    
  });
});
