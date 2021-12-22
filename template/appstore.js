'CREATE AN APP'
'ANDROID'
// appcenter apps create -d ShopStreamEnterpriseAndroid -o Android -p React-Native
'result: '
// App Secret:            917d4525-193b-4717-94dd-1c34de823185
// Description:           
// Display Name:          ShopStreamEnterpriseAndroid
// Name:                  ShopStreamEnterpriseAndroid
// OS:                    Android
// Platform:              React-Native
// Release Type:          
// Owner ID:              032161df-f806-4810-ab8e-f57f57a0fc2b
// Owner Display Name:    Adamo Digital
// Owner Email:           support@adamodigital.com
// Owner Name:            adamodigital
'deployment'
// appcenter codepush deployment add -a adamodigital/ShopStreamEnterpriseAndroid Staging
// appcenter codepush deployment add -a adamodigital/ShopStreamEnterpriseAndroid Production
'get list key'
// appcenter codepush deployment list -a adamodigital/ShopStreamEnterpriseAndroid -k

'IOS'
// appcenter apps create -d ShopStreamEnterpriseIos -o iOS -p React-Native
'result'
// App Secret:            4d3d300d-2f4c-4c58-b38e-6d60d5cf6935
// Description:           
// Display Name:          ShopStreamEnterpriseIos
// Name:                  ShopStreamEnterpriseIos
// OS:                    iOS
// Platform:              React-Native
// Release Type:          
// Owner ID:              032161df-f806-4810-ab8e-f57f57a0fc2b
// Owner Display Name:    Adamo Digital
// Owner Email:           support@adamodigital.com
// Owner Name:            adamodigital

'deployment'
// appcenter codepush deployment add -a adamodigital/ShopStreamEnterpriseIos Staging
// appcenter codepush deployment add -a adamodigital/ShopStreamEnterpriseIos Production
'get list key'
// appcenter codepush deployment list -a adamodigital/ShopStreamEnterpriseIos -k

'RELEASE APP'
// "cpis": "appcenter codepush release-react -a adamodigital/ShopStreamEnterpriseIos -d Staging",
// "cpas": "appcenter codepush release-react -a adamodigital/ShopStreamEnterpriseAndroid -d Staging",
// "cpip": "appcenter codepush release-react -a adamodigital/ShopStreamEnterpriseIos -d Production",
// "cpap": "appcenter codepush release-react -a adamodigital/ShopStreamEnterpriseAndroid -d Production",
