console.log("Hello there!");
const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      if (Array.isArray(collection)) { // if array // pass element to callback

        //console.log("This is an array");

        for(const index in collection){

          let element = collection[index]

          callback(element, index, collection)
        }
      }
      else { // else it will be an object // pass value to callback

        // console.log("This is an object");

        for(const key in collection){

          let value = collection[key]
           //   console.log(value);
          callback(value, key, collection)
        }
      }
      return collection
    },

    map: function(collection, callback) {

      let newArray =[]
      if (Array.isArray(collection)) { // if array // pass element to callback

        //console.log("This is an array");


        for(const index in collection){

          let element = collection[index]

          newArray.push(callback(element, index, collection))
        }
      }
      else { // else it will be an object // pass value to callback

        // console.log("This is an object");

        for(const key in collection){

          let value = collection[key]
           //   console.log(value);
           newArray.push( callback(value, key, collection))

        }
      }
      return newArray

    },

    reduce: function(collection, callback, accumulator) {


     console.log(accumulator);
    // console.log(collection[0]);
     //from reduse method MDN The accumulator accumulates the callback's return
     //values. It is the accumulated value previously returned in the
    //last invocation of the callback, or initialValue, if supplied.

      if (Array.isArray(collection)) { // if array // pass element to callback

          if(!accumulator){ console.log("In Array, acc not defined");

            accumulator=collection[0];


            for(const index in collection){

              console.log("index is"+ index);
              if (index < 1) {console.log("skip this");}

              else{

                let element = collection[index]
                console.log(element);
                accumulator = callback(accumulator, element, collection)

              }
          }


          //console.log(accumulator);
        } else if(accumulator) { console.log("In Array, acc is defined");
          for(const index in collection){

              let element = collection[index]
              console.log(element);
              accumulator = callback(accumulator, element, collection)

          }
        }
      } //end of array part

      else { // else it will be an object // pass value to callback


         if(!accumulator){ console.log("In Object, acc not defined");

         console.log(collection[Object.keys(collection)[0]]);

         console.log("here" + Object.keys(collection)[0]);
         accumulator=collection[Object.keys(collection)[0]]


         for(const index in collection){

          if (index < 0){console.log("Good Job");}
           console.log("index is"+ index);
          if (index == Object.keys(collection)[0]) {console.log("skip this");}

          else{

             let value = collection[index]
             console.log(value);
             accumulator = callback(accumulator, value, collection)

           }
       }


       //console.log(accumulator);
     } else if(accumulator) { console.log("In Object, acc is defined");
       for(const index in collection){

           let element = collection[index]
           console.log(element);
           accumulator = callback(accumulator, element, collection)

       }
     }
      }
      return accumulator //return for all


    },
    find: function(collection, predicate){ //find

      //console.log(predicate);

      for(const element in collection){
        //console.log(predicate(collection[element]));
        if (predicate(collection[element])){ return collection[element];}
      }


    },
    filter: function(collection, predicate){

      //console.log(predicate);
      let array =[]
      for(const element in collection){
        //console.log(predicate(collection[element]));

        if (predicate(collection[element])){ array.push(collection[element]);}
      }
      return array;

    },
    size: function(collection){

      //console.log(predicate);
      let size=0;
      for(const element in collection){
       // console.log(element);
        //console.log(collection[element]);
       if (collection[element]){ size= size+1;}
      }
      return size;

    },
    first: function(array, n="0"){
        let newArray = [];
        let i =0;
        do{
          newArray.push(array[i])
          i++;
        }while(i<n)

        if(n == 0){return array[0]}else{
          return newArray;
        }


    },
    last: function(array, n){
      console.log(array);
      console.log(n);

      console.log(array.length);
      let newArray = [];
      let i =array.length-n;
      do{
        newArray.push(array[i])
        i++;
      }while(i<array.length)

      console.log(newArray);
      if(!n){

        return array[array.length-1]}
      else if(n){
        console.log(n + "is defined");
        return newArray;
      }

  },
  compact: function(array){ //remove false, null, 0, "", undefined values
    console.log(array);
    let newArray =[]

    for(const element in array){

      if(!!array[element]){console.log("this is defined");
          newArray.push(array[element])
       }
      console.log(array[element]);

    }
    return newArray
  },

  sortBy: function(collection, callback){

    // console.log(collection);
     //console.log(callback);
      let sortable = [];

      for (let index in collection) {

        let value = collection[index]
      // sortable[index]=  callback(value)
        sortable.push([collection[index], callback(value) ])
      }
    //console.log("this is    "+ sortable[0]);
      if(typeof(sortable[0][1]) == "number"){
      sortable.sort(function(a,b){
         return a[1] - b[1];
        }
      )} else{sortable.sort()}

      let result = [];
      for(const element of sortable){
       // console.log(element[0]);
        result.push(element[0])
      }

   return result

  },

    flatten: function(array , SingleLevel){
      let next = []

        if (SingleLevel){
        for(const element of array){
        if(Number.isInteger(element)){next.push(element)}
        if (Array.isArray(element)){console.log("we have an array");
        for (const inner of element){next.push(inner)}
      }
      }
    }// end if SingleLevel is true

      else{

    nested(array)
    function nested(array){
      for (const element of array){ //if not array push numbers, else go inside the array
        if(!Array.isArray(element)){next.push(element)}else {nested(element)}
      }
    }

    }//end else

      return next;
    },
    uniq: function(array, isSorted, callback){

      let unique = array.filter(function(item, index){ //indexOf returns only the first index of the item
    //    console.log(item , index, array.indexOf(item), array.indexOf(item)== index);
        return array.indexOf(item)== index
      })
     // console.log(unique);

     if(!isSorted){unique.sort()}

      let x =[]
      if(callback){ console.log(callback);

        let y = unique.map(callback);


        for(const item in unique){
          x.push([unique[item], y[item]])
        }
        console.log(x);

        let unique2 = y.filter(function(item, index){ //indexOf returns only the first index of the item
            return y.indexOf(item)== index
          })

          let final = []
           console.log(unique2);
           x.forEach((element,index) =>{
            console.log(element[1]==unique2[index])
            if(element[1]==unique2[index]){ final.push(unique[index])}
           }

          )

          console.log(final);
          return final

      }
       return unique;

    },

    keys: function(object){

      let objArr =[]
      for(const element in object){

        objArr.push(element)
      }
      return objArr
      //return Object.keys(object) // works as well
    },

    values: function(object){

      let objArr =[]
      for(const element in object){
      //  console.log(object[element]);
        objArr.push(object[element])
      }
      return objArr
       //return Object.values(object) // works as well
    },

    functions: function(object) {
      let objProperty =[]
      for(const element in object){
        if(typeof(object[element]) == "function"){objProperty.push(element)}

      }
      return objProperty;
    },


    giveMeMore: function() {
    console.log("new function");
      return true;
    },


  }
})()

 fi.libraryMethod()
