@import 'fonts';

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Calibri', serif;
  font-weight: 300;
  font-size: 20px;
  line-height: 1.5;
  background-color: rgb(102, 112, 94);
  color: white;
  padding-bottom: 150px;
}

html#ecwid_html body#ecwid_body {
  .ec-minicart__icon .icon-default path[stroke] {
    stroke: white !important;
  }

  .ec-size .ec-store {
    * {
      color: white !important;
    }

    a:hover {
      filter: drop-shadow(0px 3px 2px rgba(0,0,0,0.75));    
    }

    .icon-default path[stroke] {
      stroke: white !important;
    }

    .product-details img {
      border: 6px solid #880000;
      border-style: solid !important;
      width: calc(100% - 12px) !important;
    }
     .grid-product__image-wrap {
      border: 6px solid #880000;
    }
  }
}

h1, h2, h3, h4, h5, h6 {
  text-align: center;
  font-weight: normal;
  font-family: 'Lucida Calligraphy', sans-serif;
}

h2 {
  font-size: 26px;
  text-align: left;
}

form input{
  color: black;
}


h1 {
  margin-top: 100px;
}

hr {
  margin-top: 30px;
}

p {
  margin: 0;
}

a {
  text-decoration: underline;
  color: white;
  &:visited {
    color: white;
  }
  &:hover {
    filter: drop-shadow(0px 3px 2px rgba(0,0,0,0.75));    
    text-decoration: none;
  }
}


#nav ul li a{
  padding-right: 10px;
  border-right: 1px solid white;
  margin-left: 10px;
  font-size: 0.75em;
}

#nav ul li a:hover{
  text-shadow: none;
  text-decoration: underline;
}
