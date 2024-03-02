try {
    let geometricSequence;

    function checkInput() {
        const input = document.querySelector('.sequence').value;

        if (/^-?\d+(\.\d+)?(?:\s+-?\d+(\.\d+)?)+$/.test(input) && /\S/.test(input) && !(/^\s|\s$/.test(input) || /\s{2,}/.test(input))) {
            geometricSequenceInput();
            runProgram();
        } else if (/^\d+(\.\d+)?$/.test(input)) {
            incorrectlyEnteredData('Only one number entered.');
        } else if (/^\s*$/.test(input)) {
            incorrectlyEnteredData('No data entered.');
        } else {
            incorrectlyEnteredData('Invalid data entered.');
        }
    }

    function geometricSequenceInput() {
        geometricSequence = document.querySelector('.sequence').value.split(' ').map(Number);
    }

    function runProgram() {
        document.querySelector('.math-solution').style.color = 'white';

        sequence = (array) => {
            let length = array.length;

            let division = [];

            for (let i = 1; i < length; i++) {
                division.push(array[length - i] / (array[length - i - 1]));
            }

            length = division.length;

            if (divisionLength(division) === true) {
                document.querySelector('.math-solution').innerHTML = `The function is geometric.<br><span class="ratio">Common ratio (r) = ${division[0]}`;
            }
            else {
                document.querySelector('.math-solution').innerHTML = `The function is not geometric.`;
            };
        }

        divisionLength = (division) => {
            for (let i = 0; i < division.length; i++) {
                if (division[i] !== division[0]) {
                    return false;
                }
            }
            return true;
        }

        sequence(geometricSequence);
    }

    function incorrectlyEnteredData(message) {
        document.querySelector('.math-solution').style.color = `#E32636`;
        document.querySelector('.math-solution').innerText = `${message}`;
    }

    document.querySelector('.button-check').addEventListener('click', () => {
        checkInput();
    });

    document.querySelector('.sequence').addEventListener('keydown', (event) => {
        if (event.key == 'Enter') {
            checkInput();
        }
    });

    document.querySelector('.button-clear').addEventListener('click', () => {
        document.querySelector('.sequence').value = '';
        document.querySelector('.math-solution').innerHTML = '';
    });
} catch (error) {
    document.querySelector('body').innerHTML = '<p style="color: red;">An error occurred. Please try again.</p>';
}
