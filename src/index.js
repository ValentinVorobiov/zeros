module.exports = function zeros(expression) {

    function MakeBaseRainbow( lastNum, baseNum ){
        let currNum, currBaseRepeats = 0, prevNum = 0, prevBaseRepeats = 0;
        let hashRainbow = new Map();
        for( currNum = 1; currNum <= lastNum; currNum++ ){

            if( currNum % baseNum == 0 ){
                currBaseRepeats = prevBaseRepeats + 1;
            } else {
                currBaseRepeats = prevBaseRepeats;
            }

            hashRainbow.set( currNum, currBaseRepeats );
            prevNum = currNum; prevBaseRepeats = currBaseRepeats;

        }

        return hashRainbow;
    }

    function SplitExpression( anExpression ){
        let resultArray = anExpression.split('*');
        return resultArray;
    }

    function ParseExpression( anExpression ){
        let resultArray = new Array ;
        let splittedExpression = SplitExpression( anExpression );

        splittedExpression.forEach( ( element ) => {
            let isReducedFactorial = false;
            if( element.indexOf( '!!' ) > -1 ){ 
                isReducedFactorial = true;
            }
            let currNumber = parseInt( element );

            resultArray.push( 
                [
                    currNumber,
                    { 
                        reducedFactorial: isReducedFactorial,
                        numTwos: null,
                        numFives: null,
                    }
                ]
            );

        } );

        return resultArray;
    }

    /*                                                              */
    /*                          TODO List:                          */
    /*      Each array element from ParseExpression should          */
    /*    acquire additional fields: numFives and numTwos, where    */
    /*      will be stored number of specified multiplicators,      */
    /*          respecting the reducedFactorial field state         */
    /*                                                              */


  // your solution
}
