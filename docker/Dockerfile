FROM node:lts-alpine
LABEL maintainer="h455257166"
ARG JD_BASE_URL=https:https://gitee.com/h455257166/My_Script.git
ARG JD_BASE_BRANCH=source
ARG KEY="-----BEGIN RSA PRIVATE KEY-----MIIEpgIBAAKCAQEA7DsFGf0D1GqKj3hR/SPzvSk+jmtl+CBziR2s4hzWjd5whNziRNn5GZ33GD+Un/IysLb6BByqv8nQObsWHWuFJcR0goBRRtAAy51QMMOL83ctICggEc0au3y8XA7Wa1uBFmxIf3+RBjN4cfDCuRT7+36C75XKhT9SR3p1gfEgVOu7lISfTk7gCiPM7yoWo0L+Ej9ifIUOlcB3IJ9jLVJGjils2c84KxGijCshDdILu+I8hfDh9/lCOvYVNfY8HnP4pUDBsGiPxoNHENJRnfnTAeXezfmmebYtBImiuLRIHjgXYxXBWSF85u/dTxUIfFlH0wj6E3PRchgCruljXYNT8QIDAQABAoIBAQDJEXtIIYlu9bg2Ya03j7BYo5BxXIyQY96zKKUMWItueZTAIdodzIIwAbpd01BHy7jFnRi1A0l6sOYhHVK3e9r6yHp60YlcgpMKvD2TI/4tHpU0N7MEM9W7G3Kf0KlE+7+mPEiA7S2dX5X3NXwoWOoZqBb+ojqcq8b2vA7kqT5hyBlVTN5vFGZeR9yiQxNI0LudwgjnOKNFUXTarFZhIW31RcUg068WXx3a3qmAmLl5ekLyF/fFwZSsKqdfji4/GrRua9BLPspCdm25pFz4aQObSnwClcx5KGV3rDKAEv7HqRTJ2GEX/i5E+umibuY6i72Z03MCunDXrJhgDjX0Np6hAoGBAPmrkAJ9wJXjqe1Ki9QQO2r9bm8CJRhLWj1SIU+pUM9TJluGupnT095/oA1fyCWZF4t4BS1Nvn3f65QfA/2CXmWNSt15/gsTXOyUjXsgbqJ0Q465QibdgQalJMcWoDibNv08jhaafMF5cVX1s9wCNcu8k27dW7MYwaf37TPi0aFNAoGBAPI4OuTsAVF4wHr0D2pv/FQrRMXMsyCDKAfpRSesnNhWNZpnbP2IG218XRcnGmuLtqJsDViKbcCJ2tw9wWDw3ygoaqYkYAxAq9rrzCoFbHD58zwFUz69n3QUB7Z8cs6nH2hkyskiH9WLbev8dliACmPI6eNCvFNRbY6+xmh3mSs1AoGBAO0xlrEnMy2zip6LMeiYOzrb5mzEBuXbwLF9M3RxEPrGrixKBUFbQ2+gpDfQhV9i4EF6FsEBmTYQ48hm5u2TS4cDAtsCqN1w2dlREFCncTQZbI1NZ5Fw4sGjZxtVXYYpv8Y6H2tN/bP5YjkeIm+kEeOrFg4/cnzlyiV/nvSqSioJAoGBAL2yZ/1tD8M8rJIengwf1CAfGudGX2sxDKLVgAGIX/XV3nkkUulkNQbUBRvi1gAwFUKzGOik0TufOzaNbut6+Wo77PpdNpOh+nWjgevO/5SjTGlPSliyrTR9k2TJpihOHnzloyNOhFv7rITK3eyFqp1ndjUzyMX/2auXoU+jiuOZAoGBAMDMTy5VqG0H1PTHmZ+2IeEJiDTeUckVZE+6eKp/LsjfMks9qUIsjRdOy6+CQx5Ot5CRl9QZoiiwewx+juvkaS5mdT3QVS3aDZAzcr1R+/TALPGuBv2gfVzrrNqQV/Fe99DG8pGILhUZHLRbZFyc2SYLzJgDxRyIehosBx0UmXgj-----END RSA PRIVATE KEY-----"
ENV PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin \
    LANG=zh_CN.UTF-8 \
    SHELL=/bin/bash \
    PS1="\u@\h:\w \$ " \
    JD_DIR=/jd \
    ENABLE_HANGUP=true \
    ENABLE_WEB_PANEL=true
RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.aliyun.com/g' /etc/apk/repositories \
    && apk update -f \
    && apk upgrade \
    && apk --no-cache add -f bash \
                             coreutils \
                             moreutils \
                             git \
                             wget \
                             curl \
                             nano \
                             tzdata \
                             perl \
                             openssl \
                             openssh \
    && rm -rf /var/cache/apk/* \
    && ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime \
    && echo "Asia/Shanghai" > /etc/timezone \
    && mkdir -p /root/.ssh \
    && chmod 700 /root/.ssh \
    && cd /root/.ssh \
    && echo -e $KEY > /root/.ssh/id_rsa \
    && chmod 600 /root/.ssh/id_rsa \
    && ssh-keyscan gitee.com > /root/.ssh/known_hosts \
    && git clone -b ${JD_BASE_BRANCH} ${JD_BASE_URL} ${JD_DIR} \
    && cd ${JD_DIR}/panel \
    && npm install \
    && npm install -g pm2 \
    && ln -sf ${JD_DIR}/jd.sh /usr/local/bin/jd \
    && ln -sf ${JD_DIR}/git_pull.sh /usr/local/bin/git_pull \
    && ln -sf ${JD_DIR}/rm_log.sh /usr/local/bin/rm_log \
    && ln -sf ${JD_DIR}/export_sharecodes.sh /usr/local/bin/export_sharecodes \
    && cp -f ${JD_DIR}/docker/docker-entrypoint.sh /usr/local/bin/docker-entrypoint.sh \
    && chmod 777 /usr/local/bin/docker-entrypoint.sh \
    && rm -rf /root/.npm
WORKDIR ${JD_DIR}
ENTRYPOINT docker-entrypoint.sh
