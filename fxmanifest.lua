fx_version 'cerulean'
author 'NoCapScripts'
game 'gta5'
lua54 'yes'
description ''
version '1.0.0'

client_script {
    'client/*.lua',
}

shared_script {
    'shared/*.lua',
}

server_script {
    'server/*.lua',
}

ui_page 'ui/index.html'

files {
    'ui/index.html',
    'ui/assets/**',
}
