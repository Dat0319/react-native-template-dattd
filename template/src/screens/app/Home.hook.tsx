import { useState, useEffect } from 'react';
import { Props } from './types';
import { AppNotification } from '@instances';
import { Images, SCREEN_ROUTER, Device } from '@assets';
import { navigate } from '@navigation';
import {
  AccountService,
  AuthService,
  StreamService,
  CommonService,
} from '@services';
import {
  useSelector,
  RootReducerProps,
  useDispatch,
  set_notification_count,
} from '@redux';
import { GlobalUIManager } from '@components';

const SPOTLIGHHT_TYPE = {
  SCHEDULE: 'Schedule',
  MERCHANT: 'merchant',
  VIDEO: 'video',
};

const dataNewFeed = [
  {
    avatar: Images.avatar_consumer,
    banner: Images.streaming_1,
    name: "Manny's",
    people: '200',
    title: 'Seasonal Wine Review',
    reactions: [
      'heart',
      'clap',
      'smile',
      'heart',
      'clap',
      'smile',
      'heart',
      'clap',
      'smile',
    ],
    comments: [
      {
        avatar: Images.avatar_consumer,
        name: 'Jacklin 1010',
        comment: 'Want to try this too',
      },
      {
        avatar: Images.avatar_consumer,
        name: 'Jacklin 1010',
        comment: 'Want to try this too',
      },
      {
        avatar: Images.avatar_consumer,
        name: 'Jacklin 1010',
        comment: 'Want to try this too',
      },
    ],
  },
  {
    avatar: Images.avatar_consumer,
    banner: Images.streaming_1,
    name: "Manny's",
    people: '200',
    title: 'Seasonal Wine Review',
    reactions: [
      'heart',
      'clap',
      'smile',
      'heart',
      'clap',
      'smile',
      'heart',
      'clap',
      'smile',
    ],
    comments: [
      {
        avatar: Images.avatar_consumer,
        name: 'Jacklin 1010',
        comment: 'Want to try this too',
      },
      {
        avatar: Images.avatar_consumer,
        name: 'Jacklin 1010',
        comment: 'Want to try this too',
      },
      {
        avatar: Images.avatar_consumer,
        name: 'Jacklin 1010',
        comment: 'Want to try this too',
      },
    ],
  },
  {
    avatar: Images.avatar_consumer,
    banner: Images.streaming_1,
    name: "Manny's",
    people: '200',
    title: 'Seasonal Wine Review',
    reactions: [
      'heart',
      'clap',
      'smile',
      'heart',
      'clap',
      'smile',
      'heart',
      'clap',
      'smile',
    ],
    comments: [
      {
        avatar: Images.avatar_consumer,
        name: 'Jacklin 1010',
        comment: 'Want to try this too',
      },
      {
        avatar: Images.avatar_consumer,
        name: 'Jacklin 1010',
        comment: 'Want to try this too',
      },
      {
        avatar: Images.avatar_consumer,
        name: 'Jacklin 1010',
        comment: 'Want to try this too',
      },
    ],
  },
];

export function useModel(props: Props) {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [spotlight, setSpotlight] = useState<any>(null);
  const [newsFeed, setNewsFeed] = useState<any>([]);
  const [categories, setCategories] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [todayStream, setTodayStream] = useState([]);
  // const {isReload} = props.route.params;
  const dispatch = useDispatch();
  const locale = useSelector<RootReducerProps>(
    (state) => state.authReducers.locale
  );

  useEffect(() => {
    _getHomeSpotlights().then();
    _getTodayStream().then();
    _getCategories().then();
    _setNotificationCount();
    _setDeviceToken();
    // _getSpotlight();
    _getNewsFeed();
  }, [locale]);

  const _getHomeSpotlights = async () => {
    const result: any = await CommonService.homes_spotlights();
    if (result?.code === 200) {
      let filterSpotlights = result?.data?.data?.filter(
        (item: any) => item.type === SPOTLIGHHT_TYPE.SCHEDULE
      );
      setSpotlight(filterSpotlights);
    }
    GlobalUIManager.view.hideLoading();
  };

  const _setDeviceToken = async () => {
    const token = await AppNotification.getToken();
    const result = await AuthService.set_device_token({
      token: token,
      type: Device.isIos ? 0 : 1,
    });
  };

  const _setNotificationCount = async () => {
    const result = await AccountService.set_notification_count();
    if (result?.code === 200) {
      dispatch(
        set_notification_count({
          notificationCount: result?.data?.unread,
        })
      );
    }
  };

  const _onRefresh = async () => {
    setPage(1);
    setIsRefreshing(true);
    setIsLoading(true);
    _getData();
    _getTodayStream();
    _getCategories();
  };

  const _onLoadMore = async () => {
    if (!isLoadMore) {
      setPage(page + 1);
    }
  };

  const _getData = async () => {
    let limit = 10;
    // let result = await parent.list_news(limit, page);
    // if (result.data.code === 200) {
    //     let dataCall =
    //         page === 1 ? result.data.data : data.concat(result.data.data);

    //     setData(dataCall);
    // } else {
    //     Toast.show(result.data.message);
    // }
    setIsRefreshing(false);
    setIsLoading(false);
    // setIsLoadMore(result.data.data.length === 0);
  };

  const _clickItem = () => {};
  const _switchReaction = (val: string) => {
    switch (val) {
      case 'heart':
        return Images.ic_heart;
      case 'clap':
        return Images.ic_clap;
      case 'smile':
        return Images.ic_lmao;
      case 'cry':
        return Images.ic_cry;
      case 'panic':
        return Images.ic_panic;
      case 'wave':
        return Images.ic_wave;
      case 'like':
      default:
        return Images.ic_like;
    }
  };

  const _getTodayStream = async () => {
    let result: any = await StreamService.get_today_streaming();
    if (result.code === 200) {
      setTodayStream(result?.data?.streams);
    }
    GlobalUIManager.view.hideLoading();
  };

  const _getCategories = async () => {
    let result: any = await AccountService.list_category();
    if (result.code === 200) {
      setCategories(result.data.categories);
    }
    GlobalUIManager.view.hideLoading();
  };

  const _getNewsFeed = async () => {
    setNewsFeed(dataNewFeed);
  };

  const _seeAllCate = () => {
    navigate(SCREEN_ROUTER.CATEGORIES);
  };

  const _seeCateItem = (id: number) => {
    navigate(SCREEN_ROUTER.CATEGORIES, { id: id });
  };

  return {
    isRefreshing,
    isLoading,
    newsFeed,
    categories,
    spotlight,
    todayStream,
    _onRefresh,
    _onLoadMore,
    _clickItem,
    _switchReaction,
    _seeCateItem,
    _seeAllCate,
  };
}
