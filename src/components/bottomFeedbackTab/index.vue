<template>
  <el-row class="bottom-content">
    <el-col :span="8" class="contentItem">
      <div class="amazedIcon icon"></div>
      <div>
        <div class="title">
          我要投诉 | 我要对服务评价
        </div>
        <div>投诉快速处理通道</div>
        <div>对我们服务的评价是对我们最大的爱护</div>
      </div>
    </el-col>
    <el-col :span="8" class="contentItem">
      <div class="serviceIcon icon"></div>
      <div>
        <div class="title">
          <span class="text">我的商务顾问</span><a href="#" class="qqIcon"></a><a href="#" class="wechatIcon"></a>
        </div>
        <div>1333333262</div>
        <div>五星商务热线为您服务</div>
      </div>
    </el-col>
    <el-col :span="8" class="contentItem">
      <div class="allDayIcon icon"></div>
      <div>
        <div class="title">
          <span class="text">我的商务顾问</span><a href="#" class="qqIcon"></a><a href="#" class="wechatIcon"></a>
        </div>
        <div>132222222</div>
        <div>客服热线: 0755-87654321</div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
  export default {
  }
</script>

<style scoped lang="scss">
.bottom-content{
  z-index: 9900;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  .contentItem{
    display: flex;
    justify-content: center;
    height: 90px;
    padding-top: 14px;
    border-right: 2px solid #0185C5;
    border-image: linear-gradient(#0185C5,#038DC4) 20 20 round;
    font-size: 14px;
    color: #fff;
    background: linear-gradient(to top,#0084C4,#3FC3E0);
    .title{
      height: 20px;
      margin-bottom: 14px;
      font-size: 16px;
      .qqIcon{
        display: inline-block;
        width: 17px;
        height: 20px;
        margin-left: 10px;
        background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAUCAYAAABroNZJAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsSAAALEgHS3X78AAAD2klEQVQ4y3WSWWwVdRTGv/9/Zu7e3pm5c7ldgFqx1KZoG6smNoE2USFxwcSlkaI2kKhFE5OGNL7VGBOBN5f44EJcsBXEBWMFk0JZLAaMBgnEKtX2tqXQNm0nt3ehc5f5fNBioPg9fQ/nfOfknJ/ADWQYkQohxBYA6wHEAMwAOEy6H9n23ND19eIGAS8IId8sFPKqlBJCCLiuCwCQUoJkh23PvoH/k2GYT0WjJdQ0HwEQENR1818P+v1BRqMlNAxz2w0DdN3UTdPK+3x+lpWVs7f3O3Z1vUIpJXfu3MWens8YiVj0+4M0TYu6HoktCTHNSLtpWgTA7u4eOs4C29qeYWvrZvb395MkOztfJgCaZpSGYXYu9spFQ2Lt4onC4TDm7ATOD44gmZGovKX2upGEELJpySaKbv0YjVoEvIRaxb0HTrHr1V3UvAr39HzBTz4/SiBGwMdo1KLHsH5b8p2SiPXXZBo3N65WcG+DjYqYi/rKAKK6hvFLNi5Mu5hOhnDkdAh95/Iw/Ji17Rnrv+Xqw3VHqw1CWqy5exk5WErGdfK4SZ4sI/sMclAnx8rYvCFGwOK3VQZZH14LACoAjGfFQ81FLk5VE+1nFejNxNaNHtwTzEBJpaEZGn7K+PFBbw6Ryy6OVRfQVESMZMTDAH4QoshUawPqxKfF6WV1iTQKsSJ8POnBVwmgrEagvpKIT0sMniU2eF08ZybgmStgKBJESzKU/DWVK4VXj2yHFuLK1TWc6mhjps4k60PkcjCugWdU8E8PyCBIFUyt8jDRuZW1a24n1ACDurVDDUq053JpJMIWnO2vw/j5BEaH4vDe0YCQP4CQPQdX1TBdugLqmrtgPvI40lU1mPu+Achn4JWBTSogbvL4/Cgk55E40YfyS2MoTBL+zc+juPVZ5BaygKZCKvIqVPNTU8heHIWiaACgSwCq1+sbS40Oj49lXcim9RCKBPP5fxjweSAUCdclco4DABj64wJm7dmZYDA4CiAsheCLiQTX4Upyx5dnhoHdB1Eej8O/8UnkcjkwmwWzWSCfg6IoAIADvf0A8Nb8vGyEYMc11GpQv/l6YIKLchYW6DgOHcch3QJJ8uDxOD0yeGQJ8plDlqAde+yX3Tjccl8p3/7wGCdTvEbTGfLd7tN84v6VHHgHA5yNbuJJXbmKPQ8VRZD3zOA2Dzh8GXv6FQQqWkC1FnYqMFccuGJq/B2p+H60rluAdmspcC4HCGeFeCB5UQBAep9XYcH7qOJRtvl0dRWK05ITmenzg+h5bR/ee+lBPN14J7bI5b4SJIu4YOdHCvn8+5Du3lBLOv83K3Lc/dHKLucAAAAASUVORK5CYII=");
        background-size: 100% 100%;
      }
      .wechatIcon{
        display: inline-block;
        width: 23px;
        height: 21px;
        margin-left: 10px;
        background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAVCAYAAACt4nWrAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsSAAALEgHS3X78AAAE80lEQVQ4y5WUa2wUVRiG33NmdpYt3d1u26VYWu4pBcLFUqihwQgIRLDc1IBYRdQEY0LkEpsYSPhB4g8wQUUkRCGGgJGoFCQYTRUoiEDLpSwBFRW67HZKd8t2d3b2Mjsz5/MHl1Aggk9yknNOcp58OXm/j+Eh5Lllz4SZhfMqxnufLilzDe/TV+6bTdvpnoih3ghmLl45mzxy6VTsFB4Bu/9i7tvlDTNf9zcMHO4pkrkMMwVYOYJD4VBcDEwGkpqBK+f1kwe23Fx3+uf2w48lb9gx5lDtS/mzEyrAbRkOLiObBGTOAQbYQoBJBMEt5PkFuINh3wfG6j0fndn8MLl0Z/PetomNNS+i7nrAhCIpSPUAVprBV+iEyHEw4nDlSVDyOJgEJGM2tGQKVbOlWbg5rOVy2/W/75dzAJi9qGrW2DnW/OClLNyFDvTcsPHxO2FsWt6OaNhEYbETXq+CTFJgW0MIO9Z2IpclSORErFvDlKXYNbpigvRQ+cS6/FWapoEsDkkGTIPQowrEVMA0GJgk4HJzdHfm0NQYxZHvktCigMsDZHocYJ5ocdX04hn3y+VRI8bwvGJzjKEzgBES3Sb8g11Y9Xk5HFDQf6iE7ogBWZZQMpSwbH0eLMpB7t+Oa2EdOcNCvqKg4InBTwH4sZe8r9slC2E7BAEkCEIIpHQTQ8a7oEhAMmqBkEM0HUKe0483VzyPvo4BSET6wLIEkrkwIvwkzkWCqQcqbz3TkpuTnBx1lgh/LgVwYUFwjljUgIM5YVIMpq2j0vcqKgsXw6+MhMvBgUG3s0ZARmioWHxi3p9H3t8TuHRB7fXn8avuJibbsG26vUyYwkTajkM3e1Dj34CppRtQ7hsNl5uDnEDWNpCzc4ADcDk9eKb2udrjvx25NH3atHG95O2/ejYngm64/AZMCzAtAcvMIZa9htHet1DtX4I0dMRSUbS0nkQi0QNFcUBWHAgGr+HAwX2IRLrg8fgKGvc3HhtZWem+K99/6Jtg+/eVbxgpBqfPgJkD0rkkXFSKSs8ipG0bXl8+mn75CTWTJuPLXV+Acw7OGD7b/gnmz30B59vOAADcbo9nzZo1a3o1Udu5y21F2SmdfUq0SXnFZr7Bo+jnehJjCpbCohS4zCCEgGFlMGd2HcrLBkIIAa/Xi/JBAzB96gzIsgOKosDIZrw7du7c/kDLrt5ac/bTf8poxW4fbT28kLq74qSGuygcDlMmk6E76LpOuq7fPad0nTo6OoiI6Fhz87WRlZWSfK943stTasomdVdd3FP2+19N3vXacKWkbkN8S77Lg0zWgqYlkEmnwRgDGAdjhHg8DiEEbMsCiAAAakdHVNd10UsOIWWufjt2ZeikdPDw8a+u4jiwZNGyxTNnzazVgtqt5BHAGQPj/FYOAdg2wbJM+HwF0LQEmpubfwiFw/SokYyFCxaMikS6iIiooyNMoVCIVLWDOlWVOlWVVFWlcChE0WiEiIg2bdz4R3VVVeEjxXd4rb7+2dbWFtU0TSIiMowsaZpGmqaRZVlERBSPx2nd2rUnJk6ornhg5P4XFwKBqxcDgd2Rri4jdvNmvqYlPZlsVtESGk6fPhULBALd48aP9x49erTx671799x5xx5Hfi/DhgyRSktLRxQVFZUzzp3Xg9evJBKJyMqV737oKyw0X6mvX/5/nY9FdXW1s6Rfv7sF/wvdooKPhV/JjwAAAABJRU5ErkJggg==");
        background-size: 100% 100%;
      }
      .text{
        vertical-align: top;
      }
    }
    .icon{
      height: 54px;
      margin: 4px 22px 0 0;
      &.amazedIcon{
        width: 54px;
        background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAYAAACMRWrdAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsSAAALEgHS3X78AAAEc0lEQVRo3t2aTWxVRRTH//fSCiFtU4w0koIfYKgfQcVYrF1g0gUhYaUrjQZik2LZaFyxNEBcQYwfi1Ig6MI2deFC4sYQ3WoRI+iCBBFsiR8xEVua1oq0Pxf3jJ2+vpe2753b13qSm8ncmfn/z//OvHfvnDmJHA2olbRD0pOSHpN0r11NktZYt0lJv0sasuuipPOSziVJ8o+nPx6CdgOngN8o334FTgK7PXxKKhBTK6lb0gFJDxU0fynpgqRLkoYljUi6aW0Nkhol3WPjHpf0dMH4S5J6JPUkSXI7rwkpJqoLGI6e9jQwALwAbCgDb4ONHTCsYENA11IIagG+iIhHgCNAsyNHs2GORDyfAy15ieoEpiKyY0Bjjg+x0TiCTQGd3iRHI4ILQGtegopwtxpnsKNewH0R6PGlElTEjxORH32VgvVHYAerJSry52DkT3+5IPH67q62qMiv7vh3vtjBLy2nmSriXzxzLy500MZo0CknR1bbsu4H7nDCPB35uXEhA85b58seDhhmb+REjyPuZcM8N1/HeAludSKvBUYLXuo1TthbF7QkgRvW6W3Hp9oE3IocuAWsd8R/13BvlOpwwDpMAqmzsIlI2ATQ5Ii/ynwG2F+sw3VrPOxFarjrgfFI2LjnjBnHEcO+XtjQYQ3TQP0KFFbPzK6gQ5LCkttn5ZkkScY8SZfCzOdPrbo3qE2jf61nvUmXYsaM57noXzcV0BaRui7DJRZWH3G0pZLarW1wJS7DYOb7oFXbU0nbrPJVtZ1zsPAFsi2VtMUqV6rtlYMFDVtSSeED8lq1vXKwoKE5lRR+yCv29xVZCPHdlUpa+z8SFjTUpZKotjeOFoKrU6mkcau4v8OqYA1WjqWS/ii4uZJtnZUjqaRfrHJ/TmSr7CpV97RNVv6cSvrBKg/kRPaXZj62pewgZCInrhAGv5JK+t4qbXkwJUkyKumn6NZQkiQ3y4Sbz3ZYeTH3j2BJAvZEHHty4qhj5myhNWxbwsmG+7YlIm4H2itHKokfti1//hfaAD6wm5/kRZy3AR+bhvfjmx15L8ecRTVEoYFnChtzCeZE+LuAXTlhv2G+DxdrDMH+ScDtPQOsAc5GK+IssNoRvy7aoe8v1SkETN9xJH6dufaaI34In88KmBYGRl8NJU4hbkmbi9zbsmiU0tZo5SvzPYGv7Qm4HEoATxSZse1eqoC1wCML6dgcOXDaiXwncMaunV6iynFkWR/8VSpuWR7VeonrW04zR3ZE+yPwsgfYh5G43iqKOhn5ccgLtNoJLN9G/G96E3QyO4HrGLCucuSSfHcCb0V8fwN78yJrIUvYCjYKHMY3SWwTcIjZSWKfAZsrR5+fvIss5S7YNPAR8DzlpfXdba+YgYIX+VVg32LxpMoSMWs0k4j5cEFzsUTMMWUxzDpl0aT7JD0oabvmhiW+k3RcUm+SJNOVTUMFRpY6e4Is/bVcGwbew2lrU/aMlRBYI+kpSa2SHtXcZOfbygK0I8oCPFeVzc6gpG+SJHGLSv8L3v4pvqhkM5IAAAAASUVORK5CYII=");
        background-size: 100% 100%;
      }
      &.serviceIcon{
        width: 52px;
        background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA2CAYAAACIsLrgAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsSAAALEgHS3X78AAAFMklEQVRo3s2ae4hVVRTGvz3YQ7OhaQh8ZY9BGzUfPRQxsUCjIOkPRdMQQ9KKqEwr0uiFZoIlGSFKJEWKlmIjKREWEoRkJqXm1GQ2ZOWjyTRLR3z++uPsW9vtPnfOPec+/GBg2Gutb61v73P2OWfta1REAPWShkkaKOkaSVdJqpZ0saSTkv6RtEfSbklbJG0yxnxRzBqKIaIz8AywmXT4EZgH9D8fhLwOHEspJIT3gZuy1GVSinlc0kuSLsnjdkRSs6TDkloVXXYdJNVJuryNFK9JmmGMOVGS1XCE1ALr88zwp8B0YAhQE8PREegLPAh8ALTmuRQHlVLMAGB/TPI3gH4peTvZe7AlhntcKcTcApwMJGsAehYpRzXwSoyoyUl52ryHgD6Svg34TjbGLImJ6Sepv6RukjpLqrLxLZL2StouaYcx5mggdpikFZK6eKb7jDHvZp21DsBBb7b+BgYGfIcDi4HmhDvaH8BqYCxgPK4a4KtATKYdUMAGj/AIcJ3nMxbYlFBEHJqBaR6v4dxn20HggrRiHggkHuDYe5F/x0uDRmCEk+Mi4BfPZ3kaMZcCpz2iCY59YsBeTMx2cvUI2AcWKmiBR7DOsb1YQiEuVjk5p3u2bwpdnTMeQY21zSmTmBzWOnX5m83QpIKe8gLn2/EpZRaTw1s2/whv/MOkgpq8wCqgS4XE5DDa1varM3YauKwtMfUe0Uo7/l2FBWHrGO8Nj2pL0EQvoA8wtNJiLObYGl18AtwQJ+Z6YKPj3EL0dt2UMGFa/AUsTeh7JdHbhY9GYKQr5uWA02fAsyUWA3YLBl5N4LsAWJjHfpuAqTHGE2UQA9DgTOyhjFy7qiTNjbml0r0zFY5Vzv+PZeSqMxDtIBXCPkldjTH/1QD8rKhblApVFRQjSSNdMRYzsxBWaoV+kDTFGPN5yAgckFSbhrhcK3RcUqOkpZImGmPq48RYvJM2USlW6KikHZK+l7RN0lZJTcaY/UkJiL5Mt1RK0JeSvrbFN0pqNMYcyjorwB6d21dIFJgWq4l62SUBsDJNUe1S5ltjjBldKjEWTWmC0mwKhyWNShFXKPaVS9CKwLOjFPgzraDWAmOSf89nw5EUMQ1Vkp4rMKhjBQX9JGlajH+zpKhlTLinPAt4ODC+tBxqgNsDuZdY2yCis6Qc1gHtfYJ+RO2ip4n6y7lx/7jjtzIJGhMQ1NOxd3fGBxdC/EiA+OYyCJrmP/c8+zw7fgqoLpR8l0f+ZpGK7gU8GmNb5uWs8ey/2/GP0yT2u0EngA4xvjcmmTGi0wqAZTH2A06+CZ7tHsd2d9rZnOSJWhDjl2vbPgkMBq6wf3XAHcAMon4FQGsMh3v/LA7Yc/25VA9fl+h5T9TVMX6rHJ9TwPHAfXgMqIuJ3219GgK22Q7HmEyCLOFMh3BbHr+pROdJIXwEdI+JWxx3KXJ2j3BTZjEO8Rj+/33Cwjx+HYkOxOYDbxM9Eobk8X/Bcs4K2Hp4K92paIJsgmuBtbnrHLgwI98TluuugK03Z7e40m0ECQsZB2wFemfkGQHUBsZHc3aP8P6SifESp/22iuOrBhZ5996ksohpo7DhwMjQ7Mf4tyd6S3B/5NGCc/ZaKSG3Ajudog4D0/P4DybqXe/zVmUZ0NZvg0ouphvxGE90ijAUeAhYQvj8aSNwZ0WFOILmkg7HgfeyCCnqjewgaW/6jKSdkjZL2iBpvTEm2+tMKWAvpThsA+4leq/rWulakwpqB2wPiDkDFN48PB9gt99FwF67w60B+pY67798X6v+keaVigAAAABJRU5ErkJggg==");
        background-size: 100% 100%;
      }
      &.allDayIcon{
        width: 58px;
        background: url("data:image/png;base64,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");
        background-size: 100% 100%;
      }
    }
  }
}
</style>
