<script> 
// javascript program to merge two sorted 
// linked lists in-place.	 
class Node { 
constructor(){ 
		this.data = 0; 
		this.next = null; 
		} 
	} 

	// Function to create newNode in a linkedlist 
	function newNode(key) { 
		temp = new Node(); 
		temp.data = key; 
		temp.next = null; 
		return temp; 
	} 

	// A utility function to print linked list 
	function printList( node) { 
		while (node != null) { 
			document.write(node.data+" "); 
			node = node.next; 
		} 
	} 

	// Merges two given lists in-place. This function 
	// mainly compares head nodes and calls mergeUtil() 
	function merge( h1, h2) { 
		if (h1 == null) 
			return h2; 
		if (h2 == null) 
			return h1; 

		// start with the linked list 
		// whose head data is the least 
		if (h1.data < h2.data) { 
			h1.next = merge(h1.next, h2); 
			return h1; 
		} else { 
			h2.next = merge(h1, h2.next); 
			return h2; 
		} 
	} 

	// Driver program 
	
		head1 = newNode(1); 
		head1.next = newNode(3); 
		head1.next.next = newNode(5); 

		// 1.3.5 LinkedList created 

		head2 = newNode(0); 
		head2.next = newNode(2); 
		head2.next.next = newNode(4); 

		// 0.2.4 LinkedList created 

		mergedhead = merge(head1, head2); 

		printList(mergedhead); 

// This code contributed by umadevi9616 
</script> 
