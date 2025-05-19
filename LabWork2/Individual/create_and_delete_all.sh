#!/usr/bin/env bash

./createTreeDirs.sh
echo "All directoties has been created"
read -rsn1

./createFiles.sh
echo "All files has been created"
read -rsn1

./deleteAll.sh
echo "All files and directories has been deleted"
read -rsn1
