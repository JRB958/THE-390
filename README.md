# CondoCare
Welcome to CondoCare, a student project aimed at revolutionizing condo management! Dive into our platform designed to simplify condo living for residents and management alike. Explore our innovative features for effortless communication, swift maintenance requests, and vibrant community engagement. Join us as we redefine condo living one click at a time!


This repository was last updated Wed May  1 16:29:32 UTC 2024

## Visit our website at the following link:
[CondoCare Website](https://www.condocare.com)

## Reports Overviews

<details>
  <summary>Backend Coverage Report</summary>
  <pre>
Name                                                                                             Stmts   Miss  Cover
--------------------------------------------------------------------------------------------------------------------
core/__init__.py                                                                                     0      0   100%
core/settings.py                                                                                    41      0   100%
core/urls.py                                                                                         7      0   100%
employee/__init__.py                                                                                 0      0   100%
employee/admin.py                                                                                    1      0   100%
employee/apps.py                                                                                     4      0   100%
employee/migrations/0001_initial.py                                                                  6      0   100%
employee/migrations/__init__.py                                                                      0      0   100%
employee/models.py                                                                                  28      0   100%
employee/serializers.py                                                                              6      0   100%
employee/tests.py                                                                                    1      0   100%
employee/urls.py                                                                                     6      0   100%
employee/views.py                                                                                   35     24    31%
finance/admin.py                                                                                     1      0   100%
finance/apps.py                                                                                      4      0   100%
finance/models.py                                                                                    5      1    80%
finance/views.py                                                                                    55     48    13%
jwt_auth_token/__init__.py                                                                           0      0   100%
jwt_auth_token/admin.py                                                                              1      0   100%
jwt_auth_token/apps.py                                                                               4      0   100%
jwt_auth_token/migrations/__init__.py                                                                0      0   100%
jwt_auth_token/models.py                                                                             1      0   100%
jwt_auth_token/tests.py                                                                              0      0   100%
jwt_auth_token/views.py                                                                             16      7    56%
manage.py                                                                                           12      2    83%
properties/__init__.py                                                                               0      0   100%
properties/admin.py                                                                                  6      0   100%
properties/apps.py                                                                                   4      0   100%
properties/migrations/0001_initial.py                                                                5      0   100%
properties/migrations/0002_initial.py                                                                6      0   100%
properties/migrations/0003_propertyprofile_fee_rate_and_more.py                                      4      0   100%
properties/migrations/0004_rename_propertyimage_propertyprofile_image.py                             4      0   100%
properties/migrations/0005_condounit_image_parkingunit_image_storageunit_image.py                    4      0   100%
properties/migrations/0006_condounit_operational_expense_and_more.py                                 4      0   100%
properties/migrations/0007_facility_reservation.py                                                   5      0   100%
properties/migrations/0008_delete_reservation.py                                                     4      0   100%
properties/migrations/__init__.py                                                                    0      0   100%
properties/models.py                                                                                68      6    91%
properties/serializers.py                                                                           39      5    87%
properties/tests.py                                                                                 26      0   100%
properties/urls.py                                                                                  13      0   100%
properties/views.py                                                                                 92     61    34%
registration_key/__init__.py                                                                         0      0   100%
registration_key/admin.py                                                                            5      0   100%
registration_key/apps.py                                                                             4      0   100%
registration_key/migrations/0001_initial.py                                                          7      0   100%
registration_key/migrations/0002_rename_is_activate_condoregistrationkey_is_active_and_more.py       5      0   100%
registration_key/migrations/__init__.py                                                              0      0   100%
registration_key/models.py                                                                          43      6    86%
registration_key/serializers.py                                                                     21      0   100%
registration_key/tests.py                                                                          177      0   100%
registration_key/urls.py                                                                             8      0   100%
registration_key/views.py                                                                          100      0   100%
reservation/__init__.py                                                                              0      0   100%
reservation/admin.py                                                                                 1      0   100%
reservation/apps.py                                                                                  4      0   100%
reservation/migrations/0001_initial.py                                                               6      0   100%
reservation/migrations/__init__.py                                                                   0      0   100%
reservation/models.py                                                                               14      1    93%
reservation/serializers.py                                                                           6      0   100%
reservation/tests.py                                                                                 1      0   100%
reservation/urls.py                                                                                  6      0   100%
reservation/views.py                                                                                20     11    45%
user_profile/__init__.py                                                                             0      0   100%
user_profile/admin.py                                                                                7      0   100%
user_profile/apps.py                                                                                 4      0   100%
user_profile/migrations/0001_initial.py                                                              8      0   100%
user_profile/migrations/__init__.py                                                                  0      0   100%
user_profile/models.py                                                                             102      6    94%
user_profile/serializers.py                                                                         38      0   100%
user_profile/tests.py                                                                               65      0   100%
user_profile/urls.py                                                                                15      0   100%
user_profile/views.py                                                                               97     63    35%
--------------------------------------------------------------------------------------------------------------------
TOTAL                                                                                             1282    241    81%
  </pre>
</details>


<details>
  <summary>Frontend Coverage Report</summary>
<pre>

=============================== Coverage summary ===============================
Statements   : 45.05% ( 537/1192 )
Branches     : 40.95% ( 222/542 )
Functions    : 48.1% ( 114/237 )
Lines        : 45.05% ( 529/1174 )
================================================================================
</pre>
  <pre>
------------------------------------|---------|----------|---------|---------|----------------------
File                                | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s    
------------------------------------|---------|----------|---------|---------|----------------------
All files                           |   45.05 |    40.95 |    48.1 |   45.05 |                      
 src                                |     100 |      100 |     100 |     100 |                      
  App.js                            |     100 |      100 |     100 |     100 |                      
  index.js                          |     100 |      100 |     100 |     100 |                      
 src/api                            |      30 |    35.29 |      50 |      30 |                      
  axios.js                          |      30 |    35.29 |      50 |      30 | 25-30,37-38,46-78    
 src/components                     |     100 |      100 |     100 |     100 |                      
  Footer.js                         |     100 |      100 |     100 |     100 |                      
  Header.js                         |     100 |      100 |     100 |     100 |                      
  LargeTitle.js                     |     100 |      100 |     100 |     100 |                      
 src/components/bookingSystem       |      10 |      100 |       0 |      10 |                      
  Calendar.js                       |   14.28 |      100 |       0 |   14.28 | 8-30                 
  FacilityBooking.js                |    7.69 |      100 |       0 |    7.69 | 10-71                
 src/components/commonFacilities    |    2.94 |        0 |       0 |    2.94 |                      
  CommonFacilities.js               |   11.11 |        0 |       0 |   11.11 | 19-32                
  CreateCommonFacilities.js         |    1.69 |        0 |       0 |    1.69 | 18-143               
 src/components/createProperty      |   52.57 |    48.57 |   76.31 |   52.16 |                      
  CreateLocker.js                   |   53.19 |       50 |      80 |   52.68 | ...5,130,165-171,182 
  CreateParking.js                  |   53.19 |       50 |      80 |   52.68 | ...8-139,144,178-184 
  CreateProperty.js                 |   48.52 |    42.85 |      50 |   48.52 | ...2-106,127-155,165 
  CreateUnit.js                     |   54.25 |       50 |      90 |   53.76 | ...5-126,131,168-175 
 src/components/dashboard           |    90.9 |     87.5 |      80 |    90.9 |                      
  DashBoard.js                      |     100 |      100 |     100 |     100 |                      
  FinancialPublic.js                |     100 |      100 |     100 |     100 |                      
  SubmittedRequests.js              |   77.77 |       75 |      50 |   77.77 | 29-32                
 src/components/dashboard/financial |   89.47 |       80 |    87.5 |   89.47 |                      
  Financial.js                      |    87.5 |       80 |   85.71 |    87.5 | 18,103               
  Total.js                          |     100 |      100 |     100 |     100 |                      
 src/components/log                 |   33.95 |    27.63 |    42.3 |   33.95 |                      
  LogOut.js                         |     100 |      100 |     100 |     100 |                      
  Login.js                          |   71.42 |       50 |   83.33 |   71.42 | ...,60-61,66,104-109 
  SignUp.js                         |   39.21 |    48.48 |   44.44 |   39.21 | ...6,160-177,182-203 
  SignUpCompany.js                  |    0.98 |        0 |       0 |    0.98 | 10-207               
 src/components/nagivationBar       |     100 |      100 |     100 |     100 |                      
  NavigationBar.js                  |     100 |      100 |     100 |     100 |                      
 src/components/operationCost       |    5.26 |        0 |       0 |    5.26 |                      
  OperationCopy.js                  |    5.26 |        0 |       0 |    5.26 | 11-84                
 src/components/property            |    62.5 |    60.86 |   45.71 |   66.26 |                      
  PropertyCard.js                   |   41.66 |       25 |    7.69 |   45.45 | ...34-38,41-45,63-93 
  PropertyContainer.js              |   58.82 |    53.57 |      50 |   58.82 | 34-37,58-74          
  PropertyPage.js                   |   85.71 |    85.71 |      75 |    90.9 | 73-74,93             
 src/components/registrationKey     |   42.16 |       50 |    37.5 |   44.15 |                      
  SendRegistrationButton.js         |    62.5 |    58.33 |   52.94 |   66.66 | ...8-29,67,75-90,108 
  SubmitRegistrationButton.js       |       0 |        0 |       0 |       0 | 6-52                 
 src/components/request             |    4.76 |        0 |       0 |    4.76 |                      
  CreateRequest.js                  |     2.5 |        0 |       0 |     2.5 | 17-117               
  EditRequest.js                    |      50 |      100 |       0 |      50 | 17                   
 src/components/userProfile         |    42.5 |       10 |   38.46 |   39.47 |                      
  UserProfile.js                    |    42.5 |       10 |   38.46 |   39.47 | 30-72,89             
 src/screens                        |     100 |      100 |     100 |     100 |                      
  HomeScreen.js                     |     100 |      100 |     100 |     100 |                      
 src/screens/homeScreenCarousel     |     100 |      100 |     100 |     100 |                      
  CarouselHomeScreen.js             |     100 |      100 |     100 |     100 |                      
 src/utils/hooks                    |   63.71 |    58.33 |   54.54 |   63.06 |                      
  AuthContext.js                    |   78.57 |       50 |     100 |   78.57 | 22-24                
  ProfileContext.js                 |   74.28 |       60 |   61.53 |   74.28 | 37,71-94,105         
  PropertyContext.js                |   54.68 |      100 |   41.17 |   53.22 | ...3-108,114-119,148 
------------------------------------|---------|----------|---------|---------|----------------------
  </pre>
</details>


## Code Quality
### Provided by:
[![SonarCloud](https://sonarcloud.io/images/project_badges/sonarcloud-orange.svg)](https://sonarcloud.io/summary/new_code?id=THE-390-Team_THE-390)

### Indicators

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=THE-390-Team_THE-390&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=THE-390-Team_THE-390)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=THE-390-Team_THE-390&metric=bugs)](https://sonarcloud.io/summary/new_code?id=THE-390-Team_THE-390)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=THE-390-Team_THE-390&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=THE-390-Team_THE-390)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=THE-390-Team_THE-390&metric=coverage)](https://sonarcloud.io/summary/new_code?id=THE-390-Team_THE-390#backend-coverage-report)
[![Duplicated Lines (%)‌](https://sonarcloud.io/api/project_badges/measure?project=THE-390-Team_THE-390&metric=duplicated_lines_density)](https://sonarcloud.io/summary/new_code?id=THE-390-Team_THE-390#frontend-coverage-report)
[![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=THE-390-Team_THE-390&metric=ncloc)](https://sonarcloud.io/summary/new_code?id=THE-390-Team_THE-390)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=THE-390-Team_THE-390&metric=reliability_rating)](https://sonarcloud.io/summary/new_code?id=THE-390-Team_THE-390)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=THE-390-Team_THE-390&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=THE-390-Team_THE-390)
[![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=THE-390-Team_THE-390&metric=sqale_index)](https://sonarcloud.io/summary/new_code?id=THE-390-Team_THE-390)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=THE-390-Team_THE-390&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=THE-390-Team_THE-390)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=THE-390-Team_THE-390&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=THE-390-Team_THE-390)

