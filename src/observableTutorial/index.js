import {
  evens_, 
  request_,
  merged_,
  evenOddSum_,
  combine_
} from './observableTutorial';

export default function testObservables() {
  evens_.subscribe(x => console.log("Even:", x));

  request_.subscribe(
    res => console.log(res),
    err => console.error(err),
    () => console.log('done')
  );

  merged_.subscribe(x => console.log("Merged:", x));

  evenOddSum_.subscribe(x => console.log("Even+Odd", x));

  combine_.subscribe(x => console.log(x));  
}




