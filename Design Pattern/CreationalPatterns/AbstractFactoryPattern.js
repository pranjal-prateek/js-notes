// Abstract Factory Pattern:


// Provides an interface for creating families of related or dependent objects without specifying their concrete classes

// when to use :
// need to create related objects that should follow a common theme or style 


class Button {
  render(){
  }
}

class TextBox {
  render(){
  }
}

//concrete products for dark theme 

class DarkButton extends Button {
  render(){
    console.log("this is is a dark buttom");
  }
}

class DarkTextBox extends TextBox{
  render(){
    console.log("Rendering Dark TextBox");
  }
}

//concrete products for light theme 

class LightButton extends Button {
  render(){
    console.log("this is is a light buttom");
  }
}

class LightTextBox extends TextBox{
  render(){
    console.log("Rendering Light TextBox");
  }
}

// Abstract Factory

class UIFactory {
  createButton(){}
  createTextBox(){}
}

//Concrete Factory: Dark Theme

class DarkThemeFactory extends UIFactory{
  createButton(){
    return new DarkButton();
  }
  createTextBox(){
    return new DarkTextBox();
  }
}

class LightThemeFactory extends UIFactory {
  createButton() {
    return new LightButton();
  }
  createTextBox() {
    return new LightTextBox();
  }
}

function renderUI(factory) {
  const button = factory.createButton();
  const textbox = factory.createTextBox();
  button.render();
  textbox.render();
}

const darkFactory = new DarkThemeFactory();
renderUI(darkFactory);
// Output:
// Rendering Dark Button
// Rendering Dark TextBox

const lightFactory = new LightThemeFactory();
renderUI(lightFactory);