const localstorage = {
  user:{
    name:'',
    email:'',
    password:''
  },
  comment:{
    reviewerEmail:'',
    id:'',
    commentId:'',
    message:''
  },
  file:{
    createrEmail:'',
    name:'',
    content:'',
    reviewers:[]
  },
  setItem:function(key,object){
    localStorage.setItem(key,JSON.stringify(object))
  },
  getItem:function(key) {
    let data = localStorage.getItem(key)
    if(data){
      return JSON.parse(data)
    }
    else return null
  },
  currentUser:function(){
    let token = this.getItem('token')
    if(token){
      return token
    }
    else {
      return false
    }
  },
  findUser: function(email){
    let users = localstorage.getItem('users')
    if(users[email]){
      return users[email]
    }
    else return false
  },
  createUser:function({name,email,password}){
    if(name.trim()==='' || email.trim()==='' || password.trim()==='') return false
   if(this.findUser(email)){
    alert('user already exist');
    return false
   }
   else{
    let users = localstorage.getItem('users')
    users[email] = {name,email,password}
    localstorage.setItem('users',users);    
    return this.loginUser({email,password})
   }
  },
  loginUser: function({email,password}){
    if(email.trim()==='' || password.trim()==='') return false
    let user = this.findUser(email) 
    if(user && user.password===password){
      this.setItem('token',email)
      return true
    }
    else{
      alert('user does not exist or wrong password');
      return false
    }
  },
  findFile:function({name}){
    let files = [...this.getItem('files')];
    let userEmail = this.currentUser();
    let file = files?.find((file)=> file.name===name&&userEmail===file.createrEmail)
    if(file){
      return file
    }
    else return false
  },
  saveFile:function({name,content,reviewers}){
    if(name.trim()==='') return false
    let file = this.findFile({name})
    let files = [...this.getItem('files')];
    if(file){
      let findex = files.indexOf(file)
      files[findex] = content
    }
    else{
      files.push({
        createrEmail:this.currentUser(),
        name,
        content,
        reviewers
      })
    }
    this.setItem('files',files)
    return true
  },
  deleteFile:function({name}){
    let file = this.findFile({name})
    if(file){
      let files = [...this.getItem('files')];
      files = files.filter((file)=> file.name===name&&file.createrEmail===this.currentUser())
      this.setItem('files',files)
      return true
    }
    else return false
  },
  findComment:function({id}){
    let comments = [...localstorage.getItem('comments')]
    if(comments){
      let comment = comments.find((comment)=> comment.id===id)
      if(comment){
        return comment
      }
      else return false
    }
    else return false
  },
  saveComment: function(){},
  deleteComment: function(){},
  getAllUsers:function(){
    let users = Object.values(this.getItem('users'))
    console.log("users",users);
    if(users) return users.filter((user)=> user.email!=this.currentUser());
    else return []
  },
  logOut:function(){
    this.setItem('token',false)
  },
  init:function(){
    if(this.getItem('users') || this.getItem('comments') ||this.getItem('files') ||this.getItem('token')) {

    }
    else{
      this.setItem('users',{})
      this.setItem('comments',[])
      this.setItem('files',[])
      this.setItem('token',false)
    }

  }
}
 
export default localstorage;