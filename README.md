# Vue Course

This is a vue course development for learning purposes

## Notes:
### V-shorcuts

* @ for v-on:[event]
* : for v-bind:[attribute]

### Computed vs Watch

* Computed get executed when its dependent property change
* Watch get executed when a specified property change and reveive the value of the property by default as a parameter

Watch does perform asynchronous code, unlike Computed, that doesn't support it.
Watch method watchs the changes on specific properties | Computed methods needs to be render (or be present in the HTML) in the HTML

### HTML5 features

`<template>` is a tag that doesn't show as text in the HTML and is usefull to group up certain code that has to be hidden like a div does.