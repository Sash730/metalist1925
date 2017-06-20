#!/bin/bash

api_str='{{ API_HOST }}'
data_str='{{ DATA_HOST }}'

sed -i "s~$api_str~$API_HOST~;s~$data_str~$DATA_HOST~" /etc/nginx/nginx.conf

service nginx start