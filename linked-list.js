/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }


  get(idx){
    let current = this.head;
    let count = 0;
 
    while (current != null) {
        if (count == idx)
            return current;
        count++;
        current = current.next;
    }
  }
  
  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val)
    if(this.head==null){
      this.head=newNode
      this.tail=newNode
    }else{
      this.tail.next=newNode
      this.tail = newNode
    }
    this.length++

  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val)
    let prevFirst = this.head
    if(this.head==null){
      this.head=newNode
      this.tail=newNode
    }else{
      this.head=newNode
      this.head.next = prevFirst
    }
    this.length++


  }

  /** pop(): return & remove last item. */

  pop() {
    return this.removeAt(this.length-1)
  }

  /** shift(): return & remove head item. */

  shift() {
    return this.removeAt(0)
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    let current = this.head;
    let count = 0;
 
    while (current != null) {
        if (count == idx)
            return current.val;
        count++;
        current = current.next;
    }
    return 0;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if(idx > this.length || idx < 0) throw new Error("Index not valid")
    let current = this.head;
    let count = 0;
    /*
     index of Node we are currently looking at
                     */
    while (current != null) {
        if (count == idx) return current.val = val;
        count++;
        current = current.next;
  }
}

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if(idx > this.length || idx < 0) throw new Error("Index not valid")
    if (idx === 0) return this.unshift(val);
    if (idx === this.length) return this.push(val);
    let previous = this.get(idx-1)

    let newNode = new Node(val);
    newNode.next = previous.next;
    previous.next = newNode;

    this.length += 1;
  }
  

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if(idx > this.length || idx < 0) throw new Error("Index not valid")
    let prev = this.get(idx - 1);
    if (idx === 0) {
      let val = this.head.val;
      this.head = this.head.next;
      this.length -= 1;
      if (this.length < 2) this.tail = this.head;
      return val;
    }
    


    if (idx === this.length - 1) {
      let val = prev.next.val;
      prev.next = null;
      this.tail = prev;
      this.length -= 1;
      return val;
    }



    let val = prev.next.val;
    prev.next = prev.next.next;
    this.length -= 1;
    return val;
  }

  /** average(): return an average of all values in the list */

  average() {
    let sum = 0
    let count = 0
    let current = this.head
    if(this.length == 0) return 0
    while(current != null){
      count++
    sum += current.val
    current = current.next
    }
    
    return sum / count


    
  }
}

module.exports = LinkedList;
