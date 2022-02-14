function repeatedWords(sentence)
{
    if (Array.isArray(sentence) || !isNaN(sentence))
        return 'invalid input'
    let words=sentence.split(" ")
    let map={}
    for(let i=0;i<words.length;i++)
    {
        let wordCount=map[words[i]];
        let count=wordCount?wordCount:0
        if(count!=0)
        {
            return "yes"
        }
        map[words[i]]=count+1
    }
    return "no"
}
//repeatedWords("hi my name is Yashi is")
module.exports =repeatedWords