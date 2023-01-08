const dir = './src/icons'
const {listOfFilesRecursive} = require('./utils')

const toCapitalize = (string) => {
    return string[0].toUpperCase() + string.slice(1).toLowerCase();
}

const toConvertNamespace = (str) => {
    return str.replace(/\/./g, (m) => m[1].toUpperCase())
}

const toCamelCase = (str) => {
    return str.trim().replace(/-./g, (m) => m[1].toUpperCase())
}

const toRemoveSubsting = (str, toRemove) => {
    return str.replaceAll(toRemove, '');
}

const toRemoveSubstringFromStart = (str) => {
    return str.replace(/^\/+/mig, '')
}


const generateTemplate = ({dir, svgIsComponent}) => {
    const files = listOfFilesRecursive(dir)
    const output = files.map(file => {
        if (/\.(gif|png|jpe?g|svg)$/i.test(file)) {
            const {fileName, ext} = /(?<fileName>.*)\.(?<ext>.*)$/gm.exec(file).groups;
            // console.log(1, fileName);
            const modifedFileName = toCapitalize(toConvertNamespace(toCamelCase(toRemoveSubstringFromStart(toRemoveSubsting(fileName, dir)))))
            console.log(2, modifedFileName, ext);
            if (svgIsComponent && /.svg$/.test(file)) {
                return `export { ReactComponent as Icon${modifedFileName} } from '${file}'`
            } else {
                return `export { default as img${modifedFileName} } from '${file}'`
            }
        }
        return ''

    }).filter(x => x).join('\n')
    return output
}


const questions = {
    header: '========================',
    message: 'Import SVG files as ReactComponent',
    footer: '========================',
}

const {BooleanPrompt} = require('enquirer');
console.log(BooleanPrompt);
module.exports = {
    prompt: ({inquirer}) => {
        return inquirer.BooleanPrompt
            .prompt(questions)
            .then((arg) => {
                console.log(1, arg);
                return {
                    files: generateTemplate({dir: dir,})
                };
            })
    }
}