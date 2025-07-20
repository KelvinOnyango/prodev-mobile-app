import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  searchGroup: {
    padding: 20,
    backgroundColor: "#34967C",
  },
  searchFormGroup: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  searchControlGroup: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 15,
  },
  searchFormText: {
    fontSize: 16,
  },
  searchControl: {
    padding: 0,
  },
  searchButton: {
    backgroundColor: "#1E6B54",
    padding: 15,
    borderRadius: 10,
  },
  filterContainer: {
    height: 72,
    backgroundColor: "white",
  },
  filterGroup: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 10,
    gap: 15,
  },
  filterItem: {
    alignItems: "center",
    width: 80,
  },
  filterImage: {
    width: 40,
    height: 40,
  },
  filterText: {
    marginTop: 5,
    fontSize: 12,
    textAlign: "center",
  },
  listingContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  paginationContainer: {
    paddingVertical: 20,
    alignItems: "center",
  },
  showMoreButton: {
    backgroundColor: "#34967C",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  showMoreButtonText: {
    color: "white",
    fontSize: 16,
  },
});

export { styles };
