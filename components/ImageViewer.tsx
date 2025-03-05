import React, { useRef } from 'react';
import { Modal, View, Image, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import { Icon } from './';
import styles, { WHITE } from '../assets/styles';

interface ImageViewerProps {
  visible: boolean;
  images: any[];
  initialIndex: number;
  onClose: () => void;
}

const ImageViewer = ({ visible, images, initialIndex, onClose }: ImageViewerProps) => {
  const flatListRef = useRef<FlatList>(null);

  React.useEffect(() => {
    if (visible && flatListRef.current) {
      flatListRef.current.scrollToIndex({ index: initialIndex, animated: false });
    }
  }, [visible, initialIndex]);

  const renderImage = ({ item }) => (
    <View style={[styles.imageViewerSlide, { width: Dimensions.get('window').width }]}>
      <Image source={item} style={styles.imageViewerImage} resizeMode="contain" />
    </View>
  );

  return (
    <Modal visible={visible} transparent={true} animationType="fade">
      <View style={styles.imageViewerContainer}>
        <TouchableOpacity style={styles.imageViewerCloseButton} onPress={onClose}>
          <Icon name="close" size={24} color={WHITE} />
        </TouchableOpacity>
        
        <FlatList
          ref={flatListRef}
          data={images}
          renderItem={renderImage}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          getItemLayout={(_, index) => ({
            length: Dimensions.get('window').width,
            offset: Dimensions.get('window').width * index,
            index,
          })}
        />
      </View>
    </Modal>
  );
};

export default ImageViewer;
