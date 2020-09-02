# io
portfolio landing page

# sync with ec2 instance
## local to remote staging
`rsync -avze "ssh -i nginx-key.pem" ~/io/ [user]@[address]:~/html/io`

## remote staging to remote served
`sudo rsync -a html/io/ /usr/share/nginx/html/io`
