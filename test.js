"use strict";

const deque = require("./index.js");

const dq = new deque();

dq.push_back(1);
dq.push_back(2);
dq.push_front(0);
dq.push_back(3);
console.log(dq);

dq.pop_front();
dq.pop_back();
dq.pop_front();
console.log(dq);

dq.clear();
console.log(`[${dq.empty()}]`);
