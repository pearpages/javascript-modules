## Popular Module Patterns

- AMD
- CommonJS
- Client-side module loaders
- ES2015 (aka Harmonky, aka ES6)
- Module bundlers

### Module

> A group of code an data related to a particular piece of functionality. It encapsulates implementation details, exposes a public API, and is combined with other modules to build a larger application.

- Modules let us create higher-level abstractions.
- Encapsulation (we can define an interface and hide the rest, so it's more maintainable).
- Reusability
- Simplify dependency management

## Tools

- Any editor
- Node.js
- npm
- npm packages

## Module Patterns in ES5

### IIFE

> **IIFE**: Immediately Invoked Function Expression.

They provide *encapsulation* and reduce global scope pollution.

But **No dependency management**. 

```javascript
(function (name){
    console.log('Hello '+name);
})('Pere Pages');
```

### Revealing Module pattern

- Function scoping provides encapsulation
- Adds one value to global scopoe per module
- Clear delineation between private implementation and public API
- **NO dependency management**
- Puere javascript that works in modern browsers
- Comes in two popular flavors
  - Singleton
  - Constructor function

#### Singleton

```javascript
var scoreboard = function() {
    
    // private variables
    var whatever = 'whatever';
    
    return {
      showMessage: showMessage  
    };
    
    function showMessage(message) {
        console.log(message);
    }
}();

scoreboard.showMessage('Hello me!!');
```

#### Constructor Function

```javascript
var Scoreboard = function () {
    
    // private members
    var message = 'Welcome to the game!';
    function printMessage() {
        console.log(message);
    }
    return {
        showMessage: printMessage
    }
};

(function() {
    var scoreboard1 = new Scoreboard();
    var scoreboard2 = new Scoreboard();
    
    scoreboard1.showMessage();
    scoreboard2.showMessage();
})();
```

## Module Formats and Loaders

### Formats vs Loaders

**Module Format** --> Syntax

- AMD
- COmmonJS
- UMD

**Loader** --> Execution

### AMD (Asynchronous Module Definition)

Loaders

- RequireJS
- Curl.js
- SystemJS

The AMD syntax is defined for modules that will be loaded in a browser.

### CommonJS

CommonJS syntax is used for **Server-side** development, but we can use in the browser with module loaders like **SystemJS**.

### UMD (Universal Module Definition)

It is supposed to be used for Browser and Server-side modules. But usually it is only used by **transpilers**. If we are using *Typescript*, for instance, we can tell the compiler/transpiler to use this syntax.

### System.register

System.register can be considered as a new module format designed to support the exact semantics of ES6 modules within ES5.

### ES2015 module format

Built-in support for modules. We need to *transpile* so we get the code in any of the previous syntaxes (CommonJS, UMD, System.register)

## Modules in ES2015


## Module Bundlers

