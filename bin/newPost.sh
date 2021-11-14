#!bin/bash
touch posts/`date "+%Y-%m-%d-%H%M%S"`.md
echo "---\nlayout: post\n---" > _posts/`date "+%Y-%m-%d"`-$1.md