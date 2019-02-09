#!/bin/sh
BUCKET=luca-unicorns
aws s3 cp . s3://$BUCKET --recursive --exclude '.git/*' --exclude 'deploy.sh' --exclude 'cloudformation.yml' --profile default
