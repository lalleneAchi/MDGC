<template>
  <div class="container-center-horizontal">
    <div class="web-1920-2 screen">
      <div class="topbar-container jumble-regular-normal-white-30px">
        <div class="topbar">
          <div class="topbar-left">
            <img class="logo-png-transparent" :src="require(`../../img/mdgc-logo.png`)" />
            <div class="project">{{ project }}</div>
            <div class="reward-program">{{ rewardProgram }}</div>
            <div class="metaverse">{{ metaverse }}</div>
            <div class="roadmap">{{ roadmap }}</div>
            <div class="team">{{ team }}</div>
            <div class="discord-button">
              <img class="discord-logo" :src="require(`../../img/discord.png`)" alt="Discord">
              <!-- <div class="groupe-36" :style="{ 'background-image': 'url(' + groupe36 + ')' }"></div> -->
              <div class="join-us-on-discord">{{ joinUsOnDiscord }}</div>
            </div>
          </div>
          <div class="topbar-right">
            <div class="social-icons-group">
              <div class="groupe-38">
                <img class="instagram-logo-topbar" :src="require(`../../img/instagram.png`)" />
                <div class="twitter-logo-container-topbar">
                  <a href="https://twitter.com/mgdcofficial" target="_blank">
                    <img class="twitter-logo-topbar" :src="require(`../../img/trac--42@1x.png`)" />
                  </a>
                </div>
              </div>
            </div>
            <img class="heelshoe" :src="require(`../../img/heelshoe-3@1x.png`)" alt="heelshoe" />
            <img class="hamburger-button" :src="require(`../../img/more.png`)" alt="heelshoe" @click="toggleTopbarMenu" />
          </div>
        </div>
        <div v-show="showTopbarItems" class="topbar-items">
          <div class="topbar-item topbar-item-project">
            Project
          </div>
          <div class="topbar-item topbar-item-reward">
            Reward program
          </div>
          <div class="topbar-item topbar-item-metaverse">
            Metaverse
          </div>
          <div class="topbar-item topbar-item-roadmap">
            Roadmap
          </div>
          <div class="topbar-item topbar-item-team">
            Team
          </div>
          <div class="topbar-item topbar-item-social">
            <div class="social-icons-group-mobile">
              <div class="groupe-38">
                <img class="instagram-logo-topbar" :src="require(`../../img/instagram.png`)" />
                <div class="twitter-logo-container-topbar">
                  <a href="https://twitter.com/mgdcofficial" target="_blank">
                    <img class="twitter-logo-topbar" :src="require(`../../img/trac--42@1x.png`)" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img class="gold-digger-house" :src="require(`../../img/gold-digger-house-3@1x.png`)" />
      <div class="mgdc-is-a-collecti">{{ mgdcIsACollecti }}</div>

      <div class="purple-container">
        <img class="coin-5" :src="require(`../../img/coin-5@1x.png`)" />
        <img class="gold-duck-1" :src="require(`../../img/goldduck-1@1x.png`)" />
        <div class="what-to-expect-container">
          <div class="what-to-expect-from">
            <img class="diamond-2" :src="require(`../../img/diamond-2@1x.png`)" /> 
            What to expect from
            <img class="diamond-3" :src="require(`../../img/diamond-3@1x.png`)" />
          </div>
          <div class="what-to-expect-from second">
            your Gold-Digger NFT ?
          </div>
          <div class="expect-description-container">
            <div class="heart-logo helveticaneue-regular-normal-thunderbird-36px">{{ text3 }}</div>
            <div class="by-owning-one-of-the acme-normal-black-36px">
              By owning one of these 10,000 NFTs, you’ll be offered multiple opportunities: You’ll be able to live in a metaverse through the eyes of your Gold-Digger, rubbing shoulders with some of the most famous Apes, bating and digging-on them thanks to your Gold-Digger’s charming and unique attributes. <br /><br />
            </div>
          </div>
          <div class="expect-description-container">
            <div class="pic-logo helveticaneue-regular-normal-black-36px">{{ text4 }}</div>
            <div class="by-owning-one-of-the acme-normal-black-36px">
              Then, by activating the breeding function with your sugar monkey, you will be able to give birth to a new Ape, enjoy your family life and be set for good.
            </div>
          </div>
        </div>
        <img class="redlip-2" :src="require(`../../img/redlip-2@1x.png`)" />

        <div class="gold-digger-house-4">
          <div class="nft-container">
            <img class="rectangle-4-1" :src="require(`../../img/nft-1@1x.png`)" />
            <img class="rectangle-5-1" :src="require(`../../img/nft-1@1x.png`)" />
            <img class="rectangle-6-1" :src="require(`../../img/nft-1@1x.png`)" />
            <img class="rectangle-14-1" :src="require(`../../img/nft-1@1x.png`)" />
          </div>

          <div class="trailer-title-container">
            <h1 class="trailer-video-highligh jumble-regular-normal-cerise-red-120px">{{ title }}</h1>
            <div class="trailer-video jumble-regular-normal-white-120px">{{ trailerVideo }}</div>
          </div>
  
          <img class="coin-4" :src="coin5" />
          <img class="redlip-3" :src="redlip4" />
          <img class="coming-soon-video" :src="require(`../../img/2fichier-3-2x@1x.png`)">
          <img class="bague-2" :src="bague3" />
          <img class="heelshoe-1" :src="heelshoe2" />

          <div class="join-us-on-discord-big-button">
            <img class="discord-big-logo" :src="require(`../../img/groupe-26-1@1x.png`)" />
            <div class="join-us-on-discord-1">{{ joinUsOnDiscord2 }}</div>
          </div>
        </div>
      </div>
      <div class="exclusive-reward">
        <div class="exclusive-reward-title">
          <img class="diamond-7" :src="diamond8" />
          <div class="what-is-the-exclusiv">{{ whatIsTheExclusiv }}</div>
          <img class="diamond-4" :src="diamond5" />
        </div>
        
        <div class="text-1 helveticaneue-regular-normal-black-36px">{{ text1 }}</div>
        <div class="the-exclusive-reward acme-normal-white-36px" v-html="theExclusiveReward"></div>

        <div class="text-2 helveticaneue-regular-normal-thunderbird-36px">{{ text2 }}</div>
      </div>
 
      <div class="overlap-group11">
        <img class="gold-digger-house-1" :src="require(`../../img/gold-digger-house@1x.png`)" />
        <img class="gold-digger-house-2" :src="require(`../../img/gold-digger-house-1@1x.png`)"
        /><img class="trac-23" :src="trac23" />
        <div class="groupe-189">
          <div class="groupe-188">
            <div class="groupe-container">
              <div class="groupe-147" :style="{ 'background-image': 'url(' + groupe147 + ')' }"></div>
              <div class="groupe-149" :style="{ 'background-image': 'url(' + groupe149 + ')' }"></div>
              <div class="groupe-151" :style="{ 'background-image': 'url(' + groupe151 + ')' }"></div>
              <div class="groupe-153" :style="{ 'background-image': 'url(' + groupe153 + ')' }"></div>
              <div class="groupe-155" :style="{ 'background-image': 'url(' + groupe155 + ')' }"></div>
              <div class="groupe-157" :style="{ 'background-image': 'url(' + groupe157 + ')' }"></div>
              <div class="groupe-159" :style="{ 'background-image': 'url(' + groupe159 + ')' }"></div>
              <div class="groupe-161" :style="{ 'background-image': 'url(' + groupe161 + ')' }"></div>
              <div class="groupe-183">
                <div class="groupe-182">
                  <div class="overlap-group">
                    <div class="groupe-166" :style="{ 'background-image': 'url(' + groupe166 + ')' }"></div>
                    <div class="groupe-171">
                      <div class="groupe-1">
                        <div class="groupe-1">
                          <div class="groupe-168" :style="{ 'background-image': 'url(' + groupe168 + ')' }"></div>
                        </div>
                      </div>
                    </div>
                    <groupe176 :src="groupe176Props.src" />
                    <groupe176 :src="groupe1762Props.src" :className="groupe1762Props.className" />
                    <img class="rectangle-104" :src="require(`../../img/nft-1@1x.png`)" /><img
                      class="rectangle-105"
                      :src="rectangle105"
                    /><img class="trac-60" :src="trac60" /><img class="trac-61" :src="trac61" /><img
                      class="trac-62"
                      :src="trac62"
                    /><img class="trac-63" :src="trac63" /><img class="trac-64" :src="trac64" /><img
                      class="trac-65"
                      :src="trac65"
                    /><img class="trac-66" :src="trac66" /><img class="trac-67" :src="trac67" /><img
                      class="trac-68"
                      :src="trac68"
                    /><img class="trac-69" :src="trac69" /><img class="trac-70" :src="trac70" /><img
                      class="trac-71"
                      :src="trac71"
                    /><img class="trac-72" :src="trac72" /><img class="trac-73" :src="trac73" />
                  </div>
                </div>
              </div>
              <div class="groupe-18" :style="{ 'background-image': 'url(' + groupe185 + ')' }"></div>
              <div class="groupe-18" :style="{ 'background-image': 'url(' + groupe187 + ')' }"></div>
            </div>
          </div>
        </div>
        <img class="gold-digger-house-3" :src="goldDiggerHouse4" />
        <div class="overlap-group2">
          <div class="rectangle-2-1"></div>
          <img class="logo-png-transparent-1" :src="logoPngTransparent2" />
          <div class="terms-conditions">{{ termsConditions }}</div>
          <div class="mgdc-all-rights-reserved-2022">{{ mgdcAllRightsReserved2022 }}</div>
        </div>
        <div class="rectangle-68"></div>
        <div class="groupe-39" :style="{ 'background-image': 'url(' + groupe39 + ')' }"></div>
        <div class="groupe-29" :style="{ 'background-image': 'url(' + groupe29 + ')' }"></div>
        <img class="redlip" :src="redlip" /><img class="montre-or" :src="montreor" /><img
          class="rectangle-4"
          :src="rectangle4"
        /><img class="rectangle-5" :src="rectangle5" /><img class="rectangle-6" :src="rectangle6" /><img
          class="rectangle-14"
          :src="rectangle14"
        />
        <div class="our-team">{{ ourTeam }}</div>
        <img class="diamond" :src="diamond" /><img class="diamond-1" :src="diamond2" />
        <div class="antoinecto">
          <span class="span0">{{ spanText }}</span
          ><span class="span1">{{ spanText2 }}</span>
        </div>
        <div class="aaroncto">
          <span class="jumble-regular-normal-brick-red-40px">{{ spanText3 }}</span
          ><span class="span1">{{ spanText4 }}</span
          ><span class="jumble-regular-normal-brick-red-40px">{{ spanText5 }}</span>
        </div>
        <div class="louiscto">
          <span class="span0">{{ spanText6 }}</span
          ><span class="span1">{{ spanText7 }}</span>
        </div>
        <div class="bad-guycto">
          <span class="span0">{{ spanText8 }}</span
          ><span class="span1">{{ spanText9 }}</span>
        </div>
        <img class="coin" :src="coin" /><img class="bague" :src="bague" /><img
          class="montre-or-1"
          :src="montreor2"
        /><img class="redlip-1" :src="redlip2" /><img class="champagne-singe" :src="champagneSinge" />
        <div class="rectangle-34"></div>
        <div class="rectangle-75"></div>
        <div class="rectangle-77"></div>
        <div class="rectangle-79"></div>
        <div class="rectangle-81"></div>
        <div class="rectangle-83"></div>
        <div class="rectangle-43"></div>
        <div class="rectangle-76"></div>
        <div class="rectangle-78"></div>
        <div class="rectangle-80"></div>
        <div class="rectangle-82"></div>
        <div class="rectangle-84"></div>
        <div class="rectangle-38"></div>
        <div class="rectangle-46"></div>
        <div class="rectangle-49"></div>
        <div class="rectangle-52"></div>
        <div class="rectangle-55"></div>
        <div class="rectangle-61"></div>
        <img class="trac-1" :src="trac1" />

        <div class="you-are-a-bayc-ow acme-normal-black-36px" v-html="youAreABAYCOw"></div>
        <div class="who-can-buy-a-gold-digger-nft jumble-regular-normal-thunderbird-80px">
          {{ whoCanBuyAGoldDiggerNft }}
        </div>
        <div class="your-gold-digger-nft acme-normal-white-36px" v-html="yourGoldDiggerNft"></div>
        <div class="how-can-you-use-your-gold-digger-nft">{{ howCanYouUseYourGoldDiggerNft }}</div>
        <div class="the-mgdc-is-going">{{ theMGDCIsGoing }}</div>
        <div class="we-serve-champaign-t acme-normal-white-40px">{{ weServeChampaignT }}</div>
        <div class="we-break-lose-the-di acme-normal-white-40px">{{ weBreakLoseTheDi }}</div>
        <div class="we-give-mgdc-gold acme-normal-white-40px">{{ weGiveMGDCGold }}</div>
        <div class="we-are-publishing-th">
          <span class="acme-normal-white-40px">{{ spanText10 }}</span
          ><span class="span1-1 acme-normal-white-40px">{{ spanText11 }}</span
          ><span class="acme-normal-white-40px">{{ spanText12 }}</span>
        </div>
        <div class="we-activate-the-bree acme-normal-white-40px">{{ weActivateTheBree }}</div>
        <div class="we-celebrate-the-com acme-normal-white-40px">{{ weCelebrateTheCom }}</div>
        <div class="percent jumble-regular-normal-white-55px">{{ percent }}</div>
        <div class="percent-1 jumble-regular-normal-white-55px">{{ percent2 }}</div>
        <div class="percent-2 jumble-regular-normal-white-55px">{{ percent3 }}</div>
        <div class="percent-3 jumble-regular-normal-white-55px">{{ percent4 }}</div>
        <div class="percent-4 jumble-regular-normal-white-55px">{{ percent5 }}</div>
        <div class="percent-5 jumble-regular-normal-white-55px">{{ percent6 }}</div>
        <img class="heelshoe-2" :src="heelshoe3" /><img class="coin-1" :src="coin2" /><img
          class="coin-2"
          :src="coin3"
        /><img class="coin-3" :src="coin4" />
        <div class="what-are-the-metave jumble-regular-normal-thunderbird-80px" v-html="whatAreTheMetave"></div>
        <img class="diamond-5" :src="diamond6" /><img class="diamond-6" :src="diamond7" /><img class="diamond-8" :src="diamond9" /><img class="diamond-9" :src="diamond10" /><img
          class="coin2"
          :src="coin22"
        /><img class="redlip-4" :src="redlip5" /><img class="redlip-5" :src="redlip6" /><img
          class="redlip-6"
          :src="redlip7"
        /><img class="redlip-7" :src="redlip8" /><img class="redlip-8" :src="redlip9" /><img
          class="redlip-9"
          :src="redlip10"
        /><img class="diamond-10" :src="diamond11" /><img class="diamond-11" :src="diamond12" />

        <div class="groupe-container-1">
          <div class="groupe-9" :style="{ 'background-image': 'url(' + groupe9 + ')' }"></div>
          <div class="groupe-11" :style="{ 'background-image': 'url(' + groupe11 + ')' }"></div>
          <div class="groupe-1-1" :style="{ 'background-image': 'url(' + groupe13 + ')' }"></div>
          <div class="groupe-1-1" :style="{ 'background-image': 'url(' + groupe15 + ')' }"></div>
        </div>
        <div class="groupe-container-2">
          <div class="groupe-9" :style="{ 'background-image': 'url(' + groupe92 + ')' }"></div>
          <div class="groupe-11" :style="{ 'background-image': 'url(' + groupe112 + ')' }"></div>
          <div class="groupe-1-1" :style="{ 'background-image': 'url(' + groupe132 + ')' }"></div>
          <div class="groupe-1-1" :style="{ 'background-image': 'url(' + groupe152 + ')' }"></div>
        </div>
        <div class="groupe-container-3">
          <div class="groupe-9" :style="{ 'background-image': 'url(' + groupe93 + ')' }"></div>
          <div class="groupe-11" :style="{ 'background-image': 'url(' + groupe113 + ')' }"></div>
          <div class="groupe-1-1" :style="{ 'background-image': 'url(' + groupe133 + ')' }"></div>
          <div class="groupe-1-1" :style="{ 'background-image': 'url(' + groupe154 + ')' }"></div>
        </div>
        <div class="groupe-container-4">
          <div class="groupe-9" :style="{ 'background-image': 'url(' + groupe94 + ')' }"></div>
          <div class="groupe-11" :style="{ 'background-image': 'url(' + groupe114 + ')' }"></div>
          <div class="groupe-1-1" :style="{ 'background-image': 'url(' + groupe134 + ')' }"></div>
          <div class="groupe-1-1" :style="{ 'background-image': 'url(' + groupe156 + ')' }"></div>
        </div>
        <div class="groupe-container-5">
          <div class="groupe-9" :style="{ 'background-image': 'url(' + groupe95 + ')' }"></div>
          <div class="groupe-11" :style="{ 'background-image': 'url(' + groupe115 + ')' }"></div>
          <div class="groupe-1-1" :style="{ 'background-image': 'url(' + groupe135 + ')' }"></div>
          <div class="groupe-1-1" :style="{ 'background-image': 'url(' + groupe158 + ')' }"></div>
        </div>
        <div class="groupe-container-6">
          <div class="groupe-9" :style="{ 'background-image': 'url(' + groupe96 + ')' }"></div>
          <div class="groupe-11" :style="{ 'background-image': 'url(' + groupe116 + ')' }"></div>
          <div class="groupe-1-1" :style="{ 'background-image': 'url(' + groupe136 + ')' }"></div>
          <div class="groupe-1-1" :style="{ 'background-image': 'url(' + groupe1510 + ')' }"></div>
        </div>
        <img class="bague-1" :src="bague2" /><img
          class="gold-duck"
          :src="goldduck"
        /><img class="montre-or-2" :src="montreor3" />
        <div class="groupe-47" :style="{ 'background-image': 'url(' + groupe47 + ')' }"></div>
        <div class="groupe-62" :style="{ 'background-image': 'url(' + groupe62 + ')' }"></div>
        <div class="groupe-95" :style="{ 'background-image': 'url(' + groupe952 + ')' }"></div>
        <div class="groupe-73" :style="{ 'background-image': 'url(' + groupe73 + ')' }"></div>
        <div class="groupe-118" :style="{ 'background-image': 'url(' + groupe118 + ')' }"></div>
        <div class="groupe-119" :style="{ 'background-image': 'url(' + groupe119 + ')' }"></div>
        <div class="groupe-120" :style="{ 'background-image': 'url(' + groupe120 + ')' }"></div>
        <div class="groupe-84" :style="{ 'background-image': 'url(' + groupe84 + ')' }"></div>
        <div class="groupe-121" :style="{ 'background-image': 'url(' + groupe121 + ')' }"></div>
        <div class="groupe-122" :style="{ 'background-image': 'url(' + groupe122 + ')' }"></div>
        <div class="groupe-123" :style="{ 'background-image': 'url(' + groupe123 + ')' }"></div>
        <div class="groupe-124" :style="{ 'background-image': 'url(' + groupe124 + ')' }"></div>
        <div class="groupe-125" :style="{ 'background-image': 'url(' + groupe125 + ')' }"></div>
        <div class="groupe-96" :style="{ 'background-image': 'url(' + groupe962 + ')' }"></div>
        <div class="groupe-126" :style="{ 'background-image': 'url(' + groupe126 + ')' }"></div>
        <div class="groupe-127" :style="{ 'background-image': 'url(' + groupe127 + ')' }"></div>
        <div class="groupe-128" :style="{ 'background-image': 'url(' + groupe128 + ')' }"></div>
        <div class="groupe-129" :style="{ 'background-image': 'url(' + groupe129 + ')' }"></div>
        <div class="groupe-130" :style="{ 'background-image': 'url(' + groupe130 + ')' }"></div>
        <div class="groupe-131" :style="{ 'background-image': 'url(' + groupe131 + ')' }"></div>
        <div class="groupe-132" :style="{ 'background-image': 'url(' + groupe1322 + ')' }"></div>
        <div class="groupe-107" :style="{ 'background-image': 'url(' + groupe107 + ')' }"></div>
        <div class="groupe-133" :style="{ 'background-image': 'url(' + groupe1332 + ')' }"></div>
        <div class="groupe-134" :style="{ 'background-image': 'url(' + groupe1342 + ')' }"></div>
        <div class="groupe-135" :style="{ 'background-image': 'url(' + groupe1352 + ')' }"></div>
        <div class="groupe-136" :style="{ 'background-image': 'url(' + groupe1362 + ')' }"></div>
        <div class="groupe-137" :style="{ 'background-image': 'url(' + groupe137 + ')' }"></div>
        <div class="groupe-138" :style="{ 'background-image': 'url(' + groupe138 + ')' }"></div>
        <div class="groupe-139" :style="{ 'background-image': 'url(' + groupe139 + ')' }"></div>
        <div class="groupe-140" :style="{ 'background-image': 'url(' + groupe140 + ')' }"></div>
        <div class="groupe-141" :style="{ 'background-image': 'url(' + groupe141 + ')' }"></div>
        <div class="groupe-5" :style="{ 'background-image': 'url(' + groupe52 + ')' }"></div>
        <div class="groupe-5" :style="{ 'background-image': 'url(' + groupe53 + ')' }"></div>
        <div class="groupe-54" :style="{ 'background-image': 'url(' + groupe54 + ')' }"></div>
        <div class="groupe-65" :style="{ 'background-image': 'url(' + groupe65 + ')' }"></div>
        <div class="groupe-55" :style="{ 'background-image': 'url(' + groupe55 + ')' }"></div>
        <div class="groupe-66" :style="{ 'background-image': 'url(' + groupe66 + ')' }"></div>
        <div class="groupe-56" :style="{ 'background-image': 'url(' + groupe56 + ')' }"></div>
        <div class="groupe-67" :style="{ 'background-image': 'url(' + groupe67 + ')' }"></div>
        <div class="groupe-78" :style="{ 'background-image': 'url(' + groupe78 + ')' }"></div>
        <div class="groupe-57" :style="{ 'background-image': 'url(' + groupe57 + ')' }"></div>
        <div class="groupe-68" :style="{ 'background-image': 'url(' + groupe68 + ')' }"></div>
        <div class="groupe-79" :style="{ 'background-image': 'url(' + groupe79 + ')' }"></div>
        <div class="groupe-58" :style="{ 'background-image': 'url(' + groupe58 + ')' }"></div>
        <div class="groupe-69" :style="{ 'background-image': 'url(' + groupe69 + ')' }"></div>
        <div class="groupe-80" :style="{ 'background-image': 'url(' + groupe80 + ')' }"></div>
        <div class="groupe-91" :style="{ 'background-image': 'url(' + groupe91 + ')' }"></div>
        <div class="groupe-59" :style="{ 'background-image': 'url(' + groupe59 + ')' }"></div>
        <div class="groupe-70" :style="{ 'background-image': 'url(' + groupe70 + ')' }"></div>
        <div class="groupe-81" :style="{ 'background-image': 'url(' + groupe81 + ')' }"></div>
        <div class="groupe-92" :style="{ 'background-image': 'url(' + groupe922 + ')' }"></div>
        <div class="groupe-60" :style="{ 'background-image': 'url(' + groupe60 + ')' }"></div>
        <div class="groupe-71" :style="{ 'background-image': 'url(' + groupe71 + ')' }"></div>
        <div class="groupe-82" :style="{ 'background-image': 'url(' + groupe82 + ')' }"></div>
        <div class="groupe-93" :style="{ 'background-image': 'url(' + groupe932 + ')' }"></div>
        <div class="groupe-105" :style="{ 'background-image': 'url(' + groupe105 + ')' }"></div>
        <div class="groupe-61" :style="{ 'background-image': 'url(' + groupe61 + ')' }"></div>
        <div class="groupe-72" :style="{ 'background-image': 'url(' + groupe72 + ')' }"></div>
        <div class="groupe-83" :style="{ 'background-image': 'url(' + groupe83 + ')' }"></div>
        <div class="groupe-94" :style="{ 'background-image': 'url(' + groupe942 + ')' }"></div>
        <div class="groupe-106" :style="{ 'background-image': 'url(' + groupe106 + ')' }"></div>
        <img class="bague-3" :src="bague4" /><img class="coin2-1" :src="coin23" /><img
          class="gold-duck-2"
          :src="goldduck3"
        /><img class="coin-6" :src="coin7" /><img class="heelshoe-3" :src="heelshoe4" />

        <div class="text-5 helveticaneue-regular-normal-black-36px">{{ text5 }}</div>
        <div class="text-6 helveticaneue-regular-normal-thunderbird-36px">{{ text6 }}</div>
        <div class="text-7 helveticaneue-regular-normal-thunderbird-36px">{{ text7 }}</div>
        <div class="text-8 helveticaneue-regular-normal-black-36px">{{ text8 }}</div>
        <div class="text-9 helveticaneue-regular-normal-black-36px">{{ text9 }}</div>
        <div class="text-10 helveticaneue-regular-normal-thunderbird-36px">{{ text10 }}</div>
        <div class="text-11 helveticaneue-regular-normal-black-36px">{{ text11 }}</div>
        <div class="text-12 helveticaneue-regular-normal-thunderbird-36px">{{ text12 }}</div>
        <div class="rectangle-115"></div>
        <div class="rectangle-117"></div>
        <div class="instagram jaapokki-regular-normal-white-23px">{{ instagram }}</div>
        <div class="twitter jaapokki-regular-normal-white-23px">{{ twitter }}</div>
        <div class="groupe-194" :style="{ 'background-image': 'url(' + groupe194 + ')' }"></div>
        <div class="join-the-club jumble-regular-normal-cerise-red-120px">{{ joinTheClub }}</div>
        <div class="join-the-club-1 jumble-regular-normal-white-120px">{{ joinTheClub2 }}</div>
        <div class="texte-dfinir-lor acme-normal-white-40px">{{ texteDfinirLor }}</div>
        <div class="groupe-195" :style="{ 'background-image': 'url(' + groupe195 + ')' }">
          <div class="trac-container-2"><img class="trac-87" :src="trac87" /><img class="trac-88" :src="trac88" /></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Groupe176 from "./Groupe176";
