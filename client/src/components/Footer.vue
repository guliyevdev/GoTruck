<template>
  <div class="distance">
</div>
  <footer>
    <div class="mini-truck">
      <img src="../assets/public/trekmobil.svg" alt="">
    </div>
    <div class="container footer-main">
      <div class="row text-and-request">
        <div class="col-12 col-sm-6 col-xl-5">
          <div class="line-and-text">
            <p class="text h5">We provide traffic management consultants so you get started quickly, contact us for a
              quote today!</p>
          </div>
        </div>
        <div class="col-12 col-sm-6 col-xl-7 ">
          <div class="request">
            <div class="">
              <label for="formGroupExampleInput" class="form-label">Name</label>
              <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Your Name">
            </div>
            <div class="">
              <label for="formGroupExampleInput" class="form-label">Phone number</label>
              <input type="number" class="form-control" id="formGroupExampleInput" placeholder="Your phone number">
            </div>
            <div class="">
              <label for="formGroupExampleInput" class="form-label">Your question</label>
              <textarea placeholder="Your question" class="form-control"></textarea>
            </div>
            <div class="">
              <button type="button" class="btn btn-primary">Get started</button>
            </div>
          </div>
        </div>
      </div>
      <div class="row links">
        <div class="col-4">
          <a href="" class="logo"></a>
        </div>
        <div class="col-8">
          <ul class="navbar-nav mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" href="#">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">How to</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">FAQS</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="end">
      <div class="container">
        <div class="row">
          <div class="col-6">
            <span class="text-muted">Copyright @ 2023</span>
          </div>
          <div class="col-6">
            <ul class="navbar-nav mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <img src="../assets/public/f.svg" width="40px" />
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <img src="../assets/public/i.svg" width="40px" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
