new Vue({
  el: '#app',
  data() {
    return {
      // all
      backgroundImage: '/images/vaothi.png',
      toggle: false,
      start: false,
      end: false,
      logoListActive: false,
      // logo list
      logos: null,
      // statute
      headline: null,
      description: null,
      time: Date(),
      startDate: null,
      endDate: null,
      message: null,
      // question
      questionName: 'CÂU HỎI SỐ 2',
      questionContent: 'Theo thiệu lệnh của người điều khiển giao thông, trong tình huống này xe nào chấp hành đúng quy tắc giao thông ?',
      questionMediaImage: 'images/question.png',
      questionMediaVideoUrl: 'https://www.youtube.com/embed/XsP_Ywv8UWs',
      togglePopup: false,
      // observe
      observetime: '07:22',
      observenumber: 235,
      // answer
      answerA: 'Về cuối trận, ở những giây cuối cùng của phút bù giờ thứ 11, Anh tưởng chừng có bàn gỡ hoà 2 - 2 nhờ công tiền đạo mới vào thay người Danny Welbeck.Nhưng trọng tài người Hà Lan Danny Makkelie từ chối công nhận pha làm bàn, vì cho rằng tiền đạo chủ nhà đã phạm lỗi với thủ môn De Gea trước khi dứt điểm.',
      answerB: 'Về cuối trận, ở những giây cuối cùng của phút bù giờ thứ 11, Anh tưởng chừng có bàn gỡ hoà 2 - 2 nhờ công tiền đạo mới vào thay người Danny Welbeck.Nhưng trọng tài người Hà Lan Danny Makkelie từ chối công nhận pha làm bàn, vì cho rằng tiền đạo chủ nhà đã phạm lỗi với thủ môn De Gea trước khi dứt điểm.',
      answerC: 'Về cuối trận, ở những giây cuối cùng của phút bù giờ thứ 11, Anh tưởng chừng có bàn gỡ hoà 2 - 2 nhờ công tiền đạo mới vào thay người Danny Welbeck.Nhưng trọng tài người Hà Lan Danny Makkelie từ chối công nhận pha làm bàn, vì cho rằng tiền đạo chủ nhà đã phạm lỗi với thủ môn De Gea trước khi dứt điểm.',
      answerD: 'Về cuối trận, ở những giây cuối cùng của phút bù giờ thứ 11, Anh tưởng chừng có bàn gỡ hoà 2 - 2 nhờ công tiền đạo mới vào thay người Danny Welbeck.Nhưng trọng tài người Hà Lan Danny Makkelie từ chối công nhận pha làm bàn, vì cho rằng tiền đạo chủ nhà đã phạm lỗi với thủ môn De Gea trước khi dứt điểm.',
      // Ring
      ringItems: [{
          number: 1
        },
        {
          number: 2
        },
        {
          number: 3
        },
        {
          number: 4
        },
        {
          number: 5
        },
        {
          number: 6
        },
        {
          number: 7
        },
        {
          number: 8
        },
        {
          number: 9
        },
        {
          number: 10
        },
        {
          number: 11
        },
        {
          number: 12
        },
        {
          number: 13
        },
        {
          number: 14
        },
        {
          number: 15
        },
        {
          number: 16
        },
        {
          number: 17
        },
        {
          number: 18
        },
      ],
    };
  },
  methods: {
    startBtn: function () {
      this.start = true;
      this.logoListActive = true;
      this.backgroundImage = '/images/bg.png';
    },
    endBtn: function () {
      this.end = true;
      this.logoListActive = false;
    }
  },
  mounted() {
    axios
      .get('http://www.mocky.io/v2/5b9b28d23000006300e7c2ed')
      .then(response => {
        // logo list
        this.logos = response.data.exam_info.round[0].topic[0].config.logo;
        // statute
        this.headline = response.data.exam_info.round[0].display_name;
        this.description = response.data.exam_info.round[0].description;
        this.startDate = response.data.exam_info.round[0].time.start;
        this.endDate = response.data.exam_info.round[0].time.end;
        this.message = response.data.exam_info.round[0].time.end_notify;
        // console.log(response.data.exam_info.round[0]);
      })
      .catch(error => {
        console.log(error);
      });
  }
});