export default {
  name: "Web19202",
  components: {
    Groupe176,
  },
  props: [
    "metaverse",
    "roadmap",
    "team",
    "logoPngTransparent",
    "project",
    "rewardProgram",
    "goldDiggerHouse",
    "heelshoe",
    "joinUsOnDiscord",
    "groupe36",
    "groupe196",
    "trac77",
    "trac78",
    "trac35",
    "trac42",
    "goldDiggerHouse2",
    "goldDiggerHouse3",
    "trac23",
    "groupe147",
    "groupe149",
    "groupe151",
    "groupe153",
    "groupe155",
    "groupe157",
    "groupe159",
    "groupe161",
    "groupe166",
    "groupe168",
    "rectangle104",
    "rectangle105",
    "trac60",
    "trac61",
    "trac62",
    "trac63",
    "trac64",
    "trac65",
    "trac66",
    "trac67",
    "trac68",
    "trac69",
    "trac70",
    "trac71",
    "trac72",
    "trac73",
    "groupe185",
    "groupe187",
    "goldDiggerHouse4",
    "logoPngTransparent2",
    "termsConditions",
    "mgdcAllRightsReserved2022",
    "joinUsOnDiscord2",
    "groupe39",
    "groupe29",
    "redlip",
    "montreor",
    "rectangle4",
    "rectangle5",
    "rectangle6",
    "rectangle14",
    "ourTeam",
    "diamond",
    "diamond2",
    "spanText",
    "spanText2",
    "spanText3",
    "spanText4",
    "spanText5",
    "spanText6",
    "spanText7",
    "spanText8",
    "spanText9",
    "coin",
    "bague",
    "montreor2",
    "redlip2",
    "champagneSinge",
    "goldDiggerHouse5",
    "trac25",
    "trac1",
    "rectangle42",
    "rectangle52",
    "rectangle62",
    "rectangle142",
    "byOwningOneOfThe",
    "whatToExpectFrom",
    "theExclusiveReward",
    "whatIsTheExclusiv",
    "youAreABAYCOw",
    "whoCanBuyAGoldDiggerNft",
    "yourGoldDiggerNft",
    "howCanYouUseYourGoldDiggerNft",
    "title",
    "trailerVideo",
    "theMGDCIsGoing",
    "weServeChampaignT",
    "weBreakLoseTheDi",
    "weGiveMGDCGold",
    "spanText10",
    "spanText11",
    "spanText12",
    "weActivateTheBree",
    "weCelebrateTheCom",
    "percent",
    "percent2",
    "percent3",
    "percent4",
    "percent5",
    "percent6",
    "heelshoe2",
    "heelshoe3",
    "redlip3",
    "redlip4",
    "coin2",
    "coin3",
    "coin4",
    "coin5",
    "whatAreTheMetave",
    "diamond3",
    "diamond4",
    "diamond5",
    "diamond6",
    "diamond7",
    "diamond8",
    "diamond9",
    "diamond10",
    "coin22",
    "redlip5",
    "redlip6",
    "redlip7",
    "redlip8",
    "redlip9",
    "redlip10",
    "diamond11",
    "diamond12",
    "groupe9",
    "groupe11",
    "groupe13",
    "groupe15",
    "groupe92",
    "groupe112",
    "groupe132",
    "groupe152",
    "groupe93",
    "groupe113",
    "groupe133",
    "groupe154",
    "groupe94",
    "groupe114",
    "groupe134",
    "groupe156",
    "groupe95",
    "groupe115",
    "groupe135",
    "groupe158",
    "groupe96",
    "groupe116",
    "groupe136",
    "groupe1510",
    "joinUsOnDiscord3",
    "groupe27",
    "coin6",
    "mgdcIsACollecti",
    "bague2",
    "bague3",
    "goldduck",
    "goldduck2",
    "montreor3",
    "groupe47",
    "groupe62",
    "groupe952",
    "groupe73",
    "groupe118",
    "groupe119",
    "groupe120",
    "groupe84",
    "groupe121",
    "groupe122",
    "groupe123",
    "groupe124",
    "groupe125",
    "groupe962",
    "groupe126",
    "groupe127",
    "groupe128",
    "groupe129",
    "groupe130",
    "groupe131",
    "groupe1322",
    "groupe107",
    "groupe1332",
    "groupe1342",
    "groupe1352",
    "groupe1362",
    "groupe137",
    "groupe138",
    "groupe139",
    "groupe140",
    "groupe141",
    "groupe52",
    "groupe53",
    "groupe54",
    "groupe65",
    "groupe55",
    "groupe66",
    "groupe56",
    "groupe67",
    "groupe78",
    "groupe57",
    "groupe68",
    "groupe79",
    "groupe58",
    "groupe69",
    "groupe80",
    "groupe91",
    "groupe59",
    "groupe70",
    "groupe81",
    "groupe922",
    "groupe60",
    "groupe71",
    "groupe82",
    "groupe932",
    "groupe105",
    "groupe61",
    "groupe72",
    "groupe83",
    "groupe942",
    "groupe106",
    "bague4",
    "coin23",
    "goldduck3",
    "coin7",
    "heelshoe4",
    "text1",
    "text2",
    "text3",
    "text4",
    "text5",
    "text6",
    "text7",
    "text8",
    "text9",
    "text10",
    "text11",
    "text12",
    "instagram",
    "twitter",
    "groupe194",
    "joinTheClub",
    "joinTheClub2",
    "texteDfinirLor",
    "groupe195",
    "trac87",
    "trac88",
    "groupe176Props",
    "groupe1762Props",
  ],
  data() {
    return {
      showTopbarItems: false
    }
  },
  methods: {
    toggleTopbarMenu() {
      this.showTopbarItems = !this.showTopbarItems
    }
  }
};
</script>

