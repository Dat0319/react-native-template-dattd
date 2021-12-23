// import io from 'socket.io-client';
// import {Config} from './api-config';

// class Socket {
//   socket;
//   constructor() {
//     this.socket = null;
//     this.init();
//   }

//   init = () => {
//     let queryParams = [
//       '__sails_io_sdk_version=1.2.1',
//       '__sails_io_sdk_platform=browser',
//       '__sails_io_sdk_language=javascript',
//     ];
//     this.socket = io(Config.chat_base_url, {
//       query: queryParams.join('&'),
//       hostname: Config.chat_base_url,
//       path: '/socket.io',
//       port: '80',
//       transports: ['websocket'],
//     });
//     this.socket.on('connect', () => {
//       console.log('Socket is connected ' + Date());
//     });
//   };

//   send = (url, data, cb) => {
//     this.socket.emit(
//       'post',
//       {
//         method: 'post',
//         headers: {},
//         data,
//         url: url,
//       },
//       responseCtx => {
//         typeof cb !== 'undefined' && cb(responseCtx);
//       },
//     );
//   };

//   listen = (event, cb) => {
//     this.socket.on(event, data => {
//       typeof cb !== 'undefined' && cb(data);
//     });
//   };

//   disconnect = () => {
//     this.socket.disconnect();
//   };
// }

// export default new Socket();
