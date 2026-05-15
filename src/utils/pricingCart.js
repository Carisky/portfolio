export function getSelectedPricingItems(groups, selected) {
  return groups.flatMap((group) => {
    const selectedIds = selected[group.id] || [];
    return group.options
      .filter((option) => selectedIds.includes(option.id))
      .map((option) => ({
        groupId: group.id,
        groupTitle: group.title,
        id: option.id,
        label: option.label,
        price: option.price,
      }));
  });
}

export function getPricingTotal(groups, selected) {
  return getSelectedPricingItems(groups, selected).reduce((sum, item) => sum + item.price, 0);
}
