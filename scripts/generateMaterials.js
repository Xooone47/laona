const path = require('path');
const glob = require('glob').sync;
const {get, last, isNaN, compact} = require('lodash');
const fs = require('fs');

const materials = path.join(__dirname, '..', 'src', 'works', '**', '*.{jpg,JPG,mp4}');
const outputPath = path.join(__dirname, '..', 'src', 'utils', 'materials.js');

const files = glob(materials);

console.log('total：', files.length);

const shortFiles = files.map(item => {
    const index = item.indexOf('src/works');
    return item.slice(index + 3);
});

const filesPaths = shortFiles.map(item => item.split('/').slice(2));

// console.log(shortFiles);

// console.log(filesPaths);

const getIsNameVaild = name => {
    const hasInvalidChar = ['微信', 'IMG', 'DSC'].some(item => {
        const reg = RegExp(`${item}`, 'g');
        return reg.test(name);
    });

    if (hasInvalidChar) {
        return false;
    }

    if (!isNaN(Number(name))) {
        return false;
    }

    return true;
}

const getDisplayName = file => {
    const name = file.split('.').slice(0, -1).join('.');

    return getIsNameVaild(name) ? name : '';
};

// const filesNames = filesPaths.map(item => last(item));
// const validNames = compact(filesNames.map(getDisplayName));
// console.log(validNames);
// console.log(validNames.length);


const dirs = filesPaths.reduce(
    (result, current, index) => {
        const [first, second, third] = current;
        const fourth = get(current, '[3]');

        let firstIndex = result.findIndex(item => item.title === first);
        if (firstIndex < 0) {
            result.push({title: first, children: []});
            firstIndex = result.length - 1;
        }

        const firstChildren = result[firstIndex].children;
        let secondIndex = firstChildren.findIndex(item => item.name === second);
        if (secondIndex < 0) {
            firstChildren.push({name: second, children: []});
            secondIndex = firstChildren.length - 1;
        }

        if (!firstChildren[secondIndex].drafts) {
            firstChildren[secondIndex].drafts = [];
        }

        if (third === '新建文件夹') {
            firstChildren[secondIndex].drafts.push({name: getDisplayName(fourth), url: `-----url${index}-----`});
        } else {
            firstChildren[secondIndex].children.push({name: getDisplayName(third), url: `-----url${index}-----`});
        }

        return result;
    },
    []
)

// console.dir(dirs, {depth: null})

const importStatements = shortFiles.map((item, index) => `import url${index} from \'..${item}\';`).join('\n');

const dirObject = `export const CATEGORIES =` + JSON.stringify(dirs);
const filterdDir = dirObject.replace(/(\"-----|-----\")/g, "")

// console.log(filterdDir);

const content = [
    '/* eslint-disable */',
    importStatements,
    filterdDir
].join('\n\n');

fs.writeFileSync(outputPath, content, 'utf-8');
