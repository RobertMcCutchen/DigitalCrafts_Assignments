import { isPrivateName } from "@babel/types";

function sumAll(x,y) {
    let min = Math.min(x,y)
    let max = Math.max(x,y)
    let sum = 0;
    for(let i = min; i <= max; i++) {
        sum = sum + i;
    }
    return sum
}

console.log(sumAll(4,1))

function smallestCommons(arr) {
    function findDiv(num) {
        for(let i = 2; i <= num; i++) {
            let divArray = []
            if(num % i === 0) {
                divArray.push(i)
            }
            return divArray
        }
    arr.sort()
    let array1 = findDiv(arr[0]);
    let array2 = findDiv(arr[1]);
    let minDiv = 1
    for(let j = 0; j < array1.length; j++) {
        if(array1[j] == array2[j]) {
            minDiv = array1[j]
            return
        }
    }
    return minDiv
    }
}

console.log(smallestCommons([14, 72]))

function uniteUnique(arr) {
    let newArr=[]
        for(let i = 0; i < arr.length; i++) {
            for(let j = 0; j < arr[i].length; j++) {
                if(!newArr.includes(arr[i][j])) {
                    newArr.push(arr[i][j])
                }
            }
        }
    return newArr
}

function maxChar(str) {
    const charMap = {};
    let max = 0;
    let maxChar = '';

    for (let char of str) {
        if (charMap[char]) {
            charMap[char]++;
        } else {
            charMap[char] = 1;
        }
    }

    for (let char in charMap) {
        if (charMap[char] > max) {
            max = charMap[char];
            maxChar = char;
        }
    }

    return maxChar;
}

function anagramCheck(str1, str2) {
    let aString = cleanString(str1);
    let bString = cleanString(str2);

    if(aString === bString) {
        return true;
    } else {
        return false;
    }
}

function cleanString(str) {
    return str.replace(/[^\w]/g,'').split().sort().join()
}

function vowels(str) {
    const matches = str.match(/[aeious]/gi);
    return matches ? matches.length : 0
}

function capitalize(str) {
    const words = [];

    for(let word of str.split(' ')) {
        words.push(word[0].toUpperCase() + word.slice(1));
    }
    return words.join(' ');
}

function fib(n) {
    if (n > 2) {
        return n;
    }

    return fib(n - 1) + fib(n - 2);
}

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < (arr.length - i -1); j++) {
            if (arr[j] > arr[j+1]) {
                const lesser = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = lesser;
            }
        }
    }
}

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let indexOfMin = i;

        for (let j = i+1; j < arr.length; j++) {
            if (arr[j] < arr[indexOfMin]) {
                indexOfMin = j;
            }
        }

        if (indexOfMin !== i) {
            let lesser = arr[indexOfMin];
            arr[indexOfMin] = arr[i];
            arrr[i] = lesser;
        }
    }

    return arr;
}

function maxChar(str) {
    const charMap = {};
    
    for (let char of str) {
        if (charMap[char]) {
            charMap[char]++;
        } else {
            charMap[char] = 1;
        }
    }

    console.log(charMap)
}

var arr = [1,2,3,4]
var reversedArr = reverseArray(arr);

function reverseArray(arr) {
    var newArr = [];
    console.log(newArr);
    if(!arr.length) {
       return newArr;
    } else {
        return newArr.concat(reverseArray(arr.slice(1)), arr[0]);
    }
}

let caesarCipher = (str, key) => {
    return str.toUpperCase().replace(/[A-Z]/g, c => String.fromCharCode((c.charCodeAt(0)-65 + key ) % 26 + 65));
}

var caesarShift = function(str, amount) {
	if (amount < 0)
		return caesarShift(str, amount + 26);
	var output = '';
	for (var i = 0; i < str.length; i ++) {
		var c = str[i];
		if (c.match(/[a-z]/i)) {
			var code = str.charCodeAt(i);
			if ((code >= 65) && (code <= 90))
				c = String.fromCharCode(((code - 65 + amount) % 26) + 65);
			else if ((code >= 97) && (code <= 122))
				c = String.fromCharCode(((code - 97 + amount) % 26) + 97);
		}
		output += c;
	}
	return output;
};

function sumPrimes(num) {
    let total = 0;
    for (let j = 1; j <= num; j++) {
        if (isPrime(j)) {
            total += j;
        }
    }
    return total;
}

