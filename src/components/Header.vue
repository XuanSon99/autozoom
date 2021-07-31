<template>
  <div class="space head" v-if="!$route.meta.header">
    <img src="img/logo.svg" class="logo" @click="$router.push('/')" />
    <span id="network" v-b-modal.network-modal
      ><i class="far fa-dot-circle"></i>{{ network.slice(0, 16) }}</span
    >
    <img src="img/profile.svg" id="avatar" v-b-modal.MAmodal />
    <b-modal
      id="network-modal"
      ref="networkModal"
      hide-header-close
      hide-footer
      centered
      hide-header
    >
      <h3 class="title">Network</h3>
      <div class="net" v-for="i in 5" :key="i">
        <span :style="colorRan(i)" class="dot"></span>
        <p>Smart chain official network</p>
      </div>
      <div class="net" @click="toNetwork">
        <span class="dot"></span>
        <p>Custom RPC</p>
      </div>
    </b-modal>
    <b-modal
      id="MAmodal"
      ref="MAmodal"
      hide-header-close
      hide-footer
      centered
      hide-header
    >
      <h3 class="title">My account</h3>
      <div class="wallet-list">
        <div
          class="net"
          v-for="(item, index) in wallet_list"
          :key="index"
          @click="chooseAccount(item)"
        >
          <span :style="colorRan(index)" class="avatar-text">{{
            item.name.slice(0, 1)
          }}</span>
          <p>{{ item.name }}</p>
        </div>
      </div>
      <div class="space btn-group mt-2">
        <span class="btn-cancle" @click="$refs.MAmodal.hide()">Cacel</span>
        <span class="btn-next" @click="logout">Logout</span>
      </div>
    </b-modal>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      network: "Smart chain",
    };
  },
  computed: {
    ...mapGetters(["wallet_list"]),
  },
  methods: {
    colorRan(i) {
      let color = [
        "#b3a8e9",
        "#347dea",
        "#ea3457",
        "#7562d8",
        "#f5832f",
        "#00bac0",
      ];
      return {
        background: color[i],
      };
    },
    toNetwork() {
      this.$router.push("/network");
      this.$refs.networkModal.hide();
    },
    logout() {
      this.$store.dispatch("setAccount", "");
      this.$store.dispatch("setWalletList", "");
      this.$router.push("/login");
      localStorage.clear();
      chrome.storage.local.clear();
    },
    chooseAccount(item) {
      this.$store.dispatch("setAccount", item);
      this.$refs.MAmodal.hide();
      this.CallAPI("get", "api/wallet/balance/" + item.code, {}, (res) => {
        this.$store.dispatch("balance", res.data.data);
      });
    },
  },
};
</script>

<style>
</style>