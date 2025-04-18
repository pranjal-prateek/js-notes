//Composite Pattern
// -> so this pattern is like treating a individual object and a group of object in the same way 

// eg

// A file is a single object 
// a folder is a multiple files 

// but we can perform the same actions on them like delete move and rename


// creating a basic component 

class Component{
  render(){
    throw new Error('render() must be implemented')
  }
}

class Button extends Component{
  constructor(label){
    super();
    this.label =label;
  }
  render(){
    console.log('rendering Button with label');
  }
}

class TextBox extends Compoennt{
  constructor(label){
    super()
    this.label =label
  }
  render(){
    console.log('Rendering TextBox ${label}');
  }
}

// Create a composite node 

class From extends Component{
  constructor(){
    this.name =name;
    this.children =[];
  }
  add(component){
    this.children.push(component)
  }
  render(){
    console.log('rendering Form: ${this.name}');
    this.children,forEach(child=>child.render());
  }
}
const loginForm =new Form("Login Form");

loginForm.add(new TextBox('User Name'));
loginForm.add(new TextBox('Password'));
loginForm.add(new Button("Login"))

//Benefits
//tree structure becomes easy to manage 
//can treat leaf and composite obj uniformaly
// super helpful for UI components,menu hierarchies .filesystem,etc





