<template>
  <v-app>
    <!-- Top Section -->
    <v-container fluid class="top-section">
      <v-img src="../assets/Top_Background.png" class="background" cover></v-img>
      <v-row class="header" align="center" justify="space-between">
        <v-col class="title-col" cols="auto">
          <v-img src="../assets/TitleCat.png" class="title-cat" contain height="50"></v-img>
          <h1 class="header-title">AI Tools Directory</h1>
        </v-col>
        <v-col class="icons-col" cols="auto">
          <v-row class="top-icons" align="center" justify="center">
            <v-col class="icon-box" cols="auto">
              <v-btn
                class="icon-button back-button"
                @click="navigateBack"
              >
                <v-img src="../assets/BackIcon.png" class="icon" contain></v-img>
                <span class="icon-text">Back</span>
              </v-btn>
            </v-col>
            <v-col class="icon-box" cols="auto">
              <v-btn
                class="icon-button home-button"
                @click="navigateHome"
              >
                <v-img src="../assets/HomeIcon.png" class="icon" contain></v-img>
                <span class="icon-text">Home</span>
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <!-- Slogan Cloud -->
      <v-row class="slogan" align="center" justify="center">
        <v-img src="../assets/SloganCloud.png" class="slogan-cloud" contain></v-img>
        <p class="slogan-text">
          There is an AI tool for everything.
          <br>
          Find the right one for you.
        </p>
      </v-row>

      <!-- Search Bar Section -->
      <v-row class="search-bar" align="center" justify="center">
        <v-col cols="auto">
          <v-text-field
            class="search-input"
            hide-details
            outlined
            dense
            rounded
            :style="{ backgroundColor: '#f7f3e8' }"
          >
          </v-text-field>
        </v-col>
        <v-col cols="auto">
          <v-btn
            class="search-btn"
            :style="{ backgroundColor: '#d0b493', color: 'black' }"
            rounded
            elevation="2"
          >
            Search
          </v-btn>
        </v-col>
      </v-row>

      <!-- Featured Tags Section -->
      <v-row class="featured-tags-header" align="center" justify="center">
        <p class="featured-tags-text">Featured Tags:</p>
      </v-row>
      <v-row class="featured-tags" align="center" justify="center">
        <v-col
          v-for="index in 3"
          :key="'top-' + index"
          cols="auto"
        >
          <v-btn
            class="tag-btn"
            :style="{ backgroundColor: '#edb774', color: 'black', border: '3px solid #a3613a' }"
          >
          </v-btn>
        </v-col>
        <v-col
          v-for="index in 2"
          :key="'bottom-' + index"
          cols="auto"
        >
          <v-btn
            class="tag-btn"
            :style="{ backgroundColor: '#edb774', color: 'black', border: '3px solid #a3613a' }"
          >
          </v-btn>
        </v-col>
      </v-row>

      <v-row class="cats" align="center" justify="space-between">
        <v-img src="../assets/LeftCat.png" class="left-cat" contain></v-img>
        <v-img src="../assets/RightCat.png" class="right-cat" contain></v-img>
      </v-row>
    </v-container>

    <v-divider class="separator"></v-divider>

    <!-- Second Section -->
    <v-container fluid class="second-section">
      <v-img src="../assets/SecondBackground.png" class="background" cover></v-img>
      <v-img src="../assets/LeftLamp.png" class="left-lamp" contain></v-img>
      <v-row class="text-center" align="center" justify="center">
        <v-col cols="auto" class="featured-tool-box">
          <v-row align="center" justify="center">
            <v-img src="../assets/Tool1.png" class="tool-icon" contain height="50"></v-img>
            <h2 class="featured-tool-heading">Featured AI Tools</h2>
            <v-img src="../assets/Tool2.png" class="tool-icon" contain height="50"></v-img>
          </v-row>
        </v-col>
      </v-row>
      <v-row class="tool-grid" align="center" justify="center">
        <v-col
  v-for="index in 6"
  :key="'box-' + index"
  cols="auto"
