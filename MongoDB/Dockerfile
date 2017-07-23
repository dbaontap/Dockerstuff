FROM oraclelinux:7-slim

ADD mongodb-org-3.4.repo /etc/yum.repos.d/
RUN yum install -y mongodb-org\
	&& yum clean all
RUN mkdir -p /data/db

