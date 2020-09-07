# io
portfolio landing page

# sync with ec2 instance
## local to remote staging
`rsync -avze "ssh -i nginx-key.pem" ~/io/dist/ [user]@[address]:~/html/io/dist`

## remote staging to remote served
`sudo rsync -a html/io/dist/ /usr/share/nginx/html/io/dist`
