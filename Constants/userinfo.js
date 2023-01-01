//PLEASE FOLLOW THE FORMAT OF THIS FILE.

import { faGithubAlt, faLinkedinIn, faMediumM, faFacebook, faTwitter, faInstagram, faYoutube, faBehance } from "@fortawesome/free-brands-svg-icons"

export const userinfo = {
    logoText: "Moh. Bustomi Ramdana", //This text is visible on your navbar and footer like your logo.
    contact: {
        email: 'mbustomir21@gmail.com', //It is always a good idea to mention your email on your website. Good platform to communicate.
        phone: '83848597674', //Phone number is optional, if you dont want it, consider leaving it blank .
        countrycode: '+62' //It is advisable to add the country code incase you mention your contact number.
    },
    socials: [
        //For aesthetics, it is advisable for you to mention upto 4 social media links only. Fill in the links.
        //more icons are imported above, use as you like them.
        { type: 'github', link: 'https://github.com/Bustomi21/', icon: faGithubAlt },
        { type: 'instagram', link: 'https://www.instagram.com/tomiramdana_/', icon: faInstagram },
        { type: 'medium', link: '', icon: faMediumM },
    ],
    greeting: {
        //this text goes on your landing page
        title: "Hallo! Saya Bustomi.",
        subtitle: "Saya adalah seorang mahasiswa STIKOM PGRI Banyuwangi yang merupakan kampus teknologi terkemuka di Banyuwangi, Keahlian saya sebagai seorang Design Grafis dan Website Developer, Selain itu saya mempunyai beberapa bisnis online salah satunya Tukustock.id yang sudah  2 tahun saya kembangkan di marketplace Shopee. "
    },
    capabilities: [
        //this text goes on your home page in table format.
        //For aesthetics, it is advisable for you to mention upto 4 catgeories links only.
        //For aesthetics, it is advisable for you to keep similar number of skills in each category
        {
            category: "Design Grafis", // eg.frontend, backend, devops etc
            skills: ["Poster", "Banner", "Spanduk", "Dll"] //eg. react, html, python etc.
        },
        {
            category: "Web Developer",
            skills: ["Next-JS", "React-JS", "Express", "Dll"]
        },
        {
            category: "UI/UX",
            skills: ["Figma", "Prototype", "CorelDraw", "Dll"]
        },
        {
            category: "Marketing",
            skills: ["Shopee", "Advertising IG", "Advertising FB", "Dll"]
        },
    ],
    about: {
        //this text goes at the bottom of your home page.
        content: "Saya memiliki keahlian dalam menggunakan berbagai software teknologi seperti bahasa pemrograman, sistem operasi, dan juga software desain grafis seperti CorelDraw dan Figma.Di samping itu, saya juga memiliki kemampuan untuk bekerja dengan baik dalam tim dan memiliki sikap yang terbuka terhadap ide-ide baru. Saya selalu siap untuk belajar dan mengembangkan diri agar dapat memberikan kontribusi yang lebih baik dalam pekerjaan yang saya lakukan.",
        resume: "/" //link your resume here. it can be drive link or any other link
    },
    education: {
        visible: true, //set this to false if you want to omit this section
        educationList: [
            {
                time: '2007-2009', //timespan
                title: 'Taman Kanak-Kanak', //eg. BTech in Compuster Engineering
                organization: 'TK Riyadlus Sholihin', //eg. VJTI, Mumbai
                description: 'Saya menempuh pendidikan TK selama 2 tahun' //eg. secured a cgpa of 9.25 in all sems appeared in so far
            },
            {
                time: '2009-2014',
                title: 'Sekolah Dasar',
                organization: 'MI Al-Maarif',
                description: 'Saya menempuh pendidikan sekolah dasar selama 6 tahun'
            },
            {
                time: '2014-2017',
                title: 'Sekolah Menengah Pertama',
                organization: 'MTsN 12 Banyuwangi',
                description: 'Saya menempuh pendidikan sekolah menengah pertama selama 3 tahun'
            },
            {
                time: '2017-2020',
                title: 'Sekolah Menengah Atas',
                organization: 'SMA Ibrahimy',
                description: 'Saya menempuh pendidikan sekolah menengah atas selama 3 tahun'
            },
            {
                time: '2020-Sekarang',
                title: 'University',
                organization: 'STIKOM PGRI Banyuwangi',
                description: 'Sekarang saya sedang menempuh pendidikan dibangku kuliah STIKOM PGRI Banyuwangi'
            },
        ],
    },
    experience: {
        visible: true, //set this to false if you want to omit this section
        experienceList: [
            {
                company: 'Design Grafis', //company name eg.Microsoft
                companylogo: 'favicon.png', //companylogo
                position: 'Designer', //post you held eg.Senior SDE
                time: '2019-Sekarang', //timespan
                description: 'Sebagai seorang design grafis poster yang siap menerima orderan pembuatan design Banner,Poster,Brosur,Spanduk,T-Shirt,Dll ' //eg. spearheaded the graphics team in designing SASS product UIs
            },
            {
                company: 'Dunder Mifflin',
                companylogo: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/why-did-steve-carell-leave-the-office-1585597666.jpg?crop=0.563xw:0.844xh;0.287xw,0.128xh&resize=480:*',
                position: 'Regional Manager',
                time: 'March 2020 - May 2020',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum'
            },
            {
                company: 'Dunder Mifflin',
                companylogo: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/why-did-steve-carell-leave-the-office-1585597666.jpg?crop=0.563xw:0.844xh;0.287xw,0.128xh&resize=480:*',
                position: 'Regional Manager',
                time: 'March 2020 - May 2020',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum'
            },
        ],
    },
    blogs: {
        //set this to false if you want to omit this section
        visible: true
    },
}

export const headings = {
    //you can customise all the headings here.
    workHomePage: 'Work',
    workMainPage: 'Projects',
    capabilities: 'Capabilities',
    about: 'About Me',
    education: 'Education',
    experience: 'Experiences',
    blogs: 'I write!',
    contact: 'Contact Me',
}

export const ctaTexts = {
    //you can customise all the cta texts here.
    landingCTA: 'My work',
    workCTA: 'View All',
    capabCTA: 'Get in Touch',
    educationCTA: 'About Me',
    resumeCTA: 'Resume',
    submitBTN: 'Submit'
}