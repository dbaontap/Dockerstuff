# SQLcl Docker Build File
Decided to borrow what Kris Rice had and try to use the slim version of 
Oracle Linux 7
Docker image size reduced by about 100MB

[![N|Solid](http://www.oracle.com/technetwork/developer-tools/sqlcl/sqlcl-32-2994764.png)](http://www.oracle.com/technetwork/developer-tools/sqlcl/index.html)

This is a simple Dockerfile to build an image with SQLcl installed


## Installation Steps

1. Run :   git clone https://github.com/dbaontap/sqlcl-docker.git
2.  cd sqlcl-docker/
3.  Download the latest SQLcl from OTN from:

      http://www.oracle.com/technetwork/developer-tools/sqlcl/downloads/index.html
      
   Place in this directory
   
4. Run :  docker build -t sqlcl .


### Run

``` 
docker run -it sqlcl sql
``` 


