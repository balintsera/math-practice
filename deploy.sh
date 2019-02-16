#!/bin/sh
BUCKET=luca-unicorns
aws s3 cp dist s3://$BUCKET --recursive --profile default --acl public-read
