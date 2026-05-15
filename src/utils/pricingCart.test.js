import { getPricingTotal, getSelectedPricingItems } from "./pricingCart";

const groups = [
  {
    id: "websites",
    title: "Sites",
    options: [
      { id: "landing", label: "Landing", price: 400 },
      { id: "shop", label: "Shop", price: 1200 },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    options: [{ id: "api", label: "REST API", price: 250 }],
  },
];

test("collects selected checkout items with service titles", () => {
  expect(
    getSelectedPricingItems(groups, {
      websites: ["shop"],
      backend: ["api"],
    })
  ).toEqual([
    { groupId: "websites", groupTitle: "Sites", id: "shop", label: "Shop", price: 1200 },
    { groupId: "backend", groupTitle: "Backend", id: "api", label: "REST API", price: 250 },
  ]);
});

test("calculates total from selected checkout items", () => {
  expect(getPricingTotal(groups, { websites: ["landing"], backend: ["api"] })).toBe(650);
});
