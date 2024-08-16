<template>
    <v-app>
      <v-container fluid class="top-section">
        <!-- Background Image -->
        <v-img src="../assets/NewBackground.png" class="background" cover></v-img>
  
        <!-- Directory Header Box -->
        <div class="directory-header">
          <v-img src="../assets/TagCatagoriesIcon.png" class="header-icon" contain height="60"></v-img>
          <span class="directory-text">Directory</span>
        </div>
  
        <!-- Squares Grid -->
        <div class="squares-grid">
          <div class="square square-1"></div>
          <div class="square square-2"></div>
          <div class="square square-3"></div>
          <div class="square square-4"></div>
          <div class="square square-5"></div>
          <div class="square square-6"></div>
          <div class="square square-7"></div>
          <div class="square square-8"></div>
          <div class="square square-9"></div>
        </div>
  
        <!-- Page Indicator Box -->
        <div class="page-indicator">
          <span class="page-number current">1</span>
          <span class="page-number">2</span>
          <span class="page-number">3</span>
          <!-- Add more page numbers as needed -->
        </div>
  
        <!-- Header Row with Title and Icons -->
        <v-row class="header" align="center" justify="space-between">
          <v-col class="title-col" cols="auto">
            <v-img src="../assets/TitleCat.png" class="title-cat" contain height="50"></v-img>
            <h1 class="header-title">AI Tools Directory</h1>
          </v-col>
          <v-col class="icons-col" cols="auto">
            <v-row class="top-icons" align="center" justify="center">
              <v-col class="icon-box" cols="auto">
                <v-btn class="icon-button back-button" @click="navigateBack">
                  <v-img src="../assets/BackIcon.png" class="icon" contain></v-img>
                  <span class="icon-text">Back</span>
                </v-btn>
              </v-col>
              <v-col class="icon-box" cols="auto">
                <v-btn class="icon-button home-button" @click="navigateHome">
                  <v-img src="../assets/HomeIcon.png" class="icon" contain></v-img>
                  <span class="icon-text">Home</span>
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
  
        <!-- Separator -->
        <v-divider class="separator"></v-divider>
  
        <!-- Bottom Section -->
        <v-container fluid class="bottom-section">
          <div class="quick-links-box">
            <span class="quick-links">Quick Links</span>
            <img src="../assets/LinkIcon.png" alt="Link Icon" class="link-icon">
          </div>
          
          <!-- New larger box area -->
          <div class="large-box">
            <span class="large-box-text">Links</span>
          </div>
          
          <div class="footer-text">
            <p>2024 All Rights Reserved. Developed by edison.ai</p>
          </div>
          
          <v-row class="contact" align="center" justify="center">
            <v-img src="../assets/ContactBanner.png" class="contact-banner" contain></v-img>
            <v-row class="contact-info" align="center" justify="space-around">
              <v-col cols="auto">
                <v-img src="../assets/ContactIcon.png" class="contact-icon" contain height="60"></v-img>
                <p class="contact-heading"><u>Contact</u></p>
              </v-col>
              <v-col cols="auto">
                <v-img src="../assets/EmailIcon.png" class="email-icon" contain height="35"></v-img>
                <p class="email-label">Email :</p>
                <p class="email-address"><u>thomas@edison.ai</u></p>
              </v-col>
            </v-row>
          </v-row>
          
          <v-img src="../assets/CatPaw.png" class="cat-paw" contain></v-img>
        </v-container>
      </v-container>
    </v-app>
  </template>
  
  <script>
  export default {
    name: 'DirectoryPage',
    methods: {
      navigateBack() {
        this.$router.go(-1);
      },
      navigateHome() {
        this.$router.push({ name: 'MainLayout' });
      }
    }
  };
  </script>
  
  <style scoped>
  .top-section {
    position: relative;
    background-size: cover;
    background-color: black;
    background-position: center;
    background-repeat: no-repeat;
  }
  
  .directory-header {
    position: absolute;
    top: 7%;
    left: 50%;
    transform: translateX(-50%);
    background-color: #FFFFE0; /* Very light yellow */
    border: 4px solid #8B4513; /* Dark brown border */
    padding: 10px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    z-index: 1;
  }
  
  .header-icon {
    height: 40px;
    margin-right: 10px;
  }
  
  .directory-text {
    font-size: 58px;
    font-weight: bold;
    font-family: 'Shadows Into Light', cursive;
    padding: 7px;
    color: #8B4513; /* Dark brown color */
  }
  
  .squares-grid {
    position: absolute;
    top: 13%;
    left: 10%;
    display: grid;
    grid-template-columns: repeat(3, 400px);
    grid-row-gap: 25px;
    grid-column-gap: 20px;
    z-index: 1; /* Ensure it is above the background */
  }
  
  .square {
    width: 400px;
    height: 400px;
    border: 4px solid orange;
  }

  .square.square-1 {
  background-image: url('../assets/sturppy.webp'); /* Path to your image */
  background-size: cover; /* Ensures the image covers the box */
  background-position: center; /* Centers the image in the box */
  background-repeat: no-repeat; /* Prevents the image from repeating */
}
  
  .square:nth-child(odd) {
    background-color: #FFE4C4; /* Light color */
  }
  
  .square:nth-child(even) {
    background-color: #CFB095; /* Slightly darker color */
  }
  
  .page-indicator {
  position: absolute;
  top: 59%;
  left: 50%;
  transform: translateX(-50%);
  background-color: #FFFFE0; /* Same as directory header */
  border: 4px solid #8B4513; /* Dark brown border */
  padding: 10px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-family: 'Monospace', monospace;
  color: #8B4513;
}

