FROM oraclelinux:7-slim

ADD sqlcl-* .
RUN yum -y install wget unzip java-1.8.0-openjdk-devel \
     && unzip sqlcl*.zip \
     && yum clean all
ENV PATH=sqlcl/bin:$PATH
