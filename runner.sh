test_file=${1-all}

java -jar JsTestDriver-1.3.2.jar --config JsTestDriver.config --tests $test_file --reset
