// // Traverse in LL

// class Node{
//     constructor(data){
//         this.data = data;
//         this.next = null;
//     }
// }

// let head = new Node(1);
// let First = new Node(2);

// head.next = First;

// TraverseLinked(head);

// function TraverseLinked(head){
//     let current = head;
//     while(current!=null) {
//         console.log(current.data);
//         current = current.next;
//     }
// }


// Searching in LL

// class Node1{
//     constructor(data){
//         this.data = data;
//         this.next = null;
//     }
// }

// let head = new Node1(5);
// let Firstnode = new Node1(10);
// let Secondnode = new Node1(25);

// function SearchLinkedList(head, key){
//     let current = head;
//     while(current != null){
//         if(current.data == key){
//             return true;
//             current = current.next;
//         }
//         return false;
//     }
// }
// const result = SearchLinkedList(Firstnode, 10);

// result == true? console.log("Key found") : console.log("Key not found");


// Insertion in Linked list

// class Node{
//     constructor(data){
//         this.data = data;
//         this.next = null;
//     }
// }
// let head = new Node(5);
// let Firstnode = new Node(10);
// let Secondnode = new Node(25);

// head.next = Firstnode;
// Firstnode.next = Secondnode;
// Secondnode.next = null;

// function InsertionInBegining(key){
//     let newNode = new Node(key);
//     newNode.next = head;
//     head = newNode;
// }
// InsertionInBegining(1);
// InsertionInBegining(2);


// function Printlist(head){
//     let current = head;
//     while(current != null){
//         console.log(current.data);
//         current = current.next;
//     }
// }
// Printlist(head);


// class Node{
//     constructor(data){
//         this.data = data;
//         this.next = null;
//     }
// }
// let head = new Node(5);
// let Firstnode = new Node(10);
// let Secondnode = new Node(25);

// head.next = Firstnode;
// Firstnode.next = Secondnode;
// Secondnode.next = null;

// function Inspecific(prevNode, data){

//     let newNode = new Node(data);
//     newNode.next = prevNode.next;
//     prevNode.next = newNode;
// }

// function Insert_at_end(data){
//     let newNode = new Node(data);

//     // Find Last Node in LL

//     let currentNode = head;
//     while(currentNode.next != null){
//         currentNode = currentNode.next;
//     }
//     currentNode.next = newNode;
// }

// Inspecific(Firstnode, 7);
// Inspecific(Firstnode, 15);
// Insert_at_end(45);


// function Printlist(head){
//     let current = head;
//     while(current != null){
//         console.log(current.data);
//         current = current.next;
//     }
// }
// Printlist(head);


// class Node{
//     constructor(data){
//         this.data = data;
//         this.next = null;
//     }
// }
// let head = new Node(1);
// let First = new Node(2);
// let Second = new Node(3);
// let Third = new Node(4);

// head.next = First;
// First.next = Second;
// Second.next = Third;
// Third.next = null;

// function Delete_Begining(){

//     if(head == null){
//         console.log("List is Empty")
//         return;
//     }
//     let temp = head;
//     head = head.next;
//     temp = null; // clearing the memory
// }
// Delete_Begining();

// function Print(head){
//     let currentNode = head;

//     while(currentNode != null){
//         console.log(currentNode.data);
//         currentNode = currentNode.next;
//     }
// }
// Print(head);


// Deletion At the End

class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
let head = new Node(1);
let First = new Node(2);
let Second = new Node(3);
let Third = new Node(4);

head.next = First;
First.next = Second;
Second.next = Third;
Third.next = null;

function Delete_At_End(){

    if(head == null){
        console.log("List is Empty")
        return;
    }

    if(head.next == null){
        head = null;
        return;
    }

    // Find Second Last Node
    let currentNode = head;
    while(currentNode.next.next != null){
        currentNode = currentNode.next;
    }

    let endNode = currentNode.next;
    currentNode.next = null;
    endNode = null;
}
Delete_At_End();
Delete_At_End();


function Print(head){
    let currentNode = head;

    while(currentNode != null){
        console.log(currentNode.data);
        currentNode = currentNode.next;
    }
}
Print(head);