import React, { useState, useCallback, useEffect } from 'react';
import {
  View,
  ScrollView,
  FlatList,
  Text,
  RefreshControl,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { Avatar, Header, ItemCategory, ItemStream } from '@components';
import {
  I18n,
  AppNotification,
  applePaymentRequest,
  applePaymentRequest1,
} from '@instances';
import { useModel } from './Home.hook';
import { Props } from './types';
import { styles } from './styles';
import {
  Images,
  Colors,
  SCREEN_ROUTER,
  Spacing,
  streamPermission,
} from '@assets';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import { navigate } from '@navigation';

const RenderItem = React.memo((props: any) => {
  const { item, switchReaction } = props;

  const [react, setReact] = useState(false);

  const _openReact = () => {
    setReact(!react);
  };
  let startColor = 'rgba(0, 0, 0, 0.2)',
    endColor = 'transparent';
  return (
    <View style={styles.item}>
      <View style={styles.Top}>
        <View style={styles.inner}>
          <TouchableOpacity
            style={styles.wrapAvatar}
            activeOpacity={1}
            onPress={() => {}}
          >
            <FastImage source={item.avatar} style={styles.avatar} />
            <Text style={styles.name}>{item.name}</Text>
          </TouchableOpacity>
          <View style={styles.live}>
            <View style={styles.wrapActive}>
              <Text style={styles.text}>Live</Text>
            </View>
            <View style={styles.view}>
              <FastImage
                resizeMode="contain"
                source={Images.ic_eye}
                style={styles.viewImage}
              />
              <Text style={styles.viewNum}>{item.people}</Text>
            </View>
          </View>
        </View>

        <LinearGradient
          style={styles.overlayTop}
          start={{ x: 0, y: 0.25 }}
          end={{ x: 0, y: 0.75 }}
          colors={[startColor, endColor]}
          locations={[0, 1]}
        />
        <FastImage source={item.banner} style={styles.thumb} />
        <LinearGradient
          style={styles.overlayBottom}
          start={{ x: 0, y: 0.3 }}
          end={{ x: 0, y: 0.92 }}
          colors={[endColor, startColor]}
          locations={[0.2, 1]}
        />
        <View style={styles.wrapVol}>
          <TouchableOpacity style={styles.vol} activeOpacity={0.8}>
            <FastImage source={Images.ic_speaker} style={styles.volIcon} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.content}>
        <View style={styles.wrapTtl}>
          <Avatar size={Spacing.height32} avatar={Images.avatar_consumer} />
          <View style={{ marginLeft: Spacing.height8 }}>
            <Text style={styles.ttl}>{item.title}</Text>
            <Text style={styles.desc}>Many's</Text>
          </View>

          <TouchableOpacity style={styles.share}>
            <FastImage
              resizeMode="contain"
              source={Images.ic_dot_primary}
              style={styles.shareIcon}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.wrapReactions}>
          {item?.reactions?.map((ele: any, index: number) => {
            return (
              index < 3 && (
                <FastImage
                  resizeMode="contain"
                  source={switchReaction(ele)}
                  key={index}
                  style={styles.reaction}
                />
              )
            );
          })}
          {item.reactions.length > 3 && (
            <Text style={styles.textReactions}>
              {item.reactions.length - 3}
            </Text>
          )}
        </View>
        {item.comments.map((ele: any, index: number) => {
          return (
            index < 2 && (
              <View style={styles.comment} key={index}>
                <FastImage source={ele.avatar} style={styles.commentAvatar} />
                <View style={styles.commentInfo}>
                  <Text style={styles.commentName} numberOfLines={1}>
                    {ele.name}
                  </Text>
                  <Text style={styles.commentText} numberOfLines={3}>
                    {ele.comment}
                  </Text>
                </View>
              </View>
            )
          );
        })}
      </View>
      <View style={styles.Bottom}>
        <TouchableOpacity style={styles.button} activeOpacity={1}>
          <FastImage source={Images.ic_message} style={styles.Icon} />
          <Text style={styles.Text}>{I18n.trans('home.reply')}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} activeOpacity={1}>
          <FastImage source={Images.ic_raise_hand} style={styles.Icon} />
          <Text style={styles.Text}>{I18n.trans('home.raise')}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={_openReact}
          style={[
            styles.button,
            { borderRightWidth: 0 },
            react && styles.buttonAction,
          ]}
          activeOpacity={1}
        >
          <FastImage
            source={Images.ic_react}
            style={[
              styles.Icon,
              react ? { tintColor: Colors.white } : { tintColor: '#A5A5A5' },
            ]}
          />
          <Text style={[styles.Text, react && { color: Colors.white }]}>
            {I18n.trans('home.react')}
          </Text>
        </TouchableOpacity>
        {react && (
          <View style={styles.motion}>
            <TouchableOpacity style={styles.motionButton} activeOpacity={1}>
              <FastImage style={styles.motionText} source={Images.ic_like} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.motionButton} activeOpacity={1}>
              <FastImage style={styles.motionText} source={Images.ic_heart} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.motionButton} activeOpacity={1}>
              <FastImage
                style={styles.motionText}
                source={Images.ic_heart_eyes}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.motionButton} activeOpacity={1}>
              <FastImage style={styles.motionText} source={Images.ic_wave} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.motionButton} activeOpacity={1}>
              <FastImage style={styles.motionText} source={Images.ic_clap} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.motionButton} activeOpacity={1}>
              <FastImage style={styles.motionText} source={Images.ic_lmao} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.motionButton} activeOpacity={1}>
              <FastImage style={styles.motionText} source={Images.ic_panic} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.motionButton} activeOpacity={1}>
              <FastImage style={styles.motionText} source={Images.ic_cry} />
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
});

