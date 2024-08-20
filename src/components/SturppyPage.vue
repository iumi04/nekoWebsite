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
                  <span class="tag-text" style="margin-right: 50px; margin-top: 30px;">Finance</span>
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
  max-width: 1600px;
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
  border: 5px solid #391a01;
  border-radius: 5px;
  padding: 5px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.sturppy-title {
  font-family: 'Indie Flower', cursive;
  font-size: 46px;
  color: #4a2e0d;
  font-weight: bold;
  margin: 0;
  text-decoration: underline;
  margin-right: 30px;
}

.sturppy-icon {
  height: 70px;
  margin-left: -25px;
}

.title-cat {
  color: blue;
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
  border: 5px solid #f3bd8e; /* Beige border */
  border-radius: 5px;
  width: 800px; /* Larger size */
  margin-top: -30px;
  margin-left: 37px;
  height: auto; /* Maintain aspect ratio */
}

.sturppy-image-col {
  margin-right: 20px; /* Space between image and sections */
}

.tags-link-section {
  display: flex;
  flex-direction: column;
  margin-left: 20px; /* Space between image and sections */
  z-index: 2; /* Higher z-index to be on top of the blackboard */
}

.tags-section {
  margin-bottom: 20px; /* Space between tags and links */
}

.tags-heading {
  font-size: 54px;
  font-family: 'Shadows Into Light', cursive;
  text-decoration-line: underline;  
  font-weight: bold;
  color: #b98004; 
  margin-bottom: 10px;
}

.tags {
  display: flex;
  flex-direction: column;
}

.tag-box {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  background-color: #f5a623; /* More orange background */
  border: 4px solid #f3bd8e;
  border-radius: 5px;
  padding: 5px;
  margin-right: 70px;
}

.tag-icon {
  height: 40px; /* Adjust size as needed */
  margin-right: 10px; /* Space between icon and text */
}

.tag-text-box {
  background-color: transparent; /* No additional background for text box */
}

.tag-text {
  font-size: 28px;
  font-weight: bold;
  font-family: 'Indie Flower';
  color: #4a2e0d; /* Darker text color */
}

.link-section {
  margin-top: 20px;
}

.link-heading {
  font-size: 54px;
  font-family: 'Shadows Into Light', cursive;
  text-decoration-line: underline;
  font-weight: bold;
  color: #b98004; 
}

.link-url {
  font-size: 30px;
  font-family: 'Indie Flower', cursive;
  text-decoration-line: underline;
  color: #eed9c4; 
}

.description-section {
  position: absolute;
  top: 47%; /* Adjust as needed */
  left: 10%;
  transform: translateY(20px); /* Adjust spacing as needed */
  z-index: 2; /* Ensure it stays above the background but below other elements */
}

.description-heading {
  font-size: 74px;
  font-family: 'Shadows Into Light', cursive;
  text-decoration-line: underline;
  font-weight: bold;
  color: #b98004; 
  margin-bottom: 10px;
}

