import { StyleSheet, Dimensions, ViewStyle, TextStyle, ImageStyle } from "react-native";

// Colors
export const PRIMARY_COLOR = "#7444C0";
export const SECONDARY_COLOR = "#5636B8";
export const WHITE = "#FFFFFF";
export const GRAY = "#757E90";
export const DARK_GRAY = "#363636";
export const BLACK = "#000000";

export const ONLINE_STATUS = "#46A575";
export const OFFLINE_STATUS = "#D04949";

export const STAR_ACTIONS = "#FFA200";
export const LIKE_ACTIONS = "#B644B2";
export const DISLIKE_ACTIONS = "#363636";
export const FLASH_ACTIONS = "#5028D7";

export const DIMENSION_WIDTH = Dimensions.get("window").width;
export const DIMENSION_HEIGHT = Dimensions.get("window").height;

interface Style {
  bg: ImageStyle;
  containerCardItem: ViewStyle;
  matchesCardItem: ViewStyle;
  matchesTextCardItem: TextStyle;
  descriptionCardItem: TextStyle;
  status: ViewStyle;
  statusText: TextStyle;
  online: ViewStyle;
  offline: ViewStyle;
  actionsCardItem: ViewStyle;
  button: ViewStyle;
  miniButton: ViewStyle;
  city: ViewStyle;
  cityText: TextStyle;
  filters: ViewStyle;
  filtersText: TextStyle;
  containerMessage: ViewStyle;
  avatar: ImageStyle;
  message: TextStyle;
  containerProfileItem: ViewStyle;
  matchesProfileItem: ViewStyle;
  matchesTextProfileItem: TextStyle;
  name: TextStyle;
  descriptionProfileItem: TextStyle;
  info: ViewStyle;
  iconProfile: TextStyle;
  infoContent: TextStyle;
  top: ViewStyle;
  title: TextStyle;
  containerHome: ViewStyle;
  containerMatches: ViewStyle;
  containerMessages: ViewStyle;
  containerProfile: ViewStyle;
  photo: ImageStyle;
  topIconLeft: ViewStyle;
  topIconRight: ViewStyle;
  actionsProfile: ViewStyle;
  textButton: TextStyle;
  circledButton: ViewStyle;
  roundedButton: ViewStyle;
  tabButtonText: TextStyle;
  iconMenu: ViewStyle;
  // Modal styles
  modalContainer: ViewStyle;
  modalContent: ViewStyle;
  modalTitle: TextStyle;
  modalItem: ViewStyle;
  modalItemText: TextStyle;
  modalCloseButton: ViewStyle;
  modalCloseText: TextStyle;
  modalApplyButton: ViewStyle;
  modalApplyText: TextStyle;
  filterItem: ViewStyle;
  subscriptionOption: ViewStyle;
  selectedOption: ViewStyle;
  optionText: TextStyle;
  customAmountContainer: ViewStyle;
  customAmountInput: TextStyle;
  subscribeButton: ViewStyle;
  subscribeButtonText: TextStyle;
  // Chat styles
  chatContainer: ViewStyle;
  messageBubble: ViewStyle;
  userMessage: ViewStyle;
  otherMessage: ViewStyle;
  messageText: TextStyle;
  inputContainer: ViewStyle;
  input: TextStyle;
  sendButton: ViewStyle;
  messageAvatar: ImageStyle;
  // Image Viewer styles
  imageViewerContainer: ViewStyle;
  imageViewerCloseButton: ViewStyle;
  imageViewerSlide: ViewStyle;
  imageViewerImage: ImageStyle;
  imageSlide: ViewStyle;
  pagination: ViewStyle;
  paginationDot: ViewStyle;
  paginationDotActive: ViewStyle;
  // ... add other style interfaces as needed
}

