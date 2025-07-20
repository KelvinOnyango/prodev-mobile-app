import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: 400,
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 15,
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)",
    padding: 16,
    justifyContent: "space-between",
  },
  favoriteContainer: {
    alignItems: "flex-end",
  },
  favoriteButton: {
    backgroundColor: "rgba(0,0,0,0.4)",
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: "center",
    alignItems: "center",
  },
  infoContainer: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  ratingText: {
    fontSize: 18,
    color: "white",
    fontWeight: "500",
    marginLeft: 5,
  },
  detailsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  propertyName: {
    fontSize: 24,
    fontWeight: "600",
    color: "white",
    marginBottom: 5,
  },
  propertyLocation: {
    fontSize: 14,
    color: "white",
    opacity: 0.9,
  },
  priceContainer: {
    backgroundColor: "#F9F9F9",
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
  },
  priceText: {
    fontSize: 16,
    fontWeight: "500",
  },
});
