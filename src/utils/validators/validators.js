export const required = (value) => {
    if(value){
        return undefined;
    } else {
        return 'Error message';
    }
};

export const maxLenghtCreator = (maxLenght) => {
    return (value) => {
        if(value.length > maxLenght){
            return `Max lenght is ${maxLenght} symbols`;
        } else {
            return undefined;
        }
    }
}