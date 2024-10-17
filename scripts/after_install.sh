

cd /home/ubuntu/api
sudo chmod -R 777  ./*
# # Clean node modules
sudo npm cache clean -f
#install node modules for project
# npm install
sudo npm install --unsafe-perm=true