cd web_src/backend
echo ----- BUILD Backend Image ----
sleep 2
docker build -t mingmaan/nslab-backend:latest .
cd ../frontend
echo ----- BUILD Frontend Image ----
sleep 2
docker build -t mingmaan/nslab-frontend:latest .
