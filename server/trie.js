let TrieNode = function(char) {
  this.key = char;
  this.parent = null;
  this.isWord = false;
  this.children = {};
}

let Trie = function() {
  this.root = new TrieNode(null);
}

//time complexity O(n), n = word length
Trie.prototype.insert = function(word) {
  let node = this.root;

  for (let i = 0; i < word.length; i++) {
    if (!node.children[word[i]]) {
      node.children[word[i]] = new TrieNode(word[i]);
      node = node.children[word[i]].parent = node;
    } 

    node = node.children[word[i]];
    
    if (i === word.length-1) {
      node.isWord = true;
    }
  }
}

//time complexity O(n), n = word length
Trie.prototype.contains = function(word) {
  let node = this.root;

  for (let i = 0; i < word.length; i++) {
    if (node.children[word[i]]) {
      node = node.children[word[i]];
    } else {
      return false;
    }
  }

  return node.isWord;
}

//time complexity O(n), n = word length
Trie.prototype.startWith = function(prefix) {
  let node = this.root;

  for (let i = 0; i < prefix.length; i++) {
    if (node.children[prefix[i]]) {
      node = node.children[prefix[i]];
    } else {
      return false;
    }
  }
  return true;
}


