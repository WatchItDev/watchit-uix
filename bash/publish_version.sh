#!/usr/bin/env bash

current_dir=$(pwd)
#parent_dir="$(dirname "$current_dir")"

PACKAGE_VERSION=$(cat $current_dir/package.json \
  | grep version \
  | head -1 \
  | awk -F: '{ print $2 }' \
  | sed 's/[",]//g' \
  | tr -d '[[:space:]]')

arrIN=(${PACKAGE_VERSION//./ })

patchVersion=${arrIN[2]}

oldVersion="${arrIN[0]}\.${arrIN[1]}\.${arrIN[2]}"
newVersion="${arrIN[0]}.${arrIN[1]}.$((patchVersion + 1))"

echo "$PACKAGE_VERSION => $newVersion"

sed -ie 's|\(.*"version"\): "\(.*\)",.*|\1: '"\"$newVersion\",|" $current_dir/package.json

echo "UPLOADING NEW VERSION"

rm -r dist/

npm run rollup

npm publish