.page-number {
  margin: 0 15px; /* Space out the numbers */
  font-weight: bold;
}

.page-number.current {
  background-color: orange;
  color: #8B4513;
  padding: 10px;
  border-radius: 4px;
}

  
  .header {
    position: absolute;
    top: 10px;
    left: 10px;
    right: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: transparent;
    z-index: 1;
  }
  
  .title-col {
    display: flex;
    align-items: center;
  }
  
  .header-title {
    font-family: 'Indie Flower', cursive;
    font-size: 40px;
    color: black;
    margin-left: 20px;
  }
  
  .icons-col {
    display: flex;
    align-items: center;
  }
  
  .top-icons {
    margin-right: 10px;
  }
  
  .separator {
    border-top: 20px solid #4a2e0d;
    margin: 0;
    position: relative;
    z-index: 1;
  }
  
  .icon-box {
    background-color: #edb774;
    border: 3px solid #a3613a;
    border-radius: 5px;
    padding: 5px 10px;
    display: flex;
    align-items: center;
    margin-left: 20px;
    transition: background-color 0.3s, border-color 0.3s;
  }
  
  .icon-button {
    border: none;
    padding: 0;
    cursor: pointer;
  }
  
  .icon-box:hover {
    background-color: #d9a56e;
    border-color: #8a4c26;
  }
  
  .icon {
    height: 30px;
  }
  
  .icon-text {
    font-size: 22px;
    margin-left: 5px;
    font-family: 'Shadows Into Light', cursive;
    font-weight: bold;
  }
  
  .bottom-section {
    height: 100vh;
    background-image: url('../assets/BottomBackground.png');
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
    align-items: center;
  }
  
  .quick-links-box {
    position: absolute;
    top: 50px;
    left: 50px;
    background-color: #f3bd8e;
    padding: 10px;
    border: 4px solid #391a01;
    display: flex;
    align-items: center;
    color: rgb(87, 45, 4);
    font-size: 40px;
    font-family: 'Shadows Into Light', cursive;
    font-weight: bold;
    box-shadow: 15px 12px 2px rgba(0, 0, 0, 0.6);
  }
  
  .large-box {
    position: absolute;
    top: 250px;
    left: 50px;
    width: 400px;
    height: 300px;
    background-color: #f3bd8e; /* Less bright yellow background */
    border: 4px solid #391a01;
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgb(87, 45, 4);
    font-size: 40px;
    font-family: 'Shadows Into Light', cursive;
    font-weight: bold;
    box-shadow: 30px 12px 2px rgba(0, 0, 0, 0.6);
  }
  
  .large-box-text {
    font-size: 40px;
  }
  
  .footer-text {
    position: absolute;
    bottom: 20px;
    left: 50px;
    color: white;
    font-size: 28px;
    font-family: monospace;
  }
  
  .footer-text p {
    margin: 0;
  }
  
  .contact {
    margin: 20px 0;
    position: relative;
  }
  
  .contact-banner {
    width: 520px;
    height: auto;
    position: absolute;
    right: 0;
    top: 20%;
  }
  
  .contact-info {
    display: flex;
    justify-content: space-around;
    position: absolute;
    top: 10%;
    width: 100%;
  }
  
  .contact-icon {
    height: 50px;
    position: absolute;
    margin-left: 600px;
    margin-top: 20px;
  }
  
  .email-icon {
    height: 50px;
    position: absolute;
    margin-left: -145px;
    margin-top: 147px;
  }
  
  .contact-info p {
    font-size: 18px;
    color: white;
    margin: 0;
  }
  
  .email-label {
    font-size: 34px;
    color: yellow;
  }
  
  .email-address {
    font-size: 24px;
    color: yellow;
  }
  
  .cat-paw {
    position: absolute;
    bottom: 0;
    left: 58%;
    transform: translateX(-50%);
    height: 170px;
  }
  </style>
  