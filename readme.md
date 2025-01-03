# Simplestore

Easily save JSON data into the local machine through a series of simple functions, similar to how Multer does it with uploaded files

**Works without a DB!  Feel free to use as a sloppy alternative**

## Core functions

| Function | Param1 | Param2 | Param3 |
| --- | --- | --- | --- |
| saveData() | dir (string) | data (text/json) | customID (string, optional) |
| loadData() | dir (string) | id (string) |
| updateData() | dir (string) | id (string) | data (text/json) |
| removeEntry() | dir (string) | id (string) |

## Documentation

**saveData(*dir, data, customID*)**

Save data to the local machine in the form of a `.json` file

```javascript

const {saveData} = require("@willdevv12/simplestore")

// note how no ./ is needed
// Simplestore will look for local folders based on where the process is running
const path = "savePath"

const data = {
    "title": "Hello world",
    "subtext": "This data is saved in a .json file"
}

// The last param isn't needed, but can be specified if you so choose
// If not specified, the file will be saved with a random string as its name
saveData(path, data, "myID")
// console.log(saveData(path, data)) will return the generated id if needed

```

**loadData(*dir, id*)**

Load saved values from the local machine

```javascript

const {loadData} = require("@willdevv12/simplestore")

// Be sure to specify the ID of the file before 
const path = "savePath"
const id = "myID"

const data = loadData(path, id)

// You are free to play around with the data from here
console.log(data.title)
console.log(data.subtext)

```

**updateData(*dir, id, data*)**

Update the content of a locally saved file

```javascript

const {loadData,updateData} = require("@willdevv12/simplestore")

const path = "savePath"
const id = "myID"

var data = loadData(path, id)

// Once loaded, the data can be manipulated like so
data.subtext = "A new subtext string"

// Updates the local entry with new changes
updateData(path, id, data)

```

**removeEntry(*dir, id*)**

Completely deletes the local file specified by id

```javascript

const {removeEntry} = require("@willdevv12/simplestore")

// Specify which file you'll be deleting
const path = "savePath"
const id = "myID"

// After this function completes, the file will be permanently deleted and
// its values inaccessible
removeEntry(path, id)

```

# Using this Package

Before continuing, it must be understood that this package wasn't designed for larger/corperate projects, and (as I'm sure) lacks many security protocols necessary to safely store valuable data.

One way that I can see this being used is through an express ejs app that uses these functions to more easily define subpages' content.  I based the idea off of Jekyll's markdown posts, as each and every file can be accessed by the administrator only, yet still serves its content on a template to the user.

# Contribution

My biggest concern with this package is the lack of security protocol that was put into it.  To be honest, I'm more a self-taught programmer who doesn't know much about how to so "protect" their projects as I am knowledgeable about making them.

If you, for some reason, are interested in this package and want to experiment with it, feel free to shoot me a message with some tips on how I can better protect the stored data!  I personally enjoyed putting together this package, and the idea was brought up completely by accident as a way to easily store some values I wanted to keep in an EJS app without mongoose.

Anyways, feel free to fork or something, just make sure that you're crediting me if you so choose to make a better copy.

*Peace, Willdevv12*