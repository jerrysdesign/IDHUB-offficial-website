FROM node:8.9.1
MAINTAINER wubm@cepave.com

# ENV VAR
ENV HOME=/root WORKDIR=/root/idhub

# Switch to /root
WORKDIR $HOME

# Prepare env
RUN mkdir -p $WORKDIR
COPY . $WORKDIR

WORKDIR $WORKDIR
# Install package
RUN cd $WORKDIR \
    && npm install -g express pm2 semver \
    && npm install express

COPY ./docker/src/idhub_web/docker-entrypoint.sh /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]
CMD ["-p"]