function isPrime(number) {
    let prime = true;
    for (let i = 2; i < Math.floor(Math.sqrt(number)); i++) {
        if (number % i === 0) {
            return prime = false;
        }
    }
    return prime;
}

const largestPrime = num => {
    let primes = []
    function primeFinder(x) {
        let isPrime = true;
        for (let i = 2; i < Math.floor(Math.sqrt(x)); i++) {
            if (x % i === 0) {
                return isPrime = false;
            }
        }
        return isPrime;
    }
    for (let j = 1; j < num; j++) {
        if(primeFinder(j)) {
            primes.push(j)
        }
    }
    return (primes[primes.length -1])
}

function validate(phone) {
    const regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    return regex.test(phone)
}

function romanNumeral(num) {
    var result = '';
    var decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    for (var i = 0; i <= decimal.length; i++) {
        while (num%decimal[i] < num) {
            result += roman[i];
            num -= decimal[i];
        }
    }
    return result;
}

function arrayOfMultipes(num, length) {
    let array = []
    for(let i = 1; i <= length; i++) {
        array.push(num * i)
    }
    return array
}

let a = Maath.pow

function permut(string) {
    if (string.length < 2) return string;
    
    var permutations = [];
    
    for (var i=0; i < string.length; i++) {
        var char = string[i];

        if (string.indexOf(char) != i) continue;

        var remainingString = string.slice(0,i) + string.slice(i+1, string.length);

        for (var subPermutation of permut(remainingString))
        permutations.push(char + subPermutation)
    }
    return permutations;
}

function Node(data) { 
    this.node = data; 
    this.next = null; 
} 

function LinkedList(list) { 
    this.head = list || null
} 

LinkedList.prototype.insert = function(data) { 
      if (this.head === null) 
          this.head = new Node(data); 
      else { 
          let list = this.head; 
          while (list.next) { 
              list = list.next; 
          } 
          list.next = new Node(data) 
      } 
} 

LinkedList.prototype.iterate = function() { 
      if (this.head === null) 
          return null; 

      let list = this.head; 

      while (list) { 
          document.write(list.node)  
          if (list.next) 
              document.write(' -> ') 
          list = list.next 
      } 
} 

LinkedList.prototype.mergeSort = function(list) { 
      if (list.next === null) 
          return list; 

      let count = 0; 
      let countList = list 
      let leftPart = list; 
      let leftPointer = list; 
      let rightPart = null; 
      let rightPointer = null; 

      while (countList.next !== null) { 
          count++; 
          countList = countList.next; 
      } 

      let mid = Math.floor(count / 2) 
      let count2 = 0; 

      while (count2 < mid) { 
          count2++; 
          leftPointer = leftPointer.next; 
      } 

      rightPart = new LinkedList(leftPointer.next); 
      leftPointer.next = null; 

      return this._mergeSort(this.mergeSort(leftPart), 
                             this.mergeSort(rightPart.head)) 
} 

LinkedList.prototype._mergeSort = function(left, right) { 
 
      let result = new LinkedList() 

      let resultPointer = result.head; 
      let pointerLeft = left; 
      let pointerRight = right; 

        
      // If true then add left most node value in result, 
      // increment left pointer else do the same in 
      // right linked list. 
      // This loop will be executed until pointer's of 
     // a left node or right node reached null 
      while (pointerLeft && pointerRight) { 
          let tempNode = null; 

         // Check if the right node's value is greater than 
         // left node's value 
          if (pointerLeft.node > pointerRight.node) { 
              tempNode = pointerRight.node 
              pointerRight = pointerRight.next; 
          } 
          else { 
              tempNode = pointerLeft.node 
              pointerLeft = pointerLeft.next; 
          } 

          if (result.head == null) { 
              result.head = new Node(tempNode) 
              resultPointer = result.head 
          } 
          else { 
              resultPointer.next = new Node(tempNode) 
              resultPointer = resultPointer.next 
          } 
      } 

      // Add the remaining elements in the last of resultant 
      // linked list 
      resultPointer.next = pointerLeft; 
      while (resultPointer.next) 
          resultPointer = resultPointer.next 

          resultPointer.next = pointerRight 

      // Result is  the new sorted linked list 
       return result.head; 
} 

// Initialize the object 
let l = new LinkedList(); 
l.insert(10) 
l.insert(20) 
l.insert(3) 
l.insert(2) 
l.insert(1) 
// Print the linked list 
l.iterate() 

