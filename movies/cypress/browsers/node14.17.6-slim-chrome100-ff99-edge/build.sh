# WARNING: this file was autogenerated by generate-browser-image.js
# using
#   yarn add:browser -- 14.17.6-slim --chrome=100.0.4896.88 --firefox=99.0.1 --edge
set e+x

LOCAL_NAME=cypress/browsers:node14.17.6-slim-chrome100-ff99-edge
echo "Building $LOCAL_NAME"
docker build -t $LOCAL_NAME .
