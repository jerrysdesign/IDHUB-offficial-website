# IDHub Official README #

```bash
sudo apt-get update
sudo apt-get install -y curl
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get install -y nodejs
npm install -g express pm2
pm2 start server.js
```

docker
```bash
cd ~/idhub-gitlab/docker/
git fetch -a
git checkout <version number>
bash update.sh
```