'CREATE AN APP';
'ANDROID';
// appcenter apps create -d ProjectAndroid -o Android -p React-Native
'result: ';
// App Secret:            917d4525-193b-4717-94dd-1c34de823185
// Description:
// Display Name:          ProjectAndroid
// Name:                  ProjectAndroid
// OS:                    Android
// Platform:              React-Native
// Release Type:
// Owner ID:              032161df-f806-4810-ab8e-f57f57a0fc2b
// Owner Display Name:    Name Account
// Owner Email:           test@gmail.com
// Owner Name:            nameAccount
'deployment';
// appcenter codepush deployment add -a nameAccount/ProjectAndroid Staging
// appcenter codepush deployment add -a nameAccount/ProjectAndroid Production
'get list key';
// appcenter codepush deployment list -a nameAccount/ProjectAndroid -k

'IOS';
// appcenter apps create -d ProjectIos -o iOS -p React-Native
'result';
// App Secret:            4d3d300d-2f4c-4c58-b38e-6d60d5cf6935
// Description:
// Display Name:          ProjectIos
// Name:                  ProjectIos
// OS:                    iOS
// Platform:              React-Native
// Release Type:
// Owner ID:              032161df-f806-4810-ab8e-f57f57a0fc2b
// Owner Display Name:    Name Account
// Owner Email:           test@gmail.com
// Owner Name:            nameAccount

'deployment';
// appcenter codepush deployment add -a nameAccount/ProjectIos Staging
// appcenter codepush deployment add -a nameAccount/ProjectIos Production
'get list key';
// appcenter codepush deployment list -a nameAccount/ProjectIos -k

'RELEASE APP';
// "cpis": "appcenter codepush release-react -a nameAccount/ProjectIos -d Staging",
// "cpas": "appcenter codepush release-react -a nameAccount/ProjectAndroid -d Staging",
// "cpip": "appcenter codepush release-react -a nameAccount/ProjectIos -d Production",
// "cpap": "appcenter codepush release-react -a nameAccount/ProjectAndroid -d Production",
