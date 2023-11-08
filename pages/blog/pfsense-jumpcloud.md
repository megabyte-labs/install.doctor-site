---
title: Integrating JumpCloud with pfSense
slug: pfsense-jumpcloud
date: 2023-08-07 14:00:00
author: Brian Zalewski <brian@megabyte.space>
authorUrl: https://twitter.com/HillBillyHack3r
authorName: Brian Zalewski
authorImageName: brian-zalewski.png
authorDescription: Hey, my name is Brian. My friends call me BZ. I am the main driving force behind Megabyte Labs and its various offerings. Apart from optimizing my developer tool stack, my hobbies include going to the gym, partying with friends, and playing volleyball / kickball. I never turn down a conversation about AI, God, time travelers, or Jesus. I frequently think about how I can make the world a better place by inspiring others.
description: Instructions on how to configure pfSense to work with JumpCloud
featuredImage: /self-service-portal.png
featuredImageAlt: pfSense JumpCloud graphic
tags: pfSense,JumpCloud,LDAP
---

Acquire certificate required for connecting JumpCloud to pfSense.

JumpCloud LDAPS Certificate (goes under Certificates tab)

```shell
echo -n | openssl s_client -connect ldap.jumpcloud.com:636 | sed -ne '/-BEGIN CERTIFICATE-/,/-END CERTIFICATE-/p' > /tmp/jumpcloud.ldap.pem
```

Certificate Authority (goes under CAs tab)

```shell
echo -n | openssl s_client -connect ldap.jumpcloud.com:636 -showcerts | sed -ne '/-BEGIN CERTIFICATE-/,/-END CERTIFICATE-/p' > /tmp/jumpcloud.chain.pem
```
