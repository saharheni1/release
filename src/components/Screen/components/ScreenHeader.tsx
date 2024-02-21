import React, {useNavigation} from '@react-navigation/native';

import {Box, TouchableOpacityBox, Text, Icon, BoxProps} from '@components';

import {ScreenProps} from '../Screen';

const ICON_SIZE = 20;
type Props = Pick<ScreenProps, 'title' | 'canGoBack' | 'HeaderComponent'> &
  BoxProps;

export function ScreenHeader({
  canGoBack,
  title,
  HeaderComponent,
  ...boxProps
}: Props) {
  const navigation = useNavigation();

  if (!title && !canGoBack && !HeaderComponent) {
    return null;
  }

  const showBackLabel = !title && !HeaderComponent;

  return (
    <Box
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      mb="s24"
      {...boxProps}>
      {canGoBack && (
        <TouchableOpacityBox
          testID="screen-back-button"
          onPress={navigation.goBack}
          flexDirection="row"
          mr="s10"
          alignItems="center">
          <Icon name="exampleIcon" color="primary" size={ICON_SIZE} />
          {showBackLabel && (
            <Text preset="paragraphMedium" semiBold ml="s8">
              Voltar
            </Text>
          )}
        </TouchableOpacityBox>
      )}
      {HeaderComponent}
      {title && <Text preset="headingSmall">{title}</Text>}
      {title && <Box width={ICON_SIZE} />}
    </Box>
  );
}
