<template>
  
  <header>
        <nav class="navbar navbar-expand-lg fixed-top navbar-light bg-white">
            <div class="container">
                <a class="navbar-brand" href="#"></a>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                    aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <!-- <span class="hambureger-icon"></span> -->
                    <span class="hamburger-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Button</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Button</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Button</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Button</a>
                        </li>
                        <li class="nav-item account-item">
                            <a class="nav-link account" href="#"></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
