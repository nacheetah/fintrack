export const getBadgeType = (type: "Credit" | "Debit"): "gain" | "loss" => {
  if (type == "Credit") {
    return "gain";
  }
  return "loss";
};
