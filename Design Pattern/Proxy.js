// Proxy Pattern Notes

// - The Proxy Pattern provides a placeholder or intermediary for another object.
// - It controls access, adds additional functionality, or performs optimizations.
// - Useful for lazy loading, logging, caching, or access control.

// Example: Image Viewer using Proxy for Lazy Loading

// RealImage (Actual Object)
function RealImage(fileName) {
  this.fileName = fileName;

  this.display = function() {
    console.log(`Displaying: ${this.fileName}`);
  };

  this.loadFromDisk = function() {
    console.log(`Loading: ${this.fileName}`);
  };

  this.loadFromDisk(); // Simulate loading when image is created
}

// ProxyImage (Proxy)
function ProxyImage(fileName) {
  this.realImage = null;
  this.fileName = fileName;

  this.display = function() {
    if (!this.realImage) {
      this.realImage = new RealImage(this.fileName); // Load only when needed
    }
    this.realImage.display();
  };
}

// Example Usage
const image1 = new ProxyImage('photo1.jpg');
const image2 = new ProxyImage('photo2.jpg');

// Image is not loaded until display() is called
image1.display(); // Loading: photo1.jpg, Displaying: photo1.jpg
image1.display(); // Displaying: photo1.jpg (No loading second time)
image2.display(); // Loading: photo2.jpg, Displaying: photo2.jpg

// Summary:
// - Proxy controls access to the real object.
// - Useful for lazy initialization or caching.
// - Helps manage expensive operations like loading images or database queries.
// - RealImage only loads when actually needed, reducing resource usage.
