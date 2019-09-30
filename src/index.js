module.exports = function zeros(expression) {

    function isEven( aNumber ){
        return ( aNumber % 2 == 0 );
    }

    function isOdd( aNumber ){
        return !isEven( aNumber );
    }

    function MultiplyEvens( aNumber ){
        let result = 1n;
        for ( let i=1; i<= aNumber; i++ ){
            if( i % 2 == 0 ){
                result = result * BigInt( i );
            }
        }
        return result;
    }

    function MultiplyOdds( aNumber ){
        let result = 1n;
        for ( let i=1; i<= aNumber; i++ ){
            if( i % 2 !== 0 ){
                result = result * BigInt( i );
            }
        }
        return result;
    }

    function MultiplyAll( aNumber ){
        let result = 1n;
        for ( let i=1; i<= aNumber; i++ ){
            result = result * BigInt( i );
        }
        return result;
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
                { 
                    number: currNumber,
                    reducedFactorial: isReducedFactorial,
                }
            );

        } );

        return resultArray;
    }

    let parsedExpression = ParseExpression( expression );
    let accumulatedResult = 1n;

    parsedExpression = parsedExpression.map( ( element ) => { 
        let currNumber = element[ 'number' ];
        let currReducedFactorial = element[ 'reducedFactorial' ] ;
        let currResult = 1n;
        if( element[ 'reducedFactorial' ] ){

            if( isEven( currNumber) ){
                currResult = MultiplyEvens( currNumber );
            } else {
                currResult = MultiplyOdds( currNumber );
            }
        } else {
            currResult = MultiplyAll( currNumber );
        }

        accumulatedResult = accumulatedResult * currResult;
        return { 
            number: currNumber,
            reducedFactorial: currReducedFactorial,
            result: currResult,
            strResult: currResult.toString(),
        }

    } );

    let strExpressionResult = accumulatedResult.toString().split( '' ).reverse().join( '' );
    let trailingZeroes = 0;
    while( strExpressionResult[ trailingZeroes ] === '0' ){
        trailingZeroes += 1;
    }

    return trailingZeroes;

  // your solution
}
