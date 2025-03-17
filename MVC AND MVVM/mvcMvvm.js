//oth MVC and MVVM are architectural patterns used in software development to separate concerns and improve code maintainability, scalability, and testability.
// 1. MVC (Model-View-Controller)
// Definition:
// MVC is a design pattern that separates an application into three main components:

// Model – Manages the data and business logic.
// View – Displays the UI elements and renders the data.
// Controller – Handles user input and updates the Model or View accordingly.
// How MVC Works:
// The User interacts with the View.
// The Controller receives input from the user.
// The Controller processes the input and updates the Model.
// The Model notifies the View about changes.
// The View updates to reflect the changes in the Model.

// 2. MVVM (Model-View-ViewModel)
// Definition:
// MVVM is an improved version of MVC that introduces the ViewModel to manage UI logic. It consists of:

// Model – Manages the data (same as MVC).
// View – Displays the UI and binds to the ViewModel.
// ViewModel – Acts as an intermediary, managing UI logic and interacting with the Model.
// How MVVM Works:
// The User interacts with the View.
// The ViewModel receives commands from the View.
// The ViewModel retrieves or updates data from the Model.
// The View observes changes in the ViewModel and updates itself automatically.
// Diagram Representation:
