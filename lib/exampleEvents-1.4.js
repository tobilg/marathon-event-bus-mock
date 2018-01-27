"use strict";

module.exports = {
    "api_post_event": {
        "eventType": "api_post_event",
        "timestamp": "2014-03-01T23:29:30.158Z",
        "clientIp": "0:0:0:0:0:0:0:1",
        "uri": "/v2/apps/my-app",
        "appDefinition": {
            "args": [],
            "backoffFactor": 1.15,
            "backoffSeconds": 1,
            "cmd": "sleep 30",
            "constraints": [],
            "container": null,
            "cpus": 0.2,
            "dependencies": [],
            "disk": 0.0,
            "env": {},
            "executor": "",
            "healthChecks": [],
            "id": "/my-app",
            "instances": 2,
            "mem": 32.0,
            "ports": [10001],
            "requirePorts": false,
            "storeUrls": [],
            "upgradeStrategy": {
                "minimumHealthCapacity": 1.0
            },
            "uris": [],
            "user": null,
            "version": "2014-09-09T05:57:50.866Z"
        }
    },
    "status_update_event": {
        "eventType": "status_update_event",
        "timestamp": "2014-03-01T23:29:30.158Z",
        "slaveId": "20140909-054127-177048842-5050-1494-0",
        "taskId": "my-app_0-1396592784349",
        "taskStatus": "TASK_RUNNING",
        "appId": "/my-app",
        "host": "slave-1234.acme.org",
        "ports": [31372],
        "version": "2014-04-04T06:26:23.051Z"
    },
    "framework_message_event": {
        "eventType": "framework_message_event",
        "timestamp": "2014-03-01T23:29:30.158Z",
        "slaveId": "20140909-054127-177048842-5050-1494-0",
        "executorId": "my-app.3f80d17a-37e6-11e4-b05e-56847afe9799",
        "message": "aGVsbG8gd29ybGQh"
    },
    "subscribe_event": {
        "eventType": "subscribe_event",
        "timestamp": "2014-03-01T23:29:30.158Z",
        "clientIp": "1.2.3.4",
        "callbackUrl": "http://subscriber.acme.org/callbacks"
    },
    "unsubscribe_event": {
        "eventType": "unsubscribe_event",
        "timestamp": "2014-03-01T23:29:30.158Z",
        "clientIp": "1.2.3.4",
        "callbackUrl": "http://subscriber.acme.org/callbacks"
    },
    "add_health_check_event": {
        "eventType": "add_health_check_event",
        "timestamp": "2014-03-01T23:29:30.158Z",
        "appId": "/my-app",
        "healthCheck": {
            "protocol": "HTTP",
            "path": "/health",
            "portIndex": 0,
            "gracePeriodSeconds": 5,
            "intervalSeconds": 10,
            "timeoutSeconds": 10,
            "maxConsecutiveFailures": 3
        }
    },
    "remove_health_check_event": {
        "eventType": "remove_health_check_event",
        "timestamp": "2014-03-01T23:29:30.158Z",
        "appId": "/my-app",
        "healthCheck": {
            "protocol": "HTTP",
            "path": "/health",
            "portIndex": 0,
            "gracePeriodSeconds": 5,
            "intervalSeconds": 10,
            "timeoutSeconds": 10,
            "maxConsecutiveFailures": 3
        }
    },
    "failed_health_check_event": {
        "eventType": "failed_health_check_event",
        "timestamp": "2014-03-01T23:29:30.158Z",
        "appId": "/my-app",
        "taskId": "my-app_0-1396592784349",
        "healthCheck": {
            "protocol": "HTTP",
            "path": "/health",
            "portIndex": 0,
            "gracePeriodSeconds": 5,
            "intervalSeconds": 10,
            "timeoutSeconds": 10,
            "maxConsecutiveFailures": 3
        }
    },
    "health_status_changed_event": {
        "eventType": "health_status_changed_event",
        "timestamp": "2014-03-01T23:29:30.158Z",
        "appId": "/my-app",
        "instanceId": "my-app.instance-c7c311a4-b669-11e6-a48f-0ea4f4b1778c",
        "version": "2014-04-04T06:26:23.051Z",
        "alive": true
    },
    "unhealthy_task_kill_event": {
        "appId": "/my-app",
        "taskId": "my-app_0-1396592784349",
        "version": "2016-03-16T13:05:00.590Z",
        "reason": "500 Internal Server Error",
        "host": "localhost",
        "slaveId": "4fb620fa-ba8d-4eb0-8ae3-f2912aaf015c-S0",
        "eventType": "unhealthy_task_kill_event",
        "timestamp": "2016-03-21T09:15:10.764Z"
    },
    "group_change_success": {
        "eventType": "group_change_success",
        "timestamp": "2014-03-01T23:29:30.158Z",
        "groupId": "/product-a/backend",
        "version": "2014-04-04T06:26:23.051Z"
    },
    "group_change_failed": {
        "eventType": "group_change_failed",
        "timestamp": "2014-03-01T23:29:30.158Z",
        "groupId": "/product-a/backend",
        "version": "2014-04-04T06:26:23.051Z",
        "reason": ""
    },
    "deployment_success": {
        "id": "f223e02f-09af-49b4-9d6e-428abf09b15d",
        "plan": {
            "id": "f223e02f-09af-49b4-9d6e-428abf09b15d",
            "original": {
                "id": "/",
                "apps": [{
                    "id": "/mesos-dns",
                    "cmd": null,
                    "args": null,
                    "user": null,
                    "env": {
                        "MESOS_DNS_REFRESH": "10",
                        "MESOS_IP_SOURCES": "mesos,host",
                        "MESOS_ZK": "zk://172.17.11.101:2181,172.17.11.102:2181,172.17.11.103:2181/mesos",
                        "MESOS_DNS_EXTERNAL_SERVERS": "8.8.8.8,8.8.4.4",
                        "MESOS_DNS_HTTP_ENABLED": "true"
                    },
                    "instances": 3,
                    "cpus": 0.2,
                    "mem": 128,
                    "disk": 0,
                    "gpus": 0,
                    "executor": "",
                    "constraints": [
                        ["hostname", "UNIQUE"]
                    ],
                    "uris": [],
                    "fetch": [],
                    "storeUrls": [],
                    "backoffSeconds": 1,
                    "backoffFactor": 1.15,
                    "maxLaunchDelaySeconds": 3600,
                    "container": {
                        "type": "DOCKER",
                        "volumes": [],
                        "docker": {
                            "image": "registry:5000/mesos-dns:v0.5.2",
                            "network": "HOST",
                            "portMappings": [],
                            "privileged": false,
                            "parameters": [],
                            "forcePullImage": false
                        }
                    },
                    "healthChecks": [{
                        "gracePeriodSeconds": 30,
                        "intervalSeconds": 10,
                        "timeoutSeconds": 20,
                        "maxConsecutiveFailures": 3,
                        "port": 8123,
                        "path": "/v1/version",
                        "protocol": "HTTP",
                        "ignoreHttp1xx": false
                    }],
                    "readinessChecks": [],
                    "dependencies": [],
                    "upgradeStrategy": {
                        "minimumHealthCapacity": 1,
                        "maximumOverCapacity": 1
                    },
                    "labels": {},
                    "ipAddress": null,
                    "version": "2017-05-31T13:43:12.378Z",
                    "residency": null,
                    "secrets": {},
                    "taskKillGracePeriodSeconds": null,
                    "unreachableStrategy": {
                        "inactiveAfterSeconds": 300,
                        "expungeAfterSeconds": 600
                    },
                    "killSelection": "YOUNGEST_FIRST",
                    "ports": [10000],
                    "portDefinitions": [{
                        "port": 10000,
                        "protocol": "tcp",
                        "name": "default",
                        "labels": {}
                    }],
                    "requirePorts": false,
                    "versionInfo": {
                        "lastScalingAt": "2017-05-31T13:43:12.378Z",
                        "lastConfigChangeAt": "2017-05-31T13:43:12.378Z"
                    }
                }, {
                    "id": "/test-sdoifhsoifh",
                    "cmd": "sleep 1000",
                    "args": null,
                    "user": null,
                    "env": {},
                    "instances": 1,
                    "cpus": 0.1,
                    "mem": 128,
                    "disk": 0,
                    "gpus": 0,
                    "executor": "",
                    "constraints": [],
                    "uris": [],
                    "fetch": [],
                    "storeUrls": [],
                    "backoffSeconds": 1,
                    "backoffFactor": 1.15,
                    "maxLaunchDelaySeconds": 3600,
                    "container": null,
                    "healthChecks": [],
                    "readinessChecks": [],
                    "dependencies": [],
                    "upgradeStrategy": {
                        "minimumHealthCapacity": 1,
                        "maximumOverCapacity": 1
                    },
                    "labels": {},
                    "ipAddress": null,
                    "version": "2017-06-01T15:20:37.339Z",
                    "residency": null,
                    "secrets": {},
                    "taskKillGracePeriodSeconds": null,
                    "unreachableStrategy": {
                        "inactiveAfterSeconds": 300,
                        "expungeAfterSeconds": 600
                    },
                    "killSelection": "YOUNGEST_FIRST",
                    "ports": [10001],
                    "portDefinitions": [{
                        "port": 10001,
                        "protocol": "tcp",
                        "name": "default",
                        "labels": {}
                    }],
                    "requirePorts": false,
                    "versionInfo": {
                        "lastScalingAt": "2017-06-01T15:20:37.339Z",
                        "lastConfigChangeAt": "2017-06-01T15:20:37.339Z"
                    }
                }, {
                    "id": "/dsfsdfsdf",
                    "cmd": "sleep 1000",
                    "args": null,
                    "user": null,
                    "env": {},
                    "instances": 1,
                    "cpus": 0.1,
                    "mem": 128,
                    "disk": 0,
                    "gpus": 0,
                    "executor": "",
                    "constraints": [],
                    "uris": [],
                    "fetch": [],
                    "storeUrls": [],
                    "backoffSeconds": 1,
                    "backoffFactor": 1.15,
                    "maxLaunchDelaySeconds": 3600,
                    "container": null,
                    "healthChecks": [],
                    "readinessChecks": [],
                    "dependencies": [],
                    "upgradeStrategy": {
                        "minimumHealthCapacity": 1,
                        "maximumOverCapacity": 1
                    },
                    "labels": {},
                    "ipAddress": null,
                    "version": "2017-06-01T15:21:04.792Z",
                    "residency": null,
                    "secrets": {},
                    "taskKillGracePeriodSeconds": null,
                    "unreachableStrategy": {
                        "inactiveAfterSeconds": 300,
                        "expungeAfterSeconds": 600
                    },
                    "killSelection": "YOUNGEST_FIRST",
                    "ports": [10002],
                    "portDefinitions": [{
                        "port": 10002,
                        "protocol": "tcp",
                        "name": "default",
                        "labels": {}
                    }],
                    "requirePorts": false,
                    "versionInfo": {
                        "lastScalingAt": "2017-06-01T15:21:04.792Z",
                        "lastConfigChangeAt": "2017-06-01T15:21:04.792Z"
                    }
                }, {
                    "id": "/blubtest",
                    "cmd": "sleep 1000",
                    "args": null,
                    "user": null,
                    "env": {},
                    "instances": 2,
                    "cpus": 0.1,
                    "mem": 128,
                    "disk": 0,
                    "gpus": 0,
                    "executor": "",
                    "constraints": [],
                    "uris": [],
                    "fetch": [],
                    "storeUrls": [],
                    "backoffSeconds": 1,
                    "backoffFactor": 1.15,
                    "maxLaunchDelaySeconds": 3600,
                    "container": null,
                    "healthChecks": [],
                    "readinessChecks": [],
                    "dependencies": [],
                    "upgradeStrategy": {
                        "minimumHealthCapacity": 1,
                        "maximumOverCapacity": 1
                    },
                    "labels": {},
                    "ipAddress": null,
                    "version": "2017-06-01T15:38:54.139Z",
                    "residency": null,
                    "secrets": {},
                    "taskKillGracePeriodSeconds": null,
                    "unreachableStrategy": {
                        "inactiveAfterSeconds": 300,
                        "expungeAfterSeconds": 600
                    },
                    "killSelection": "YOUNGEST_FIRST",
                    "ports": [10003],
                    "portDefinitions": [{
                        "port": 10003,
                        "protocol": "tcp",
                        "name": "default",
                        "labels": {}
                    }],
                    "requirePorts": false,
                    "versionInfo": {
                        "lastScalingAt": "2017-06-01T15:38:54.139Z",
                        "lastConfigChangeAt": "2017-06-01T15:22:42.344Z"
                    }
                }],
                "pods": [],
                "groups": [],
                "dependencies": [],
                "version": "2017-06-01T15:38:54.139Z"
            },
            "target": {
                "id": "/",
                "apps": [{
                    "id": "/mesos-dns",
                    "cmd": null,
                    "args": null,
                    "user": null,
                    "env": {
                        "MESOS_DNS_REFRESH": "10",
                        "MESOS_IP_SOURCES": "mesos,host",
                        "MESOS_ZK": "zk://172.17.11.101:2181,172.17.11.102:2181,172.17.11.103:2181/mesos",
                        "MESOS_DNS_EXTERNAL_SERVERS": "8.8.8.8,8.8.4.4",
                        "MESOS_DNS_HTTP_ENABLED": "true"
                    },
                    "instances": 3,
                    "cpus": 0.2,
                    "mem": 128,
                    "disk": 0,
                    "gpus": 0,
                    "executor": "",
                    "constraints": [
                        ["hostname", "UNIQUE"]
                    ],
                    "uris": [],
                    "fetch": [],
                    "storeUrls": [],
                    "backoffSeconds": 1,
                    "backoffFactor": 1.15,
                    "maxLaunchDelaySeconds": 3600,
                    "container": {
                        "type": "DOCKER",
                        "volumes": [],
                        "docker": {
                            "image": "registry:5000/mesos-dns:v0.5.2",
                            "network": "HOST",
                            "portMappings": [],
                            "privileged": false,
                            "parameters": [],
                            "forcePullImage": false
                        }
                    },
                    "healthChecks": [{
                        "gracePeriodSeconds": 30,
                        "intervalSeconds": 10,
                        "timeoutSeconds": 20,
                        "maxConsecutiveFailures": 3,
                        "port": 8123,
                        "path": "/v1/version",
                        "protocol": "HTTP",
                        "ignoreHttp1xx": false
                    }],
                    "readinessChecks": [],
                    "dependencies": [],
                    "upgradeStrategy": {
                        "minimumHealthCapacity": 1,
                        "maximumOverCapacity": 1
                    },
                    "labels": {},
                    "ipAddress": null,
                    "version": "2017-05-31T13:43:12.378Z",
                    "residency": null,
                    "secrets": {},
                    "taskKillGracePeriodSeconds": null,
                    "unreachableStrategy": {
                        "inactiveAfterSeconds": 300,
                        "expungeAfterSeconds": 600
                    },
                    "killSelection": "YOUNGEST_FIRST",
                    "ports": [10000],
                    "portDefinitions": [{
                        "port": 10000,
                        "protocol": "tcp",
                        "name": "default",
                        "labels": {}
                    }],
                    "requirePorts": false,
                    "versionInfo": {
                        "lastScalingAt": "2017-05-31T13:43:12.378Z",
                        "lastConfigChangeAt": "2017-05-31T13:43:12.378Z"
                    }
                }, {
                    "id": "/test-sdoifhsoifh",
                    "cmd": "sleep 1000",
                    "args": null,
                    "user": null,
                    "env": {},
                    "instances": 1,
                    "cpus": 0.1,
                    "mem": 128,
                    "disk": 0,
                    "gpus": 0,
                    "executor": "",
                    "constraints": [],
                    "uris": [],
                    "fetch": [],
                    "storeUrls": [],
                    "backoffSeconds": 1,
                    "backoffFactor": 1.15,
                    "maxLaunchDelaySeconds": 3600,
                    "container": null,
                    "healthChecks": [],
                    "readinessChecks": [],
                    "dependencies": [],
                    "upgradeStrategy": {
                        "minimumHealthCapacity": 1,
                        "maximumOverCapacity": 1
                    },
                    "labels": {},
                    "ipAddress": null,
                    "version": "2017-06-01T15:20:37.339Z",
                    "residency": null,
                    "secrets": {},
                    "taskKillGracePeriodSeconds": null,
                    "unreachableStrategy": {
                        "inactiveAfterSeconds": 300,
                        "expungeAfterSeconds": 600
                    },
                    "killSelection": "YOUNGEST_FIRST",
                    "ports": [10001],
                    "portDefinitions": [{
                        "port": 10001,
                        "protocol": "tcp",
                        "name": "default",
                        "labels": {}
                    }],
                    "requirePorts": false,
                    "versionInfo": {
                        "lastScalingAt": "2017-06-01T15:20:37.339Z",
                        "lastConfigChangeAt": "2017-06-01T15:20:37.339Z"
                    }
                }, {
                    "id": "/dsfsdfsdf",
                    "cmd": "sleep 1000",
                    "args": null,
                    "user": null,
                    "env": {},
                    "instances": 1,
                    "cpus": 0.1,
                    "mem": 128,
                    "disk": 0,
                    "gpus": 0,
                    "executor": "",
                    "constraints": [],
                    "uris": [],
                    "fetch": [],
                    "storeUrls": [],
                    "backoffSeconds": 1,
                    "backoffFactor": 1.15,
                    "maxLaunchDelaySeconds": 3600,
                    "container": null,
                    "healthChecks": [],
                    "readinessChecks": [],
                    "dependencies": [],
                    "upgradeStrategy": {
                        "minimumHealthCapacity": 1,
                        "maximumOverCapacity": 1
                    },
                    "labels": {},
                    "ipAddress": null,
                    "version": "2017-06-01T15:21:04.792Z",
                    "residency": null,
                    "secrets": {},
                    "taskKillGracePeriodSeconds": null,
                    "unreachableStrategy": {
                        "inactiveAfterSeconds": 300,
                        "expungeAfterSeconds": 600
                    },
                    "killSelection": "YOUNGEST_FIRST",
                    "ports": [10002],
                    "portDefinitions": [{
                        "port": 10002,
                        "protocol": "tcp",
                        "name": "default",
                        "labels": {}
                    }],
                    "requirePorts": false,
                    "versionInfo": {
                        "lastScalingAt": "2017-06-01T15:21:04.792Z",
                        "lastConfigChangeAt": "2017-06-01T15:21:04.792Z"
                    }
                }, {
                    "id": "/blubtest",
                    "cmd": "sleep 1000",
                    "args": null,
                    "user": null,
                    "env": {},
                    "instances": 2,
                    "cpus": 0.1,
                    "mem": 128,
                    "disk": 0,
                    "gpus": 0,
                    "executor": "",
                    "constraints": [],
                    "uris": [],
                    "fetch": [],
                    "storeUrls": [],
                    "backoffSeconds": 1,
                    "backoffFactor": 1.15,
                    "maxLaunchDelaySeconds": 3600,
                    "container": null,
                    "healthChecks": [],
                    "readinessChecks": [],
                    "dependencies": [],
                    "upgradeStrategy": {
                        "minimumHealthCapacity": 1,
                        "maximumOverCapacity": 1
                    },
                    "labels": {},
                    "ipAddress": null,
                    "version": "2017-06-01T17:06:01.713Z",
                    "residency": null,
                    "secrets": {},
                    "taskKillGracePeriodSeconds": null,
                    "unreachableStrategy": {
                        "inactiveAfterSeconds": 300,
                        "expungeAfterSeconds": 600
                    },
                    "killSelection": "YOUNGEST_FIRST",
                    "ports": [10003],
                    "portDefinitions": [{
                        "port": 10003,
                        "protocol": "tcp",
                        "name": "default",
                        "labels": {}
                    }],
                    "requirePorts": false,
                    "versionInfo": {
                        "lastScalingAt": "2017-06-01T17:06:01.713Z",
                        "lastConfigChangeAt": "2017-06-01T15:22:42.344Z"
                    }
                }],
                "pods": [],
                "groups": [],
                "dependencies": [],
                "version": "2017-06-01T17:06:01.713Z"
            },
            "steps": [{
                "actions": [{
                    "action": "RestartApplication",
                    "app": "/blubtest"
                }]
            }],
            "version": "2017-06-01T17:06:01.713Z"
        },
        "eventType": "deployment_success",
        "timestamp": "2017-06-01T17:06:02.039Z"
    },
    "deployment_failed": {
        "eventType": "deployment_failed",
        "timestamp": "2014-03-01T23:29:30.158Z",
        "id": "867ed450-f6a8-4d33-9b0e-e11c5513990b"
    },
    "deployment_info": {
        "plan": {
            "id": "f223e02f-09af-49b4-9d6e-428abf09b15d",
            "original": {
                "id": "/",
                "apps": [{
                    "id": "/mesos-dns",
                    "cmd": null,
                    "args": null,
                    "user": null,
                    "env": {
                        "MESOS_DNS_REFRESH": "10",
                        "MESOS_IP_SOURCES": "mesos,host",
                        "MESOS_ZK": "zk://172.17.11.101:2181,172.17.11.102:2181,172.17.11.103:2181/mesos",
                        "MESOS_DNS_EXTERNAL_SERVERS": "8.8.8.8,8.8.4.4",
                        "MESOS_DNS_HTTP_ENABLED": "true"
                    },
                    "instances": 3,
                    "cpus": 0.2,
                    "mem": 128,
                    "disk": 0,
                    "gpus": 0,
                    "executor": "",
                    "constraints": [
                        ["hostname", "UNIQUE"]
                    ],
                    "uris": [],
                    "fetch": [],
                    "storeUrls": [],
                    "backoffSeconds": 1,
                    "backoffFactor": 1.15,
                    "maxLaunchDelaySeconds": 3600,
                    "container": {
                        "type": "DOCKER",
                        "volumes": [],
                        "docker": {
                            "image": "registry:5000/mesos-dns:v0.5.2",
                            "network": "HOST",
                            "portMappings": [],
                            "privileged": false,
                            "parameters": [],
                            "forcePullImage": false
                        }
                    },
                    "healthChecks": [{
                        "gracePeriodSeconds": 30,
                        "intervalSeconds": 10,
                        "timeoutSeconds": 20,
                        "maxConsecutiveFailures": 3,
                        "port": 8123,
                        "path": "/v1/version",
                        "protocol": "HTTP",
                        "ignoreHttp1xx": false
                    }],
                    "readinessChecks": [],
                    "dependencies": [],
                    "upgradeStrategy": {
                        "minimumHealthCapacity": 1,
                        "maximumOverCapacity": 1
                    },
                    "labels": {},
                    "ipAddress": null,
                    "version": "2017-05-31T13:43:12.378Z",
                    "residency": null,
                    "secrets": {},
                    "taskKillGracePeriodSeconds": null,
                    "unreachableStrategy": {
                        "inactiveAfterSeconds": 300,
                        "expungeAfterSeconds": 600
                    },
                    "killSelection": "YOUNGEST_FIRST",
                    "ports": [10000],
                    "portDefinitions": [{
                        "port": 10000,
                        "protocol": "tcp",
                        "name": "default",
                        "labels": {}
                    }],
                    "requirePorts": false,
                    "versionInfo": {
                        "lastScalingAt": "2017-05-31T13:43:12.378Z",
                        "lastConfigChangeAt": "2017-05-31T13:43:12.378Z"
                    }
                }, {
                    "id": "/test-sdoifhsoifh",
                    "cmd": "sleep 1000",
                    "args": null,
                    "user": null,
                    "env": {},
                    "instances": 1,
                    "cpus": 0.1,
                    "mem": 128,
                    "disk": 0,
                    "gpus": 0,
                    "executor": "",
                    "constraints": [],
                    "uris": [],
                    "fetch": [],
                    "storeUrls": [],
                    "backoffSeconds": 1,
                    "backoffFactor": 1.15,
                    "maxLaunchDelaySeconds": 3600,
                    "container": null,
                    "healthChecks": [],
                    "readinessChecks": [],
                    "dependencies": [],
                    "upgradeStrategy": {
                        "minimumHealthCapacity": 1,
                        "maximumOverCapacity": 1
                    },
                    "labels": {},
                    "ipAddress": null,
                    "version": "2017-06-01T15:20:37.339Z",
                    "residency": null,
                    "secrets": {},
                    "taskKillGracePeriodSeconds": null,
                    "unreachableStrategy": {
                        "inactiveAfterSeconds": 300,
                        "expungeAfterSeconds": 600
                    },
                    "killSelection": "YOUNGEST_FIRST",
                    "ports": [10001],
                    "portDefinitions": [{
                        "port": 10001,
                        "protocol": "tcp",
                        "name": "default",
                        "labels": {}
                    }],
                    "requirePorts": false,
                    "versionInfo": {
                        "lastScalingAt": "2017-06-01T15:20:37.339Z",
                        "lastConfigChangeAt": "2017-06-01T15:20:37.339Z"
                    }
                }, {
                    "id": "/dsfsdfsdf",
                    "cmd": "sleep 1000",
                    "args": null,
                    "user": null,
                    "env": {},
                    "instances": 1,
                    "cpus": 0.1,
                    "mem": 128,
                    "disk": 0,
                    "gpus": 0,
                    "executor": "",
                    "constraints": [],
                    "uris": [],
                    "fetch": [],
                    "storeUrls": [],
                    "backoffSeconds": 1,
                    "backoffFactor": 1.15,
                    "maxLaunchDelaySeconds": 3600,
                    "container": null,
                    "healthChecks": [],
                    "readinessChecks": [],
                    "dependencies": [],
                    "upgradeStrategy": {
                        "minimumHealthCapacity": 1,
                        "maximumOverCapacity": 1
                    },
                    "labels": {},
                    "ipAddress": null,
                    "version": "2017-06-01T15:21:04.792Z",
                    "residency": null,
                    "secrets": {},
                    "taskKillGracePeriodSeconds": null,
                    "unreachableStrategy": {
                        "inactiveAfterSeconds": 300,
                        "expungeAfterSeconds": 600
                    },
                    "killSelection": "YOUNGEST_FIRST",
                    "ports": [10002],
                    "portDefinitions": [{
                        "port": 10002,
                        "protocol": "tcp",
                        "name": "default",
                        "labels": {}
                    }],
                    "requirePorts": false,
                    "versionInfo": {
                        "lastScalingAt": "2017-06-01T15:21:04.792Z",
                        "lastConfigChangeAt": "2017-06-01T15:21:04.792Z"
                    }
                }, {
                    "id": "/blubtest",
                    "cmd": "sleep 1000",
                    "args": null,
                    "user": null,
                    "env": {},
                    "instances": 2,
                    "cpus": 0.1,
                    "mem": 128,
                    "disk": 0,
                    "gpus": 0,
                    "executor": "",
                    "constraints": [],
                    "uris": [],
                    "fetch": [],
                    "storeUrls": [],
                    "backoffSeconds": 1,
                    "backoffFactor": 1.15,
                    "maxLaunchDelaySeconds": 3600,
                    "container": null,
                    "healthChecks": [],
                    "readinessChecks": [],
                    "dependencies": [],
                    "upgradeStrategy": {
                        "minimumHealthCapacity": 1,
                        "maximumOverCapacity": 1
                    },
                    "labels": {},
                    "ipAddress": null,
                    "version": "2017-06-01T15:38:54.139Z",
                    "residency": null,
                    "secrets": {},
                    "taskKillGracePeriodSeconds": null,
                    "unreachableStrategy": {
                        "inactiveAfterSeconds": 300,
                        "expungeAfterSeconds": 600
                    },
                    "killSelection": "YOUNGEST_FIRST",
                    "ports": [10003],
                    "portDefinitions": [{
                        "port": 10003,
                        "protocol": "tcp",
                        "name": "default",
                        "labels": {}
                    }],
                    "requirePorts": false,
                    "versionInfo": {
                        "lastScalingAt": "2017-06-01T15:38:54.139Z",
                        "lastConfigChangeAt": "2017-06-01T15:22:42.344Z"
                    }
                }],
                "pods": [],
                "groups": [],
                "dependencies": [],
                "version": "2017-06-01T15:38:54.139Z"
            },
            "target": {
                "id": "/",
                "apps": [{
                    "id": "/mesos-dns",
                    "cmd": null,
                    "args": null,
                    "user": null,
                    "env": {
                        "MESOS_DNS_REFRESH": "10",
                        "MESOS_IP_SOURCES": "mesos,host",
                        "MESOS_ZK": "zk://172.17.11.101:2181,172.17.11.102:2181,172.17.11.103:2181/mesos",
                        "MESOS_DNS_EXTERNAL_SERVERS": "8.8.8.8,8.8.4.4",
                        "MESOS_DNS_HTTP_ENABLED": "true"
                    },
                    "instances": 3,
                    "cpus": 0.2,
                    "mem": 128,
                    "disk": 0,
                    "gpus": 0,
                    "executor": "",
                    "constraints": [
                        ["hostname", "UNIQUE"]
                    ],
                    "uris": [],
                    "fetch": [],
                    "storeUrls": [],
                    "backoffSeconds": 1,
                    "backoffFactor": 1.15,
                    "maxLaunchDelaySeconds": 3600,
                    "container": {
                        "type": "DOCKER",
                        "volumes": [],
                        "docker": {
                            "image": "registry:5000/mesos-dns:v0.5.2",
                            "network": "HOST",
                            "portMappings": [],
                            "privileged": false,
                            "parameters": [],
                            "forcePullImage": false
                        }
                    },
                    "healthChecks": [{
                        "gracePeriodSeconds": 30,
                        "intervalSeconds": 10,
                        "timeoutSeconds": 20,
                        "maxConsecutiveFailures": 3,
                        "port": 8123,
                        "path": "/v1/version",
                        "protocol": "HTTP",
                        "ignoreHttp1xx": false
                    }],
                    "readinessChecks": [],
                    "dependencies": [],
                    "upgradeStrategy": {
                        "minimumHealthCapacity": 1,
                        "maximumOverCapacity": 1
                    },
                    "labels": {},
                    "ipAddress": null,
                    "version": "2017-05-31T13:43:12.378Z",
                    "residency": null,
                    "secrets": {},
                    "taskKillGracePeriodSeconds": null,
                    "unreachableStrategy": {
                        "inactiveAfterSeconds": 300,
                        "expungeAfterSeconds": 600
                    },
                    "killSelection": "YOUNGEST_FIRST",
                    "ports": [10000],
                    "portDefinitions": [{
                        "port": 10000,
                        "protocol": "tcp",
                        "name": "default",
                        "labels": {}
                    }],
                    "requirePorts": false,
                    "versionInfo": {
                        "lastScalingAt": "2017-05-31T13:43:12.378Z",
                        "lastConfigChangeAt": "2017-05-31T13:43:12.378Z"
                    }
                }, {
                    "id": "/test-sdoifhsoifh",
                    "cmd": "sleep 1000",
                    "args": null,
                    "user": null,
                    "env": {},
                    "instances": 1,
                    "cpus": 0.1,
                    "mem": 128,
                    "disk": 0,
                    "gpus": 0,
                    "executor": "",
                    "constraints": [],
                    "uris": [],
                    "fetch": [],
                    "storeUrls": [],
                    "backoffSeconds": 1,
                    "backoffFactor": 1.15,
                    "maxLaunchDelaySeconds": 3600,
                    "container": null,
                    "healthChecks": [],
                    "readinessChecks": [],
                    "dependencies": [],
                    "upgradeStrategy": {
                        "minimumHealthCapacity": 1,
                        "maximumOverCapacity": 1
                    },
                    "labels": {},
                    "ipAddress": null,
                    "version": "2017-06-01T15:20:37.339Z",
                    "residency": null,
                    "secrets": {},
                    "taskKillGracePeriodSeconds": null,
                    "unreachableStrategy": {
                        "inactiveAfterSeconds": 300,
                        "expungeAfterSeconds": 600
                    },
                    "killSelection": "YOUNGEST_FIRST",
                    "ports": [10001],
                    "portDefinitions": [{
                        "port": 10001,
                        "protocol": "tcp",
                        "name": "default",
                        "labels": {}
                    }],
                    "requirePorts": false,
                    "versionInfo": {
                        "lastScalingAt": "2017-06-01T15:20:37.339Z",
                        "lastConfigChangeAt": "2017-06-01T15:20:37.339Z"
                    }
                }, {
                    "id": "/dsfsdfsdf",
                    "cmd": "sleep 1000",
                    "args": null,
                    "user": null,
                    "env": {},
                    "instances": 1,
                    "cpus": 0.1,
                    "mem": 128,
                    "disk": 0,
                    "gpus": 0,
                    "executor": "",
                    "constraints": [],
                    "uris": [],
                    "fetch": [],
                    "storeUrls": [],
                    "backoffSeconds": 1,
                    "backoffFactor": 1.15,
                    "maxLaunchDelaySeconds": 3600,
                    "container": null,
                    "healthChecks": [],
                    "readinessChecks": [],
                    "dependencies": [],
                    "upgradeStrategy": {
                        "minimumHealthCapacity": 1,
                        "maximumOverCapacity": 1
                    },
                    "labels": {},
                    "ipAddress": null,
                    "version": "2017-06-01T15:21:04.792Z",
                    "residency": null,
                    "secrets": {},
                    "taskKillGracePeriodSeconds": null,
                    "unreachableStrategy": {
                        "inactiveAfterSeconds": 300,
                        "expungeAfterSeconds": 600
                    },
                    "killSelection": "YOUNGEST_FIRST",
                    "ports": [10002],
                    "portDefinitions": [{
                        "port": 10002,
                        "protocol": "tcp",
                        "name": "default",
                        "labels": {}
                    }],
                    "requirePorts": false,
                    "versionInfo": {
                        "lastScalingAt": "2017-06-01T15:21:04.792Z",
                        "lastConfigChangeAt": "2017-06-01T15:21:04.792Z"
                    }
                }, {
                    "id": "/blubtest",
                    "cmd": "sleep 1000",
                    "args": null,
                    "user": null,
                    "env": {},
                    "instances": 2,
                    "cpus": 0.1,
                    "mem": 128,
                    "disk": 0,
                    "gpus": 0,
                    "executor": "",
                    "constraints": [],
                    "uris": [],
                    "fetch": [],
                    "storeUrls": [],
                    "backoffSeconds": 1,
                    "backoffFactor": 1.15,
                    "maxLaunchDelaySeconds": 3600,
                    "container": null,
                    "healthChecks": [],
                    "readinessChecks": [],
                    "dependencies": [],
                    "upgradeStrategy": {
                        "minimumHealthCapacity": 1,
                        "maximumOverCapacity": 1
                    },
                    "labels": {},
                    "ipAddress": null,
                    "version": "2017-06-01T17:06:01.713Z",
                    "residency": null,
                    "secrets": {},
                    "taskKillGracePeriodSeconds": null,
                    "unreachableStrategy": {
                        "inactiveAfterSeconds": 300,
                        "expungeAfterSeconds": 600
                    },
                    "killSelection": "YOUNGEST_FIRST",
                    "ports": [10003],
                    "portDefinitions": [{
                        "port": 10003,
                        "protocol": "tcp",
                        "name": "default",
                        "labels": {}
                    }],
                    "requirePorts": false,
                    "versionInfo": {
                        "lastScalingAt": "2017-06-01T17:06:01.713Z",
                        "lastConfigChangeAt": "2017-06-01T15:22:42.344Z"
                    }
                }],
                "pods": [],
                "groups": [],
                "dependencies": [],
                "version": "2017-06-01T17:06:01.713Z"
            },
            "steps": [{
                "actions": [{
                    "action": "RestartApplication",
                    "app": "/blubtest"
                }]
            }],
            "version": "2017-06-01T17:06:01.713Z"
        },
        "currentStep": {
            "actions": [{
                "action": "RestartApplication",
                "app": "/blubtest"
            }]
        },
        "eventType": "deployment_info",
        "timestamp": "2017-06-01T17:06:01.751Z"
    },
    "deployment_step_success": {
        "eventType": "deployment_step_success",
        "timestamp": "2014-03-01T23:29:30.158Z",
        "plan": {
            "id": "867ed450-f6a8-4d33-9b0e-e11c5513990b",
            "original": {
                "apps": [],
                "dependencies": [],
                "groups": [],
                "id": "/",
                "version": "2014-09-09T06:30:49.667Z"
            },
            "target": {
                "apps": [
                    {
                        "args": [],
                        "backoffFactor": 1.15,
                        "backoffSeconds": 1,
                        "cmd": "sleep 30",
                        "constraints": [],
                        "container": null,
                        "cpus": 0.2,
                        "dependencies": [],
                        "disk": 0.0,
                        "env": {},
                        "executor": "",
                        "healthChecks": [],
                        "id": "/my-app",
                        "instances": 2,
                        "mem": 32.0,
                        "ports": [10001],
                        "requirePorts": false,
                        "storeUrls": [],
                        "upgradeStrategy": {
                            "minimumHealthCapacity": 1.0
                        },
                        "uris": [],
                        "user": null,
                        "version": "2014-09-09T05:57:50.866Z"
                    }
                ],
                "dependencies": [],
                "groups": [],
                "id": "/",
                "version": "2014-09-09T05:57:50.866Z"
            },
            "steps": [
                {
                    "action": "ScaleApplication",
                    "app": "/my-app"
                }
            ],
            "version": "2014-03-01T23:24:14.846Z"
        },
        "currentStep": {
            "actions": [
                {
                    "type": "ScaleApplication",
                    "app": "/my-app"
                }
            ]
        }
    },
    "deployment_step_failure": {
        "eventType": "deployment_step_failure",
        "timestamp": "2014-03-01T23:29:30.158Z",
        "plan": {
            "id": "867ed450-f6a8-4d33-9b0e-e11c5513990b",
            "original": {
                "apps": [],
                "dependencies": [],
                "groups": [],
                "id": "/",
                "version": "2014-09-09T06:30:49.667Z"
            },
            "target": {
                "apps": [
                    {
                        "args": [],
                        "backoffFactor": 1.15,
                        "backoffSeconds": 1,
                        "cmd": "sleep 30",
                        "constraints": [],
                        "container": null,
                        "cpus": 0.2,
                        "dependencies": [],
                        "disk": 0.0,
                        "env": {},
                        "executor": "",
                        "healthChecks": [],
                        "id": "/my-app",
                        "instances": 2,
                        "mem": 32.0,
                        "ports": [10001],
                        "requirePorts": false,
                        "storeUrls": [],
                        "upgradeStrategy": {
                            "minimumHealthCapacity": 1.0
                        },
                        "uris": [],
                        "user": null,
                        "version": "2014-09-09T05:57:50.866Z"
                    }
                ],
                "dependencies": [],
                "groups": [],
                "id": "/",
                "version": "2014-09-09T05:57:50.866Z"
            },
            "steps": [
                {
                    "action": "ScaleApplication",
                    "app": "/my-app"
                }
            ],
            "version": "2014-03-01T23:24:14.846Z"
        },
        "currentStep": {
            "actions": [
                {
                    "type": "ScaleApplication",
                    "app": "/my-app"
                }
            ]
        }
    }
};
