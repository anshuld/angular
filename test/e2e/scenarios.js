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

     expect(phoneList.count()).toBe(3);

     query.sendKeys("nexus");
     expect(phoneList.count()).toBe(1);

     query.clear();
     query.sendKeys("moto")
     expect(phoneList.count()).toBe(2);

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

  it("Should sort the phone list through the drop down list", function(){
    
    function getNames() {
      var phoneNameColumn = element.all(by.repeater('phone in phones').column('phone.name'));
      return phoneNameColumn.map(function(elm) {
        return elm.getText();
      });
    }

    query.clear();
    query.sendKeys('tablet');

    expect(getNames()).toEqual([
      "Motorola XOOM\u2122 with Wi-Fi",
      "MOTOROLA XOOM\u2122"
    ]);

    element(by.model('sortOrder')).element(by.css('option[value="name"]')).click();

    expect(getNames()).toEqual([
      "MOTOROLA XOOM\u2122",
      "Motorola XOOM\u2122 with Wi-Fi"
    ]);

  });
  });
});
