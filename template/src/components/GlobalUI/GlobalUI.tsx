import React from 'react';
import {BackHandler} from 'react-native';
import GlobalUIManager from './GlobalUIManager';
import {showMessage} from 'react-native-flash-message';
import {Loading} from '../Loading';

export interface GlobalUIState {
  isLoading: boolean;
}

export class GlobalUI extends React.PureComponent<any, GlobalUIState> {
  constructor(props: any) {
    super(props);
    this.state = {
      isLoading: false,
    };
    GlobalUIManager.view = this;
  }

  isLoading = () => {
    return this.state.isLoading;
  };

  showLoading = () => {
    this.setState({isLoading: true});
    BackHandler.addEventListener('hardwareBackPress', this.disableBackHandler);
  };

  disableBackHandler = () => {
    return true;
  };

  hideLoading = () => {
    this.setState({isLoading: false});
    BackHandler.removeEventListener(
      'hardwareBackPress',
      this.disableBackHandler,
    );
  };

  showSuccessMessage = (message?: string) => {
    if (message && message != '') {
      showMessage({
        message: message || '',
        type: 'success',
      });
    }
  };

  showDangerMessage = (message?: string, duration: number = 2000) => {
    if (message && message != '') {
      showMessage({
        message: message || '',
        type: 'danger',
      });
    }
  };

  render() {
    return (
      <>
        <Loading isLoading={this.state.isLoading} />
      </>
    );
  }
}
