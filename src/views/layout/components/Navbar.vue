<template>
  <div>
    <el-row class="logo-wrapper">
      <el-col :xs="0" :sm="15" :md="16" :lg="13" :xl="16">
        <div class="logo-left">
            <div class="logo-title">综合服务平台</div>
            <div class="detail-wrapper">
              <div class="companyDetail">
                <div class="company">您好,深圳市顺丰科技有限公司!</div>
                <div class="attestationIcon"></div>
              </div>
              <div class="msgDetail">
                <span class="broadcastIcon"></span>
                <span class="msg">最新公告: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab asperiores at consectetur culpa dolores enim est facere in iste itaque laudantium maxime, molestias, nulla praesentium quasi quod repellendus tempora velit.</span>
              </div>
            </div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="9" :md="8" :lg="10" :xl="8">
        <el-row class="logo-right">
          <el-col :lg="10" >
            <div class="loginTime">
              <div>上次登录时间:2019-03-11 18:30:55</div>
            </div>
          </el-col>
          <el-col :xs="24" :md="24" :lg="14" class="width-1270">
            <div class="userHanler-wrapper">
              <div class="userInfo">
                <div class="avatar"></div>
                <div class="infoDetail">
                  <div class="name">张平涛</div>
                  <div class="job">深圳顺丰快递</div>
                </div>
              </div>
              <div class="addIcon-wrapper">
                <img src="../../../assets/img/add.png" class="addIcon"/>
              </div>
              <div class="closeIcon-wrapper">
                <img src="../../../assets/img/close.png" class="closeIcon"/>
              </div>
            </div>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-menu class="navbar" mode="horizontal">
      <hamburger class="hamburger-container" :toggleClick="toggleSideBar" :isActive="sidebar.opened"></hamburger>
      <breadcrumb></breadcrumb>
      <!--<el-dropdown class="avatar-container" trigger="click">-->
        <!--<div class="avatar-wrapper">-->
          <!--<img class="user-avatar" :src="avatar+'?imageView2/1/w/80/h/80'">-->
          <!--<i class="el-icon-caret-bottom"></i>-->
        <!--</div>-->
        <!--<el-dropdown-menu class="user-dropdown" slot="dropdown">-->
          <!--<router-link class="inlineBlock" to="/">-->
            <!--<el-dropdown-item>-->
              <!--Home-->
            <!--</el-dropdown-item>-->
          <!--</router-link>-->
          <!--<el-dropdown-item divided>-->
            <!--<span @click="logout" style="display:block;">LogOut</span>-->
          <!--</el-dropdown-item>-->
        <!--</el-dropdown-menu>-->
      <!--</el-dropdown>-->
    </el-menu>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Breadcrumb from '@/components/Breadcrumb'
import Hamburger from '@/components/Hamburger'

export default {
  components: {
    Breadcrumb,
    Hamburger
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'avatar'
    ])
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('ToggleSideBar')
    },
    logout() {
      this.$store.dispatch('LogOut').then(() => {
        location.reload() // 为了重新实例化vue-router对象 避免bug
      })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.logo-wrapper{
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  width: 100%;
  height: 69px;
  font-size: 0;
  color: #fff;
  background: #00A4D7;
  .logo-left{
    &:before{
      display: table;
      content: '';
      height: 0;
    }
    .logo-title{
      display: inline-block;
      vertical-align: top;
      width: 185px;
      height: 30px;
      margin: 19.5px 0;
      line-height: 30px;
      border-right: 1px solid #fff;
      text-align: center;
      font-size: 25px;
      font-weight: 700;
    }
    .detail-wrapper{
      display: inline-block;
      box-sizing: border-box;
      height: 69px;
      padding-top: 14px;
      margin-left: 20px;
      .companyDetail{
        .company{
          padding-left: 19px;
          font-size: 18px;
        }
        .attestationIcon{
        }
      }
      .msgDetail{
        margin-top: 5px;
        height: 13px;
        .broadcastIcon{
          display: inline-block;
          width: 15px;
          height: 15px;
          margin-right: 4px;
        }
        .msg{
          display: inline-block;
          height: 15px;
          width: 400px;
          line-height: 15px;
          font-size: 14px;
          overflow: hidden;
          text-overflow:ellipsis;
          white-space: nowrap;
        }
      }
    }
  }
  .logo-right{
    box-sizing: border-box;
    height: 69px;
    padding-top: 9px;
    .loginTime{
      display: flex;
      justify-content: center;
      box-sizing: border-box;
      height: 52px;
      padding-top: 32px;
      font-size: 13px;
    }
    .userHanler-wrapper{
      float: right;
    }
    .userInfo{
      display: inline-block;
      font-size: 14px;
      vertical-align: top;
      .avatar{
        display: inline-block;
        width: 52px;
        height: 52px;
        border-radius: 50%;
        background: url("data:image/jpeg;base64,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");
        background-size: 100% 100%;
      }
      .infoDetail{
        vertical-align: top;
        display: inline-block;
        height: 30px;
        padding-right: 16px;
        margin: 12px 0 0 6px;
        border-right: 1px solid #fff;
      }
    }
    .addIcon-wrapper{
      display: inline-block;
      vertical-align: top;
      height: 30px;
      margin: 12px 0 0 16px;
      padding: 4.5px 16px 0 0;
      border-right: 1px solid #fff;
      .addIcon{
        width: 21px;
        height: 21px;
      }
    }
    .closeIcon-wrapper{
      display: inline-block;
      vertical-align: top;
      height: 30px;
      margin: 12px 0 0 16px;
      padding: 4.5px 16px 0 0;
      .closeIcon{
        width: 21px;
        height: 21px;
      }
    }
  }
}
@media screen and (max-width: 1370px){
  .loginTime,.msg {
    display: none !important;
  }
  .width-1270{
    width: 100% !important;
  }
  .detail-wrapper{
    line-height: 45px;
  }
}
@media screen and (max-width: 768px){
  .userHanler-wrapper{
    float: none !important;
    display: flex;
    justify-content: center;
  }
}
@media screen and (min-width: 1680px){
  .msg{
    width: 650px !important;
  }
}
.navbar {
  height: 50px;
  line-height: 50px;
  border-radius: 0px !important;
  .hamburger-container {
    line-height: 58px;
    height: 50px;
    float: left;
    padding: 0 10px;
  }
  .screenfull {
    position: absolute;
    right: 90px;
    top: 16px;
    color: red;
  }
  .avatar-container {
    height: 50px;
    display: inline-block;
    position: absolute;
    right: 35px;
    .avatar-wrapper {
      cursor: pointer;
      margin-top: 5px;
      position: relative;
      .user-avatar {
        width: 40px;
        height: 40px;
        border-radius: 10px;
      }
      .el-icon-caret-bottom {
        position: absolute;
        right: -20px;
        top: 25px;
        font-size: 12px;
      }
    }
  }
}
</style>

