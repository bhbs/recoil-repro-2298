## Repro

https://github.com/facebookexperimental/Recoil/issues/2298

```sh
npm install
npm run build
npm run preview
```

or

```sh
npm install
npm run dev
```

## Fix

```sh
FILE="./node_modules/recoil/es/index.js"
ORIGINAL="other.contents === this.contents"
REPLACEMENT="Object.is(other.contents, this.contents)"
sed -i '' "s/$ORIGINAL/$REPLACEMENT/" $FILE

npm run build
npm run preview
```
