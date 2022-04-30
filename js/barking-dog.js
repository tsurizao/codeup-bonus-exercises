(function () {

    /**
     This function determines whether you should wake up to
     see what your dog is barking at.  Between the hours of 8
     and 22 should return false because you're awake.  If the
     dog is not barking the function should return false as
     well.

     For example...
     shouldWakeUp(true, 1); will return true.
     shouldWakeUp(false, 1); will return false.
     shouldWakeUp(true, 9); will return false.
     shouldWakeUp(false, 9); will return false.
     */

    function shouldWakeUp(isBarking, hourOfDay){
        return (hourOfDay >= 0 && hourOfDay < 8 && isBarking || hourOfDay <= 24 && hourOfDay > 22 && isBarking);
    }

}());