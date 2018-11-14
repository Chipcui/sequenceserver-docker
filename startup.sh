#!/bin/bash -i

CONFIGFILE="-c /sequenceserver.conf"

if [ -s /conf/sequenceserver.conf ]; then
  CONFIGFILE="-c /conf/sequenceserver.conf"
fi

if [ -s /conf/Masthead.html ]; then
  echo 'Adding Masthead'
  sed -i '/<body>/ r /conf/Masthead.html' views/layout.erb
fi

if [ -d /conf/img ]; then
  mkdir -p public/img
  cp /conf/img/* public/img/
fi

if [ -s /conf/custom.css ]; then
  echo 'Adding custom css'
  cat /conf/custom.css >> public/css/sequenceserver.css
fi

if [ -s /conf/links.rb ]; then
  echo 'Adding links'
  cp /conf/links.rb /sequenceserver/lib/sequenceserver/links.rb
fi

npm run-script build && bundle

# start SequenceServer
keys="$(for l in $(ls /dbs/*.fa); do printf " \n \n \n";done)"
echo "$keys" | bundle exec bin/sequenceserver -b /usr/bin -m $CONFIGFILE &&
bundle exec bin/sequenceserver -b /usr/bin $CONFIGFILE &
tail -f /dev/null

