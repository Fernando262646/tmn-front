<template>
  <div class="tmn-menu">
    <table style="font-size:8pt; font-family:Verdana; text-decoration: none; border-collapse: initial; color: initial; line-height: normal;" id="Table1" width="100%" border="1" height="32" cellpadding="2" cellspacing="0">
      <tr>
        <td class="section"><a onclick="collapseMenu('mnu1'); this.className = 'Collapse';" class="WhiteText" href="#"><b>• GENERAL</b></a></td>
      </tr>
      <tr id="mnu1" class="DeCollapse">
        <td>
          <div class="menuOut" onmouseover="this.className='menuIn'" onmouseout="this.className='menuOut'"><router-link to="/tos">- Terms Of Service</router-link></div>
          <div class="menuOut" onmouseover="this.className='menuIn'" onmouseout="this.className='menuOut'"><router-link to="/news">- News</router-link></div>

          <div class="menuOut" onmouseover="this.className='menuIn'" onmouseout="this.className='menuOut'"><a class="type6" href="gameforum.htm">- Game Forum</a></div>
          <div class="menuOut" onmouseover="this.className='menuIn'" onmouseout="this.className='menuOut'"><a class="type6" href="ocads.htm">- O.C. Classifieds</a></div>
          <div class="menuOut" onmouseover="this.className='menuIn'" onmouseout="this.className='menuOut'"><a class="type6" href="faq.html">- FAQs</a></div>
          <div class="menuOut" onmouseover="this.className='menuIn'" onmouseout="this.className='menuOut'"><a class="type6" href="helpcentral.aspx">- Help Request Center</a></div>
          <div class="menuOut" onmouseover="this.className='menuIn'" onmouseout="this.className='menuOut'"><a class="type6" href="">- Logout</a></div>

          <div class="menuOut" onmouseover="this.className='menuIn'" onmouseout="this.className='menuOut'"><router-link to="/template">- Template</router-link></div>

          <div class="menuOut" onmouseover="this.className='menuIn'" onmouseout="this.className='menuOut'"><router-link to="/login">- Login</router-link></div>
        </td>
      </tr>
      <tr>
        <td class="section"><a onclick="collapseMenu('mnu2'); this.className = 'Collapse';" class="WhiteText" href="#"><b>• STATISTICS</b></a></td>
      </tr>
      <tr id="mnu2" class="DeCollapse">
        <td>
          <div class="menuOut" onmouseover="this.className='menuIn'" onmouseout="this.className='menuOut'"><a class="type6" href="stats_signups.aspx">- Last Signups</a></div>
          <div class="menuOut" onmouseover="this.className='menuIn'" onmouseout="this.className='menuOut'"><a class="type6" href="stats_kills.aspx">- Last Kills</a></div>
          <div class="menuOut" onmouseover="this.className='menuIn'" onmouseout="this.className='menuOut'"><a class="type6" href="stats_countries.aspx">- Countries Information</a></div>
          <div class="menuOut" onmouseover="this.className='menuIn'" onmouseout="this.className='menuOut'"><a class="type6" href="stats_networks.aspx">- Networks Information</a></div>
          <div class="menuOut" onmouseover="this.className='menuIn'" onmouseout="this.className='menuOut'"><a class="type6" href="stats_companies.aspx">- Businesses Stats</a></div>
          <div class="menuOut" onmouseover="this.className='menuIn'" onmouseout="this.className='menuOut'"><a class="type6" href="stats_general.aspx">- General Stats</a></div>
          <div class="menuOut" onmouseover="this.className='menuIn'" onmouseout="this.className='menuOut'"><a class="type6" href="stats_killsrecords.aspx">- Kills Records</a></div>
        </td>
      </tr>
      <tr>
        <td class="section"><a onclick="collapseMenu('mnu3'); this.className = 'Collapse';" class="WhiteText" href="#"><b>• PERSONAL</b></a></td>
      </tr>
      <tr id="mnu3" class="DeCollapse">
        <td>
          <div class="menuOut" onmouseover="this.className='menuIn'" onmouseout="this.className='menuOut'"><a class="type6" href="messages.aspx">- Phone Inbox</a></div>
          <div class="menuOut" onmouseover="this.className='menuIn'" onmouseout="this.className='menuOut'"><a class="type6" href="clear_inbox.aspx">- Clear Your Inbox</a></div>
          <div class="menuOut" onmouseover="this.className='menuIn'" onmouseout="this.className='menuOut'"><a class="type6" href="sendmail.aspx">- Make a phone call</a></div>
          <div class="menuOut" onmouseover="this.className='menuIn'" onmouseout="this.className='menuOut'"><a class="type6" href="license.aspx">- Licensing Center</a></div>
          <div class="menuOut" onmouseover="this.className='menuIn'" onmouseout="this.className='menuOut'"><a class="type6" href="business.aspx">- Business</a></div>
          <div class="menuOut" onmouseover="this.className='menuIn'" onmouseout="this.className='menuOut'"><a class="type6" href="phoneprovider.htm">- Phone Providers</a></div>
          <div class="menuOut" onmouseover="this.className='menuIn'" onmouseout="this.className='menuOut'"><a class="type6" href="personal.aspx">- Profile</a></div>
          <div class="menuOut" onmouseover="this.className='menuIn'" onmouseout="this.className='menuOut'"><a class="type6" href="notepad.aspx">- Notepad</a></div>
          <div class="menuOut" onmouseover="this.className='menuIn'" onmouseout="this.className='menuOut'"><a class="type6" href="findplayer.aspx">- Find Players</a></div>
          <div class="menuOut" onmouseover="this.className='menuIn'" onmouseout="this.className='menuOut'"><a class="type6" href="onlineusers.aspx">- Online Players</a></div>
          <div class="menuOut" onmouseover="this.className='menuIn'" onmouseout="this.className='menuOut'"><a class="type6" href="inventory.aspx">- Inventory</a></div>
          <div class="menuOut" onmouseover="this.className='menuIn'" onmouseout="this.className='menuOut'"><a class="type6" href="rankbar.aspx">- Rankbar</a></div>
          <div class="menuOut" onmouseover="this.className='menuIn'" onmouseout="this.className='menuOut'"><a class="type6" href="credits.aspx">- Credits</a></div>
          <div class="menuOut" onmouseover="this.className='menuIn'" onmouseout="this.className='menuOut'"><a class="type6" href="credits_history.aspx">- Credits History</a></div>
        </td>
      </tr>
      <tr>
        <td class="section"><a onclick="collapseMenu('mnu4'); this.className = 'Collapse';" class="WhiteText" href="#"><b>• NETWORK</b></a></td>
      </tr>
      <tr id="mnu4" class="DeCollapse">
        <td>
          <div class="menuOut" onmouseover="this.className='menuIn'" onmouseout="this.className='menuOut'"><a class="type6" href="networkforum.htm">- Network Forum</a></div>
          <div class="menuOut" onmouseover="this.className='menuIn'" onmouseout="this.className='menuOut'"><a class="type6" href="network.aspx">- Manage Network</a></div>
          <div class="menuOut" onmouseover="this.className='menuIn'" onmouseout="this.className='menuOut'"><a class="type6" href="network_join.aspx">- Join a Network</a></div>
          <div class="menuOut" onmouseover="this.className='menuIn'" onmouseout="this.className='menuOut'"><a class="type6" href="network_manage.aspx">- Your Network's Info</a></div>
          <div class="menuOut" onmouseover="this.className='menuIn'" onmouseout="this.className='menuOut'"><a class="type6" href="network_hq.aspx">- Network HQ - Safehouse</a></div>
          <div class="menuOut" onmouseover="this.className='menuIn'" onmouseout="this.className='menuOut'"><a class="type6" href="network_attack.aspx">- Attack Network</a></div>
        </td>
      </tr>
      <tr>
        <td class="section"><a onclick="collapseMenu('mnu5'); this.className = 'Collapse';" class="WhiteText" href="#"><b>• ACTIONS</b></a></td>
      </tr>
      <tr id="mnu5" class="DeCollapse">
        <td>
          <div class="menuOut" onmouseover="this.className='menuIn'" onmouseout="this.className='menuOut'"><a class="type6" href="mostwanted.aspx">- Globals Most Wanted</a></div>
          <div class="menuOut" onmouseover="this.className='menuIn'" onmouseout="this.className='menuOut'"><a class="type6" href="travel.aspx">- Airport</a></div>
          <div class="menuOut" onmouseover="this.className='menuIn'" onmouseout="this.className='menuOut'"><a class="type6" href="crimes.aspx">- Crimes</a></div>
          <div class="menuOut" onmouseover="this.className='menuIn'" onmouseout="this.className='menuOut'"><a class="type6" href="gta.aspx">- Grand Theft Auto</a></div>
          <div class="menuOut" onmouseover="this.className='menuIn'" onmouseout="this.className='menuOut'"><a class="type6" href="garage.aspx">- Garage</a></div>
          <div class="menuOut" onmouseover="this.className='menuIn'" onmouseout="this.className='menuOut'"><a class="type6" href="drugscartel.aspx">- Drugs Cartel</a></div>
          <div class="menuOut" onmouseover="this.className='menuIn'" onmouseout="this.className='menuOut'"><a class="type6" href="boozescartel.aspx">- Booze Cartel</a></div>
          <div class="menuOut" onmouseover="this.className='menuIn'" onmouseout="this.className='menuOut'"><a class="type6" href="buy.aspx">- Underground Stores</a></div>
          <div class="menuOut" onmouseover="this.className='menuIn'" onmouseout="this.className='menuOut'"><a class="type6" href="jail.aspx">- Jail</a></div>
          <div class="menuOut" onmouseover="this.className='menuIn'" onmouseout="this.className='menuOut'"><a class="type6" href="hospital.aspx">- Hospital</a></div>
          <div class="menuOut" onmouseover="this.className='menuIn'" onmouseout="this.className='menuOut'"><a class="type6" href="explosive.aspx">- Explosive Lab</a></div>
          <div class="menuOut" onmouseover="this.className='menuIn'" onmouseout="this.className='menuOut'"><a class="type6" href="organizedcrime.aspx">- Organized Crime</a></div>
          <div class="menuOut" onmouseover="this.className='menuIn'" onmouseout="this.className='menuOut'"><a class="type6" href="bullets.aspx">- Bullets Store</a></div>
          <div class="menuOut" onmouseover="this.className='menuIn'" onmouseout="this.className='menuOut'"><a class="type6" href="kill.aspx">- Kill</a></div>
          <div class="menuOut" onmouseover="this.className='menuIn'" onmouseout="this.className='menuOut'"><a class="type6" href="bank.aspx">- Banking</a></div>
          <div class="menuOut" onmouseover="this.className='menuIn'" onmouseout="this.className='menuOut'"><a class="type6" href="UforR.aspx">- UforR Collection</a></div>
          <div class="menuOut" onmouseover="this.className='menuIn'" onmouseout="this.className='menuOut'"><a class="type6" href="autorace.aspx">- Cars Racing</a></div>
        </td>
      </tr>
      <tr>
        <td class="section"><a onclick="collapseMenu('mnu6'); this.className = 'Collapse';" class="WhiteText" href="#"><b>• CASINO</b></a></td>
      </tr>
      <tr id="mnu6" class="DeCollapse">
        <td>
          <div class="menuOut" onmouseover="this.className='menuIn'" onmouseout="this.className='menuOut'"><a class="type6" href="blackjack.aspx">- Black Jack</a></div>
          <div class="menuOut" onmouseover="this.className='menuIn'" onmouseout="this.className='menuOut'"><a class="type6" href="racetrack.aspx">- Racetrack</a></div>
          <div class="menuOut" onmouseover="this.className='menuIn'" onmouseout="this.className='menuOut'"><a class="type6" href="roulette.aspx">- Roulette</a></div>
          <div class="menuOut" onmouseover="this.className='menuIn'" onmouseout="this.className='menuOut'"><a class="type6" href="slot.aspx">- Slot Machine</a></div>
          <div class="menuOut" onmouseover="this.className='menuIn'" onmouseout="this.className='menuOut'"><a class="type6" href="casino.aspx">- Cashing Machine</a></div>
          <div class="menuOut" onmouseover="this.className='menuIn'" onmouseout="this.className='menuOut'"><a class="type6" href="doubleup.aspx">- Double Up</a></div>
          <div class="menuOut" onmouseover="this.className='menuIn'" onmouseout="this.className='menuOut'"><a class="type6" href="lottery.aspx">- Lottery</a></div>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "Menu",
  methods: {
    collapseMenu: function (mnuID) {
      var obj = document.getElementById(mnuID);
      if (obj.className == "Collapse") {
        obj.className = "DeCollapse";
      } else {
        obj.className = "Collapse";
      }
    }
  }
}
</script>

<style scoped>
.tmn-menu {
  width: 180px;
  min-width: 180px;
  height: calc(100vh - 60px - 24px);
  overflow-y: auto;
  color: gray;
}
.tmn-menu a {
  color: white;
  text-decoration: none;
  font-size: 10px;
  font-weight: bold;
}
.tmn-menu a.WhiteText {
  font-size: 8pt;
}

td.section {
  background: url('../assets/image/cell_bg.jpg');
}
div.menuOut {
  padding: 3px 0 3px 0;
  background-color: #333333;
}
div.menuIn {
  padding: 3px 0 3px 0;
  background-color: darkred;
}
a.type6 {
  line-height: normal;
  display: block;
}
.Collapse {
  display: none;
}

</style>