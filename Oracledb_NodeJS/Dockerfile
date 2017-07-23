FROM store/oracle/database-instantclient:12.2.0.1

 ADD node-v6* /opt/
 ADD select1.js .
 RUN yum -y install tar* gcc* gcc-c++ unzip libaio* make curl \
#	&& tar -Jxf node-v8.1.4-linux-x64.tar.xz \
	&& yum clean all
	ENV PATH=/opt/node-v6.11.1-linux-x64/bin:$PATH
	ENV NODE_PATH=/opt/node-v6.11.1-linux-x64/lib/node_modules/
# RUN useradd nodejs -p '$6$salt$ZjJzVKp5xtoIl7cfXqZe0mQjWeOpsV2pMiIYpWzkR4ExCBpPdT3mi3eXtG1MSawJnZfXFjBcq0UUmenLq1Cj//'
 RUN npm install -g oracledb
