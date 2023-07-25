# ReactNative-practice

GIT setup
download and install git 
for mac u can install git through terminal unsing the following code:
brew install git

Setup Username and Email
git config --global user.name 'Osanyinlusi Idowu Samue'
git config --global user.email oyekanbamidele@gmail.com
git config --list  //this ckecks the list of users


git status //check git status
git commit -m 'initial setup'     //commit a file
git add .  //set a file
git branch     list branches
git branch testing //creat new branch called testing
git checkout testing   // open testing branch
git checkout main  //open Main or Master branch
git merge testing  //merge testing with main 
git remote add origin hhtps://github.com/snynls/ReactNative-practice //adding origin to remote git (origin could be any name of ur choice
git remote remove origin //remove created origin
git push origin main // push the app through git to github using created origin

how to grant Supper Admin right to a folder on Mac:
sudo chown -R snynls my-app(my-app is the folder name)

INSTALLING NPM AND CREATING PROJECT
sudo npm install --global yarn
sudo npx create-expo-app practice (practice is the project name)
