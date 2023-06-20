docker-compose down
echo "Stop current containers"
sleep 1

sed -i 's/NODE_ENV=production/NODE_ENV=development/g' .env | cat -n
sed -i 's/REACT_APP_ENV=production/REACT_APP_ENV=development/g' ./web_src/frontend/.env | cat -n
echo "Edit NODE_ENV to 'development'"
sleep 1

docker rm -f mongo-nsglab-web
docker run --name mongo-nsglab-web -v $(pwd)/data:/data/db -d -p 27017:27017 mongo:5.0.0-focal
echo "Run MongoDB container for testing (that exposes ports to external access)"
docker ps | grep mongo
sleep 1

echo "Now you need to manually run [backend] and [frontend] apps."
