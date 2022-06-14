cd microblog-frontend
npm install
[ $? -eq 0 ]  || exit 1
echo

npx prettier --write .
npx eslint --fix . --ext .js
[ $? -eq 0 ]  || exit 1
echo

npm test
[ $? -eq 0 ]  || exit 1
echo