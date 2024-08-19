<template>
  <v-app>
    <v-container fluid class="top-section">
      <!-- Background Image -->
      <v-img src="../assets/BackGround.png" class="background" cover></v-img>
      
      <!-- Blackboard Image -->
      <v-img src="../assets/BlackBoard.png" class="blackboard" contain></v-img>

      <!-- Sturppy Image and Sections -->
      <v-row class="sturppy-image-row" align="flex-start" justify="start">
        <v-col class="sturppy-image-col" cols="auto">
          <v-img src="../assets/sturppy.webp" class="sturppy-image" contain></v-img>
        </v-col>

        <v-col class="tags-link-section" cols="auto">
          <!-- Tags Section -->
          <div class="tags-section">
            <h2 class="tags-heading">Tags</h2>
            <v-row class="tags" align="center">
              <v-col class="tag-box" cols="auto">
                <v-img src="../assets/TagIcon.png" class="tag-icon" contain></v-img>
                <div class="tag-text-box">
                  <span class="tag-text">Productivity</span>
                </div>
              </v-col>
              <v-col class="tag-box" cols="auto">
                <v-img src="../assets/TagIcon.png" class="tag-icon" contain></v-img>
                <div class="tag-text-box">
                  <span class="tag-text" style="margin-right: 3.125rem; margin-top: 1.875rem;">Finance</span>
                </div>
              </v-col>
            </v-row>
          </div>

          <!-- Link Section -->
          <div class="link-section">
            <h2 class="link-heading">Link</h2>
            <a href="http://www.sturppy.com/" target="_blank" class="link-url">http://www.sturppy.com/</a>
          </div>
        </v-col>
      </v-row>

      <!-- Description Section -->
      <v-row class="description-section" align="center" justify="start">
        <v-col cols="auto">
          <h2 class="description-heading">Description</h2>
          <p class="description-text">
            Sturppy is designed for startups and growing businesses to create investor-ready<br>
            financial models quickly, without needing prior financial expertise. It offers a range of <br>
            features including customizable templates, real-time data integration, and an AI CFO for <br>
            more advanced business insights. Over 5,000 companies in 98 countries use Sturppy for <br>
            smart financial modeling and forecasting. Whether you are just starting or scaling up, ditch <br>
            Excel and move faster with Sturppy.<br>
          </p>
        </v-col>
      </v-row>

      <!-- Sturppy Box -->
      <v-row class="sturppy-box" align="center" justify="center">
        <v-col cols="auto">
          <v-card class="sturppy-card" outlined>
            <v-card-title class="sturppy-title">
              <v-img src="../assets/TitleIcon.png" class="sturppy-icon" contain></v-img>
              <span class="sturppy-heading">Sturppy</span>
            </v-card-title>
          </v-card>
        </v-col>
      </v-row>

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

      <!-- Bottom Left Images -->
      <div class="bottom-left-images">
        <v-img src="../assets/Cat.png" class="cat-image" contain></v-img>
        <v-img src="../assets/Ball.png" class="ball-image" contain></v-img>
      </div>
    </v-container>

    <v-divider class="separator"></v-divider>

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
  name: 'SturppyPage',
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

.blackboard {
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  max-width: 100rem;
  z-index: 1; /* Lower z-index to stay behind other content */
}

.sturppy-box {
  position: absolute;
  top: 7%;
  left: 50%;
  transform: translateX(-50%);
}

.sturppy-card {
  background-color: #f3bd8e;
  color: #9d6b00;
  border: 0.3125rem solid #391a01;
  border-radius: 0.3125rem;
  padding: 0.3125rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0.25rem 0.375rem rgba(0, 0, 0, 0.1);
}

.sturppy-title {
  font-family: 'Indie Flower', cursive;
  font-size: 2.875rem;
  color: #4a2e0d;
  font-weight: bold;
  margin: 0;
  text-decoration: underline;
  margin-right: 1.875rem;
}

.sturppy-icon {
  height: 4.375rem;
  margin-left: -1.5625rem;
}

.sturppy-image-row {
  position: absolute;
  top: 20%; /* Adjust as needed */
  left: 10%; /* Adjust as needed */
  display: flex;
  align-items: flex-start;
  z-index: 2; /* Higher z-index to be on top of the blackboard */
}