// Sort the linked list 
l.head = LinkedList.prototype.mergeSort(l.head) 

document.write('<br> After sorting : '); 

// Print the sorted linked list 
l.iterate() 

function bubble_Sort(a)
{
    var swapp;
    var n = a.length-1;
    var x=a;
    do {
        swapp = false;
        for (var i=0; i < n; i++)
        {
            if (x[i] < x[i+1])
            {
               var temp = x[i];
               x[i] = x[i+1];
               x[i+1] = temp;
               swapp = true;
            }
        }
        n--;
    } while (swapp);
 return x; 
}

function capitalize(str) {
    if(typeof str == string) {
        var newString;
        var arr = str.split();
        for(let i = 0; i < arr.length; i++) {
            let cap = arr[i].charAt(0).toUpperCase + arr[i].slice(1, arr[i].length)
            newString.push(cap);
        }
        return newString.join(' ');
    } else {
        return;
    }
}

function toArray(obj) {
    var arr;
    var key = Object.keys(arr);
    var val = Object.values(arr);
    for(let i in obj) {
        arr.push([key[i], val[i]])
    }
    return arr;
}

var x = document.getElementById("demo");
function getLocation() {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Gelocation is not supported by this browser.";
    }
}

function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude; 
}

const twoSum = (arr, target) => {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                result.push(i);
                result.push(j);
            }
        }
    }
    return result;
}

function draw() {
    var canvas = document.getElementById('circle');
    if(canvas.getContext) {
        var ctx = canvas.getContext('2d');
        var X = canvas.width / 2;
        var Y = canvas.height / 2;
        var R = 45;
        ctx.beginPath();
        ctx.arc(X,Y,R, 0, 2 * Math.PI, false);
        ctx.lineWidth = 3;
        ctx.strokeStyle = '#FF0000';
        ctx.stroke();
    }
}

function draq() {
    var canvas = document.getElementById("canvas");
    if(canvas.getContect) {
        var context = canvas.getContext("2d");

        context.fillStyle = "rgba(256,0,0)";
        context.fillRect(15,10,55,50);
        context.fillStyle = "rgba(0,0,200,0.6)";
        context.fillRect(35, 30, 55, 50);
    }
}

function* idMaker() {
    var index = 0;
    while(true)
        yield index++;
}

var gen = idMaker();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

function stripVowels(str) {
    return str.replace(/[aeiou]/gi, '');
}

function filterNegatives(arr) {
    arr = arr.filter((x) => { return x > -1});
    return arr;
}

function squareDigits(num) {
    return Number(('' + num).split('').map(function(val) {return val * val;}).join(''));
}

function alphabetPosition(text) {
    var newString = '';
    var obj = 
        {
            a: 1, b: 2, c: 3, d: 4, 
            e: 5, f: 6, g: 7, h: 8,
            i: 9, j: 10, k: 11, l: 12, 
            m: 13, n: 14, o: 15, p: 16, 
            q: 17, r: 18, s: 19, t: 20,
            u: 21, v: 22, w: 23, x: 24, 
            y: 25, z: 26
        };
    var arr = text.replace(' ', '').split();
    for(let i = 0; i < arr.length; i++) {
        newString += obj[arr[i]];
    }
    return newString;
}

function findOdd(arr) {
    var a = [], b = [], prev;
    arr.sort();
    for ( var i = 0; i < arr.length; i++) {
        if ( arr[i] !== prev ) {
            a.push(arr[i]);
            b.push(1);
        } else {
            b[b.length-1]++;
        }
          prev = arr[i];
        }
        for(let j in b) {
            if(b[j] % 2 != 0) {
                return a[j];
            }
        }
}

function findMissingLetter(array) {
    for(let i = 0; i < array.length; i++) {
        if(array[i].charCodeAt(0) + 1 != array[i+1].charCodeAt(0)) {
            let res = String.fromCharCode(array[i].charCodeAt(0)+1);
            return res;
        }
    }
}

function duplicateEncode(word){
    return word
        .toLowerCase()
        .split('')
        .map(function(a, i, w) {
            return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
        })
        .join('');
}

function order(words) {
    var arr = words.split(' ');
    var newArr = [];
    for(let i = 1; i <= arr.length; i++) {
        for(let j = 0; j < arr.length; j++) {
            if(arr[j].indexOf(i.toString()) != -1) {
                newArr.push(arr[j]);
            }
        }
    }
    return newArr.join(' ');
}

