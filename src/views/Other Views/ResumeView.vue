<template>
  <div>
    <v-card color="dark" class="mx-5 mb-5">
      <v-container class="pb-15 align-center light--text">
        <h1 class="text-h3 font-weight-light text-center pt-10 pb-8">Resume</h1>
        <v-divider dark class="pb-12"></v-divider>

        <v-row>
          <v-col>
            <h1 class="text-h4 font-weight-light">Clayton Ward</h1>
            <h2 class="text-h5 font-weight-light">Software Engineer</h2>
            <br />
            <p>
              <span class="lightGreen--text">clayton@flaresoftware.com</span
              ><br />
              <span class="lightBlue--text">+1 (385) 288-7686</span><br />
              <span>LinkedIn:</span
              ><span class="lighterOrange--text"> clayton-b-ward</span>
            </p>

            <v-divider dark></v-divider>

            <h2 class="text-h5 font-weight-light lighter--text py-4">
              Formal Education
            </h2>
            <p>
              <span class="font-weight-bold"
                >Bachelor of Software Delopment</span
              ><br />
              <span class="lightGreen--text">Western Governor's University</span
              ><br />
              <span class="lighterOrange--text">April 2021</span>
            </p>
            <p>
              <span class="font-weight-bold">Associate of Science</span><br />
              <span class="lightGreen--text">Salt Lake Community College</span
              ><br />
              <span class="lighterOrange--text">June 2014</span>
            </p>
            <p>
              <span class="font-weight-bold">High School Diploma</span><br />
              <span class="lightGreen--text"
                >Itineris Early College High School</span
              ><br />
              <span class="lighterOrange--text">May 2014</span>
            </p>

            <v-divider dark></v-divider>

            <h2 class="text-h5 font-weight-light lighter--text pt-5 pb-4">
              Certifications
            </h2>
            <p>
              <span class="font-weight-bold">CompTIA A+</span> 2021<br />
              (Core 1 and 2)
            </p>
            <p>
              <span class="font-weight-bold">CompTIA Project+</span> 2021<br />
            </p>
            <p>
              <span class="font-weight-bold">CIW UI Designer</span> 2021<br />
            </p>
            <p>
              <span class="font-weight-bold">Axelos ITIL V4</span> 2021<br />
            </p>
            <p class="pb-4">
              <span class="font-weight-bold">Google IT Support</span> 2019<br />
            </p>

            <v-divider dark></v-divider>

            <p class="pt-4">
              <span class="font-weight-bold lightGreen--text"
                >Other Accomplishments</span
              ><br />
              Eagle Scout Award - 2010<br />
            </p>

            <p class="pt-4">
              <span class="font-weight-bold lightGreen--text">Hobbies</span
              ><br />
              Pen testing, building and rebuilding computers, Udemy, piano, and
              language learning.
            </p>
          </v-col>
          <v-col>
            <div class="d-flex pb-5">
              <div>
                <p>
                  Please visit my portfolio at the URL below or scan the QR code
                  to the right.
                </p>

                <v-btn text color="lightBlue" class="pl-0" link to="/"
                  >archive.flaresoftware.com</v-btn
                >
              </div>
              <v-img
                class="mt-1 mr-5"
                src="../../assets/QRCode.svg"
                max-width="100"
              ></v-img>
            </div>
            <div class="d-flex pb-4">
              <v-img
                class="mr-3"
                src="../../assets/GitHub-Mark-Light-64px.png"
                max-width="30"
                max-height="30"
              ></v-img>
              <p class="pt-1">GitHub: theclayton</p>
            </div>
            <v-divider dark></v-divider>

            <h2 class="text-h5 font-weight-light lighter--text pt-4">
              Professional Work Experience
            </h2>

            <h3 class="text-h6 font-weight-light lightBlue--text pt-5">
              Ubiquity Internet
            </h3>
            <p>
              <span class="font-weight-bold">Software Engineer</span><br />
              <i class="lighterOrange--text">May 2020 - Present</i><br />
              Modern web application development. Responisble for development
              and maintenence of customer management system and network
              monitoring systems. Offered tier-3 support for technicians.<br />
              <i class="lightGreen--text">Node, ES6, MongoDB, Angular, React</i>
            </p>

            <h3 class="text-h6 font-weight-light lightBlue--text pt-5">
              Flare Software
            </h3>
            <p>
              <span class="font-weight-bold">Software Engineer</span><br />
              <i class="lighterOrange--text">June 2014 - May 2020</i><br />
              Native mobile application development. Over a dozen published
              apps. Static web development for various clients. Some graphic
              design work.<br />
              <i class="lightGreen--text"
                >Swift, Java, HTML, CSS, JavaScript, MySQL</i
              >
            </p>

            <h3 class="text-h6 font-weight-light lightBlue--text pt-5">
              Harman International (now Samsung)
            </h3>
            <p class="pb-2">
              <span class="font-weight-bold">Q/A Engineer</span><br />
              <i class="lighterOrange--text">October 2013 - June 2020</i><br />
              Collaborated with development and engineering teams. Created QA
              test plans, managed bug reports with Bugzilla. Performed black box
              testing on hardware devices and software programs/apps.
            </p>

            <v-divider dark></v-divider>

            <p class="pt-5">
              <span class="font-weight-bold lightGreen--text"
                >Currently my favorite technologies</span
              ><br />
              Vue for front end development. Express for back end API
              development. Swift for iOS apps.
            </p>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>