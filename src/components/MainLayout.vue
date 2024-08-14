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
          <h2 class="featured-tool-heading">Featured AI Tools</h2>
        </v-col>
      </v-row>
      <v-row class="tool-grid" align="center" justify="center">
        <v-col
          v-for="index in 6"
          :key="'box-' + index"
          cols="auto"
        >
          <v-btn class="tool-box" :style="boxStyles[index - 1]"></v-btn>
        </v-col>
      </v-row>
      <v-img src="../assets/RightLamp.png" class="right-lamp" contain></v-img>
      <v-img src="../assets/SleepCat.png" class="sleeping-cat" contain></v-img>
    </v-container>

    <v-divider class="separator"></v-divider>

    <!-- Third Section -->
    <v-container fluid class="third-section">
      <v-img src="../assets/ThirdBackground.png" class="background" cover></v-img>
      <v-row class="text-center" align="center" justify="center">
        <h2 style="font-family: 'Indie Flower', cursive;">Tag Categories</h2>
      </v-row>
      <v-img src="../assets/TagCatagoriesIcon.png" class="tag-categories-icon" contain height="40"></v-img>
      <v-row class="pick-one" align="center" justify="center">
        <v-img src="../assets/Box.png" class="box-background" contain width="300"></v-img>
        <p style="font-family: 'Shadows Into Light', cursive;">Pick One</p>
        <v-img src="../assets/Sticker.png" class="sticker-icon" contain></v-img>
      </v-row>
      <v-img src="../assets/CatalogIcon.png" class="catalog-icon" contain height="50"></v-img>
      <v-img src="../assets/WalkingCat.png" class="walking-cat" contain></v-img>
    </v-container>

    <v-divider class="separator"></v-divider>

    <!-- Bottom Section -->
    <v-container fluid class="bottom-section">
      <v-img src="../assets/BottomBackground.png" class="background" cover></v-img>
      <v-row class="quick-link" align="center" justify="center">
        <v-img src="../assets/LinkIcon.png" class="link-icon" contain height="40"></v-img>
        <h3 style="font-family: 'Indie Flower', cursive;">Quick Link</h3>
      </v-row>
      <v-row class="contact" align="center" justify="center">
        <v-img src="../assets/ContactBanner.png" class="contact-banner" contain></v-img>
        <v-row class="contact-info" align="center" justify="space-around">
          <v-col cols="auto">
            <v-img src="../assets/ContactIcon.png" class="contact-icon" contain height="30"></v-img>
            <p>Contact</p>
          </v-col>
          <v-col cols="auto">
            <v-img src="../assets/EmailIcon.png" class="email-icon" contain height="30"></v-img>
            <p>Email</p>
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
      boxStyles: [
        { backgroundColor: '#B99976', height: '300px', width: '300px' },
        { backgroundColor: '#E5D3B3', height: '300px', width: '300px' },
        { backgroundColor: '#B99976', height: '300px', width: '300px' },
        { backgroundColor: '#E5D3B3', height: '300px', width: '300px' },
        { backgroundColor: '#B99976', height: '300px', width: '300px' },
        { backgroundColor: '#E5D3B3', height: '300px', width: '300px' },
      ],
    };
  },
  methods: {
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
  font-size: 18px; /* Slightly larger font size */
}

.search-btn {
  margin-left: 10px;
  font-family: 'Shadows Into Light', cursive;
  font-size: 20px; /* Slightly larger font size */
  font-weight: bold; 
}

.featured-tags-header {
  margin-top: 20px;
  text-align: center; 
}

.featured-tags-text {
  font-size: 40px; /* Slightly larger font size */
  font-family: 'Shadows Into Light', cursive;
}

.featured-tags {
  margin-top: 5px; /* Reduced space between text and tags */
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
  height: 450px;
  width: 450px;
}

.left-cat {
  margin-left: -233px; 
}

.right-cat {
  margin-right: -290px; 
}

.second-section {
  height: 100vh;
  background-image: url('~@/assets/SecondBackground.png'); 
  background-position: center;
  position: relative;
}

.left-lamp, .right-lamp {
  position: absolute;
  width: 120px; 
  height: auto;
}

.left-lamp {
  top: 10%;
  left: 10%;
}

.right-lamp {
  top: 10%;
  right: 10%;
}

.featured-tool-box {
  background-color: #ecb07b; 
  padding: 20px;
  border-radius: 15px;
  border: 2px solid #391a01;
  box-shadow: none; 
  margin-top: 25px;
}

.featured-tool-heading {
  font-family: 'Indie Flower', cursive;
  font-size: 36px;
  color: #f5a700; 
  margin: 0;
}

.tool-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px; /* Increased gap */
  margin: 20px 0;
}

.tool-box {
  height: 200px; /* Increased size */
  width: 200px; /* Increased size */
  border-radius: 15px; /* Slightly larger border-radius */
}

.sleeping-cat {
  position: absolute;
  bottom: -70px; /* Moved further down */
  left: 5%; /* Moved a bit more to the left */
  height: 200px; /* Increased size */
}

.third-section {
  height: 300px;
  background-color: #f5f6fa;
}

.tag-categories-icon {
  height: 40px;
  margin-right: 10px;
  vertical-align: middle;
}

.pick-one {
  position: relative;
  margin-top: 20px;
  display: inline-block;
}

.box-background {
  width: 300px;
}

.sticker-icon {
  position: absolute;
  bottom: 10px;
  right: 10px;
  height: 40px;
}

.catalog-icon {
  margin-top: 20px;
  height: 50px;
}

.walking-cat {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  height: 60px;
}

.bottom-section {
  height: 200px;
  background-color: #c8d6e5;
}

.quick-link, .contact {
  margin: 20px 0;
  position: relative;
}

.link-icon {
  height: 40px;
  margin-right: 10px;
  vertical-align: middle;
}

h3 {
  display: inline-block;
  font-size: 24px;
  color: #333;
}

.contact-banner {
  width: 100%;
  height: auto;
  margin: 20px 0;
}

.contact-info {
  display: flex;
  justify-content: space-around;
}

.contact-icon, .email-icon {
  height: 30px;
  margin-right: 10px;
  vertical-align: middle;
}

.contact-info p {
  display: inline-block;
  font-size: 18px;
  color: #333;
}

.cat-paw {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  height: 60px;
}
</style>
