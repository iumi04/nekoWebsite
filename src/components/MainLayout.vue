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
            :style="{ backgroundColor: '#edb774', color: 'black', border: '0.1875rem solid #a3613a' }"
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
            :style="{ backgroundColor: '#edb774', color: 'black', border: '0.1875rem solid #a3613a' }"
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
            <h2 class="featured-tool-heading" @click="redirectToDirectory">Featured AI Tools</h2>
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
            :style="{ backgroundColor: '#edb774', color: 'black', border: '0.1875rem solid #a3613a', fontFamily: 'Shadows Into Light', fontSize: '1rem' }"
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
        <p style="font-size: 3.9375rem; position: absolute; margin-left: 42.1875rem; margin-top: 0.4375rem; font-family: 'Indie Flower', cursive;"><u>Contact</u></p>
      </v-col>
      <v-col cols="auto">
        <v-img src="../assets/EmailIcon.png" class="email-icon" contain height="35"></v-img>
        <p style="font-size: 2.125rem; position: absolute; margin-left: -4.375rem; margin-top: 8.75rem; color: yellow; font-family: 'Indie Flower', cursive;">Email :</p>
        <p style="font-size: 1.5rem; position: absolute; margin-left: -7.5rem; margin-top: 12.5rem; color: yellow; font-family: 'Indie Flower', cursive;"><u>thomas@edison.ai</u></p>
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
        { backgroundColor: '#B99976', height: '12.5rem', width: '18.75rem', border: '0.125rem solid black' },
        { backgroundColor: '#E5D3B3', height: '12.5rem', width: '18.75rem', border: '0.125rem solid black' },
        { backgroundColor: '#B99976', height: '12.5rem', width: '18.75rem', border: '0.125rem solid black' },
        { backgroundColor: '#E5D3B3', height: '12.5rem', width: '18.75rem', border: '0.125rem solid black' },
        { backgroundColor: '#B99976', height: '12.5rem', width: '18.75rem', border: '0.125rem solid black' },
        { backgroundColor: '#E5D3B3', height: '12.5rem', width: '18.75rem', border: '0.125rem solid black' }
      ],
    };
  },
  methods: {
    redirectToSturppy() {
      this.$router.push({ name: 'SturppyPage' });
    },
    redirectToDirectory() {
      this.$router.push({ name: 'DirectoryPage' });
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
  border-top: 1.25rem solid #4a2e0d;
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
  top: 0.625rem; 
  left: 0.625rem; 
  right: 1.25rem;
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
  font-size: 2.5rem;
  color: black;
  margin-left: 1.25rem;
}

.icons-col {
  display: flex;
  align-items: center;
}

.icon-box {
  background-color: #edb774; 
  border: 0.1875rem solid #a3613a;
  border-radius: 0.3125rem;
  padding: 0.3125rem 0.625rem;
  display: flex;
  align-items: center;
  margin-left: 1.25rem;
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
  width: 1.875rem;
}

.icon-text {
  font-size: 1.375rem; 
  margin-left: 0.3125rem;
  font-family: 'Shadows Into Light', cursive;
  font-weight: bold;
}

.slogan {
  position: relative;
  margin-top: 1.25rem; 
}

.slogan-cloud {
  width: 80%;
  max-width: 50rem; 
  height: auto;
  margin-top: -2.25rem; 
  margin-left: 3.1875rem;
}

.slogan-text {
  position: absolute;
  top: 8.125rem; 
  left: 50%;
  font-family: 'Shadows Into Light', cursive;
  transform: translateX(-50%);
  font-size: 2.5625rem; 
  color: white;
  width: 90%; 
  text-align: center;
  line-height: 1.4; 
}

.search-bar {
  position: relative;
  margin-top: -8.4375rem;
}

.search-input {
  width: 100%;
  max-width: 25rem;
  font-size: 1.125rem; 
}

.search-btn {
  margin-left: 0.625rem;
  font-family: 'Shadows Into Light', cursive;
  font-size: 1.25rem; 
  font-weight: bold; 
}

.featured-tags-header {
  margin-top: 1.25rem;
  text-align: center; 
}

.featured-tags-text {
  font-size: 2.5rem; 
  font-family: 'Shadows Into Light', cursive;
}

.featured-tags {
  margin-top: 0.3125rem; 
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.tag-btn {
  background-color: #edb774; 
  color: black;
  height: 3.75rem; 
  width: 8.125rem; 
  margin: 0.3125rem;
  border-radius: 0.9375rem;
  font-size: 1.25rem; 
  font-family: 'Shadows Into Light', cursive;
  border: 0.3125rem solid #a3613a; 
}

.featured-tags > v-col:nth-child(-n+3) {
  margin-bottom: 0.625rem;
}

.cats {
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 1.25rem; 
}

.left-cat, .right-cat {
  height: 26.25rem; /* Reduced size for better visibility */
  width: 26.25rem; /* Reduced size for better visibility */
  margin-top: -9.375rem; /* Move cats up to reveal separators */
}

.left-cat {
  margin-left: -16.25rem; 
}

.right-cat {
  margin-right: -20rem; 
}

.second-section {
  height: 100vh;
  background-image: url('~@/assets/SecondBackground.png'); 
  background-position: center;
  position: relative;
}

.left-lamp, .right-lamp {
  position: absolute;
  width: 6.25rem; 
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
  padding: 1.25rem;
  border: 0.125rem solid #391a01;
  box-shadow: none; 
  margin-top: 1.5625rem;
  border-radius: 0; 
}

.featured-tool-heading {
  font-family: 'Indie Flower', cursive;
  font-size: 2.875rem;
  color: #9d6b00; 
  font-weight: bold;
  margin: 0;
}

.tool-icon {
  height: 2.5rem;
}

.tool-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0rem; /* Adjusted gap between boxes */
  margin: 5rem auto; /* Center horizontally */
  max-width: 75rem; /* Restrict width to center properly */
  margin-left: 12.5rem;
}

.tool-box {
  height: 12.5rem;
  width: 12.5rem;
  border-radius: 0;
  border: 0.125rem solid black;
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
  padding: 0.625rem;
  box-sizing: border-box;
  text-align: center;
  z-index: 1; /* Ensure text is above the image */
}

.tool-title {
  font-family: 'Shadows Into Light', cursive;
  font-size: 1.125rem;
  color: black;
  margin-bottom: 0.3125rem;
}

.tool-description {
  font-size: 0.75rem; /* Adjust as needed */
  color: black;
  margin-top: 0.3125rem;
  padding: 0 0.625rem;
}

.separator.second {
  position: relative;
  z-index: 1; 
}

.sleeping-cat {
  position: absolute;
  bottom: -5rem; 
  left: 1%; 
  height: 12.5rem; 
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
  padding-top: 1.25rem; /* Adjust padding to accommodate the "Tag Categories" bar */
}
.buttons-column {
  flex-direction: column;
  align-items: flex-end; 
  position: absolute;
  width: 15.3125rem;
  top: 4.375rem; 
  left: 26.25rem;
  height: calc(100vh - 2.5rem); 
}

.button-item {
  width: 100%;
  box-sizing: border-box; 
  padding: 0 0.1875rem; 
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
  margin-right: 0.3125rem; 
}

.button-sticker {
  height: 1.5rem; 
}

.box-container {
  position: relative;
  margin-right: 16.25rem; 
}

.tag-categories-box {
  background-color: #f3bd8e; 
  padding: 0.625rem;
  border: 0.125rem solid #391a01;
  border-radius: 0.3125rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  max-width: 75rem;
}

.tag-categories-icon {
  height: 3.75rem;
  margin-right: 0.625rem;
}

.tag-categories-heading {
  font-family: 'Indie Flower', cursive;
  font-size: 2.25rem;
  color: #9d6b00; 
  font-weight: bold;
  margin: 0;
}

.pick-one-container {
  position: relative;
  margin-top: 1.25rem;
  display: flex;
  justify-content: flex-end;
}

.box-container {
  position: relative;
  margin-right: 26.25rem;
  width: 28.75rem; 
}

.box-background {
  height: calc(100% + 0.9375rem); 
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
  border: 0.1875rem solid #e8940c; /* Match border color of Tag Categories box */
  border-radius: 0.625rem;
  width: 3.75rem;
  height: 1.25rem;
  box-sizing: border-box;
  /* Adjust sizes and positions as needed */
}

/* Add variations for box sizes and positions */
.small-box:nth-child(1) {
  top: 30%;
  left: 10%;
  width: 5rem;
  height: 2.1875rem;
}

/* Box 2 */
.small-box:nth-child(2) {
  top: 28%;
  left: 100%;
  width: 4.5625rem;
  height: 2.1875rem;
  transform: translateX(-100%);
}

/* Box 3 */
.small-box:nth-child(3) {
  top: 52%;
  left: 12%;
  width: 6.25rem;
  height: 2.1875rem;
}

/* Box 4 */
.small-box:nth-child(4) {
  top: 34%;
  left: 35%;
  width: 4.375rem;
  height: 2.3125rem;
}

/* Box 5 */
.small-box:nth-child(5) {
  top: 55%;
  left: 45%;
  width: 5.625rem;
  height: 2.125rem;
}

/* Box 6 */
.small-box:nth-child(6) {
  top: 70%;
  left: 23%;
  width: 5rem;
  height: 2.1875rem;
}

/* Box 7 */
.small-box:nth-child(7) {
  top: 65%;
  left: 83%;
  width: 5.3125rem;
  height: 2.0625rem;
}

/* Box 8 */
.small-box:nth-child(8) {
  top: 108%;
  left: 10%;
  width: 4.375rem;
  height: 2.3125rem;
}

/* Box 9 */
.small-box:nth-child(9) {
  top: 78%;
  left: 53%;
  width: 5.625rem;
  height: 2.1875rem;
}

/* Box 10 */
.small-box:nth-child(10) {
  top: 28%;
  left: 55%;
  width: 4.6875rem;
  height: 2.125rem;
}

/* Box 11 */
.small-box:nth-child(11) {
  top: 45%;
  left: 72%;
  width: 5rem;
  height: 2.1875rem;
}

/* Box 12 */
.small-box:nth-child(12) {
  top: 85%;
  left: 85%;
  width: 4.0625rem;
  height: 2.125rem;
}

/* Box 13 */
.small-box:nth-child(13) {
  top: 94%;
  left: 34%;
  width: 5.3125rem;
  height: 2.125rem;
}

/* Box 14 */
.small-box:nth-child(14) {
  top: 115%;
  left: 50%;
  width: 5rem;
  height: 2.1875rem;
}

/* Box 15 */
.small-box:nth-child(15) {
  top: 103%;
  left: 75%;
  width: 5.625rem;
  height: 2.0625rem;
}

.pick-one-content {
  position: absolute;
  top: 0.9375rem; 
  left: 0.9375rem; 
  z-index: 10; 
}

.sticker-icon {
  height: 4.375rem; /* Adjust size if needed */
  right: 8.125rem;
}

.pick-one-text {
  font-family: 'Shadows Into Light', cursive;
  font-size: 2.25rem;
  font-weight: bold;
  color: rgb(87, 45, 4);
  position: absolute;
  top: 0.3125rem; /* Adjust to fit within Box.png */
  left: 3.9375rem; /* Adjust to fit within Box.png */
  z-index: 20; /* Ensure it is above Sticker.png */
}

.walking-cat {
  position: absolute;
  bottom: 0.8125rem; /* Adjust as needed */
  right: 8.125rem;
  height: 11.875rem; /* Bigger size */
}

.catalog-icon {
  position: absolute;
  top: 6.125rem; /* Adjust as needed */
  left: 36.6875rem;
  height: 1.625rem; /* Bigger size */
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
  top: 3.125rem;
  left: 3.125rem;
  background-color: #f3bd8e; 
  padding: 0.625rem;
  border: 0.25rem solid #391a01; 
  display: flex;
  align-items: center;
  color: rgb(87, 45, 4);
  font-size: 2.5rem;
  font-family: 'Shadows Into Light', cursive;
  font-weight: bold;
  box-shadow: 0.9375rem 0.75rem 0.125rem rgba(0, 0, 0, 0.6);
}

.large-box {
  position: absolute;
  top: 15.625rem; /* Adjust as needed to position below the quick links box */
  left: 3.125rem;
  width: 25rem; /* Width to make it square-like */
  height: 18.75rem; /* Height to match width */
  background-color: #f3bd8e; 
  border: 0.25rem solid #391a01; 
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgb(87, 45, 4);
  font-size: 2.5rem;
  font-family: 'Shadows Into Light', cursive;
  font-weight: bold;
  box-shadow: 1.875rem 0.75rem 0.125rem rgba(0, 0, 0, 0.6);
}

.large-box-text {
  font-size: 2.5rem;
}

.footer-text {
  position: absolute;
  bottom: 1.25rem; /* Position close to bottom */
  left: 3.125rem; /* Position close to the right */
  color: white;
  font-size: 1.75rem;
  font-family: monospace;
}

.footer-text p {
  margin: 0; /* Remove default margin */
}

.contact {
  margin: 1.25rem 0;
  position: relative;
}

.contact-banner {
  width: 32.5rem;
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
  height: 3.125rem;
  position: absolute;
  margin-left: 37.5rem;
  margin-top: 1.25rem;
}

.email-icon {
  height: 3.125rem;
  position: absolute;
  margin-left: -9.0625rem;
  margin-top: 9.1875rem;
}

.contact-info p {
  font-size: 1.125rem;
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
  height: 10.625rem;
}


/* Responsive Styles */
@media (max-width: 75rem) {
  .header-title {
    font-size: 2.1875rem;
  }

  .icon-text {
    font-size: 1.25rem;
  }

  .slogan-text {
    font-size: 2.25rem;
  }

  .search-input {
    max-width: 18.75rem;
    font-size: 1rem;
  }

  .search-btn {
    font-size: 1.125rem;
  }

  .featured-tags-text {
    font-size: 2.1875rem;
  }

  .tag-btn {
    height: 3.125rem;
    width: 7.5rem;
    font-size: 1.125rem;
  }

  .left-cat, .right-cat {
    height: 18.75rem;
    width: 18.75rem;
  }

  .tool-box {
  height: 12.5rem; 
  width: 12.5rem; 
  border-radius: 0;
  border: 0.125rem solid black; 
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
  padding: 0.625rem; /* Add some padding */
  background-color: rgba(255, 255, 255, 0.8); /* Semi-transparent background */
  position: absolute;
  bottom: 0;
  width: 100%;
  box-sizing: border-box;
}

.tool-icon {
  margin-right: 0.625rem;
}

.tool-title {
  font-family: 'Shadows Into Light', cursive;
  font-size: 1.125rem;
  color: black;
  margin-right: 0.625rem;
}

.tool-description {
  font-size: 0.75rem; /* Smaller font size for description */
  color: black;
  margin-top: 0.3125rem;
  padding: 0 0.625rem;
}


  .tool-grid {
    grid-template-columns: repeat(auto-fit, minmax(9.375rem, 1fr));
  }
}

@media (max-width: 48rem) {
  .header-title {
    font-size: 1.875rem;
  }

  .icon-text {
    font-size: 1.125rem;
  }

  .slogan-text {
    font-size: 1.875rem;
  }

  .search-input {
    max-width: 15.625rem;
    font-size: 0.875rem;
  }

  .search-btn {
    font-size: 1rem;
  }

  .featured-tags-text {
    font-size: 1.875rem;
  }

  .tag-btn {
    height: 2.5rem;
    width: 6.25rem;
    font-size: 1rem;
  }

  .left-cat, .right-cat {
    height: 15.625rem;
    width: 15.625rem;
  }

  .tool-box {
    height: 9.375rem;
    width: 9.375rem;
  }
}

@media (max-width: 30rem) {
  .header-title {
    font-size: 1.5625rem;
  }

  .icon-text {
    font-size: 1rem;
  }

  .slogan-text {
    font-size: 1.5rem;
  }

  .search-input {
    max-width: 12.5rem;
    font-size: 0.75rem;
  }

  .search-btn {
    font-size: 0.875rem;
  }

  .featured-tags-text {
    font-size: 1.5rem;
  }

  .tag-btn {
    height: 1.875rem;
    width: 5rem;
    font-size: 0.875rem;
  }

  .left-cat, .right-cat {
    height: 12.5rem;
    width: 12.5rem;
  }

  .tool-box {
    height: 7.5rem;
    width: 7.5rem;
  }
}
</style>
