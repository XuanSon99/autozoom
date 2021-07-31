<template>
  <main class="home">
    <div class="setting">
      <div class="head mowtain">
        <div class="logo mowtain">
          <img src="/img/logo.svg" />
          <div>
            <h1>KINGROUP</h1>
            <p>For you, for future!</p>
          </div>
        </div>
        <div class="about">
          <h2>KING AutoZoom <span>v0.69</span></h2>
          <p>App zoom cho hệ thống KING</p>
        </div>
      </div>
      <div class="content">
        <p class="btn-connect" @click="connectHandle" v-if="!connect">
          <i class="fas fa-link"></i>
          <span>Kết nối đến máy chủ</span>
        </p>
        <p class="btn-disconnect" @click="connectHandle" v-else>
          <i class="fas fa-plug"></i>
          <span>Ngắt kết nối</span>
        </p>
        <form>
          <div class="textbox">
            <p>
              <i class="fas fa-user-tie"></i>
              <span>Tên chuyên gia</span>
            </p>
            <input type="text" />
          </div>
          <div class="textbox">
            <p>
              <i class="fas fa-coins"></i>
              <span>Số tiền mỗi lệnh</span>
            </p>
            <input type="text" />
          </div>
          <div class="textbox">
            <p>
              <i class="fas fa-wallet"></i>
              <span>Loại tài khoản</span>
            </p>
            <select>
              <option value="">Thực</option>
              <option value="">Ảo</option>
            </select>
          </div>
          <div class="textbox">
            <p>
              <i class="fab fa-dropbox"></i>
              <span>Sàn giao dịch</span>
            </p>
            <select>
              <option value="">Wefinex</option>
              <option value="">Forex</option>
            </select>
          </div>
          <div class="mow-space">
            <p class="expert">
              <input type="checkbox" name="" id="expert" />
              <label for="expert">Chế độ chuyên gia</label>
            </p>
            <input type="submit" class="btn-save" value="Lưu cấu hình" />
          </div>
        </form>
        <div class="result">
          <table>
            <tr>
              <th>Thắng</th>
              <th>Thua</th>
              <th>Lợi nhuận</th>
            </tr>
            <tr>
              <td>0</td>
              <td>0</td>
              <td>0.00$</td>
            </tr>
          </table>
        </div>
        <div class="status">
          <div class="mowtain">
            <p>
              <span>Kingdom</span>
              <span> đang</span>
              <span class="offline">offline</span>
            </p>
            <p>
              <span>Đang theo:</span>
              <span> 2 <i class="fas fa-user"></i></span>
            </p>
          </div>
          <div class="mowtain">
            <p>Hệ thống KINGROUP</p>
            <p>
              <span>Máy chủ:</span>
              <span> 888 <i class="fas fa-users"></i></span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="chat">
      <div class="head mow-space">
        <div class="hello">
          <p>Xin chào</p>
          <p><b>Mountain</b></p>
        </div>
        <p class="btn-connect">Lịch sử</p>
      </div>
      <div class="chat-body">
        <div class="box-chat">
          <div class="message" v-for="item in messageList" :key="item.time">
            <p class="time">
              <span
                ><b>{{ item.user }}</b> -
              </span>
              <span>{{ item.time }}</span>
            </p>
            <p class="detail">{{ item.message }}</p>
          </div>
        </div>
        <form>
          <div class="textbox">
            <input type="text" v-model="message" />
            <input
              type="submit"
              class="send"
              @click.prevent="sendMessage"
              value="Gửi"
            />
          </div>
        </form>
        <p class="copy-right">Được phát triển bởi <b>KINGROUP</b></p>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      messageList: [],
      message: "",
      connect: false,
    };
  },
  methods: {
    sendMessage() {
      if (this.message) {
        this.messageList.push({
          time: new Date().toLocaleTimeString(),
          user: "Mountain",
          message: this.message,
        });
        this.message = "";
      }
    },
    connectHandle() {
      this.connect = !this.connect;
    },
  },
};
</script>

<style>
</style>