<style>
.web-1920-2 {
  align-items: flex-end;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  height: 14488px;
  overflow: hidden;
  position: relative;
  width: 100%;
}
.topbar-container {
  height: 212px;
  left: 0;
  position: fixed;
  top: -59px;
  width: 100%;
  z-index: 4000;
}
.topbar {
  display: flex;
  height: 105px;
  left: 0;
  position: absolute;
  padding: 12px 30px;
  top: 58px;
  width: 100%;
  background: linear-gradient(90deg, #e56932 0%, #c23471 52.71%, #993783 100%);
  align-items: center;
  justify-content: space-between;
  z-index: 5000;
}
.topbar-left {
  display: flex;
  align-items: center;
}
.topbar-right {
  display: flex;
  align-items: center;
}
.topbar-items {
  display: none;
  position: absolute;
  top: 163px;
  width: 100%;
}
.topbar-item {
  text-align: center;
  font-size: 20px;
  padding: 10px 15px;
  font-family: 'Jumble';
}
.topbar-item-project {
  background-color: #DB6138;
}
.topbar-item-reward {
  background-color: #E56932;
}
.topbar-item-metaverse { 
  background-color: #CF4859;
}
.topbar-item-roadmap {
  background-color: #C63A6A;
}
.topbar-item-team {
  background-color: #B03578;
}
.topbar-item-social {
  background-color: #88296C;
}
.jumble-regular-normal-white-120px {
  font-family: Jumble;
}
.trailer-title-container {
  width: fit-content;
  margin: auto;
  position: relative;
}
/* .rectangle-2 {
  background: linear-gradient(180deg, #e56932 0%, #c23471 52.71%, #993783 100%);
  height: 1920px;
  left: 900px;
  position: absolute;
  top: -900px;
  transform: rotate(-90deg);
  width: 119px;
} */

.logo-png-transparent {
  height: 70px;
  z-index: 100;
  margin-top: 0px;
  margin-top: -15px;
  margin-right: 30px;
}
.metaverse, .roadmap, .team, .project, .reward-program {
  height: 40px;
  letter-spacing: 0;
  line-height: 40px;
  white-space: nowrap;
  font-family: Jumble;
  margin-right: 25px;
}

.gold-digger-house {
  height: 1200px;
  margin-top: 90px;
  object-fit: cover;
  width: 100%;
  z-index: 2;
}
.heelshoe {
  height: 40px;
  z-index: 5;
  margin-left: 30px;
}
.hamburger-button {
  display: none;
  height: 40px;
  cursor: pointer;
}

.discord-button {
  background-color: var(--cerise-red);
  border-radius: 20px;
  padding: 10px 22px;
  display: flex;
  align-items: flex-start;
  z-index: 6;
  align-items: center;
}

.expect-description-container {
  display: flex;
}

.groupe-42 {
  background-color: var(--cerise-red);
  border-radius: 20px;
  height: 63px;
  position: relative;
  width: 363px;
}
.discord-logo {
  width: 40px;
}
.join-us-on-discord {
  color: var(--white);
  font-family: var(--font-family-jaapokki-regular);
  font-size: 21px;
  font-weight: 400;
  letter-spacing: 0;
  margin-left: 10px;
  margin-bottom: -5px;
  line-height: 29px;
  text-align: center;
  white-space: nowrap;
}

.groupe-36 {
  background-position: 50% 50%;
  background-size: cover;
  height: 41px;
  width: 53px;
}

.social-icons-group {
  margin-left: 40px;
  display: flex;
  height: 37px;
  width: 94px;
  z-index: 4;
}

.groupe-38 {
  align-items: center;
  display: flex;
  flex: 1;
  min-width: 93.95px;
}

.groupe-196 {
  align-items: flex-start;
  background-position: 50% 50%;
  background-size: cover;
  display: flex;
  height: 37px;
  justify-content: flex-end;
  min-width: 37px;
  padding: 5.2px 5.2px;
}

.trac-container {
  height: 24px;
  position: relative;
  width: 24px;
}

.trac-77 {
  height: 21px;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 3px;
  width: 21px;
}

.instagram-logo-topbar {
  width: 40px;
}

.twitter-logo-container-topbar {
  display: flex;
  margin-bottom: 0.46px;
  margin-left: 16px;
  position: relative;
  width: 41px;
}

.trac-35 {
  height: 1px;
  left: 40px;
  object-fit: cover;
  position: absolute;
  top: 1px;
  width: 1px;
}

.twitter-logo-topbar {
  width: 41px;
}

.overlap-group11 {
  height: 13414px;
  margin-right: -345.96px;
  position: relative;
  width: 2566px;
  z-index: 1;
}

.gold-digger-house-1 {
  height: 1658px;
  left: 205px;
  object-fit: cover;
  position: absolute;
  top: 11651px;
  width: 2125px;
}

.gold-digger-house-2 {
  height: 2175px;
  left: 219px;
  object-fit: cover;
  position: absolute;
  top: 3596px;
  width: 2265px;
}

.what-to-expect-container {
  padding-top: 50px;
  padding-left: 400px;
  padding-right: 400px;
  padding-bottom: 25%;
}
.what-to-expect-from {
  font-family: Jumble;
  color: var(--rusty-red);
  font-size: 72px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 85px;
  text-align: center;
}
.what-to-expect-from.second {
  margin-bottom: 40px;
}
.diamond-2, .diamond-3 {
  width: 86px;
  margin-bottom: -20px;
}

.trac-23 {
  height: 1932px;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 4865px;
  width: 2463px;
}

.groupe-189 {
  display: flex;
  height: 953px;
  left: 1305px;
  position: absolute;
  top: 5269px;
  width: 1029px;
}

.groupe-188 {
  align-items: flex-end;
  display: flex;
  flex: 1;
  overflow: hidden;
  width: 1029.06px;
}

.groupe-container {
  height: 953px;
  margin-bottom: 0;
  position: relative;
  width: 1029px;
}

.groupe-147 {
  background-position: 50% 50%;
  background-size: cover;
  height: 240px;
  left: 261px;
  position: absolute;
  top: 356px;
  width: 379px;
}

.groupe-149 {
  background-position: 50% 50%;
  background-size: cover;
  height: 124px;
  left: 500px;
  position: absolute;
  top: 595px;
  width: 139px;
}

.groupe-151 {
  background-position: 50% 50%;
  background-size: cover;
  height: 171px;
  left: 347px;
  position: absolute;
  top: 540px;
  width: 196px;
}

.groupe-153 {
  background-position: 50% 50%;
  background-size: cover;
  height: 196px;
  left: 217px;
  position: absolute;
  top: 443px;
  width: 193px;
}

.groupe-155 {
  background-position: 50% 50%;
  background-size: cover;
  height: 176px;
  left: 150px;
  position: absolute;
  top: 356px;
  width: 151px;
}

.groupe-157 {
  background-position: 50% 50%;
  background-size: cover;
  height: 316px;
  left: 216px;
  position: absolute;
  top: 532px;
  width: 131px;
}

.groupe-159 {
  background-position: 50% 50%;
  background-size: cover;
  height: 208px;
  left: 216px;
  position: absolute;
  top: 639px;
  width: 285px;
}

.groupe-161 {
  background-position: 50% 50%;
  background-size: cover;
  height: 137px;
  left: 216px;
  position: absolute;
  top: 711px;
  width: 422px;
}

.groupe-183 {
  display: flex;
  height: 953px;
  left: 0;
  position: absolute;
  top: 0;
  width: 1029px;
}

.groupe-182 {
  align-items: flex-end;
  display: flex;
  flex: 1;
  overflow: hidden;
  padding: 3.3px 0;
  width: 1029.06px;
}

.overlap-group {
  height: 731px;
  position: relative;
  width: 731px;
}

.groupe-166 {
  background-position: 50% 50%;
  background-size: cover;
  height: 437px;
  left: 150px;
  opacity: 0.8;
  position: absolute;
  top: 192px;
  width: 66px;
}

.groupe-171 {
  display: flex;
  height: 215px;
  left: 212px;
  opacity: 0.7;
  position: absolute;
  top: 417px;
  width: 291px;
}

.groupe-1 {
  display: flex;
  flex: 1;
  width: 291.28px;
}

.groupe-168 {
  background-position: 50% 50%;
  background-size: cover;
  flex: 1;
  margin-bottom: 3.3px;
  margin-left: 3.3px;
  margin-right: 3.3px;
  margin-top: 3.3px;
  width: 284.59px;
}
.coming-soon-video {
  width: 80%;
  z-index: 1000;
  position: relative;
}
.rectangle-104 {
  height: 731px;
  left: 0;
  mix-blend-mode: color;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 731px;
}

.rectangle-105 {
  height: 499px;
  left: 146px;
  object-fit: cover;
  position: absolute;
  top: 133px;
  width: 497px;
}

.trac-60 {
  height: 63px;
  left: 146px;
  object-fit: cover;
  position: absolute;
  top: 133px;
  width: 119px;
}

.trac-61 {
  height: 131px;
  left: 634px;
  object-fit: cover;
  position: absolute;
  top: 372px;
  width: 9px;
}

.trac-62 {
  height: 224px;
  left: 269px;
  object-fit: cover;
  position: absolute;
  top: 317px;
  width: 144px;
}

.trac-63 {
  height: 444px;
  left: 146px;
  object-fit: cover;
  position: absolute;
  top: 188px;
  width: 73px;
}

.trac-64 {
  height: 137px;
  left: 212px;
  object-fit: cover;
  position: absolute;
  top: 496px;
  width: 430px;
}

.trac-65 {
  height: 315px;
  left: 146px;
  object-fit: cover;
  position: absolute;
  top: 188px;
  width: 496px;
}

.trac-66 {
  height: 248px;
  left: 257px;
  object-fit: cover;
  position: absolute;
  top: 133px;
  width: 387px;
}

.trac-67 {
  height: 61px;
  left: 214px;
  object-fit: cover;
  position: absolute;
  top: 570px;
  width: 120px;
}

.trac-68 {
  height: 96px;
  left: 214px;
  object-fit: cover;
  position: absolute;
  top: 534px;
  width: 63px;
}

.trac-69 {
  height: 204px;
  left: 326px;
  object-fit: cover;
  position: absolute;
  top: 373px;
  width: 221px;
}

.trac-70 {
  height: 132px;
  left: 212px;
  object-fit: cover;
  position: absolute;
  top: 498px;
  width: 8px;
}

.trac-71 {
  height: 285px;
  left: 212px;
  object-fit: cover;
  position: absolute;
  top: 221px;
  width: 93px;
}

.trac-72 {
  height: 245px;
  left: 92px;
  object-fit: cover;
  position: absolute;
  top: 366px;
  width: 203px;
}

.trac-73 {
  height: 248px;
  left: 90px;
  object-fit: cover;
  position: absolute;
  top: 365px;
  width: 206px;
}

.groupe-18 {
  background-position: 50% 50%;
  background-size: cover;
  height: 953px;
  left: 0;
  position: absolute;
  top: 0;
  width: 1029px;
}

.gold-digger-house-3 {
  height: 5807px;
  left: 137px;
  object-fit: cover;
  position: absolute;
  top: 6334px;
  width: 2323px;
}

.overlap-group2 {
  height: 811px;
  left: 299px;
  position: absolute;
  top: 12603px;
  width: 1920px;
}

.rectangle-2-1 {
  background: linear-gradient(180deg, #e56932 0%, #c5316e 45.81%, #993783 100%);
  filter: blur(5px);
  height: 1920px;
  left: 611px;
  position: absolute;
  top: -498px;
  transform: rotate(-90deg);
  width: 698px;
}

.logo-png-transparent-1 {
  height: 546px;
  left: 688px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 546px;
}

.terms-conditions {
  color: var(--white);
  font-family: var(--font-family-acme);
  font-size: 23px;
  font-weight: 400;
  height: 40px;
  left: 861px;
  letter-spacing: 0;
  line-height: 40px;
  position: absolute;
  text-align: center;
  top: 454px;
  white-space: nowrap;
  width: 212px;
}

.mgdc-all-rights-reserved-2022 {
  color: var(--white);
  font-family: var(--font-family-acme);
  font-size: var(--font-size-xs);
  font-weight: 400;
  height: 40px;
  left: 749px;
  letter-spacing: 0;
  line-height: 40px;
  position: absolute;
  text-align: center;
  top: 576px;
  white-space: nowrap;
  width: 426px;
}

.rectangle-68 {
  background-color: var(--cerise-red);
  border-radius: 29px;
  height: 103px;
  left: 949px;
  position: absolute;
  top: 12343px;
  width: 608px;
}

.join-us-on-discord-1 {
  color: var(--white);
  font-family: var(--font-family-jaapokki-regular);
  font-size: 37px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 29px;
  text-align: center;
}

.groupe-39 {
  background-position: 50% 50%;
  background-size: cover;
  height: 59px;
  left: 1000px;
  position: absolute;
  top: 12366px;
  width: 76px;
}

.groupe-29 {
  background-position: 50% 50%;
  background-size: cover;
  height: 62px;
  left: 557px;
  position: absolute;
  top: 10790px;
  width: 254px;
}

.redlip {
  height: 389px;
  left: 1787px;
  object-fit: cover;
  position: absolute;
  top: 12574px;
  width: 362px;
}

.montre-or {
  height: 502px;
  left: 300px;
  object-fit: cover;
  position: absolute;
  top: 12543px;
  width: 473px;
}

.rectangle-4 {
  border-radius: 37px;
  height: 625px;
  left: 473px;
  object-fit: cover;
  position: absolute;
  top: 10363px;
  width: 383px;
}

.rectangle-5 {
  border-radius: 37px;
  height: 625px;
  left: 872px;
  object-fit: cover;
  position: absolute;
  top: 10363px;
  width: 383px;
}

.rectangle-6 {
  border-radius: 37px;
  height: 625px;
  left: 1271px;
  object-fit: cover;
  position: absolute;
  top: 10363px;
  width: 383px;
}

.rectangle-14 {
  border-radius: 37px;
  height: 625px;
  left: 1670px;
  object-fit: cover;
  position: absolute;
  top: 10363px;
  width: 383px;
}

.our-team {
  color: var(--rusty-red);
  font-family: var(--font-family-jumble-regular);
  font-size: var(--font-size-xl);
  font-weight: 400;
  height: 148px;
  left: 1065px;
  letter-spacing: 0;
  line-height: 98px;
  position: absolute;
  top: 10177px;
  width: 376px;
}

.diamond {
  height: 73px;
  left: 948px;
  object-fit: cover;
  position: absolute;
  top: 10214px;
  width: 83px;
}

.diamond-1 {
  height: 73px;
  left: 1459px;
  object-fit: cover;
  position: absolute;
  top: 10214px;
  width: 83px;
}

.antoinecto {
  color: var(--flame-pea);
  font-family: var(--font-family-jumble);
  font-size: var(--font-size-l);
  font-weight: 400;
  height: 163px;
  left: 481px;
  letter-spacing: 0;
  line-height: 40px;
  position: absolute;
  top: 11014px;
  width: 351px;
}

.span0 {
  font-family: var(--font-family-jumble-regular);
}

.span1 {
  font-family: var(--font-family-jaapokki-regular);
  font-size: var(--font-size-s);
}

.aaroncto {
  color: var(--brick-red);
  font-family: var(--font-family-jumble);
  font-size: var(--font-size-l);
  font-weight: 400;
  height: 163px;
  left: 889px;
  letter-spacing: 0;
  line-height: 40px;
  position: absolute;
  top: 11019px;
  width: 351px;
}

.louiscto {
  color: var(--hibiscus);
  font-family: var(--font-family-jumble);
  font-size: var(--font-size-l);
  font-weight: 400;
  height: 163px;
  left: 1297px;
  letter-spacing: 0;
  line-height: 40px;
  position: absolute;
  top: 11014px;
  width: 351px;
}

.bad-guycto {
  color: var(--rouge);
  font-family: var(--font-family-jumble);
  font-size: var(--font-size-l);
  font-weight: 400;
  height: 163px;
  left: 1687px;
  letter-spacing: 0;
  line-height: 40px;
  position: absolute;
  top: 11014px;
  width: 351px;
}

.coin {
  height: 270px;
  left: 219px;
  object-fit: cover;
  position: absolute;
  top: 11142px;
  width: 266px;
}

.bague {
  height: 227px;
  left: 1138px;
  object-fit: cover;
  position: absolute;
  top: 11221px;
  width: 147px;
}

.montre-or-1 {
  height: 407px;
  left: 1885px;
  object-fit: cover;
  position: absolute;
  top: 11179px;
  width: 457px;
}

.redlip-1 {
  height: 389px;
  left: 253px;
  object-fit: cover;
  position: absolute;
  top: 9991px;
  width: 362px;
}

.champagne-singe {
  height: 1141px;
  left: 1104px;
  object-fit: cover;
  position: absolute;
  top: 6481px;
  width: 1141px;
}

.purple-container {
  position: relative;
  background: linear-gradient(180deg, #edbcad 1.31%, #f0d0df 27.36%, #edb8ed 56.4%);
  padding-top: 50px;
  width: 100%;
}

.examples-of-tokens {
  background-color: #993783;
  padding: 60px 0px;
  border-radius: 20px;
  max-width: 1100px;
  margin: 50px auto 0 auto;
}

.gold-digger-house-4 {
  position: relative;
  background-image: url('../../img/gold-digger-house-4@1x.png');
  background-size: 120% 100%;
  background-repeat: no-repeat;
  background-position-x: -100px;
  padding-top: 20%;
  text-align: center;
}

.nft-container {
  position: absolute;
  top: -200px;
  display: flex;
  justify-content: center;
  text-align: center;
  margin: auto;
  width: 100%;
}

.rectangle-34 {
  background-color: #f5819f;
  border-radius: 29px;
  height: 123px;
  left: 457px;
  position: absolute;
  top: 7407px;
  width: 1089px;
}

.rectangle-75 {
  background-color: #f8517d;
  border-radius: 29px;
  height: 123px;
  left: 457px;
  position: absolute;
  top: 7735px;
  width: 1089px;
}

.rectangle-77 {
  background-color: #e52c5d;
  border-radius: 29px;
  height: 123px;
  left: 457px;
  position: absolute;
  top: 8134px;
  width: 1089px;
}

.rectangle-79 {
  background-color: #c3093a;
  border-radius: 29px;
  height: 123px;
  left: 457px;
  position: absolute;
  top: 8626px;
  width: 1089px;
}

.rectangle-81 {
  background-color: #860b2c;
  border-radius: 29px;
  height: 123px;
  left: 457px;
  position: absolute;
  top: 9156px;
  width: 1089px;
}

.rectangle-83 {
  background-color: #600119;
  border-radius: 29px;
  height: 123px;
  left: 457px;
  position: absolute;
  top: 9647px;
  width: 1089px;
}

.rectangle-43 {
  background-color: var(--big-dip-o-ruby);
  border-radius: 52px;
  height: 98px;
  left: 743px;
  position: absolute;
  top: 7419px;
  width: 769px;
}

.rectangle-76 {
  background-color: var(--big-dip-o-ruby);
  border-radius: 52px;
  height: 98px;
  left: 743px;
  position: absolute;
  top: 7747px;
  width: 769px;
}

.rectangle-78 {
  background-color: var(--big-dip-o-ruby);
  border-radius: 52px;
  height: 98px;
  left: 743px;
  position: absolute;
  top: 8146px;
  width: 769px;
}

.rectangle-80 {
  background-color: var(--big-dip-o-ruby);
  border-radius: 52px;
  height: 98px;
  left: 743px;
  position: absolute;
  top: 8638px;
  width: 769px;
}

.rectangle-82 {
  background-color: var(--big-dip-o-ruby);
  border-radius: 52px;
  height: 98px;
  left: 743px;
  position: absolute;
  top: 9168px;
  width: 769px;
}

.rectangle-84 {
  background-color: var(--big-dip-o-ruby);
  border-radius: 52px;
  height: 98px;
  left: 743px;
  position: absolute;
  top: 9659px;
  width: 769px;
}

.exclusive-reward {
  background-image: url('../../img/trac--25@1x.png');
  background-size: 170% 100%;
  -o-object-fit: cover;
  object-fit: cover;
  padding-top: 250px;
  padding-bottom: 250px;
  padding-left: 10%;
  padding-right: 30%;
  margin-top: -250px;
  width: 100%;
  z-index: 1;
}
.exclusive-reward-title {
  display: flex;
}

.rectangle-38 {
  background-color: var(--plum);
  border-radius: 29px;
  height: 152px;
  left: 679px;
  position: absolute;
  top: 7558px;
  width: 1274px;
}

.rectangle-46 {
  background-color: var(--plum);
  border-radius: 29px;
  height: 222px;
  left: 679px;
  position: absolute;
  top: 7885px;
  width: 1274px;
}

.rectangle-49 {
  background-color: var(--plum);
  border-radius: 29px;
  height: 311px;
  left: 679px;
  position: absolute;
  top: 8286px;
  width: 1274px;
}

.rectangle-52 {
  background-color: var(--plum);
  border-radius: 29px;
  height: 344px;
  left: 679px;
  position: absolute;
  top: 8781px;
  width: 1274px;
}

.rectangle-55 {
  background-color: var(--plum);
  border-radius: 29px;
  height: 308px;
  left: 679px;
  position: absolute;
  top: 9309px;
  width: 1274px;
}

.rectangle-61 {
  background-color: var(--plum);
  border-radius: 29px;
  height: 235px;
  left: 679px;
  position: absolute;
  top: 9800px;
  width: 1274px;
}

.trac-1 {
  height: 0;
  left: 1567px;
  object-fit: cover;
  position: absolute;
  top: 745px;
  width: 0;
}

.rectangle-4-1 {
  border-radius: 37px;
  object-fit: cover;
  width: 20%;
  margin: 0 5px;
}

.rectangle-5-1 {
  border-radius: 37px;
  object-fit: cover;
  width: 20%;
  margin: 0 5px;
}

.rectangle-6-1 {
  border-radius: 37px;
  object-fit: cover;
  width: 20%;
  margin: 0 5px;
}

.rectangle-14-1 {
  border-radius: 37px;
  object-fit: cover;
  width: 20%;
  margin: 0 5px;
}

.by-owning-one-of-the {
  letter-spacing: 0;
  line-height: 43px;
}

.the-exclusive-reward {
  letter-spacing: 0;
  line-height: 41px;
}

.what-is-the-exclusiv {
  color: #f49f88;
  font-family: Jumble;
  font-size: 50px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 74px;
  text-align: center;
}

.you-are-a-bayc-ow {
  height: 337px;
  left: 1096px;
  letter-spacing: 0;
  line-height: 41px;
  position: absolute;
  top: 4364px;
  width: 835px;
}

.who-can-buy-a-gold-digger-nft {
  height: 248px;
  left: 1053px;
  letter-spacing: 0;
  line-height: 93px;
  position: absolute;
  top: 4114px;
  width: 830px;
}

.your-gold-digger-nft {
  height: 849px;
  left: 491px;
  letter-spacing: 0;
  line-height: 41px;
  position: absolute;
  top: 5492px;
  width: 835px;
}

.how-can-you-use-your-gold-digger-nft {
  color: var(--white);
  font-family: var(--font-family-jumble-regular);
  font-size: var(--font-size-xl);
  font-weight: 400;
  height: 248px;
  left: 462px;
  letter-spacing: 0;
  line-height: 98px;
  position: absolute;
  top: 5213px;
  width: 969px;
}

.title {
  height: 169px;
  left: 767px;
  letter-spacing: 0;
  line-height: 70px;
  position: absolute;
  text-align: center;
  top: 1849px;
  width: 997px;
}

.trailer-video {
  height: 156px;
  font-family: Jumble;
  letter-spacing: 0;
  text-align: center;
  z-index: 1;
  position: absolute;
  top: 10px;
  left: -10px;
}
.trailer-video-highligh {
  margin-bottom: 40px;
}

.the-mgdc-is-going {
  color: var(--black);
  font-family: var(--font-family-acme);
  font-size: var(--font-size-s);
  font-weight: 400;
  height: 124px;
  left: 457px;
  letter-spacing: 0;
  line-height: 40px;
  position: absolute;
  top: 7027px;
  width: 732px;
}

.we-serve-champaign-t {
  height: 54px;
  left: 859px;
  letter-spacing: 0;
  line-height: 40px;
  position: absolute;
  top: 7604px;
  width: 1212px;
}

.we-break-lose-the-di {
  height: 101px;
  left: 859px;
  letter-spacing: 0;
  line-height: 40px;
  position: absolute;
  top: 7943px;
  width: 1042px;
}

.we-give-mgdc-gold {
  height: 263px;
  left: 859px;
  letter-spacing: 0;
  line-height: 40px;
  position: absolute;
  top: 8331px;
  width: 1042px;
}

.we-are-publishing-th {
  color: var(--white);
  font-family: var(--font-family-acme);
  font-size: var(--font-size-l);
  font-weight: 400;
  height: 228px;
  left: 859px;
  letter-spacing: 0;
  line-height: 40px;
  position: absolute;
  top: 8844px;
  width: 1042px;
}

.span1-1 {
  letter-spacing: 0.04px;
}

.we-activate-the-bree {
  height: 183px;
  left: 859px;
  letter-spacing: 0;
  line-height: 40px;
  position: absolute;
  top: 9371px;
  width: 1042px;
}

.we-celebrate-the-com {
  height: 163px;
  left: 859px;
  letter-spacing: 0;
  line-height: 40px;
  position: absolute;
  top: 9846px;
  width: 1042px;
}

.percent {
  height: 75px;
  left: 588px;
  letter-spacing: 0;
  line-height: 40px;
  position: absolute;
  top: 7432px;
  width: 132px;
}

.percent-1 {
  height: 75px;
  left: 581px;
  letter-spacing: 0;
  line-height: 40px;
  position: absolute;
  top: 7760px;
  width: 132px;
}

.percent-2 {
  height: 75px;
  left: 581px;
  letter-spacing: 0;
  line-height: 40px;
  position: absolute;
  top: 8159px;
  width: 132px;
}

.percent-3 {
  height: 75px;
  left: 581px;
  letter-spacing: 0;
  line-height: 40px;
  position: absolute;
  top: 8650px;
  width: 132px;
}

.percent-4 {
  height: 75px;
  left: 581px;
  letter-spacing: 0;
  line-height: 40px;
  position: absolute;
  top: 9181px;
  width: 132px;
}

.percent-5 {
  height: 75px;
  left: 564px;
  letter-spacing: 0;
  line-height: 40px;
  position: absolute;
  top: 9672px;
  width: 166px;
}

.heelshoe-1 {
  right: 0px;
  -o-object-fit: cover;
  object-fit: cover;
  position: absolute;
  top: 32%;
  width: 585px;
  z-index: 500;
}

.heelshoe-2 {
  height: 719px;
  left: 1607px;
  object-fit: cover;
  position: absolute;
  top: 4472px;
  width: 644px;
}

.redlip-2 {
  right: -200px;
  -o-object-fit: cover;
  object-fit: cover;
  position: absolute;
  top: 250px;
  width: 529px;
  z-index: 4000;
}

.redlip-3 {
  left: 0;
  -o-object-fit: cover;
  object-fit: cover;
  position: absolute;
  top: 1000px;
  width: 20%;
  z-index: 500;
}

.coin-1 {
  height: 566px;
  left: 1791px;
  object-fit: cover;
  position: absolute;
  top: 3150px;
  width: 558px;
}

.coin-2 {
  height: 157px;
  left: 1168px;
  object-fit: cover;
  position: absolute;
  top: 3955px;
  width: 156px;
}

.coin-3 {
  height: 186px;
  left: 1235px;
  object-fit: cover;
  position: absolute;
  top: 4966px;
  width: 183px;
}

.coin-4 {
  left: -7%;
  object-fit: cover;
  -o-object-fit: cover;
  position: absolute;
  top: 250px;
  width: 16%;
}

.what-are-the-metave {
  height: 212px;
  left: 457px;
  letter-spacing: 0;
  line-height: 70px;
  position: absolute;
  top: 6827px;
  width: 937px;
}

.diamond-4 {
  height: 73px;
  object-fit: cover;
  width: 83px;
}

.diamond-5 {
  height: 73px;
  left: 940px;
  object-fit: cover;
  position: absolute;
  top: 4152px;
  width: 83px;
}

.diamond-6 {
  height: 73px;
  left: 351px;
  object-fit: cover;
  position: absolute;
  top: 5253px;
  width: 83px;
}

.diamond-7 {
  height: 73px;
  object-fit: cover;
  width: 83px;
}

.diamond-8 {
  height: 73px;
  left: 1845px;
  object-fit: cover;
  position: absolute;
  top: 4145px;
  width: 83px;
}

.diamond-9 {
  height: 73px;
  left: 1293px;
  object-fit: cover;
  position: absolute;
  top: 5254px;
  width: 83px;
}

.coin2 {
  height: 187px;
  left: 199px;
  object-fit: cover;
  position: absolute;
  top: 3933px;
  width: 180px;
}

.redlip-4 {
  height: 70px;
  left: 477px;
  object-fit: cover;
  position: absolute;
  top: 7435px;
  width: 65px;
}

.redlip-5 {
  height: 70px;
  left: 477px;
  object-fit: cover;
  position: absolute;
  top: 7763px;
  width: 65px;
}

.redlip-6 {
  height: 70px;
  left: 477px;
  object-fit: cover;
  position: absolute;
  top: 8162px;
  width: 65px;
}

.redlip-7 {
  height: 70px;
  left: 477px;
  object-fit: cover;
  position: absolute;
  top: 8654px;
  width: 65px;
}

.redlip-8 {
  height: 70px;
  left: 477px;
  object-fit: cover;
  position: absolute;
  top: 9171px;
  width: 65px;
}

.redlip-9 {
  height: 70px;
  left: 477px;
  object-fit: cover;
  position: absolute;
  top: 9662px;
  width: 65px;
}

.diamond-10 {
  height: 73px;
  left: 352px;
  object-fit: cover;
  position: absolute;
  top: 6847px;
  width: 83px;
}

.diamond-11 {
  height: 73px;
  left: 965px;
  object-fit: cover;
  position: absolute;
  top: 6844px;
  width: 83px;
}

.video-container {
  position: relative;
  background-color: var(--white);
  border: 1px solid #707070;
  border-radius: 74px;
  box-shadow: 0px 83px 69px #00000029;
  height: 758px;
  width: 70%;
  margin: auto;
  z-index: 3;
}

.groupe-container-1 {
  height: 57px;
  left: 718px;
  position: absolute;
  top: 7604px;
  width: 66px;
}

.groupe-9 {
  background-position: 50% 50%;
  background-size: cover;
  height: 27px;
  left: 0;
  position: absolute;
  top: 0;
  width: 36px;
}

.groupe-11 {
  background-position: 50% 50%;
  background-size: cover;
  height: 30px;
  left: 26px;
  position: absolute;
  top: 26px;
  width: 40px;
}

.groupe-1-1 {
  background-position: 50% 50%;
  background-size: cover;
  height: 1px;
  left: 34px;
  position: absolute;
  top: 26px;
  width: 2px;
}

.groupe-container-2 {
  height: 57px;
  left: 718px;
  position: absolute;
  top: 7957px;
  width: 66px;
}

.groupe-container-3 {
  height: 57px;
  left: 718px;
  position: absolute;
  top: 8405px;
  width: 66px;
}

.groupe-container-4 {
  height: 57px;
  left: 718px;
  position: absolute;
  top: 8914px;
  width: 66px;
}

.groupe-container-5 {
  height: 57px;
  left: 718px;
  position: absolute;
  top: 9428px;
  width: 66px;
}

.groupe-container-6 {
  height: 57px;
  left: 718px;
  position: absolute;
  top: 9888px;
  width: 66px;
}

.join-us-on-discord-big-button {
  position: relative;
  z-index: 4000;
  background-color: var(--cerise-red);
  border-radius: 29px;
  padding: 50px 20px;
  display: flex;
  width: 60%;
  margin: 50px auto 150px auto;
  text-align: center;
  align-items: center;
  justify-content: center;
}

.join-us-on-discord-2 {
  color: var(--white);
  font-family: var(--font-family-jaapokki-regular);
  font-size: 53px;
  font-weight: 400;
  height: 71px;
  left: 1041px;
  letter-spacing: 0;
  line-height: 29px;
  position: absolute;
  text-align: center;
  top: 2915px;
  width: 639px;
}

.discord-big-logo {
  background-position: 50% 50%;
  background-size: cover;
  width: 75px;
  margin-right: 25px;
}

.coin-5 {
  left: -185px;
  object-fit: cover;
  position: absolute;
  top: 250px;
  width: 465px;
}

.mgdc-is-a-collecti {
  font-family: Jumble;
  color: var(--white);
  font-weight: 400;
  letter-spacing: 0;
  background: linear-gradient(180deg, #e56932 0%, #ba3474 83.74%, #9b3782 100%);
  width: 100%;
  text-align: center;
  font-size: 30px;
  padding-top: 40px;
  padding-bottom: 40px;
  padding-left: 20%;
  padding-right: 20%;
  line-height: 45px;
}

.bague-1 {
  height: 352px;
  left: 555px;
  object-fit: cover;
  position: absolute;
  top: 4027px;
  width: 229px;
}

.bague-2 {
  position: absolute;
  right: -40px;
  -o-object-fit: cover;
  object-fit: cover;
  top: 135px;
  width: 13%;
}

.gold-duck {
  height: 348px;
  left: 1571px;
  object-fit: cover;
  position: absolute;
  top: 3716px;
  width: 371px;
}

.gold-duck-1 {
  left: 100px;
  object-fit: cover;
  position: absolute;
  top: 800px;
  width: 203px;
}

.montre-or-2 {
  height: 615px;
  left: 339px;
  object-fit: cover;
  position: absolute;
  top: 4563px;
  width: 691px;
}

.groupe-47 {
  background-position: 50% 50%;
  background-size: cover;
  height: 62px;
  left: 774px;
  position: absolute;
  top: 7435px;
  width: 62px;
}

.groupe-62 {
  background-position: 50% 50%;
  background-size: cover;
  height: 62px;
  left: 774px;
  position: absolute;
  top: 7763px;
  width: 62px;
}

.groupe-95 {
  background-position: 50% 50%;
  background-size: cover;
  height: 62px;
  left: 843px;
  position: absolute;
  top: 7763px;
  width: 62px;
}

.groupe-73 {
  background-position: 50% 50%;
  background-size: cover;
  height: 62px;
  left: 774px;
  position: absolute;
  top: 8162px;
  width: 62px;
}

.groupe-118 {
  background-position: 50% 50%;
  background-size: cover;
  height: 62px;
  left: 843px;
  position: absolute;
  top: 8162px;
  width: 62px;
}

.groupe-119 {
  background-position: 50% 50%;
  background-size: cover;
  height: 62px;
  left: 915px;
  position: absolute;
  top: 8162px;
  width: 62px;
}

.groupe-120 {
  background-position: 50% 50%;
  background-size: cover;
  height: 62px;
  left: 987px;
  position: absolute;
  top: 8162px;
  width: 62px;
}

.groupe-84 {
  background-position: 50% 50%;
  background-size: cover;
  height: 62px;
  left: 774px;
  position: absolute;
  top: 8654px;
  width: 62px;
}

.groupe-121 {
  background-position: 50% 50%;
  background-size: cover;
  height: 62px;
  left: 843px;
  position: absolute;
  top: 8654px;
  width: 62px;
}

.groupe-122 {
  background-position: 50% 50%;
  background-size: cover;
  height: 62px;
  left: 915px;
  position: absolute;
  top: 8654px;
  width: 62px;
}

.groupe-123 {
  background-position: 50% 50%;
  background-size: cover;
  height: 62px;
  left: 987px;
  position: absolute;
  top: 8654px;
  width: 62px;
}

.groupe-124 {
  background-position: 50% 50%;
  background-size: cover;
  height: 62px;
  left: 1059px;
  position: absolute;
  top: 8654px;
  width: 62px;
}

.groupe-125 {
  background-position: 50% 50%;
  background-size: cover;
  height: 62px;
  left: 1131px;
  position: absolute;
  top: 8654px;
  width: 62px;
}

.groupe-96 {
  background-position: 50% 50%;
  background-size: cover;
  height: 62px;
  left: 774px;
  position: absolute;
  top: 9184px;
  width: 62px;
}

.groupe-126 {
  background-position: 50% 50%;
  background-size: cover;
  height: 62px;
  left: 843px;
  position: absolute;
  top: 9184px;
  width: 62px;
}

.groupe-127 {
  background-position: 50% 50%;
  background-size: cover;
  height: 62px;
  left: 915px;
  position: absolute;
  top: 9184px;
  width: 62px;
}

.groupe-128 {
  background-position: 50% 50%;
  background-size: cover;
  height: 62px;
  left: 987px;
  position: absolute;
  top: 9184px;
  width: 62px;
}

.groupe-129 {
  background-position: 50% 50%;
  background-size: cover;
  height: 62px;
  left: 1059px;
  position: absolute;
  top: 9184px;
  width: 62px;
}

.groupe-130 {
  background-position: 50% 50%;
  background-size: cover;
  height: 62px;
  left: 1131px;
  position: absolute;
  top: 9184px;
  width: 62px;
}

.groupe-131 {
  background-position: 50% 50%;
  background-size: cover;
  height: 62px;
  left: 1203px;
  position: absolute;
  top: 9184px;
  width: 62px;
}

.groupe-132 {
  background-position: 50% 50%;
  background-size: cover;
  height: 62px;
  left: 1275px;
  position: absolute;
  top: 9184px;
  width: 62px;
}

.groupe-107 {
  background-position: 50% 50%;
  background-size: cover;
  height: 62px;
  left: 774px;
  position: absolute;
  top: 9675px;
  width: 62px;
}

.groupe-133 {
  background-position: 50% 50%;
  background-size: cover;
  height: 62px;
  left: 842px;
  position: absolute;
  top: 9675px;
  width: 62px;
}

.groupe-134 {
  background-position: 50% 50%;
  background-size: cover;
  height: 62px;
  left: 914px;
  position: absolute;
  top: 9675px;
  width: 62px;
}

.groupe-135 {
  background-position: 50% 50%;
  background-size: cover;
  height: 62px;
  left: 986px;
  position: absolute;
  top: 9675px;
  width: 62px;
}

.groupe-136 {
  background-position: 50% 50%;
  background-size: cover;
  height: 62px;
  left: 1058px;
  position: absolute;
  top: 9675px;
  width: 62px;
}

.groupe-137 {
  background-position: 50% 50%;
  background-size: cover;
  height: 62px;
  left: 1130px;
  position: absolute;
  top: 9675px;
  width: 62px;
}

.groupe-138 {
  background-position: 50% 50%;
  background-size: cover;
  height: 62px;
  left: 1202px;
  position: absolute;
  top: 9675px;
  width: 62px;
}

.groupe-139 {
  background-position: 50% 50%;
  background-size: cover;
  height: 62px;
  left: 1274px;
  position: absolute;
  top: 9675px;
  width: 62px;
}

.groupe-140 {
  background-position: 50% 50%;
  background-size: cover;
  height: 62px;
  left: 1346px;
  position: absolute;
  top: 9675px;
  width: 62px;
}

.groupe-141 {
  background-position: 50% 50%;
  background-size: cover;
  height: 62px;
  left: 1418px;
  position: absolute;
  top: 9675px;
  width: 62px;
}

.groupe-5 {
  background-position: 50% 50%;
  background-size: cover;
  height: 47px;
  left: 848px;
  position: absolute;
  top: 7446px;
  width: 51px;
}

.groupe-54 {
  background-position: 50% 50%;
  background-size: cover;
  height: 47px;
  left: 920px;
  position: absolute;
  top: 7446px;
  width: 51px;
}

.groupe-65 {
  background-position: 50% 50%;
  background-size: cover;
  height: 47px;
  left: 920px;
  position: absolute;
  top: 7774px;
  width: 51px;
}

.groupe-55 {
  background-position: 50% 50%;
  background-size: cover;
  height: 47px;
  left: 992px;
  position: absolute;
  top: 7446px;
  width: 51px;
}

.groupe-66 {
  background-position: 50% 50%;
  background-size: cover;
  height: 47px;
  left: 992px;
  position: absolute;
  top: 7774px;
  width: 51px;
}

.groupe-56 {
  background-position: 50% 50%;
  background-size: cover;
  height: 47px;
  left: 1064px;
  position: absolute;
  top: 7446px;
  width: 51px;
}

.groupe-67 {
  background-position: 50% 50%;
  background-size: cover;
  height: 47px;
  left: 1064px;
  position: absolute;
  top: 7774px;
  width: 51px;
}

.groupe-78 {
  background-position: 50% 50%;
  background-size: cover;
  height: 47px;
  left: 1064px;
  position: absolute;
  top: 8173px;
  width: 51px;
}

.groupe-57 {
  background-position: 50% 50%;
  background-size: cover;
  height: 47px;
  left: 1136px;
  position: absolute;
  top: 7446px;
  width: 51px;
}

.groupe-68 {
  background-position: 50% 50%;
  background-size: cover;
  height: 47px;
  left: 1136px;
  position: absolute;
  top: 7774px;
  width: 51px;
}

.groupe-79 {
  background-position: 50% 50%;
  background-size: cover;
  height: 47px;
  left: 1136px;
  position: absolute;
  top: 8173px;
  width: 51px;
}

.groupe-58 {
  background-position: 50% 50%;
  background-size: cover;
  height: 47px;
  left: 1208px;
  position: absolute;
  top: 7446px;
  width: 51px;
}

.groupe-69 {
  background-position: 50% 50%;
  background-size: cover;
  height: 47px;
  left: 1208px;
  position: absolute;
  top: 7774px;
  width: 51px;
}

.groupe-80 {
  background-position: 50% 50%;
  background-size: cover;
  height: 47px;
  left: 1208px;
  position: absolute;
  top: 8173px;
  width: 51px;
}

.groupe-91 {
  background-position: 50% 50%;
  background-size: cover;
  height: 47px;
  left: 1208px;
  position: absolute;
  top: 8665px;
  width: 51px;
}

.groupe-59 {
  background-position: 50% 50%;
  background-size: cover;
  height: 47px;
  left: 1280px;
  position: absolute;
  top: 7446px;
  width: 51px;
}

.groupe-70 {
  background-position: 50% 50%;
  background-size: cover;
  height: 47px;
  left: 1280px;
  position: absolute;
  top: 7774px;
  width: 51px;
}

.groupe-81 {
  background-position: 50% 50%;
  background-size: cover;
  height: 47px;
  left: 1280px;
  position: absolute;
  top: 8173px;
  width: 51px;
}

.groupe-92 {
  background-position: 50% 50%;
  background-size: cover;
  height: 47px;
  left: 1280px;
  position: absolute;
  top: 8665px;
  width: 51px;
}

.groupe-60 {
  background-position: 50% 50%;
  background-size: cover;
  height: 47px;
  left: 1352px;
  position: absolute;
  top: 7446px;
  width: 51px;
}

.groupe-71 {
  background-position: 50% 50%;
  background-size: cover;
  height: 47px;
  left: 1352px;
  position: absolute;
  top: 7774px;
  width: 51px;
}

.groupe-82 {
  background-position: 50% 50%;
  background-size: cover;
  height: 47px;
  left: 1352px;
  position: absolute;
  top: 8173px;
  width: 51px;
}

.groupe-93 {
  background-position: 50% 50%;
  background-size: cover;
  height: 47px;
  left: 1352px;
  position: absolute;
  top: 8665px;
  width: 51px;
}

.groupe-105 {
  background-position: 50% 50%;
  background-size: cover;
  height: 47px;
  left: 1352px;
  position: absolute;
  top: 9195px;
  width: 51px;
}

.groupe-61 {
  background-position: 50% 50%;
  background-size: cover;
  height: 47px;
  left: 1424px;
  position: absolute;
  top: 7446px;
  width: 51px;
}

.groupe-72 {
  background-position: 50% 50%;
  background-size: cover;
  height: 47px;
  left: 1424px;
  position: absolute;
  top: 7774px;
  width: 51px;
}

.groupe-83 {
  background-position: 50% 50%;
  background-size: cover;
  height: 47px;
  left: 1424px;
  position: absolute;
  top: 8173px;
  width: 51px;
}

.groupe-94 {
  background-position: 50% 50%;
  background-size: cover;
  height: 47px;
  left: 1424px;
  position: absolute;
  top: 8665px;
  width: 51px;
}

.groupe-106 {
  background-position: 50% 50%;
  background-size: cover;
  height: 47px;
  left: 1424px;
  position: absolute;
  top: 9195px;
  width: 51px;
}

.bague-3 {
  height: 352px;
  left: 1991px;
  object-fit: cover;
  position: absolute;
  top: 8269px;
  width: 229px;
}

.coin2-1 {
  height: 332px;
  left: 176px;
  object-fit: cover;
  position: absolute;
  top: 9285px;
  width: 321px;
}

.gold-duck-2 {
  height: 348px;
  left: 1991px;
  object-fit: cover;
  position: absolute;
  top: 9549px;
  width: 371px;
}

.coin-6 {
  height: 186px;
  left: 1077px;
  object-fit: cover;
  position: absolute;
  top: 7145px;
  width: 183px;
}

.heelshoe-3 {
  height: 286px;
  left: 161px;
  object-fit: cover;
  position: absolute;
  top: 7904px;
  width: 256px;
}

.text-1 {
  height: 51px;
  left: 452px;
  letter-spacing: 0;
  line-height: 36px;
  position: absolute;
  top: 3556px;
  width: 40px;
}

.text-2 {
  height: 51px;
  left: 452px;
  letter-spacing: 0;
  line-height: 36px;
  position: absolute;
  top: 3720px;
  width: 40px;
}

.heart-logo {
  height: 51px;
  letter-spacing: 0;
  line-height: 36px;
  width: 40px;
  margin-right: 12px;
}

.pic-logo {
  height: 51px;
  letter-spacing: 0;
  line-height: 36px;
  width: 40px;
  margin-right: 12px;
}

.text-5 {
  height: 51px;
  left: 1049px;
  letter-spacing: 0;
  line-height: 36px;
  position: absolute;
  top: 4373px;
  width: 40px;
}

.text-6 {
  height: 51px;
  left: 1046px;
  letter-spacing: 0;
  line-height: 36px;
  position: absolute;
  top: 4496px;
  width: 40px;
}

.text-7 {
  height: 51px;
  left: 444px;
  letter-spacing: 0;
  line-height: 36px;
  position: absolute;
  top: 5501px;
  width: 40px;
}

.text-8 {
  height: 51px;
  left: 444px;
  letter-spacing: 0;
  line-height: 36px;
  position: absolute;
  top: 5624px;
  width: 40px;
}

.text-9 {
  height: 51px;
  left: 444px;
  letter-spacing: 0;
  line-height: 36px;
  position: absolute;
  top: 5908px;
  width: 40px;
}

.text-10 {
  height: 51px;
  left: 444px;
  letter-spacing: 0;
  line-height: 36px;
  position: absolute;
  top: 6076px;
  width: 40px;
}

.text-11 {
  height: 51px;
  left: 444px;
  letter-spacing: 0;
  line-height: 36px;
  position: absolute;
  top: 6197px;
  width: 40px;
}

.text-12 {
  height: 51px;
  left: 444px;
  letter-spacing: 0;
  line-height: 36px;
  position: absolute;
  top: 5747px;
  width: 40px;
}

.rectangle-115 {
  background-color: #df5f3d;
  border-radius: 22px;
  height: 68px;
  left: 949px;
  position: absolute;
  top: 12475px;
  width: 290px;
}

.rectangle-117 {
  background-color: #a6357d;
  border-radius: 22px;
  height: 68px;
  left: 1259px;
  position: absolute;
  top: 12475px;
  width: 298px;
}

.instagram {
  height: 33px;
  left: 1046px;
  letter-spacing: 0;
  line-height: 29px;
  position: absolute;
  text-align: center;
  top: 12491px;
  white-space: nowrap;
  width: 160px;
}

.twitter {
  height: 33px;
  left: 1356px;
  letter-spacing: 0;
  line-height: 29px;
  position: absolute;
  text-align: center;
  top: 12491px;
  white-space: nowrap;
  width: 160px;
}

.groupe-194 {
  background-position: 50% 50%;
  background-size: cover;
  height: 37px;
  left: 1281px;
  position: absolute;
  top: 12491px;
  width: 45px;
}

.join-the-club {
  height: 202px;
  left: 795px;
  letter-spacing: 0;
  line-height: 70px;
  position: absolute;
  text-align: center;
  top: 11947px;
  width: 953px;
}

.join-the-club-1 {
  height: 207px;
  left: 835px;
  letter-spacing: 0;
  line-height: 70px;
  position: absolute;
  text-align: center;
  top: 11966px;
  width: 873px;
}

.texte-dfinir-lor {
  height: 173px;
  left: 895px;
  letter-spacing: 0;
  line-height: 40px;
  position: absolute;
  top: 12142px;
  width: 765px;
}

.groupe-195 {
  align-items: flex-start;
  background-position: 50% 50%;
  background-size: cover;
  display: flex;
  height: 39px;
  justify-content: flex-end;
  left: 978px;
  min-width: 39px;
  padding: 5.5px 5.5px;
  position: absolute;
  top: 12488px;
}

.trac-container-2 {
  height: 25px;
  position: relative;
  width: 25px;
}

.trac-87 {
  height: 22px;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 3px;
  width: 22px;
}

.trac-88 {
  height: 5px;
  left: 20px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 5px;
}


@media screen and (max-width: 1700px) {
  .metaverse, .roadmap, .team, .project, .reward-program {
    font-size: smaller;
  }
  .logo-png-transparent {
    height: 45px;
    margin-right: 20px;
  }
  .join-us-on-discord {
    font-size: 16px;
  }
  .discord-button {
    padding: 7px 20px;
  }
  .discord-logo {
    width: 35px;
  }
  .twitter-logo-topbar {
    width: 30px;
  }
  .instagram-logo-topbar {
    width: 30px;
  }
  .heelshoe {
    display: none;
  }
  .what-to-expect-container {
    padding-left: 300px;
    padding-right: 300px;
  }
  .what-to-expect-from {
    font-size: 55px;
    line-height: 70px;
  }
  .redlip-2 {
    right: -90px;
    width: 280px;
  }
  .coin-5 {
    width: 315px;
    left: -115px;
  }
  .gold-duck-1 {
    top: 750px;
    left: 50px;
    width: 130px;
  }
}
@media screen and (max-width: 1500px) {
  .join-us-on-discord-big-button {
    padding: 20px 20px;
  }
  .join-us-on-discord-1 {
    font-size: 30px;
  }
  .jumble-regular-normal-white-120px, .jumble-regular-normal-cerise-red-120px {
    font-size: 100px!important;
  }
  .acme-normal-black-36px {
    font-size: 28px!important;    
  }
  .metaverse, .roadmap, .team, .project, .reward-program {
    font-size: 19px;
  }
  .logo-png-transparent {
    height: 45px;
    margin-right: 20px;
  }
  .join-us-on-discord {
    font-size: 16px;
  }
  .discord-button {
    padding: 5px 20px;
  }
  .discord-logo {
    width: 30px;
  }
  .twitter-logo-topbar {
    width: 30px;
  }
  .instagram-logo-topbar {
    width: 30px;
  }
  .heelshoe {
    display: none;
  }
  .reward-program {
    display: none;
  }
  .examples-of-tokens {
    max-width: 700px;
  }
  .what-to-expect-from {
    text-align: center;
    font-size: 45px;
    line-height: 60px;
  }
  .what-to-expect-container {
    padding-left: 200px;
    padding-right: 200px;
  }
  .redlip-2 {
    right: -90px;
    width: 250px;
  }
  .coin-5 {
    width: 245px;
    left: -82px;
  }
  .gold-duck-1 {
    top: 750px;
    left: 50px;
    width: 100px;
  }
  .nft-container {
    top: -150px;
  }
}
@media screen and (max-width: 1000px) {
  .jumble-regular-normal-white-120px, .jumble-regular-normal-cerise-red-120px {
    font-size: 90px!important;
  }
  .examples-of-tokens {
    max-width: 500px;
  }
  .topbar-items {
    display: block;
  }
  .metaverse, .roadmap, .team, .project, .reward-program, .social-icons-group {
    display: none;
  }
  .social-icons-group-mobile {
    display: flex;
    height: 37px;
    width: 94px;
    z-index: 4;
    text-align: center;
    margin: auto;
  }
  .hamburger-button {
    display: block;
    height: 30px;
  }
  .mgdc-is-a-collecti {
    padding-left: 12%;
    padding-right: 12%;
    font-size: 43px;
    line-height: 60px;
  }
  .what-to-expect-from {
    font-size: 38px;
  }
  .coin-5 {
    width: 210px
  }
  .redlip-2 {
    right: -90px;
    width: 230px;
  }
  .what-to-expect-container {
    padding-left: 170px;
    padding-right: 170px;
    padding-bottom: 20%;
  }
  .diamond-2, .diamond-3 {
    width: 46px;
    margin-bottom: -10px;
  }
  .nft-container {
    top: -50px;
  }
}
</style>
