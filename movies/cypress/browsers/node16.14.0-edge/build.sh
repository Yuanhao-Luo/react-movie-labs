# WARNING: this file was autogenerated by generate-browser-image.js
# using
#   yarn add:browser -- 16.14.0 --edge
set e+x

LOCAL_NAME=cypress/browsers:node16.14.0-edge
echo "Building $LOCAL_NAME"
docker build -t $LOCAL_NAME .
