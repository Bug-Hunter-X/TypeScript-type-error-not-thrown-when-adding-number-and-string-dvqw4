# TypeScript Type Error Not Thrown

This repository demonstrates a scenario where a TypeScript type error is not thrown when a function is called with an incompatible argument type.

## Bug Description

A function `add` is defined to accept two numbers and return their sum. However, when the function is called with a number and a string, a type error is expected.  The current implementation compiles without issue, which might lead to unexpected runtime errors.