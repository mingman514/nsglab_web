docker rm -f mongo-nsglab-web
echo "Remove MongoDB container for testing"
sleep 1 

sed -i 's/NODE_ENV=development/NODE_ENV=production/g' .env | cat -n
sed -i 's/REACT_APP_ENV=development/REACT_APP_ENV=production/g' ./web_src/frontend/.env | cat -n
echo "Edit NODE_ENV to 'production'"
sleep 1

echo "Now run 'docker-compose up -d'"
