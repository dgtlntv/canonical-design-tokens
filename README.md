# Canonical Design Tokens

This is a repository for testing Design Tokens for using it with Canonicals Design System.
In the first test we are going test if we can extract some of the colours from the [Vanilla Framework](https://github.com/canonical/vanilla-framework), implement them as tokens here and use these tokens in Vanilla SCSS. We are also going to test if we can import these tokens easily into our Figma libraries.

## JSON schema

The JSON schema adheres to the schema laid out in the [W3C Design Tokens Format Module](https://tr.designtokens.org/format/).

## Tooling

To convert the Design Tokens to the appropriate platforms this repository currently is using [Style Dictionary](https://amzn.github.io/style-dictionary/) and [Style Dictionary utils](https://github.com/lukasoppermann/style-dictionary-utils). Style Dictionary tokens have a slightly different schema than the W3C standard. The Style Dictionary utils provide a parser to convert W3C Tokens to Style Dictionary tokens.

The Style Dictionary configuration options can be changed in build.js
