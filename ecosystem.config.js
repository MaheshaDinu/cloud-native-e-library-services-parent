module.exports = {
  apps : [
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