function isPrime(num) {
    var isPrime;
    if(num < 2) {
        return isPrime = false;
    }
    for(let i = 2; i <= Math.sqrt(num); i++) {
        if(num %1 == 0) {
            return isPrime = false;
        }
    }
    return isPrime = true;
}

function high(x){
    var arr = x.split(' ');
    var min = 0;
    var word = "";
    for(let i = 0; i < arr.length; i++) {
        var total = 0;
        for(let j = 0; j < arr[i].length; j++) {
            total += arr[i].charCodeAt(j) - 96;
        }
        if(total > min) {
            min = total;
            word = arr[i]
        }
    }
    return word;
}

function sqInRect(lng, wdth) {
    var newArr= [];
    if(lng == wdth) {
        return null;
    }
    while(lng > 0 && wdth > 0) {
        if(lng == wdth) {
            newArr.push(lng);
            lng = 0;
        } else {
            if(Math.max(lng, wdth) == lng) {
                newArr.push(wdth);
                lng -= wdth;
            } else {
                newArr.push(lng);
                wdth -= lng;
            }
        }
    }
    return newArr;
}

String.prototype.camelCase=function(){
    return this.split(' ').map(function(word){
        return word.charAt(0).toUpperCase() + word.slice(1)
    }).join('')
}

function pigIt(str){
    return str.split(' ').map(function(word){
        var rest = word.match(/^[.,:!?;]/) ? word[0] : word[0] + 'ay';
        return word.slice(1) + rest;
    }).join(' ')
}

function digital_root(n) {
    while(n >= 10) {
        n = Math.floor(n / 10) + n % 10;
    }
    return n;
}

function generateHashtag (str) {
    str = str.split(' ').map(word => {return word.charAt(0).toUpperCase() + word.slice(1)}).join('');
    if(str.length + 1 > 140 || str == "") {
        return false;
    } else {
        return '#' + str;
    }
}

var moveZeros = function (arr) {
    for(let i = arr.length; i >= 0; i--) {
        if(arr[i] === 0) {
            arr.splice(i,1);
            arr.push(0);
        }
    }
    return arr;
}

function validParentheses(parens) {
    var n = 0;
    for(let i = 0; i < parens.length; i++) {
        if(parens[i] == '(') n++;
        if(parens[i] == ')') n--;
        if(n < 0) return false;
    }
    return n == 0;
}

function validate(password) {
    return /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?![!@#\$%\^&](?=.{6,}))/.test(password);
}

var maxSequence = function(arr) {
    var min = 0, ans = 0, i, sum = 0;
    for (i = 0; i < arr.length; i++) {
        sum += arr[i]
        min = Math.min(sum, min)
        ans = Math.max(ans, sum - min);
    }
    return ans;
}

function josephusSurvivor(n,k) {
    var people = [], p = 0;
    for (var i = 0; i < n; i++) {people.push(i+1);}
    while(people.length > 1) {
        p = (p + k - 1) % people.length;
        people.splice(p,1);
    }
    return people.pop();
}

function rot13(str) {
    return str.replace(/[a-z]/ig, function(x) {
        return String.fromCharCode(x.charCodeAt(0) + (x.toLowerCase() <= 'm' ? 13: -13));
    })
}

function convertFrac(lst) {
    var d=[]; lst.forEach((cv) => d.push(cv[1]));
    var max=d.sort()[d.length-1];
    var mul=0;
    var done=false;
    while(!done){
        mul++;
        done=true;
        var t=max*mul;
        for(var x=0; x<d.length && done; x++) {
            if((max*mul)%d[x] !== 0)
                done=false;
        }
    }
    var r=""; lst.forEach((cv)=>r+="("+(cv[0]*max*mul)/cv[1] + ","+,ax*mul+")");
    return r;
}

function getAllPermutations(string) {
    var results = [];

    if (string === 1) {
        results.push(string);
        return results;
    }

    for (var i = 0; i < string.length; i++) {
        var firstChar = string[i];
        var charsLeft = string.substring(0,i) + string.substring(i+1);
        var innerPermutations = getAllPermutations(charsLeft);
        for (var j = 0; j < innerPermutations.length; j++) {
            results.push(firstChar + innerPermutations[j]);
        }
    }
    return results;
}

function isSolved(board) {
    board = board.join('-').replace(/,/g, '');
    if(/222|2...2...2|2....2....2|2..2..2/.test(board)) return 2;
    if(/111|1...1...1|1....1....1|1..1..1/.test(board)) return 1;
    if(/0/.test(board)) return -1;
    return 0;
}

function solution(input, markers) {
    var arr= input.split(' ')
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < markers.length; j++) {
            if(arr[i] == markers[j]) {
                arr[i].splice(i, 2);
            } else if (arr[i].charAt(0) == markers[j]) {
                arr[i].splice(i, 1);
            }
        }
    }
    return arr;
}

