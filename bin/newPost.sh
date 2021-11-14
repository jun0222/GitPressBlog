#!bin/bash
touch posts/`date "+%Y-%m-%d-%H%M%S"`.md
echo "---\ntitle: \ndate: `date "+%Y-%m-%d"`\nexcerpt: \n---" > posts/`date "+%Y-%m-%d-%H%M%S"`.md