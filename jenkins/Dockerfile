FROM jenkins/jenkins:lts

USER root
RUN apt-get update \
      && apt-get upgrade -y \
      && apt-get install -y sudo libltdl-dev ssh rsync \
      && rm -rf /var/lib/apt/lists/*

RUN echo "jenkins ALL=NOPASSWD: ALL" >> /etc/sudoers

# Fixes socket permissions within build containers
RUN groupadd -for -g docker_group_id docker
RUN usermod -aG docker jenkins

USER jenkins