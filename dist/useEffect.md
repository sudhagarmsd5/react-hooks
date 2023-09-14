# useEffect

## Syntax :

```js
useEffect(setup, dependencies);
```

```js
1) useEffect(() => {
  // Runs again if a or b are different
}, [a, b]) - passing dependency array

2) useEffect(() => {
  // Does not run again (except once in development)
}, []) - passing an empty dependency array

3) useEffect(() => {
  // Always runs again
}) - passing no dependency array at all
```