>
  <v-btn 
    class="tool-box" 
    :style="boxStyles[index - 1]" 
    @click="handleBoxClick(index)"
  >
    <div class="tool-box-content">
      <v-img 
        v-if="index === 1"
        src="../assets/sturppy.webp" 
        class="tool-box-image" 
        @click="redirectToSturppy"
        contain 
      ></v-img>
      <div class="tool-box-text">
        <v-img 
          v-if="index === 1" 
          src="../assets/ToolIcon.png" 
          class="tool-icon" 
          contain 
          height="24"
        ></v-img>
        <span v-if="index === 1" class="tool-title">Sturppy</span>
        <p v-if="index === 1" class="tool-description">
          Sturppy is an AI-driven tool for quick and efficient financial modeling, used by over 5,000 companies globally.
        </p>
      </div>
    </div>
  </v-btn>
</v-col>


      </v-row>
      <v-img src="../assets/RightLamp.png" class="right-lamp" contain></v-img>
      <v-img src="../assets/SleepCat.png" class="sleeping-cat" contain></v-img>
    </v-container>

    <v-divider class="separator second"></v-divider>

    <!-- Third Section -->
    <v-container fluid class="third-section">
      <v-img src="../assets/ThirdBackground.png" class="background" cover></v-img>
      <v-row class="text-center" align="center" justify="center">
        <v-col class="tag-categories-box" cols="auto">
          <v-img src="../assets/TagCatagoriesIcon.png" class="tag-categories-icon" contain height="60"></v-img>
          <h2 class="tag-categories-heading">Tag Categories</h2>
        </v-col>
      </v-row>
      <v-row class="pick-one-container" align="center" justify="flex-end">
        <div class="box-container">
          <v-img src="../assets/Box.png" class="box-background" contain></v-img>
          <div class="pick-one-content">
            <v-img src="../assets/Sticker.png" class="sticker-icon" contain></v-img>
            <p class="pick-one-text">Pick One</p>
          </div>
          <!-- Small Boxes Container -->
          <div class="small-boxes-container">
            <!-- Example of adding multiple boxes with varying sizes -->
            <div v-for="n in 15" :key="'small-box-' + n" class="small-box"></div>
          </div>
        </div>
      </v-row>
      <v-row class="buttons-column" align="center" justify="flex-end">
        <v-col
          v-for="(label, index) in buttonLabels"
          :key="'button-' + index"
          cols="auto"
        >
          <v-btn
            class="button-item"
            :style="{ backgroundColor: '#edb774', color: 'black', border: '3px solid #a3613a', fontFamily: 'Shadows Into Light', fontSize: '16px' }"
          >
            {{ label }}
          </v-btn>
        </v-col>
      </v-row>

      <v-img src="../assets/WalkingCat.png" class="walking-cat" contain></v-img>
      <v-img src="../assets/CatalogIcon.png" class="catalog-icon" contain></v-img>

    </v-container>

    <v-divider class="separator"></v-divider>

    <!-- Bottom Section -->
    <v-container fluid class="bottom-section">
  <v-img src="../assets/BottomBackground.png" class="background" cover></v-img>
  
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
  name: 'MainLayout',
  data() {
    return {
      buttonLabels: [
        "Program/Development---",
        "Design/Creativity",
        "Data management/Analyse",
        "AI/Machine Learning",
        "Marketing/Social Media",
        "Business/Strategy",
        "Multimedia/Production",
        "Chat/Communication"
      ],
      boxStyles: [
        { backgroundColor: '#B99976', height: '200px', width: '300px', border: '2px solid black' },
        { backgroundColor: '#E5D3B3', height: '200px', width: '300px', border: '2px solid black' },
        { backgroundColor: '#B99976', height: '200px', width: '300px', border: '2px solid black' },
        { backgroundColor: '#E5D3B3', height: '200px', width: '300px', border: '2px solid black' },
        { backgroundColor: '#B99976', height: '200px', width: '300px', border: '2px solid black' },
        { backgroundColor: '#E5D3B3', height: '200px', width: '300px', border: '2px solid black' }
      ],
    };
  },
  methods: {
    redirectToSturppy() {
      this.$router.push({ name: 'SturppyPage' });
    },
    navigateBack() {
      // Define navigation logic here
    },
    navigateHome() {
      // Define navigation logic here
    }
  }
};
</script>

<style scoped>
body {
  margin: 0;
  font-family: Arial, sans-serif;
}

.separator {
  border-top: 20px solid #4a2e0d;
  margin: 0;
  position: relative; /* Position relative to ensure correct stacking */
  z-index: 1; /* Ensure separators are on top */
}

