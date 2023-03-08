# HIGHLY EXPERIMENTAL SCRIPT

This script may work, or it may not. It may break stuff, so backup your entire airdcpp and all its share information. Find out how to do that if you don't know.

## Requirements
* Linux, MacOS or Windows
* NodeJS >= 10
* npm (Should come with NodeJS on most OS)

## Install NodeJS and npm

### Linux

**Debian/Ubuntu** packages provided by NodeSource - https://github.com/nodesource/distributions/blob/master/README.md#debinstall

**CentOS/Fedora** packages provided by NodeSource - https://github.com/nodesource/distributions/blob/master/README.md#rpminstall

**ArchLinux**: https://nodejs.org/en/download/package-manager/#arch-linux

### MacOS
https://nodejs.org/en/download/package-manager/#macos

### Windows
https://nodejs.org/en/#home-downloadhead

Also available through Chocolatey or Scoop
https://nodejs.org/en/download/package-manager/#alternatives-1

## Install dependencies

From within this folder on CLI run `npm install`

## Setup config

Copy the the settings.js.example to settings.js and update it with your AirDC API information

## Run script

The script does not have any parameters, the configuration is done inside the index.js directly, make sure to update it.

It needs to be run for each of your shares seperately, so try start with a small one and see if you can get it to work.

**AGAIN - CREATE BACKUPS OF ALL AIRDC CONFIGS/ SHARE INFORMATON**

It's easy to mess something up here when renaming and you will need to restore your configs to start over.

## Start script

`node index.js`

