#FROM store/oracle/database-instantclient:12.2.0.1
FROM oraclelinux:7-slim

 ADD node-v6* /opt/
 #RUN yum -y install tar* gcc* gcc-c++ unzip libaio* make curl \
#	&& yum clean all
 ENV PATH=/opt/node-v6.11.1-linux-x64/bin:$PATH
 ENV NODE_PATH=/opt/node-v6.11.1-linux-x64/lib/node_modules/
 RUN npm install -g express
# RUN npm install -g mongodb --save
 ADD divide2.js .

 EXPOSE 3003
 CMD [ "node", "divide2.js" ]
