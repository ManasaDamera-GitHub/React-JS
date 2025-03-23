## VIRTUAL DOM:

The DOM(document Object Model) converts HTML into a structured object model through a process called PARSING.Here's how it works step by step:

## 1.HTML PARSING:

When a browser loads an HTML document,it reads the HTML file from top to bottom.
The browser's HTML parser breaks the HTML code into smaller pieces like tags,text,and attributes.

## 2.Tokenization:

The parser converts each part of the HTML into tokens.For example:

<html> becomes an element token.
class="header" becomes an attribute token.
Any text inside an element becomes a text token.

## 3.Tree Structure Creation:

The browser builds a tree structure from the tokens.This is called the Dom tree.
Each HTML element is represented as a node in the tree.THe tree's root node is the <html> tag, and each child element(like <body>,<div>,etc.)
forms a branch beneath it.

## 4.Attributes and Text Nodes:

Inside th DOM tree, elements can have attribute nodes(eg. class,id) and text nodes(for the content within elements like paragraphs).These nodes are linked in a parent-child relationship,forming a hierarchy.

## 5."Live" view of the Page:

The DOM is dynamic and live. It represents the current structure of the HTML,meaning any changes made to the HTML(like adding,removing,or altering elements) are instantly reflected in the DOM. Javascript can manipulate the DOM in real-time, altering the content or structure of the page
