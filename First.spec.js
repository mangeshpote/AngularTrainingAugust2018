describe("A suite is just a function", function() {
    var a;
  
    it("and so is a spec", function() {
      a = true;
  
      expect(a).toBe(true);
    });
  });

  function Add(x,y){
      return x+y;
  }

  describe("An addition suite", function() {
      
    it("should add two numbers", function() {
      
      expect(Add(20,30)).toBe(50);
    });
  });