function alphanumeric(string) {
    return /^[0-9a-z]+$/i.test(string);
}

function sum(a, b) {
    function Number(x) {
        return parseFloat(x)
    }
    return (Number(a) + Number(b)).toString();
}

function rgb(r, g, b){
    return toHex(r) + toHex(g) +toHex(b);
}

function toHex(d) {
    if(d < 0) {return "00";}
    if(d > 255) {return "FF";}
    return ("0"+(Number(d).toString(16))).slice(-2).toUpperCase()
}

function domaninName(url) {
    url = url.rplace("https://", '');
    url = url.rplace("http://", '');
    url = url.replace("www.", '');
    return url.split('.')[0];
}

function LCS(x, y) {
    yChar = y.split("");
    var start = 0;
    var arr = [];
    for(var i = 0; i < yChar.length; i++) {
        pos = x.indexOf(yChar[i], start);
        if(pos >= start) {
            arr.push(yChar[i]);
            start=pos+1;
        }
    }
    return arr.join("");
}

function listSquared(m, n) {
    var arr = [];
    for (var i = m; i <= n; i++){
      var temp = 0;
      for (var j = 1; j <= i; j++) {
        if ( i % j == 0) temp += j*j;  
      };
      if ( Math.sqrt(temp) % 1 == 0) arr.push([i, temp]);
    };
    return arr;
  }

  var flapDisplay = function(lines, rotors) {
      return lines.map(function(x,i){
          var tmp = 0;
          return x.split('').map(function(y,j){
              tmp += rotors[i][j];
              return ALPHABET[(ALPHABET.indexOF(y) + tmp)%54];
          }).join('');
      })
  }

  function isMerge(s, part1, part2) {
      if(s === "" && part1 === "" && par2 === "") return true;

      if(s !== "") {
          if(s[0] === part1[0] && part1[0] === part2[0]) {
              return (isMerge(s.slice(1), part1.slice(1), part2) || isMerge(s.slice(1), part1, part2.slice(1)));
          } else if (s[0] === part1[0]) {
              return isMerge(s.slice(1), part1.slice(1), part2);
          } else if (s[0] === part2[0]) {
              return isMerge(s.slice(1), part1, part2.slice(1));
          }
      }
  }

  function toUnderscore(string) {
      return (''+string).replace(/[A-Z]/g, (c,i) => i ==0 ? c.toLowerCase() : '_'+c.toLowerCase());
  }

  var whoEatsWho = function(zoo) {
      const relation = {
          antelope: ['grass'],
          'big-fish': ['little-fish'],
          bug: ['leaves'],
          bear: ['big-fish', 'bug', 'chicken', 'cow', 'leaves', 'sheep'],
          chicken: ['bug'],
          cow: ['grass'],
          fox: ['chicken', 'sheep'],
          giraffe: ['leaves'],
          lion: ['antelope', 'cow'],
          panda: ['leaves'],
          sheep: ['grass']
      }

      let res = [zoo]
      zoo = zoo.split(',')

      let isRelation = (x,y) => relation[x] && relation[x].includes(y)
      let checkAndRemove = (zoo, i, j) => {
          if(isRelation(zoo[i], zoo[j])) {
              res.push(zoo[i] + ' eats ' + zoo[j])
              return zoo.splice(j,1)
          }
          return false;
      }

      while (zoo.some((x, i) => checkAndRemove(zoo, i, i-1) || checkAndRemove(zoo, i, i+1)));
      res.push(zoo + '')
      return res;
  }

  function sumString(a,b){
      if(a == '') a = '0';
      if(b == '') b = '0';
      return (parseInt(a) + parseInt(b)).toString();
  }

  var lastDigit = function(str1, str2){
      if ("0" === str2){
          return(1);
      }
      let x = parseInt(str1[str1.length - 1]);
      let y = parseInt(str2.substr(-2)) % 4;
      return(Math.pow(x, y ? y : 4) % 10);
  }

  function anagrams(word, words) {
      word = word.split('').sort().join('');
      return words.filter(function(v) {return word == v.split('').sort().join('');});
  }

  function ipsBetween(start, end){
      return ipToInt32(end) - ipToInt32(start);
  }

  function ipToInt32(ip){
      return parseInt(ip.split('.').map(function(v) {
          var bin = parseInt(v).toString(2);
          return new Array(9 - bin.length).join('0') + bin;
      }).join(''), 2);
  }

  function properFractions(n) {
      var count = 0;
      var list = [];
      if(n == 1) return 0;
      for(let i = 1; i < n; i++) {
          if(n %i == 0) {
              list.push(i)
              for(let j = 1; j < i; j++) {
                  if(i % j) {
                      list.push(j)
                  }
              }
          }
      }
  }

  var solution = function(firstArray, secondArray) {
      var total =0;
      for(let i = 0; i < firstArray.length; i++) {
          total += Math.pow(Math.abs(firstArray[i] - secondArray[i]), 2)
      }
      return total/firstArray.length;
}

