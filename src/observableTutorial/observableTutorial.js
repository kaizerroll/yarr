import {Observable} from "rx";
import $, {get, ajax} from "jQuery";

// Basic Observable
let nums = [1,2,3,4,5,6,7,8,9,10],
    nums_ = Observable.from(nums),
    evens_ = nums_.filter(n => n % 2 === 0),
    odds_ = nums_.filter(n => n % 2 === 1);

// Ajax requests

// map the url to a Promise, flatten the promise to its result
let request_ = Observable.fromPromise(
  ajax({
    url: 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=test',
    dataType: 'jsonp'
  }));

// Merging
let every1Sec_ = Observable.interval(1000).map(x => `Stream 1: ${x}`),
    every2Secs_ = Observable.interval(2000).map(x => `Stream 2: ${x}`),
    merged_ = every1Sec_.merge(every2Secs_).take(10);

// Zip
let evenOddSum_ = evens_.zip(odds_, (even, odd) => even + odd);

// CombineLatest

// CombineLatest takes the latest event from each and combines w/ function,
  // it doesn't fire until each event fires at least once
let resizeCount_ = Observable.fromEvent(window, "resize")
                    .scan((acc, x) => acc+1, 0),
    clickCount_ = Observable.fromEvent(window, "click")
                    .scan((acc, x) => acc+1, 0),
    combine_ = Observable.combineLatest(
      resizeCount_,
      clickCount_,
      (r, c) => `Resize count: ${r}, Click count ${c}`);

export {
  evens_,
  request_,
  merged_,
  evenOddSum_,
  combine_
};



