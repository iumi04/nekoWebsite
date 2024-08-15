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
  <v-btn class="tool-box" :style="boxStyles[index - 1]">
    <div class="tool-box-content">
      <v-img 
        v-if="index === 1"
        src="../assets/sturppy.webp" 
        class="tool-box-image" 
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
        </div>
      </v-row>
      <v-row class="buttons-row" align="center" justify="center">
        <v-col
          v-for="index in 8"
          :key="'button-' + index"
          cols="auto"
        >
          <v-btn
            class="button-item"
            :style="{ backgroundColor: '#edb774', color: 'black', border: '3px solid #a3613a' }"
          >
            Button {{ index }}
          </v-btn>
        </v-col>
      </v-row>
      <v-img src="../assets/WalkingCat.png" class="walking-cat" contain></v-img>
      <v-img src="../assets/CatalogIcon.png" class="catalog-icon" contain height="50"></v-img>
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
        { backgroundColor: '#B99976', height: '200px', width: '300px', border: '2px solid black' }, // Increased size
        { backgroundColor: '#E5D3B3', height: '200px', width: '300px', border: '2px solid black' }, // Increased size
        { backgroundColor: '#B99976', height: '200px', width: '300px', border: '2px solid black' }, // Increased size
        { backgroundColor: '#E5D3B3', height: '200px', width: '300px', border: '2px solid black' }, // Increased size
        { backgroundColor: '#B99976', height: '200px', width: '300px', border: '2px solid black' }, // Increased size
        { backgroundColor: '#E5D3B3', height: '200px', width: '300px', border: '2px solid black' }  // Increased size
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

.buttons-row {
  margin-top: 20px;
  margin-bottom: 20px;
}

.button-item {
  height: 50px;
  width: 150px;
  margin: 5px;
  border-radius: 15px;
  font-size: 18px;
  font-family: 'Shadows Into Light', cursive;
  border: 3px solid #a3613a;
}

.tag-categories-box {
  background-color: #f3bd8e; /* Light brown box color */
  padding: 15px;
  border: 2px solid #391a01;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  max-width: 1200px; /* Same width as Featured AI Tools */
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
  margin-right: 440px;
  width: 470px; 
}

.box-background {
  width: 100%; /* Adjust the image to fit the container */
  height: auto;
}

.pick-one-content {
  position: absolute;
  top: 15px; /* Adjust top position */
  left: 15px; /* Adjust left position */
  z-index: 10; /* Ensure text is above Sticker.png */
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
  height: 150px; /* Bigger size */
}

.catalog-icon {
  position: absolute;
  top: 20px;
  left: 20px;
  height: 50px;
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