.sturppy-image {
  border: 0.3125rem solid #f3bd8e; /* Beige border */
  border-radius: 0.3125rem;
  width: 50rem; /* Larger size */
  margin-top: -1.875rem;
  margin-left: 2.3125rem;
  height: auto; /* Maintain aspect ratio */
}

.sturppy-image-col {
  margin-right: 1.25rem; /* Space between image and sections */
}

.tags-link-section {
  display: flex;
  flex-direction: column;
  margin-left: 1.25rem; /* Space between image and sections */
  z-index: 2; /* Higher z-index to be on top of the blackboard */
}

.tags-section {
  margin-bottom: 1.25rem; /* Space between tags and links */
}

.tags-heading {
  font-size: 3.375rem;
  font-family: 'Shadows Into Light', cursive;
  text-decoration-line: underline;  
  font-weight: bold;
  color: #b98004; 
  margin-bottom: 0.625rem;
}

.tags {
  display: flex;
  flex-direction: column;
}

.tag-box {
  display: flex;
  align-items: center;
  margin-bottom: 0.625rem;
  background-color: #f5a623; /* More orange background */
  border: 0.25rem solid #f3bd8e;
  border-radius: 0.3125rem;
  padding: 0.3125rem;
  margin-right: 4.375rem;
}

.tag-icon {
  height: 2.5rem; /* Adjust size as needed */
  margin-right: 0.625rem; /* Space between icon and text */
}

.tag-text-box {
  background-color: transparent; /* No additional background for text box */
}

.tag-text {
  font-size: 1.75rem;
  font-weight: bold;
  font-family: 'Indie Flower';
  color: #4a2e0d; /* Darker text color */
}

.link-section {
  margin-top: 1.25rem;
}

.link-heading {
  font-size: 3.375rem;
  font-family: 'Shadows Into Light', cursive;
  text-decoration-line: underline;
  font-weight: bold;
  color: #b98004; 
}

.link-url {
  font-size: 1.875rem;
  font-family: 'Indie Flower', cursive;
  text-decoration-line: underline;
  color: #eed9c4; 
}

.description-section {
  position: absolute;
  top: 47%; /* Adjust as needed */
  left: 10%;
  transform: translateY(1.25rem); /* Adjust spacing as needed */
  z-index: 2; /* Ensure it stays above the background but below other elements */
}

.description-heading {
  font-size: 4.625rem;
  font-family: 'Shadows Into Light', cursive;
  text-decoration-line: underline;
  font-weight: bold;
  color: #b98004; 
  margin-bottom: 0.625rem;
}

.description-text {
  font-size: 2.0625rem;
  font-family: 'Indie Flower', cursive;

  color: #eed9c4; /* Yellowish gold color */
  line-height: 1.5;
}

.description-text::after {
  content: " ";
  display: block;
  color: #f5f5f5; /* Slightly white/beige color */
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

.top-icons {
  margin-right: 0.625rem;
}

.separator {
  border-top: 1.25rem solid #4a2e0d;
  margin: 0;
  position: relative;
  z-index: 1;
}

.icon-box {
  background-color: #edb774;
  border: 0.1875rem solid #a3613a;
  border-radius: 0.3125rem;
  padding: 0.3125rem 0.625rem;
  display: flex;
  align-items: center;
  margin-left: 1.25rem;
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
  width: 1.875rem;
}

.icon-text {
  font-size: 1.375rem;
  margin-left: 0.3125rem;
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
  top: 15.625rem;
  left: 3.125rem;
  width: 25rem;
  height: 18.75rem;
  background-color: #f3bd8e; /* Less bright yellow background */
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
  bottom: 1.25rem;
  left: 3.125rem;
  color: white;
  font-size: 1.75rem;
  font-family: monospace;
}

.footer-text p {
  margin: 0;
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

/* New Styles for Bottom Left Images */
.bottom-left-images {
  position: absolute;
  bottom: 1.25rem; /* Adjust this value to position the images as desired */
  left: 1.25rem; /* Adjust this value to position the images as desired */
  display: flex;
  align-items: center;
  z-index: 2; /* Ensure they appear above the background */
}

.cat-image {
  height: 25rem; /* Adjust size as needed */
}

.ball-image {
  height: 15.625rem; /* Adjust size as needed */
  margin-top: 12.5rem;
}
</style>
