# sudo chown -R $USER /home/ubuntu/platform/*
cd /home/ubuntu/api
# sudo chmod -R 777 /home/ubuntu/platform/*
# sudo chmod -R 777 .
pm2 stop api
pm2 delete api
npm run start
pm2 save
echo "Done" >> /home/ubuntu/deploy.log
