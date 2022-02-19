import React from 'react'
import { CachedData, PlaylistFileInterface } from '../helpers';
import { Image } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Video from 'react-native-video';

type Props = {
  file: PlaylistFileInterface
};


export const Message = (props: Props) => {
  console.log("***MESSAGE - " + props?.file.name)

  const getMessageType = () => {
    const parts = props.file.url.split("?")[0].split(".");
    const ext = parts[parts.length - 1];
    console.log(ext)
    let result = "image"
    switch (ext.toLocaleLowerCase()) {
      case "webm":
      case "mp4":
        result = "video"
        break;
    }
    return result;
  }

  const getContent = () => {
    let result = <></>
    switch (getMessageType()) {
      case "image":
        result = getImage();
        break;
      case "video":
        result = getVideo();
        break;
    }
    return result
  }

  const getVideo = () => {
    const filePath = "file://" + CachedData.getFilePath(props.file.url);
    return (
      <Video source={{ uri: filePath }} resizeMode="cover" style={{ width: wp("100%"), height: hp("100%") }}   >

      </Video>
    )
    /*
    return (
      <View >
        <Text style={Styles.bigWhiteText}>Video: {props.file.name}</Text>
      </View>);*/
  }

  const getImage = () => {
    const filePath = "file://" + CachedData.getFilePath(props.file.url);
    console.log("*******" + filePath)
    return (
      <Image source={{ uri: filePath }} style={{ width: wp("100%"), height: hp("100%") }} />
    );
  }

  return getContent()

}



