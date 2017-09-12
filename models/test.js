const Images = require('./images');
const imageRepo = require('./images_repo');
const Users = require('./users');
const userRepo = require('./users_repo');
const Comments = require('./commentsTable');
const Tags = require('./tagsTable');

function testTagCreation(){
    Tags.create({
        comment: 'ryuk'
    }).then(res => {
        console.log('rem');
    });
}

function testCommentCreation(){
    Comments.create({
        comment: 'Speed-Master Professional'
    }).then(res => {
        console.log('OMEGA');
    });
}

function createImageWithUser(user){
    Images.create({
        image: 'yellowbox',
        description: 'warehouse',
        userId: user.id
    }).then(res => {
        console.log('imageWithUser successfully created');
    //     callback(null, res); 
    // }, err => {
    //     callback(err);
    });
}

function testCreateNewImageAndUser(){
    Images.create({
        image: 'Chair',
        description: 'misa',
        user: {
            email: 'test@testing.com',
            password: '13579'
        }
    }, {
        include: [{
            association: Images.User
        }]
    }).then(res => {
        console.log('success');
    //     callback(null, res); 
    // }, err => {
    //     callback(err);
    });
};

function testGetUserByEmail(email, callback) {
    userRepo.getByEmail(email, function(err, user){
        if (err) {
            console.log(err)
            return
        }
        console.log(user),
        callback(user)
    })
}

function testUsers() {
    Users.create({
        email: 'test@test.com',
        password: '11235'
    }).then(res => {
        console.log('success');
    //     callback(null, res); 
    // }, err => {
    //     callback(err);
    });
}

function testGetImages() {
    imageRepo.getAll(function(err, images){
        if (err) {
            console.log(err)
            return
        }
        console.log(images[0].description)
    })
}

function testImageCreation() {
    Images.create({
        image: '/images/albert.jpeg',
        description: 'near'
    }).then(res => {
        console.log('success');
    //     callback(null, res); 
    // }, err => {
    //     callback(err);
    });
}

// testImageCreation();
// testGetImages();
// testUsers();
// testGetUserByteEmail('test@test.com');
// testCreateNewImageAndUser();
// createImageWithUser();
// testGetUserByEmail('test@test.com', createImageWithUser);
testCommentCreation();
// testTagCreation();