<template>
    <v-app>
      <meta name="viewport" content="width=device-width, initial-scale=1">
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
            <div class="square square-1">
                <!-- Textbox Container -->
                <div class="textbox">
                    <v-img src="../assets/ToolIcon.png" class="textbox-icon" contain height="40"></v-img>
                    <span class="textbox-text">Sturppy</span>
                    <p class="box1text">Sturppy is an AI-driven tool for quick and efficient financial modeling, used by over 5,000 companies globally.</p>
                </div>
            </div>
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
    </v-container>

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
        <p style="font-size: 63px; position: absolute; margin-left: 675px; margin-top: 7px; font-family: 'Indie Flower', cursive;"><u>Contact</u></p>
      </v-col>
      <v-col cols="auto">
        <v-img src="../assets/EmailIcon.png" class="email-icon" contain height="35"></v-img>
        <p style="font-size: 34px; position: absolute; margin-left: -70px; margin-top: 140px; color: yellow; font-family: 'Indie Flower', cursive;">Email :</p>
        <p style="font-size: 24px; position: absolute; margin-left: -120px; margin-top: 200px; color: yellow; font-family: 'Indie Flower', cursive;"><u>thomas@edison.ai</u></p>
      </v-col>
    </v-row>
  </v-row>
  
  <v-img src="../assets/CatPaw.png" class="cat-paw" contain></v-img>
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
  
