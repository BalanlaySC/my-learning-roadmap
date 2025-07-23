interface Item {
  id: number;
  name: string;
  quantity: number;
  price: number;
}

let inventory: Item[] = [];
let idCount = 1; // my way of implementing incremental unique id

const addItem = (name: string, quantity: number, price: number): Item[] => {
  inventory = [...inventory, {id: idCount, name: name, quantity: quantity, price: price}];
  idCount += 1; // adds 1 after every successful adding of item, to keep it unique
  return inventory;
};

const updateQuantity = (itemId: number, newQuantity: number): boolean => {
  const index = inventory.findIndex(item => item.id === itemId);
  if (index > -1) {
    inventory = inventory.map(item =>
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    );
    return true;
  }
  console.log(`Item [${itemId}] not found.`);
  return false;
};

const calculateTotalValue = (): number => {
  const totalValue = inventory.reduce((sum, item) => sum + (item.quantity * item.price), 0);
  return totalValue;
};

const listItems = (): Item[] => {
  return [...inventory];
};

// --- Test Cases (You will add your test calls here) ---
// Example of how you might call your functions and log results:

console.log("--- Test Case 1: Adding Items ---");
addItem("Laptop", 10, 1200.00);
addItem("Mouse", 50, 25.00);
addItem("Keyboard", 30, 75.00);
console.log("Current Inventory (after adds):", listItems());
// Expected: Array with Laptop, Mouse, Keyboard

console.log("\n--- Test Case 2: Updating Quantity ---");
updateQuantity(1, 8); // Assuming Laptop is ID 1
updateQuantity(2, 60); // Assuming Mouse is ID 2
updateQuantity(999, 5); // Non-existent item
console.log("Current Inventory (after updates):", listItems());
// Expected: Laptop quantity 8, Mouse quantity 60, message for ID 999

console.log("\n--- Test Case 3: Calculating Total Value ---");
const totalValue = calculateTotalValue();
console.log("Total inventory value:", totalValue);
// Expected: 13350

console.log("\n--- Test Case 4: Advanced Scenarios ---");
addItem("Monitor", 15, 300.00);
updateQuantity(3, 0); // Assuming Keyboard is ID 3
console.log("Current Inventory (after advanced):", listItems());
const updatedTotalValue = calculateTotalValue();
console.log("Updated total inventory value:", updatedTotalValue);
// Expected: Keyboard quantity 0, Monitor added, Total 15600