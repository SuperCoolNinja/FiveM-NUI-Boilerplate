fx_version 'cerulean'
game 'gta5'

author 'SuperCoolNinja'
description 'EMS Callout System'
version '1.0.0'

client_scripts {
  'client/main.lua'
}

server_scripts {
  'server/main.lua'
}

shared_scripts {
  'shared/config.lua'
}

ui_page 'client/ui/build/index.html'

files {
  'client/ui/build/index.html',
  'client/ui/build/**/*',
}
