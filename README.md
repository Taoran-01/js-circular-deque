# js-circular-deque
A Preload-Based Circular Deque Class in JavaScript.

[Github Repo](https://github.com/Taoran-01/js-circular-deque) | [npm package](https://www.npmjs.com/package/circular-deque)  
Language: [en](https://github.com/Taoran-01/js-circular-deque) | [zh-cn](https://algo-x.cn/articles/JS-Circular-Deque/)  
License: [MIT license](https://github.com/Taoran-01/js-circular-deque?tab=MIT-1-ov-file)

## Principle
The queue is stored in a circular manner, maintaining front and back pointers.

When the queue space is insufficient, the space is expanded to 1.75 times its original size, and the queue is copied.

## Usage
### Installing and Importing the Module
```bash
npm install circular-deque
```
```javascript
const deque = require('circular-deque');
```

### Creating Objects | `constructor()`
```javascript
const t = new deque(); // #1
const t = new deque(10); // #2
```
Method #1: No preallocation of length.  
Method #2: Preallocate a length of $\text{length}$ according to the program's needs.

### Get Front/Back Element | `front()` & `back()`
```javascript
let x = t.front();
let x = t.back();
```
Time Complexity: $O(1)$.

### Insert Elements from Front/Back | `push_front()` & `push_back()`
```javascript
t.push_front(x);
t.push_back(x);
```
Time Complexity: Mostly $O(1)$, worst-case $O(\text{length})$ (when expansion is needed).

### Pop Elements from Front/Back | `pop_front()` & `pop_back()`
```javascript
t.pop_front();
t.pop_back();
```
Time Complexity: $O(1)$.

## Previous Versions
### `v1.0.0`
Bug version, write failed QWQ  
Please do not use this version.

### `v1.0.1`
1. [x] Fixed bugs, added `README` documentation.  
2. [x] Optimized `pop` operation to reduce memory overhead.

## Development Plan
1. [ ] Optimize parameters based on data structure performance.  
2. [ ] Check for memory leaks.  
3. [ ] Add function mappings, such as `enqueue`, `pop`, etc.
