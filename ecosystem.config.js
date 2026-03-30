module.exports = {
  apps : [

    {
      name : "cloud-sql-auth-proxy",
      script : "./cloud-sql-proxy project-fb6d543f-c464-45a3-8d9:asia-southeast1:mysql-vm --private-ip",
      log_file: "./logs/cloud-sql-auth-proxy.log",
    },
      {
      name   : "catalog-service",
      script : "java",
      args   : "-jar ./catalog-service/target/catalog-service-0.0.1-SNAPSHOT.jar",
      log_file: "./logs/catalog-service.log",
      instences: 2
    },
    {
      name   : "media-service",
      script : "java",
      args   : "-jar ./media-service/target/media-service-0.0.1-SNAPSHOT.jar",
      log_file: "./logs/media-service.log",
      instences: 2
    },
    {
      name   : "user-service",
      script : "java",
      args   : "-jar ./user-service/target/user-service-0.0.1-SNAPSHOT.jar",
      log_file: "./logs/user-service.log",
      instences: 2
    }
]
}