export default StyleSheet.create<Style>({
  // COMPONENT - CARD ITEM
  containerCardItem: {
    backgroundColor: WHITE,
    borderRadius: 8,
    alignItems: "center",
    margin: 10,
    elevation: 1,
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowColor: BLACK,
    shadowOffset: { height: 0, width: 0 },
  },
  matchesCardItem: {
    marginTop: 15,
    backgroundColor: PRIMARY_COLOR,
    paddingVertical: 7,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  matchesTextCardItem: {
    color: WHITE,
  },
  descriptionCardItem: {
    color: GRAY,
    textAlign: "center",
  },
  status: {
    paddingBottom: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  statusText: {
    color: GRAY,
    fontSize: 12,
  },
  online: {
    width: 6,
    height: 6,
    backgroundColor: ONLINE_STATUS,
    borderRadius: 3,
    marginRight: 4,
  },
  offline: {
    width: 6,
    height: 6,
    backgroundColor: OFFLINE_STATUS,
    borderRadius: 3,
    marginRight: 4,
  },
  actionsCardItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 30,
  },
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: WHITE,
    marginHorizontal: 7,
    alignItems: "center",
    justifyContent: "center",
    elevation: 1,
    shadowOpacity: 0.15,
    shadowRadius: 20,
    shadowColor: DARK_GRAY,
    shadowOffset: { height: 10, width: 0 },
  },
  miniButton: {
    width: 40,
    height: 40,
    borderRadius: 30,
    backgroundColor: WHITE,
    marginHorizontal: 7,
    alignItems: "center",
    justifyContent: "center",
    elevation: 1,
    shadowOpacity: 0.15,
    shadowRadius: 20,
    shadowColor: DARK_GRAY,
    shadowOffset: { height: 10, width: 0 },
  },

  // COMPONENT - CITY
  city: {
    backgroundColor: WHITE,
    padding: 10,
    borderRadius: 20,
    width: 100,
    elevation: 1,
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowColor: BLACK,
    shadowOffset: { height: 0, width: 0 },
  },
  cityText: {
    color: DARK_GRAY,
    fontSize: 13,
    textAlign: "center",
  },

  // COMPONENT - FILTERS
  filters: {
    backgroundColor: WHITE,
    padding: 10,
    borderRadius: 20,
    width: 90,
    elevation: 1,
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowColor: BLACK,
    shadowOffset: { height: 0, width: 0 },
  },
  filtersText: {
    color: DARK_GRAY,
    fontSize: 13,
    textAlign: "center",
  },

  // COMPONENT - MESSAGE
  containerMessage: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    paddingHorizontal: 10,
    width: DIMENSION_WIDTH - 100,
  },
  avatar: {
    borderRadius: 30,
    width: 60,
    height: 60,
    marginRight: 20,
    marginVertical: 15,
  },
  message: {
    color: GRAY,
    fontSize: 12,
    paddingTop: 5,
  },

  // COMPONENT - PROFILE ITEM
  containerProfileItem: {
    backgroundColor: WHITE,
    paddingHorizontal: 10,
    paddingBottom: 25,
    margin: 20,
    borderRadius: 8,
    marginTop: -65,
    elevation: 1,
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowColor: BLACK,
    shadowOffset: { height: 0, width: 0 },
  },
  matchesProfileItem: {
    width: 135,
    marginTop: -15,
    backgroundColor: PRIMARY_COLOR,
    paddingVertical: 7,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignSelf: "center",
  },
  matchesTextProfileItem: {
    color: WHITE,
    textAlign: "center",
  },
  name: {
    paddingTop: 25,
    paddingBottom: 5,
    color: DARK_GRAY,
    fontSize: 15,
    textAlign: "center",
  },
  descriptionProfileItem: {
    color: GRAY,
    textAlign: "center",
    paddingBottom: 20,
    fontSize: 13,
  },
  info: {
    paddingVertical: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  iconProfile: {
    fontSize: 12,
    color: DARK_GRAY,
    paddingHorizontal: 10,
  },
  infoContent: {
    color: GRAY,
    fontSize: 13,
  },

  // CONTAINER - GENERAL
  bg: {
    flex: 1,
    resizeMode: "cover",
    width: DIMENSION_WIDTH,
    height: DIMENSION_HEIGHT,
  },
  top: {
    paddingTop: 50,
    marginHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: { paddingBottom: 10, fontSize: 22, color: DARK_GRAY },

  // CONTAINER - HOME
  containerHome: {
    marginHorizontal: 10,
  },

  // CONTAINER - MATCHES
  containerMatches: {
    justifyContent: "space-between",
    flex: 1,
    paddingHorizontal: 10,
  },

  // CONTAINER - MESSAGES
  containerMessages: {
    justifyContent: "space-between",
    flex: 1,
    paddingHorizontal: 10,
  },

  // CONTAINER - PROFILE
  containerProfile: { marginHorizontal: 0 },
  photo: {
    width: DIMENSION_WIDTH,
    height: 450,
  },
  topIconLeft: {
    paddingLeft: 20,
  },
  topIconRight: {
    paddingRight: 20,
  },
  actionsProfile: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  textButton: {
    fontSize: 15,
    color: WHITE,
    paddingLeft: 5,
  },
  circledButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: PRIMARY_COLOR,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  roundedButton: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
    height: 50,
    borderRadius: 25,
    backgroundColor: SECONDARY_COLOR,
    paddingHorizontal: 20,
  },

  // MENU
  tabButtonText: {
    textTransform: "uppercase",
  },
  iconMenu: {
    alignItems: "center",
  },

  // MODAL
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  modalContent: {
    width: '80%',
    backgroundColor: WHITE,
    borderRadius: 10,
    padding: 20,
    alignItems: 'center'
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20
  },
  modalItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    width: '100%'
  },
  modalItemText: {
    fontSize: 16
  },
  modalCloseButton: {
    marginTop: 20,
    padding: 10
  },
  modalCloseText: {
    color: PRIMARY_COLOR,
    fontSize: 16
  },
  modalApplyButton: {
    backgroundColor: PRIMARY_COLOR,
    padding: 15,
    borderRadius: 8,
    marginTop: 20
  },
  modalApplyText: {
    color: WHITE,
    fontSize: 16
  },
  filterItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginVertical: 10
  },
  subscriptionOption: {
    padding: 15,
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 8,
    marginVertical: 5,
    width: '100%',
  },
  selectedOption: {
    borderColor: PRIMARY_COLOR,
    backgroundColor: `${PRIMARY_COLOR}10`,
  },
  optionText: {
    fontSize: 16,
    textAlign: 'center',
  },
  customAmountContainer: {
    width: '100%',
    marginTop: 10,
  },
  customAmountInput: {
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
  },
  subscribeButton: {
    backgroundColor: PRIMARY_COLOR,
    padding: 15,
    borderRadius: 8,
    marginTop: 20,
    width: '100%',
  },
  subscribeButtonText: {
    color: WHITE,
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },

  // CHAT STYLES
  chatContainer: {
    flex: 1,
    backgroundColor: WHITE,
    paddingHorizontal: 5,
  },
  messageBubble: {
    maxWidth: '80%',
    padding: 15,
    borderRadius: 20,
    marginVertical: 5,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  userMessage: {
    backgroundColor: PRIMARY_COLOR,
    alignSelf: 'flex-end',
    borderBottomRightRadius: 5,
  },
  otherMessage: {
    backgroundColor: GRAY,
    alignSelf: 'flex-start',
    borderBottomLeftRadius: 5,
  },
  messageText: {
    color: WHITE,
    fontSize: 16,
  },
  messageAvatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    marginBottom: Platform.OS === 'ios' ? 10 : 0,
    paddingHorizontal: 16,
  },
  input: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    lineHeight: 26,
    marginRight: 12,
    fontSize: 18,
  },
  sendButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: PRIMARY_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
  },

  // Image Viewer styles
  imageViewerContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageViewerCloseButton: {
    position: 'absolute',
    top: 40,
    right: 20,
    zIndex: 1,
  },
  imageViewerSlide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageViewerImage: {
    width: '100%',
    height: '100%',
  },
  imageSlide: {
    height: 450,
  },
  pagination: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    marginHorizontal: 4,
  },
  paginationDotActive: {
    backgroundColor: WHITE,
  },
});
