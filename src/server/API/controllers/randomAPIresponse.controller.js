const Error = require('../lib/utils/http-error');
const LIMIT = 20
const shuffle=(array)=> {
    for (let i = array.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [array[i], array[j]] = [array[j], array[i]];}
    return array
  }
const getRandomAPIresponse =()=> {
  try {     
  
        const names = ["Anne","Bent","Christian","Ditlev","Esther","Frank","Gurli","Hans","Inger","Jens","Klaus","Lone","Marie","Nana","Ole"]
        const surnames = ["Meta","Mariager","Malteser","Manus","Manga","Mangler","Misty","Mango","Melorm","Meteor","Mus","Moloko","Makker","Mystic"]
        const reactions = [["thumbs-down","👎"],["thumbs-up","👍"],["smile","😀"],["feats-of-strength","💪"],["collision","💥"],["star","🌟"],["tornado","🌪"],["alarm-clock","⏰"]]
        const generated = []
        for (let i = 0; i<=LIMIT; i++) {
            const [r0,r1,r3] = [
            Math.floor(Math.random() * names.length) + 0,
            Math.floor(Math.random() * surnames.length) + 0,
            Math.floor(Math.random() * reactions.length) + 0
            ]
            const [type,content] = shuffle(reactions)[r3]
            generated.push({type,content,name:[shuffle(names)[r0], shuffle(surnames)[r1]].join(" ")})
        }  
        return generated
    } catch (error) {
        return error.message
    }
}
module.exports = getRandomAPIresponse;