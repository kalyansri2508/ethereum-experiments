var SimpleContract = artifacts.require('SimpleContract');

var expect = require('chai').expect;

contract("Test the SimpleContract",(accounts)=>{
    describe("Deploy the SimpleContract",()=>{
      it("Catch the instance of SimpleContract",()=>{
          return SimpleContract.new().then((instance)=>{
              simpleContract = instance;
          });
      });
    });

    describe("Check the variables",()=>{
      it("Call the setName Function - Lattala",()=>{
        return simpleContract.setName("Lattala").then((result)=>{
          console.log(result);
          expect(result).to.not.equal("error");
        });
      });

      it("Call the getName Function - Lattala",()=>{
        return simpleContract.getName().then((result)=>{
          console.log(result);
          expect(result).to.equal("Lattala");
        });
      });

      it("Call the setName Function - Surya",()=>{
        return simpleContract.setName("Surya").then((result)=>{
          console.log(result);
          expect(result).to.not.equal("error");
        });
      });

      it("Call the getName Function - Surya",()=>{
        return simpleContract.getName().then((result)=>{
          console.log(result);
          expect(result).to.equal("Surya");
        });
      });

    });
});
