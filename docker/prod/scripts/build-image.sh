#!/bin/bash

# This file should build the images of the packages inside the ./packages/* 
# on the root level. It is meant to be automated
#
# Provide the script with following arguments
# --tag = buffle/exampleApp1
# --package_folder = "exampleApp1"

# Set the name of the image and the path to the build context
tag=buffle/host
package_folder=host
image_build_context=${PACKAGES_BUILD_CONTEXT}/host


# Navigate to the build context folder
cd $image_build_context


# Build the image
docker build -t buffle/host .


# Navigate back to the original folder
cd -