.description-text {
  font-size: 33px;
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

/* New Styles for Bottom Left Images */
.bottom-left-images {
  position: absolute;
  bottom: 20px; /* Adjust this value to position the images as desired */
  left: 20px; /* Adjust this value to position the images as desired */
  display: flex;
  align-items: center;
  z-index: 2; /* Ensure they appear above the background */
}

.cat-image {
  height: 400px; /* Adjust size as needed */
}

.ball-image {
  height: 250px; /* Adjust size as needed */
  margin-top: 200px;
}

@media (max-width: 600px) {
  .top-section {
  position: relative;
  background-size: cover;
  background-color: black;
  background-position: center;
  background-repeat: no-repeat;
}

.blackboard {
  position: absolute;
  top: 28%;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  max-width: 330px;
  z-index: 1; /* Lower z-index to stay behind other content */
}

.sturppy-box {
  position: absolute;
  top: 7%;
  left: 50%;
  transform: translateX(-50%);
}

.title-cat {
  width: 40px;
  position: absolute;
  margin-bottom: 25px;
}

.sturppy-card {
  background-color: #f3bd8e;
  color: #9d6b00;
  border: 5px solid #391a01;
  border-radius: 5px;
  padding: 5px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin-top: 30px;
  margin-left: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.sturppy-title {
  font-family: 'Indie Flower', cursive;
  font-size: 22px;
  color: #4a2e0d;
  font-weight: bold;
  margin: 0;
  text-decoration: underline;
  margin-right: -10px;
}

.sturppy-icon {
  width: 20px;
  margin-left: -20px;
  position: absolute;
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
  border: 5px solid #f3bd8e; /* Beige border */
  border-radius: 5px;
  width: 170px; /* Larger size */
  margin-top: 50px;
  margin-left: 17px;
  height: auto; /* Maintain aspect ratio */
}

.sturppy-image-col {
  margin-right: 20px; /* Space between image and sections */
}

.tags-link-section {
  display: flex;
  flex-direction: column;
  margin-left: 10px; /* Space between image and sections */
  z-index: 2; /* Higher z-index to be on top of the blackboard */
  margin-top: -150px;
}

.tags-section {
  margin-bottom: 20px; /* Space between tags and links */
}

.tags-heading {
  font-size: 18px;
  font-family: 'Shadows Into Light', cursive;
  text-decoration-line: underline;  
  font-weight: bold;
  color: #b98004; 
  margin-bottom: 15px;
  margin-left: 187px;
}

.tags {
  display: flex;
  flex-direction: column;
}

.tag-box {
  display: flex;
  align-items: center;
  background-color: #f5a623; /* More orange background */
  border: 4px solid #f3bd8e;
  border-radius: 5px;
  width: 90px; /* Adjusted width for smaller tag */
  height: 20px; /* Adjusted height for smaller tag */
  margin-left: 200px;
  margin-bottom: 10px; /* Reduced margin to bring tags closer */
  padding: 0 5px; /* Added padding for spacing */
}

.tag-text {
  font-size: 10px; /* Slightly smaller font */
  font-weight: bold;
  font-family: 'Indie Flower';
  color: #4a2e0d; /* Darker text color */
  white-space: nowrap; /* Ensure text stays within the box */
  overflow: hidden;
  margin-left: 15px; /* Added margin to move text closer to icon */
}

.tag-icon {
  height: 12px; /* Adjusted size as needed */
  position: absolute;
  margin-left: -20px;
}


.tag-text-box {
  background-color: transparent; /* No additional background for text box */
}

.link-section {
  margin-top: -15px;
  margin-left: 190px;
}

.link-heading {
  font-size: 18px;
  font-family: 'Shadows Into Light', cursive;
  text-decoration-line: underline;
  font-weight: bold;
  color: #b98004; 
}

.link-url {
  font-size: 10px;
  font-family: 'Indie Flower', cursive;
  text-decoration-line: underline;
  color: #eed9c4; 
}

.description-section {
  position: absolute;
  top: 47%; /* Adjust as needed */
  left: 14%;
  transform: translateY(20px); /* Adjust spacing as needed */
  z-index: 2; /* Ensure it stays above the background but below other elements */
}

.description-heading {
  font-size: 22px;
  font-family: 'Shadows Into Light', cursive;
  text-decoration-line: underline;
  font-weight: bold;
  color: #b98004; 
  margin-bottom: 10px;
}

.cat-image {
  width: 100px;
  position: absolute;
  margin-top: 330px;
}

.ball-image {
  width: 100px;
  margin-left: 90px;
  margin-bottom: -100px;
}

.description-text {
  font-size: 8px;
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
  font-size: 14px;
  color: black;
  margin-left: 40px;
  margin-bottom: 20px;
}

.icons-col {
    position: absolute;
    align-items: center;
  }
  
  .top-icons {
    margin-left: 132px;
    margin-top: -25px;
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

  @media (min-width: 601px) and (max-width: 900px) {
    .top-section {
  position: relative;
  background-size: cover;
  background-color: black;
  background-position: center;
  background-repeat: no-repeat;
}

.blackboard {
  position: absolute;
  top: 21%;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  max-width: 1600px;
  z-index: 1; /* Lower z-index to stay behind other content */
}

.sturppy-box {
  position: absolute;
  top: 8%;
  left: 50%;
  transform: translateX(-50%);
}

.sturppy-card {
  background-color: #f3bd8e;
  color: #9d6b00;
  border: 5px solid #391a01;
  border-radius: 5px;
  padding: 5px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 270px;
  height: 90px;
}

.sturppy-title {
  font-family: 'Indie Flower', cursive;
  font-size: 36px;
  color: #4a2e0d;
  font-weight: bold;
  margin: 0;
  text-decoration: underline;
  margin-right: 30px;
}

.sturppy-icon {
  width: 40px;
  margin-left: 25px;
}

.title-cat {
  color: blue;
}

.sturppy-image-row {
  position: absolute;
  top: 28%; /* Adjust as needed */
  left: 10%; /* Adjust as needed */
  display: flex;
  align-items: flex-start;
  z-index: 2; /* Higher z-index to be on top of the blackboard */
}

.sturppy-image {
  border: 5px solid #f3bd8e; /* Beige border */
  border-radius: 5px;
  width: 350px; /* Larger size */
  margin-top: -30px;
  margin-left: 22px;
  height: auto; /* Maintain aspect ratio */
}

.sturppy-image-col {
  margin-right: 20px; /* Space between image and sections */
}

.tags-link-section {
  display: flex;
  flex-direction: column;
  margin-left: 395px; /* Space between image and sections */
  margin-top: -310px;
  z-index: 2; /* Higher z-index to be on top of the blackboard */
}

.tags-section {
  margin-bottom: 20px; /* Space between tags and links */
}

.tags-heading {
  font-size: 36px;
  font-family: 'Shadows Into Light', cursive;
  text-decoration-line: underline;  
  font-weight: bold;
  color: #b98004; 
  margin-bottom: 10px;
}

.tags {
  display: flex;
  flex-direction: column;
}

.tag-box {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  background-color: #f5a623; /* More orange background */
  border: 4px solid #f3bd8e;
  border-radius: 5px;
  padding: 5px;
  margin-right: 70px;
}

.tag-icon {
  width: 25px; /* Adjust size as needed */
  margin-right: 10px; /* Space between icon and text */
}

.tag-text-box {
  background-color: transparent; /* No additional background for text box */
}

.tag-text {
  font-size: 23px;
  font-weight: bold;
  font-family: 'Indie Flower';
  color: #4a2e0d; /* Darker text color */
}

.link-section {
  margin-top: 20px;
}

.link-heading {
  font-size: 36px;
  font-family: 'Shadows Into Light', cursive;
  text-decoration-line: underline;
  font-weight: bold;
  color: #b98004; 
}

.link-url {
  font-size: 23px;
  font-family: 'Indie Flower', cursive;
  text-decoration-line: underline;
  color: #eed9c4; 
}

.description-section {
  position: absolute;
  top: 47%; /* Adjust as needed */
  left: 10%;
  transform: translateY(20px); /* Adjust spacing as needed */
  z-index: 2; /* Ensure it stays above the background but below other elements */
}

.description-heading {
  font-size: 44px;
  font-family: 'Shadows Into Light', cursive;
  text-decoration-line: underline;
  font-weight: bold;
  color: #b98004; 
  margin-bottom: 10px;
}

.description-text {
  font-size: 17px;
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
  font-size: 30px;
  color: black;
  margin-left: -20px;
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
  

/* New Styles for Bottom Left Images */
.bottom-left-images {
  position: absolute;
  bottom: 20px; /* Adjust this value to position the images as desired */
  left: 20px; /* Adjust this value to position the images as desired */
  display: flex;
  align-items: center;
  z-index: 2; /* Ensure they appear above the background */
}

.cat-image {
  width: 200px; /* Adjust size as needed */
  position: absolute;
}

.ball-image {
  height: 100px; /* Adjust size as needed */
  margin-top: 150px;
}
  }






</style>
