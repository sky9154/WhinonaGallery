(function () {
  const portfolios = [
    {
      title: '生命水',
      image: './images/portfolio/P_01_生命水_20210531.jpg',
      time:'2021/05/31',
      introduce: 
        '生命的露珠是可貴也是寶藏。<br>\
        裡面有滿滿的活力，他們一株株的掉，<br>\
        又像眼淚一滴滴的注入海水，在生與海與死之中穿插，<br>\
        在通通倒映在海光上。'
    },
    {
        title: '聽，看看',
        image: './images/portfolio/P_02_聽，看看_20210518.jpg',
        time:'2021/05/18',
        introduce: 
            '海風起了頭，<br>\
            海浪回應風，<br>\
            魚們舞隨浪，<br>\
            綠色星球誕生了，畫布出聲了。<br>\
            聽聽看，那是大自然的歌。'
      },
      {
        title: '有什麼喜歡的嗎？',
        image: './images/portfolio/P_03_有什麼喜歡的嗎_20210413.jpg',
        time:'2021/04/13',
        introduce: 
            '花好喜歡大樹，<br>\
            喜歡它的高大、<br>\
            喜歡它的智慧、<br>\
            它也給了花在最被信任的地方慢慢長大，<br>\
            從一顆不起眼的種子，如今已經準備要開花了。<br>\
            花真正喜歡的，是大樹對每顆植物都一樣平等的愛護。<br>\
            你問⋯那大樹有什麼喜歡的嗎？<br>\
            當然有啊，大樹最喜歡太陽了！'
      },
      {
        title: 'Where your hear settles ?',
        image: './images/portfolio/P_04_Where_your_hear_settles_20210117.jpg',
        time:'2021/01/17',
        introduce: 
            '赤裸裸的跑進旋渦之中，那是我要定的心！<br>\
            原來，就算翅膀破碎了，還有風把我們扛起。<br>\
            所以，我們要做的就是保持赤裸的堅定，<br>\
            往向我們要定的那顆心。<br>\
            祝大家都可以回家。'
      },
  ]

  const blogPosts = [
    {
      name: '住在杜王町東北部<br>的別墅區一帶',
      image: './images/about/家.png',
      color:'white-text'
    },
    {
      name: '在龜友連鎖店服務<br>每天都加班到晚上8點',
      image:'./images/about/工作.jpg',
      color:'white-text'
    },
    {
      name: '晚上11點睡<br>每天要睡足8個小時',
      image: './images/about/睡覺.png',
      color:'black-text'
    },
    {
      name: '<br>醫生都說我很正常',
      image: './images/about/檢查.png',
      color:'black-text'
    }
  ]

  const nav = document.querySelector('nav')
  const navHeight = nav.offsetHeight
  const portfolioOffsetHeight = document.getElementById('portfolio').offsetTop
  let aboutCardPlaced = false
  let portfolioPlaced = false

  // Handle navbar animation
  function animateNav() {
    if (window.pageYOffset > navHeight) { return nav.classList.add('backdrop-blur', 'shadow') }
    nav.classList.remove('backdrop-blur', 'shadow')
  }

  // Handle about cards animation
  function animateAboutCards() {
    if (window.pageYOffset <= navHeight) { return }
    // switch status to placed
    aboutCardPlaced = true
    // get about section
    const aboutSection = document.querySelector('.section-about .row')
    // generate html for each blog post
    blogPosts.forEach(post => {
      // place post
      aboutSection.innerHTML += `
        <div class="col s12 m6 xl3">
          <div class="card animate__animated animate__jackInTheBox slow">
              <div class="card-image" style="background-image: url(${post.image});">
                <div class="overlay"></div>
                <span class="card-title ${post.color}" style="font-weight:bold;cursor: help;">
                    ${post.name}
                </span>
              </div>
          </div>
        </div>
      `
    })
  }

  // Place all portfolios into portfolio section
  function placePortfolios() {
    // place portfolios when scroll to portfolio section
    if (window.pageYOffset + window.innerHeight <= portfolioOffsetHeight) { return }
    // get elements
    const portfolioSection = document.querySelector('.section-portfolio .row')
    // switch status to placed
    portfolioPlaced = true
    // generate html for each portfolio
    portfolios.forEach(portfolio => {

      portfolioSection.innerHTML += `
        <div class="col s12 m6 animate__animated animate__flipInX">
            <div class="card sticky-action hoverable">
                <div class="card-image waves-effect waves-block waves-light">
                    <img class="responsive-img activator" src=${portfolio.image}>
                    <div class="overlay"></div>
                    <span class="card-title activator">${portfolio.title}</span>
                </div>
                <div class="card-action">
                    <p class="activator truncate"><span class="new badge right activator"
                    data-badge-caption="${portfolio.time}"></span>${portfolio.title}</p>
                </div>
                <div class="card-reveal">
                    <div class="overlay"></div>
                    <span class="card-title light-blue-text text-accent-3"><b>${portfolio.title}</b><i class='bx bx-x bx-lg right black-text'></i></span>
                    <br>
                    <div class="blue-grey-text text-darken-1"> 
                        ${portfolio.introduce}
                    </div>
                    <div id="card-reveal-icons">
                        <a href="" class="right black-text" target="_blank"><I>${portfolio.time}</I></a>
                    </div>
                </div>
            </div>
        </div>
      `
    })
  }

  window.addEventListener('scroll', () => {
    animateNav()
    if (!aboutCardPlaced) { animateAboutCards() }
    if (!portfolioPlaced) { placePortfolios() }
  })
})()