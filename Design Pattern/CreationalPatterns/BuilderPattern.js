//Builder Pattern:
// the builder pattern is used to construct objects step-by-step,allowign you to create different types an representations using same building processex
// consider making a burger step by step

// when to use 
// when you want to separate the construction logic from the actual object

class user{
  constructor(builder){
    this.name = builder.name;
    this.age = builder.age;
    this.email=builder.email;
    this.address =builder.address;
  }
}
class UserBuilder{
  setName(name){
    this.name =name;
    return this;
  }
  setAge(age){
    this.age =age;
    return this;
  }
  setEmail(email){
    this.email =email;
    return this;
  }
  setAddress(address){
    this.address =address;
    return this;
  }
  build(){
    return new User(this)
  }
}

const user =new user()
.setName("John Doe")
.setAge(30)
.setEmail("john@example.com")
.setAddress("123 Main St")
.build();