export const Home: React.FC<Props> = (props) => {
  let { init } = AppNotification;
  useEffect(() => {
    init(props.navigation, props.route);
  }, []);

  const {
    isRefreshing,
    newsFeed,
    _onRefresh,
    _onLoadMore,
    _switchReaction,
    categories,
    spotlight,
    todayStream,
    _seeCateItem,
    _seeAllCate,
  } = useModel(props);

  const _renderSpotlightItem = ({
    item,
    index,
  }: {
    item: any;
    index: number;
  }) => {
    return (
      <ItemStream
        key={index}
        style={styles.spotItem}
        banner={{ uri: item?.media_url } || null}
        avatar={{ uri: item?.merchant?.profile_img_url } || null}
        title={item?.title}
        desc={item?.description}
        review={item.review}
        free={item.price === 0}
        mediaType={item?.media_type}
        type="dark"
        styleContent={{
          alignItems: 'flex-start',
        }}
        spotlight
      />
    );
  };

  const _renderSpotlight = () => {
    return (
      <>
        {spotlight?.length === 0 && (
          <View style={styles.spot}>
            <Text style={styles.spotTtl}>{I18n.trans('home.spotlight')}</Text>

            <View style={{ paddingLeft: Spacing.height20 }}>
              <FlatList
                data={spotlight}
                renderItem={_renderSpotlightItem}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>
          </View>
        )}
      </>
    );
  };
  const _renderStreaming = useCallback((data) => {
    const _viewStream = (id) => {
      streamPermission();
      navigate(SCREEN_ROUTER.STREAM, {
        id: id,
      });
    };

    return (
      <>
        {data.length > 0 && (
          <View style={styles.stream}>
            <Text style={styles.streamTtl}>
              {I18n.trans('home.todayStreaming')}
            </Text>

            <ScrollView
              style={styles.streamList}
              horizontal
              showsHorizontalScrollIndicator={false}
            >
              {data.map((item: any, index: number) => {
                return (
                  <ItemStream
                    size="small"
                    key={index}
                    style={styles.streamItem}
                    banner={Images.streaming_1}
                    avatar={{
                      uri: item?.stream_schedule?.merchant?.profile_img_url,
                    }}
                    title={item.stream_schedule.title}
                    desc={item.stream_schedule.merchant?.full_name}
                    live
                    people="100"
                    paid
                    styleContent={{
                      alignItems: 'flex-start',
                    }}
                    result={() => _viewStream(item.id)}
                  />
                );
              })}
            </ScrollView>
          </View>
        )}
      </>
    );
  }, []);
  const _renderCategories = useCallback(
    (categories) => {
      return (
        <View style={styles.cate}>
          {categories.length > 0 && (
            <View
              style={[
                styles.wrapCateTtl,
                todayStream.length === 0 && { marginTop: Spacing.height20 },
              ]}
            >
              <Text style={styles.cateTtl}>
                {I18n.trans('home.categories')}
              </Text>
              <Text style={styles.seeAll} onPress={_seeAllCate}>
                {I18n.trans('home.seeAll')}
              </Text>
            </View>
          )}

          <ScrollView
            style={styles.cateList}
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            {categories.map((item: any, index: number) => {
              return (
                <ItemCategory
                  style={styles.cateItem}
                  key={item.id}
                  background={{ uri: item.img_url }}
                  title={item.name_lang}
                  onPress={() => _seeCateItem(index)}
                />
              );
            })}
          </ScrollView>
        </View>
      );
    },
    [categories, todayStream]
  );

  const _renderHeader = (data, categories, spotlight) => {
    return (
      <>
        {_renderSpotlight(spotlight)}
        {_renderStreaming(data)}
        {_renderCategories(categories)}
        <Text style={[styles.cateTtl, { marginHorizontal: Spacing.height20 }]}>
          {I18n.trans('home.newFeed')}
        </Text>
      </>
    );
  };

  // const handleApplePayPress = async () => {
  //   try {
  //     let token = await applePaymentRequest();
  //     console.log('handleApplePayPress:', token);
  //   } catch (error) {
  //     alert(`Error: ${error.message}`);
  //   }
  // };

  return (
    <View style={styles.container}>
      <Header
        left="logo"
        right="home"
        backgroundColor="#292F33"
        barStyle="light-content"
      />

      <FlatList
        contentContainerStyle={styles.list}
        ListHeaderComponent={() =>
          _renderHeader(todayStream, categories, spotlight)
        }
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            tintColor={Colors.gray}
            onRefresh={_onRefresh}
            refreshing={isRefreshing}
          />
        }
        onEndReached={_onLoadMore}
        onEndReachedThreshold={0.3}
        data={newsFeed}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <RenderItem item={item} switchReaction={_switchReaction} />
        )}
      />
    </View>
  );
};