.background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.top-section {
  height: 100vh;
  background-image: url('~@/assets/Top_Background.png'); 
  background-size: 120%; 
  background-position: center;
  background-repeat: no-repeat;
  position: relative; 
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

.icon-box {
  background-color: #edb774; 
  border: 3px solid #a3613a;
  border-radius: 5px;
  padding: 5px 10px;
  display: flex;
  align-items: center;
  margin-left: 20px;
  transition: background-color 0.3s, border-color 0.3s; /* Smooth transitions */
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

.slogan {
  position: relative;
  margin-top: 20px; 
}

.slogan-cloud {
  width: 80%;
  max-width: 800px; 
  height: auto;
  margin-top: -36px; 
  margin-left: 51px;
}

.slogan-text {
  position: absolute;
  top: 130px; 
  left: 50%;
  font-family: 'Shadows Into Light', cursive;
  transform: translateX(-50%);
  font-size: 41px; 
  color: white;
  width: 90%; 
  text-align: center;
  line-height: 1.4; 
}

.search-bar {
  position: relative;
  margin-top: -135px;
}

.search-input {
  width: 100%;
  max-width: 400px;
  font-size: 18px; 
}

.search-btn {
  margin-left: 10px;
  font-family: 'Shadows Into Light', cursive;
  font-size: 20px; 
  font-weight: bold; 
}

.featured-tags-header {
  margin-top: 20px;
  text-align: center; 
}

.featured-tags-text {
  font-size: 40px; 
  font-family: 'Shadows Into Light', cursive;
}

.featured-tags {
  margin-top: 5px; 
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.tag-btn {
  background-color: #edb774; 
  color: black;
  height: 60px; 
  width: 130px; 
  margin: 5px;
  border-radius: 15px;
  font-size: 20px; 
  font-family: 'Shadows Into Light', cursive;
  border: 5px solid #a3613a; 
}

.featured-tags > v-col:nth-child(-n+3) {
  margin-bottom: 10px;
}

.cats {
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 20px; 
}

.left-cat, .right-cat {
  height: 420px; /* Reduced size for better visibility */
  width: 420px; /* Reduced size for better visibility */
  margin-top: -150px; /* Move cats up to reveal separators */
}

.left-cat {
  margin-left: -260px; 
}

.right-cat {
  margin-right: -320px; 
}

.second-section {
  height: 100vh;
  background-image: url('~@/assets/SecondBackground.png'); 
  background-position: center;
  position: relative;
}

.left-lamp, .right-lamp {
  position: absolute;
  width: 100px; 
  height: auto;
  box-shadow: none; 
}

.left-lamp {
  top: 0%;
  left: 10%;
}

.right-lamp {
  top: 0%;
  right: 10%;
}

.featured-tool-box {
  background-color: #f3bd8e; 
  padding: 20px;
  border: 2px solid #391a01;
  box-shadow: none; 
  margin-top: 25px;
  border-radius: 0; 
}

.featured-tool-heading {
  font-family: 'Indie Flower', cursive;
  font-size: 46px;
  color: #9d6b00; 
  font-weight: bold;
  margin: 0;
}

.tool-icon {
  height: 40px;
}

.tool-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0px; /* Adjusted gap between boxes */
  margin: 80px auto; /* Center horizontally */
  max-width: 1200px; /* Restrict width to center properly */
  margin-left: 200px;
}

.tool-box {
  height: 200px;
  width: 200px;
  border-radius: 0;
  border: 2px solid black;
  position: relative;
  overflow: hidden;
}

.tool-box-content {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
}

.tool-box-image {
  height: 100%;
  width: 38%;
  left: 31%;
  object-fit: cover;
}

.tool-box-text {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  text-align: center;
  z-index: 1; /* Ensure text is above the image */
}

.tool-title {
  font-family: 'Shadows Into Light', cursive;
  font-size: 18px;
  color: black;
  margin-bottom: 5px;
}

.tool-description {
  font-size: 12px; /* Adjust as needed */
  color: black;
  margin-top: 5px;
  padding: 0 10px;
}

.separator.second {
  position: relative;
  z-index: 1; 
}

.sleeping-cat {
  position: absolute;
  bottom: -80px; 
  left: 1%; 
  height: 200px; 
  z-index: 2;
}

.third-section {
  height: 100vh; /* Full viewport height */
  background-image: url('~@/assets/ThirdBackground.png');
  background-size: contain; /* Ensure the entire image is visible */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Avoid repeating the image */
  background-color: #f3bd8e; /* Fallback color to fill the space not covered by the image */
  position: relative;
  padding-top: 20px; /* Adjust padding to accommodate the "Tag Categories" bar */
}
.buttons-column {
  flex-direction: column;
  align-items: flex-end; 
  position: absolute;
  width: 245px;
  top: 70px; 
  left: 420px;
  height: calc(100vh - 40px); 
}

.button-item {
  width: 100%;
  box-sizing: border-box; 
  padding: 0 3px; 
  font-weight: bold;
  overflow: hidden; 
}

.button-item .v-btn {
  width: 100%; 
  box-sizing: border-box; 
  overflow: hidden;
  white-space: nowrap; 
}

.button-item .v-btn img {
  margin-right: 5px; 
}

.button-sticker {
  height: 24px; 
}

.box-container {
  position: relative;
  margin-right: 260px; 
}

.tag-categories-box {
  background-color: #f3bd8e; 
  padding: 10px;
  border: 2px solid #391a01;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  max-width: 1200px;
}

.tag-categories-icon {
  height: 60px;
  margin-right: 10px;
}

.tag-categories-heading {
  font-family: 'Indie Flower', cursive;
  font-size: 36px;
  color: #9d6b00; 
  font-weight: bold;
  margin: 0;
}

.pick-one-container {
  position: relative;
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
}

.box-container {
  position: relative;
  margin-right: 420px;
  width: 460px; 
}

.box-background {
  height: calc(100% + 15px); 
  width: auto; 
}

.small-boxes-container {
  position: absolute;
  top: 30%;
  left: 10%;
  width: 80%;
  height: 50%;
  pointer-events: none; /* Allow clicks to pass through */
  z-index: 5;
}

.small-box {
  position: absolute;
  background-color: #f3bd8e; /* Match background color of Tag Categories box */
  border: 3px solid #e8940c; /* Match border color of Tag Categories box */
  border-radius: 10px;
  width: 60px;
  height: 20px;
  box-sizing: border-box;
  /* Adjust sizes and positions as needed */
}

/* Add variations for box sizes and positions */
.small-box:nth-child(1) {
  top: 30%;
  left: 10%;
  width: 80px;
  height: 35px;
}

/* Box 2 */
.small-box:nth-child(2) {
  top: 28%;
  left: 100%;
  width: 73px;
  height: 35px;
  transform: translateX(-100%);
}

/* Box 3 */
.small-box:nth-child(3) {
  top: 52%;
  left: 12%;
  width: 100px;
  height: 35px;
}

/* Box 4 */
.small-box:nth-child(4) {
  top: 34%;
  left: 35%;
  width: 70px;
  height: 37px;
}

/* Box 5 */
.small-box:nth-child(5) {
  top: 55%;
  left: 45%;
  width: 90px;
  height: 34px;
}

/* Box 6 */
.small-box:nth-child(6) {
  top: 70%;
  left: 23%;
  width: 80px;
  height: 35px;
}

/* Box 7 */
.small-box:nth-child(7) {
  top: 65%;
  left: 83%;
  width: 85px;
  height: 33px;
}

/* Box 8 */
.small-box:nth-child(8) {
  top: 108%;
  left: 10%;
  width: 70px;
  height: 37px;
}

/* Box 9 */
.small-box:nth-child(9) {
  top: 78%;
  left: 53%;
  width: 90px;
  height: 35px;
}

/* Box 10 */
.small-box:nth-child(10) {
  top: 28%;
  left: 55%;
  width: 75px;
  height: 34px;
}

/* Box 11 */
.small-box:nth-child(11) {
  top: 45%;
  left: 72%;
  width: 80px;
  height: 35px;
}

/* Box 12 */
.small-box:nth-child(12) {
  top: 85%;
  left: 85%;
  width: 65px;
  height: 34px;
}

/* Box 13 */
.small-box:nth-child(13) {
  top: 94%;
  left: 34%;
  width: 85px;
  height: 34px;
}

/* Box 14 */
.small-box:nth-child(14) {
  top: 115%;
  left: 50%;
  width: 80px;
  height: 35px;
}

/* Box 15 */
.small-box:nth-child(15) {
  top: 103%;
  left: 75%;
  width: 90px;
  height: 33px;
}

.pick-one-content {
  position: absolute;
  top: 15px; 
  left: 15px; 
  z-index: 10; 
}

.sticker-icon {
  height: 70px; /* Adjust size if needed */
  right: 130px;
}

.pick-one-text {
  font-family: 'Shadows Into Light', cursive;
  font-size: 36px;
  font-weight: bold;
  color: rgb(87, 45, 4);
  position: absolute;
  top: 5px; /* Adjust to fit within Box.png */
  left: 63px; /* Adjust to fit within Box.png */
  z-index: 20; /* Ensure it is above Sticker.png */
}

.walking-cat {
  position: absolute;
  bottom: 13px; /* Adjust as needed */
  right: 130px;
  height: 190px; /* Bigger size */
}

.catalog-icon {
  position: absolute;
  top: 98px; /* Adjust as needed */
  left: 587px;
  height: 26px; /* Bigger size */
}

.bottom-section {
  height: 100vh;
  background-image: url('~@/assets/BottomBackground.png');
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
  top: 250px; /* Adjust as needed to position below the quick links box */
  left: 50px;
  width: 400px; /* Width to make it square-like */
  height: 300px; /* Height to match width */
  background-color: #f3bd8e; 
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
  bottom: 20px; /* Position close to bottom */
  left: 50px; /* Position close to the right */
  color: white;
  font-size: 28px;
  font-family: monospace;
}

.footer-text p {
  margin: 0; /* Remove default margin */
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

.email-text {
  color: gold;
}

.cat-paw {
  position: absolute;
  bottom: 0;
  left: 58%;
  transform: translateX(-50%);
  height: 170px;
}


/* Responsive Styles */
@media (max-width: 1200px) {
  .header-title {
    font-size: 35px;
  }

  .icon-text {
    font-size: 20px;
  }

  .slogan-text {
    font-size: 36px;
  }

  .search-input {
    max-width: 300px;
    font-size: 16px;
  }

  .search-btn {
    font-size: 18px;
  }

  .featured-tags-text {
    font-size: 35px;
  }

  .tag-btn {
    height: 50px;
    width: 120px;
    font-size: 18px;
  }

  .left-cat, .right-cat {
    height: 300px;
    width: 300px;
  }

  .tool-box {
  height: 200px; 
  width: 200px; 
  border-radius: 0;
  border: 2px solid black; 
  position: relative; /* Ensure positioning works correctly */
  overflow: hidden; /* Hide anything overflowing */
}

.tool-box-content {
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end; /* Push content to the bottom */
}

.tool-box-image {
  height: 100%;
  width: 100%;
  object-fit: cover; /* Cover the square */
}

.tool-box-text {
  display: flex;
  align-items: center;
  padding: 10px; /* Add some padding */
  background-color: rgba(255, 255, 255, 0.8); /* Semi-transparent background */
  position: absolute;
  bottom: 0;
  width: 100%;
  box-sizing: border-box;
}

.tool-icon {
  margin-right: 10px;
}

.tool-title {
  font-family: 'Shadows Into Light', cursive;
  font-size: 18px;
  color: black;
  margin-right: 10px;
}

.tool-description {
  font-size: 12px; /* Smaller font size for description */
  color: black;
  margin-top: 5px;
  padding: 0 10px;
}


  .tool-grid {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
}

@media (max-width: 768px) {
  .header-title {
    font-size: 30px;
  }

  .icon-text {
    font-size: 18px;
  }

  .slogan-text {
    font-size: 30px;
  }

  .search-input {
    max-width: 250px;
    font-size: 14px;
  }

  .search-btn {
    font-size: 16px;
  }

  .featured-tags-text {
    font-size: 30px;
  }

  .tag-btn {
    height: 40px;
    width: 100px;
    font-size: 16px;
  }

  .left-cat, .right-cat {
    height: 250px;
    width: 250px;
  }

  .tool-box {
    height: 150px;
    width: 150px;
  }
}

@media (max-width: 480px) {
  .header-title {
    font-size: 25px;
  }

  .icon-text {
    font-size: 16px;
  }

  .slogan-text {
    font-size: 24px;
  }

  .search-input {
    max-width: 200px;
    font-size: 12px;
  }

  .search-btn {
    font-size: 14px;
  }

  .featured-tags-text {
    font-size: 24px;
  }

  .tag-btn {
    height: 30px;
    width: 80px;
    font-size: 14px;
  }

  .left-cat, .right-cat {
    height: 200px;
    width: 200px;
  }

  .tool-box {
    height: 120px;
    width: 120px;
  }
}
</style>
