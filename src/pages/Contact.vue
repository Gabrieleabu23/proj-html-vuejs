<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
  name: 'Contact',
  components: {
    FontAwesomeIcon
  }
}
</script>

<template>
  <div class="contact_us_about_container">
    <div class="overlay h-100">
      <h4 class="text-light">CONTACT US</h4>
    </div>
  </div>
  <div class="container header_width">
    <div class="row my-4">
      <div class="col-4">
        <div
          class="card justify-content-center align-items-center h-100 card_bg border-0"
        >
          <div class="d-flex w-100 p-4 align-items-center">
            <span class="icon_size_about_us rounded-circle">
              <font-awesome-icon :icon="['fas', 'phone-volume']" class="" />
            </span>
            <div class="ps-3">
              <h5 class="fw-bolder">CALL US</h5>
              <span>02 90 222 333</span>
            </div>
          </div>
        </div>
      </div>
      <div class="col-4">
        <div
          class="card justify-content-center align-items-center h-100 card_bg border-0"
        >
          <div class="d-flex w-100 p-4 align-items-center">
            <span class="icon_size_about_us rounded-circle">
              <font-awesome-icon :icon="['fas', 'envelope']" />
            </span>
            <div class="ps-3">
              <h5 class="fw-bolder">EMAIL US</h5>
              <span>info@domain.com</span>
            </div>
          </div>
        </div>
      </div>
      <div class="col-4">
        <div
          class="card justify-content-center align-items-center h-100 card_bg border-0"
        >
          <div class="d-flex w-100 p-4 align-items-center">
            <span class="icon_size_about_us rounded-circle">
              <font-awesome-icon :icon="['fas', 'location-dot']" />
            </span>
            <div class="ps-3">
              <h5 class="fw-bolder">VISIT US</h5>
              <span>3308 Fleming Street</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row pt-4 mt-4 pb-4 mb-4">
      <div class="col-7 pt-4">
        <h2>GET IN TOUCH</h2>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
        <div class="col-12 pt-4">
          <div class="row justify-content-between">
            <div class="mb-3 col-6">
              <input
                type="text"
                class="form-control bordi"
                id="exampleFormControlInput1"
                placeholder="First Name"
                required
              />
            </div>
            <div class="mb-3 col-6">
              <input
                type="text"
                class="form-control bordi"
                id="exampleFormControlInput1"
                placeholder="Last Name"
              />
            </div>
            <div class="mb-3 col-6">
              <input
                type="email"
                class="form-control bordi"
                id="exampleFormControlInput1"
                placeholder="Email"
              />
            </div>
            <div class="mb-3 col-6">
              <input
                type="tel"
                class="form-control bordi"
                id="exampleFormControlInput1"
                placeholder="Phone"
              />
            </div>
            <div class="mb-3 col-12">
              <textarea
                class="form-control bordi pb-4"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
            <div class="col-12 text-end">
              <button class="btn button_send text-light px-4 py-2 rounded-pill" type="submit"><span class="px-3">SEND MESSAGE</span></button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-5">
        <img
          src="https://demo.hasnaindev.com/animetech/wp-content/uploads/2022/12/anime-contact.webp"
          alt=""
          class="w-100 rounded"
        />
      </div>
    </div>
  </div>
  <div class="maps">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1241.7733348761278!2d-0.11951900000000001!3d51.503186!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b900d26973%3A0x4291f3172409ea92!2sLondon%20Eye!5e0!3m2!1sit!2sus!4v1705593584435!5m2!1sit!2sus"
      width="100%"
      height="100%"
      zoom="40"
      style="border: 0"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;
@use '../styles/partials/variables' as *;

.maps{
  width: 100vw;
  height: 450px;
}
.bordi {
  background-color: #ffffff;
  border-color: #cccccc;
  border-width: 0px 0px 1px 0px;
  border-radius: 5px 5px 5px 5px;
  transition: all 0.2;
  &:focus {
    border-color: #cccccc;
    box-shadow: none;
    border-width: 1px 1px 1px 1px;
  }
}
.btn:first-child:active{
  background-color: #333333;
  border-color: #333333;
}
.button_send{
  background-color: $red_header_footer;
  font-size: 15px;
  &:hover{
    background-color:#333333;
  }

}
.overlay {
  background-color: rgba(51, 51, 51, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
}
.card_height {
  height: 100px;
}
.card_bg {
  background-color: $carousel_bg_grey;
}
.icon_size_about_us {
  min-width: 60px;
  min-height: 60px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $red_header_footer;
  font-size: 32px;
}
</style>
