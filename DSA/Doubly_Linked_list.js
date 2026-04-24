// class Node {
//     constructor(data){
//         this.data = data;
//         this.next = null;
//         this.prev = null;
//     }
// }

// let head = null;  // ✅ FIX 1

// // Push Node at Beginning
// function pushNode(data) {
//     let newNode = new Node(data);

//     if(head !== null){
//         head.prev = newNode;   // maintain prev link
//     }

//     newNode.next = head;
//     head = newNode;
// }

// // Insert nodes
// pushNode(1);
// pushNode(2);
// pushNode(3);

// // Print list
// function Print(head){
//     let currentNode = head;

//     while(currentNode != null){
//         console.log(currentNode.data);
//         currentNode = currentNode.next;  // ✅ FIX typo
//     }
// }

// Print(head);


// Circular Linked List

