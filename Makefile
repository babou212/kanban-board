run:
	make -j 2 run_web_app run_json_server

run_web_app:
	echo "Starting Web app..."
	npm run dev

run_json_server:
	echo "starting JSON server..."
	json-server --watch db.json --port 8000
	