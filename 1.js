const fs = require('fs');
const posts = fs.readFileSync('posts.csv','utf-8');
const users = fs.readFileSync('users.csv','utf-8');

const firstUsers = users.split('\n');
const secondPosts = posts.split('\n');

// console.log(firstUsers);
// console.log(secondPosts);
for(let i=0; i<firstUsers.length; i++){
    firstUsers[i] = firstUsers[i].split(',');
}
for(let i=0; i<secondPosts.length; i++){
    secondPosts[i] = secondPosts[i].split(',');
}
//console.log(firstUsers);
//console.log(secondPosts);

function postsWithArr(){
    const posts_arr = [];
    for(let i=1; i<secondPosts.length; i++){
        const posts_obj = {};
        for(let k=0; k<(secondPosts[i].length)-1; k++){
            posts_obj[secondPosts[0][k]] = secondPosts[i][k];
        }
        posts_arr.push(posts_obj);
    }
    return posts_arr;
}
function usersWithArr(){
    const users_arr = [];
    for(let i=1; i<firstUsers.length; i++){
        const users_obj = {};
        for(let k=0; k<(firstUsers[i].length)-1; k++){
            users_obj[firstUsers[0][k]] = firstUsers[i][k];
        }
        users_arr.push(users_obj);
    }
    return  users_arr;
}

const finalUsers = usersWithArr();
const finalPosts = postsWithArr();

// console.log(finalUsers);
// console.log(finalPosts);

function finalResult(){
    
    const userId1 = [];
    const userId2 = [];
    const userId3 = [];
    let userId4;

    for(let i=0; i<finalPosts.length; i++){
        if(finalPosts[i]['userId']==='1'){
            userId1.push(finalPosts[i]);
            finalUsers[0]['posts'] = userId1;
        }
        else if(finalPosts[i]['userId']==='2'){
            userId2.push(finalPosts[i]);
            finalUsers[1]['posts'] = userId2;
        }
        else if(finalPosts[i]['userId']==='3'){
            userId3.push(finalPosts[i]);
            finalUsers[2]['posts'] = userId3;
        }
        else {
            userId4 = [];
            finalUsers[3]['posts'] = userId4;
        }
    }
}
    
finalResult();  

const util = require('util')
console.log(util.inspect(finalUsers, {showHidden: false, depth: null, colors: true}))

