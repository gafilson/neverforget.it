# neverforget.it

## Get the REST app up and running

#### Install some of the basic tools you'll need
1. Install the Java 8 SDK.  You can find it [here](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html).
2. Install SDKMAN by following the instructions [here](http://sdkman.io/install.html).
3. Install the latest version of Gradle
```
glennfilson at 157-glenns-MacBook-Pro in ~/nfi/neverforget.it on master [$]
$ sdk install gradle

Downloading: gradle 3.2.1

In progress...

######################################################################## 100.0%

Installing: gradle 3.2.1
Done installing!

Do you want gradle 3.2.1 to be set as default? (Y/n): y
```
#### Clone this project into a project folder somewhere.
```
glennfilson at 157-glenns-MacBook-Pro in ~
$ git clone git@github.com:gafilson/neverforget.it.git
Cloning into 'neverforget.it'...
remote: Counting objects: 260, done.
remote: Compressing objects: 100% (3/3), done.
remote: Total 260 (delta 0), reused 0 (delta 0), pack-reused 257
Receiving objects: 100% (260/260), 470.69 KiB | 203.00 KiB/s, done.
Resolving deltas: 100% (56/56), done.
Checking connectivity... done.
```
#### Run the tests (which will build the project as well)
```
glennfilson at 157-glenns-MacBook-Pro in ~/neverforget.it/nfi-web on master
$ gradle test
Testing started at 1:05 PM ...
1:05:11 PM: Executing external task 'test'...
:compileJava UP-TO-DATE
:compileGroovy
:processResources
:classes
:compileTestJava UP-TO-DATE
:compileTestGroovy
:processTestResources UP-TO-DATE
:testClasses
:test
13:05:13.221 [Test worker] DEBUG org.springframework.test.context.junit4.SpringJUnit4ClassRunner - SpringJUnit4ClassRunner constructor called with [class com.nfi.controllers.TestEntityControllerIntegrationSpec]
13:05:13.226 [Test worker] DEBUG org.springframework.test.context.BootstrapUtils - Instantiating CacheAwareContextLoaderDelegate from class [org.springframework.test.context.cache.DefaultCacheAwareContextLoaderDelegate]
13:05:13.231 [Test worker] DEBUG org.springframework.test.context.BootstrapUtils - Instantiating BootstrapContext using constructor [public org.springframework.test.context.support.DefaultBootstrapContext(java.lang.Class,org.springframework.test.context.CacheAwareContextLoaderDelegate)]

... lots of stuff ...

2016-12-04 13:05:22.642  INFO 59084 --- [      Thread-12] j.LocalContainerEntityManagerFactoryBean : Closing JPA EntityManagerFactory for persistence unit 'default'
2016-12-04 13:05:22.642  INFO 59084 --- [      Thread-12] org.hibernate.tool.hbm2ddl.SchemaExport  : HHH000227: Running hbm2ddl schema export
2016-12-04 13:05:22.645  INFO 59084 --- [      Thread-12] org.hibernate.tool.hbm2ddl.SchemaExport  : HHH000230: Schema export complete
2016-12-04 13:05:22.651  INFO 59084 --- [       Thread-9] j.LocalContainerEntityManagerFactoryBean : Closing JPA EntityManagerFactory for persistence unit 'default'
2016-12-04 13:05:22.651  INFO 59084 --- [       Thread-9] org.hibernate.tool.hbm2ddl.SchemaExport  : HHH000227: Running hbm2ddl schema export
2016-12-04 13:05:22.657  INFO 59084 --- [       Thread-9] org.hibernate.tool.hbm2ddl.SchemaExport  : HHH000230: Schema export complete
BUILD SUCCESSFUL
Total time: 12.12 secs
1:05:23 PM: External task execution finished 'test'.

```
#### Run the app!

```
glennfilson at 157-glenns-MacBook-Pro in ~/neverforget.it/nfi-web on master
$ gradle bootRun
Starting a Gradle Daemon (subsequent builds will be faster)
:compileJava UP-TO-DATE
:compileGroovy UP-TO-DATE
:processResources UP-TO-DATE
:classes UP-TO-DATE
:findMainClass
:bootRun

...lots of other stuff in here...

2016-12-04 09:32:06.462  INFO 21875 --- [  restartedMain] o.s.c.support.DefaultLifecycleProcessor  : Starting beans in phase 0
2016-12-04 09:32:06.551  INFO 21875 --- [  restartedMain] s.b.c.e.t.TomcatEmbeddedServletContainer : Tomcat started on port(s): 8080 (http)
2016-12-04 09:32:06.555  INFO 21875 --- [  restartedMain] com.nfi.NfiWebApplication                : Started NfiWebApplication in 5.992 seconds (JVM running for 6.526)
> Building 83% > :bootRun
```