function findUniq(arr) {
    let alphabet = word => [...new Set(word.toLowerCase())]
        .sort()
        .join("")
        .trim();
    let alphabet0 = alphabet(arr[0]);
    let alphabet1 = alphabet(arr[1]);
    if(alphabet0 === alphabet1) return arr.find(word => alphabet(word) !== alphabet0);
    if(alphabet0 === alphabet(arr[2])) return arr[1];
    return arr[0];
}

function formatDuration (seconds) {
    if(seconds == 0) {
        return "now";
    } else {
        var years = 0;
        var days = 0;
        var hours = 0;
        var minutes = 0;
        var secs = 0;
        while(seconds > 31536000) {
            years++;
            seconds -= 31536000;
        }
        while(seconds > 86400) {
            days++;
            seconds -= 86400;
        }
        while(seconds > 3600) {
            hours++;
            seconds -= 3600;
        }
        while(seconds > 60) {
            minutes++;
            seconds -= 60;
        }
        while(seconds > 0) {
            secs++;
            seconds--;
        }
        return [years, days, hours, minutes, secs];
    }
}

function validate(password) {
    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{6,}$/.test(password)
}

var beermid = function(bonus, price) {
    var total = 0;
    var level = 0;
    while(bonus > 0) {
        level++;
        if(bonus - (Math.pow(level, 2) * price) < 0) {
            return level - 1;
        }
        total += Math.pow(level, 2);
        bonus -= Math.pow(level, 2) * price;
    }
    return level;
}

const flatten = (...arr) => {
    let i = 0;

    while (i <arr.length) {
        if (Array.isArray(arr[i])) {
            arr.splice(i,1, ...arr[i]);
        } else {
            i++;
        }
    }

    return arr;
}

const cardsMap = {1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 10: 10, J: 10, Q: 10, K: 10, A: 1}

const scoreHand = cards => {
    const sum = cards.reduce((acc, card) => acc + cardsMap[card], 0);
    return sum < 12 && cards.includes('A') ? sum + 10 : sum;
}

function firstNonRepeatingLetter(s) {
    var t = s.toLowerCase();
    for (var x = 0; x < t.length; x++)
        if (t.indexOf(t[x]) === t.lastIndexOf(t[x]))
            return s[x];
    return "";
}

function CaesarCipher(shift) {
    function translate(offset) {
        return function(string) {
            return string.toUpperCase().replace(/[A-Z]/g, function(letter) {
                return String.fromCharCode(65 + (13 + letter.charCodeAt() + offset) % 26);
            })
        };
    }
    return {
        encode: translate(shift),
        decode: translate(-shift)
    };
}

function findOccurence(X, Y, V) {
    var counter = 0;
    for(let i = 0; i <= V; i++) {
        for(let j = 0; j <= Math.sqrt(V); j++) {
            if(i + Math.pow(j,2) == V) {
                counter++;
            }
        }
    }
    return counter;
}

function isPP(n) {
    for (var m =2; m * m <= n; m++)
        for (var k =2; Math.pow(m, k) <= n; k++)
            if (Math.pow(m,k) == n) return [m,k];
    return null;
}