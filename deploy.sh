#!/bin/sh
BUCKET=
aws s3 cp build $BUCKET --recursive --profile private
