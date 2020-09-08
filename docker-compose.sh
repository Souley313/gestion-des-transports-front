echo "### Compilation mvn ###"
cd ../gestion-des-transports-back/
mvn clean package

echo "### Compilation npm ###"
cd ../gestion-des-transports-front/
npm run build -- --prod

echo "### Execution docker-compose ###"
docker-compose up -d --build