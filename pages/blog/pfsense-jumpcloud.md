Acquire certificate required for connecting JumpCloud to pfSense.

JumpCloud LDAPS Certificate (goes under Certificates tab)

```shell
echo -n | openssl s_client -connect ldap.jumpcloud.com:636 | sed -ne '/-BEGIN CERTIFICATE-/,/-END CERTIFICATE-/p' > /tmp/jumpcloud.ldap.pem
```

Certificate Authority (goes under CAs tab)

echo -n | openssl s_client -connect ldap.jumpcloud.com:636 -showcerts | sed -ne '/-BEGIN CERTIFICATE-/,/-END CERTIFICATE-/p' > /tmp/jumpcloud.chain.pem