.box1text {
  color: black; font-weight: bold; margin-right: 20px; margin-top: 40px; font-family: monospace; position: absolute;
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
    top: 15%;
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

  .link-icon {
    color: blue;
  }

  .square.square-1 {
  background-image: url('../assets/sturppy.webp'); /* Path to your image */
  background-size: cover; /* Ensures the image covers the box */
  background-position: center; /* Centers the image in the box */
  background-repeat: no-repeat; /* Prevents the image from repeating */
  position: relative; /* For absolute positioning of the textbox */
}

.textbox {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 40%;
  background-color: #d2a075; /* Lightly-colored brown with some transparency */
  display: flex;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;
}

.textbox-icon {
  margin-right: 5px; /* Space between the icon and text */
  margin-bottom: 110px;
}

.textbox-text {
  font-size: 34px;
  font-weight: bold;
  color: rgb(87, 45, 4); /* White text color for contrast */
  font-family: 'Shadows Into Light', cursive;
  text-decoration-line: underline;
  margin-right: 220px;
  margin-bottom: 120px;
}

  
  .square:nth-child(odd) {
    background-color: #FFE4C4; /* Light color */
  }
  
  .square:nth-child(even) {
    background-color: #CFB095; /* Slightly darker color */
  }
  
  .page-indicator {
  position: absolute;
  top: 78%;
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
  
.title-cat {
  height: 50px;
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
    width: 30px;
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

  @media (max-width: 600px) {
    .top-section {
    position: relative;
    background-size: cover;
    background-color: black;
    background-position: center;
    background-repeat: no-repeat;
  }
  
  .directory-header {
    position: absolute;
    top: 15%;
    left: 50%;
    transform: translateX(-50%);
    background-color: #FFFFE0; /* Very light yellow */
    border: 4px solid #8B4513; /* Dark brown border */
    padding: 0px 30px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    height: 50px;
    z-index: 1;
  }
  
  .header-icon {
    width: 30px;
    margin-right: 10px;
  }
  
  .directory-text {
    font-size: 23px;
    font-weight: bold;
    font-family: 'Shadows Into Light', cursive;
    padding: 3px;
    color: #8B4513; /* Dark brown color */
  }
  
  .squares-grid {
    position: absolute;
    top: 27%;
    left: 15%;
    display: grid;
    grid-template-columns: repeat(3, 85px);
    grid-row-gap: 5px;
    grid-column-gap: 10px;
    z-index: 1; /* Ensure it is above the background */
  }
  
  .square {
    width: 85px;
    height: 85px;
    border: 4px solid orange;
  }

  .square.square-1 {
  background-image: url('../assets/sturppy.webp'); /* Path to your image */
  background-size: cover; /* Ensures the image covers the box */
  background-position: center; /* Centers the image in the box */
  background-repeat: no-repeat; /* Prevents the image from repeating */
  position: relative; /* For absolute positioning of the textbox */
}

.textbox {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 40%;
  background-color: #d2a075; /* Lightly-colored brown with some transparency */
  display: flex;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;
}

.textbox-icon {
  width: 10px;
  margin-top: 112px;
}

.textbox-text {
  font-size: 14px;
  font-weight: bold;
  margin-top: 120px;
  color: rgb(87, 45, 4); /* White text color for contrast */
  font-family: 'Shadows Into Light', cursive;
  text-decoration-line: underline;
}

.box1text {
  display: none;
}
  .square:nth-child(odd) {
    background-color: #FFE4C4; /* Light color */
  }
  
  .square:nth-child(even) {
    background-color: #CFB095; /* Slightly darker color */
  }
  
  .page-indicator {
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translateX(-50%);
  background-color: #FFFFE0; /* Same as directory header */
  border: 4px solid #8B4513; /* Dark brown border */
  padding: 5px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
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
  padding: 2px;
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

  .title-cat {
    width: 40px;
    margin-right: -20px;
  }
  
  .title-col {
    display: flex;
    align-items: center;
  }
  
  .header-title {
    font-family: 'Indie Flower', cursive;
    font-size: 14px;
    color: black;
  }
  
  .separator {
    border-top: 20px solid #4a2e0d;
    margin: 0;
    position: relative;
    z-index: 1;
  }
  
  .icons-col {
    position: absolute;
    align-items: center;
  }
  
  .top-icons {
    margin-left: 132px;
    margin-top: 1px;
  }

  .icon-box {
    background-color: #edb774;
    border: 3px solid #a3613a;
    border-radius: 5px;
    display: flex;
    align-items: center;
    transition: background-color 0.3s, border-color 0.3s;
  }
  
  .icon-button {
    border: none;
    padding: 0;
    cursor: pointer;
    width: 50px;
    height: 5px;
  }
  
  .icon-box:hover {
    background-color: #d9a56e;
    border-color: #8a4c26;
  }
  
  .icon {
    width: 16px;
  }
  
  .icon-text {
    font-size: 12px;
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
    top: 20px;
    left: 125px;
    background-color: #f3bd8e;
    padding: 5px;
    border: 4px solid #391a01;
    display: flex;
    align-items: center;
    color: rgb(87, 45, 4);
    font-size: 20px;
    font-family: 'Shadows Into Light', cursive;
    font-weight: bold;
    box-shadow: 15px 12px 2px rgba(0, 0, 0, 0.6);
  }
  
  .large-box {
    position: absolute;
    top: 100px;
    left: 80px;
    width: 230px;
    height: 120px;
    background-color: #f3bd8e; /* Less bright yellow background */
    border: 4px solid #391a01;
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgb(87, 45, 4);
    font-family: 'Shadows Into Light', cursive;
    font-weight: bold;
    box-shadow: 30px 12px 2px rgba(0, 0, 0, 0.6);
  }

  .link-icon {
    width: 20px;
  }
  
  .large-box-text {
    font-size: 40px;
  }
  
  .footer-text {
    position: absolute;
    bottom: 20px;
    left: 2px;
    color: white;
    font-size: 9px;
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
    width: 360px;
    position: absolute;
    top: 200px;
  }
  
  .contact-info {
    display: flex;
    justify-content: space-around;
    position: absolute;
    top: 40%;
    width: 100px;
  }
  
  .contact-icon {
    width: 40px;
    position: absolute;
    margin-left: 80px;
    margin-top: 230px;
  }
  
  .email-icon {
    width: 50px;
    position: absolute;
    margin-top: 350px;
  }
  
  .contact-info p {
    font-size: 18px;
    color: white;
    margin: 0;
    right: 5px;
    top: 220px;
    position: absolute;
  }
  
  .email-label {
    font-size: 14px;
    color: yellow;
    bottom: 20px;
  }
  
  .email-address {
    font-size: 14px;
    color: yellow;
  }
  
  .cat-paw {
    position: absolute;
    bottom: 0;
    left: 78%;
    transform: translateX(-50%);
    height: 140px;
  }

  }

  /* TABLET VIEW */

  @media (min-width: 601px) and (max-width: 1024px) {
    .top-section {
    position: relative;
    background-size: cover;
    background-color: black;
    background-position: center;
    background-repeat: no-repeat;
  }
  
  .directory-header {
    position: absolute;
    top: 8%;
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
    width: 45px;
    margin-right: 10px;
  }
  
.box1text {
  display: none;
}

  .directory-text {
    font-size: 30px;
    font-weight: bold;
    font-family: 'Shadows Into Light', cursive;
    padding: 7px;
    color: #8B4513; /* Dark brown color */
  }
  
  .squares-grid {
    position: absolute;
    top: 19%;
    left: 10%;
    display: grid;
    grid-template-columns: repeat(3, 190px);
    grid-row-gap: 25px;
    grid-column-gap: 20px;
    z-index: 1; /* Ensure it is above the background */
  }
  
  .square {
    width: 190px;
    height: 190px;
    border: 4px solid orange;
  }

  .link-icon {
    color: blue;
  }

  .square.square-1 {
  background-image: url('../assets/sturppy.webp'); /* Path to your image */
  background-size: cover; /* Ensures the image covers the box */
  background-position: center; /* Centers the image in the box */
  background-repeat: no-repeat; /* Prevents the image from repeating */
  position: relative; /* For absolute positioning of the textbox */
}

.textbox {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 40%;
  background-color: #d2a075; /* Lightly-colored brown with some transparency */
  display: flex;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;
}

.textbox-icon {
  margin-right: 5px; /* Space between the icon and text */
  margin-bottom: 17px;
  position: absolute;
  margin-left: -15px;
}

.textbox-text {
  font-size: 34px;
  font-weight: bold;
  color: rgb(87, 45, 4); /* White text color for contrast */
  font-family: 'Shadows Into Light', cursive;
  text-decoration-line: underline;
  margin-left: 50px;
  margin-bottom: 20px;
}

  
  .square:nth-child(odd) {
    background-color: #FFE4C4; /* Light color */
  }
  
  .square:nth-child(even) {
    background-color: #CFB095; /* Slightly darker color */
  }
  
  .page-indicator {
  position: absolute;
  top: 81%;
  left: 50%;
  transform: translateX(-50%);
  background-color: #FFFFE0; /* Same as directory header */
  border: 4px solid #8B4513; /* Dark brown border */
  padding: 2px;
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
  padding: 3px;
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
  
.title-cat {
  width: 50px;
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
    width: 30px;
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
    top: 30px;
    left: 50px;
    background-color: #f3bd8e;
    padding: 5px;
    border: 4px solid #391a01;
    display: flex;
    align-items: center;
    color: rgb(87, 45, 4);
    font-size: 30px;
    font-family: 'Shadows Into Light', cursive;
    font-weight: bold;
    box-shadow: 15px 12px 2px rgba(0, 0, 0, 0.6);
    width: 180px;
    height: 100px;
  }
  
  .large-box {
    position: absolute;
    top: 180px;
    left: 50px;
    width: 280px;
    height: 230px;
    background-color: #f3bd8e; /* Less bright yellow background */
    border: 4px solid #391a01;
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgb(87, 45, 4);
    font-family: 'Shadows Into Light', cursive;
    font-weight: bold;
    box-shadow: 30px 12px 2px rgba(0, 0, 0, 0.6);
  }

  .link-icon {
    width: 30px;
  }
  
  .large-box-text {
    font-size: 40px;
  }
  
  .footer-text {
    position: absolute;
    bottom: 20px;
    left: 2px;
    color: white;
    font-size: 19px;
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
    width: 360px;
    position: absolute;
    top: -10px;
  }
  
  .contact-info {
    display: flex;
    justify-content: space-around;
    position: absolute;
    width: 100px;
    margin-top: -240px;
    margin-right: -380px;
  }
  
  .contact-icon {
    width: 40px;
    position: absolute;
    margin-left: 80px;
    margin-top: 230px;
  }
  
  .email-icon {
    width: 50px;
    position: absolute;
    margin-top: 350px;
  }
  
  .contact-info p {
    font-size: 18px;
    color: white;
    margin: 0;
    right: 5px;
    top: 220px;
    position: absolute;
  }
  
  .email-label {
    font-size: 14px;
    color: yellow;
    bottom: 20px;
  }
  
  .email-address {
    font-size: 14px;
    color: yellow;
  }
  
  .cat-paw {
    position: absolute;
    bottom: 0;
    left: 74%;
    transform: translateX(-50%);
    height: 140px;
  }
  }



  </style>
  