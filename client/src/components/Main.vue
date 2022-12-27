<script>
export default {
    name : 'Main',
    
}
</script>
<template>
    <div class="main">
        <div class="container">
            <div class="hero-section">
                <div class="row">
                    <div class="col-12 col-md-6 text">
                        <h1 class="hero-title h1">Lorem İpsum Dolor photo text lorem ipsum</h1>
                        <p class="hero-text">The occupational traffic permit is one of the most important things in the
                            company when carrying out freight transport. In fact, it is a prerequisite for doing
                            business traffic at all. </p>
                        <div>
                            <a href="" class="button-one">Get started</a>
                        </div>
                    </div>
                    <div class="d-none d-md-flex col-md-6 image">
                        <img src="../assets/public/Phone.svg" alt="" />
                    </div>
                </div>
            </div>
        </div>
        <div class="truck">
            <img src="../assets/public/minitruck.svg" alt="">
        </div>
        <div class="container">
            <div class="how-to-section">
                <div class="row">
                    <div class="col-12 section-title">
                        <h1 class="h1 title-style-one">How the app works</h1>
                    </div>
                </div>
                <!--1-- 576 ölçüsune qeder slider aktiv olacaq 576 dan sonra sectionlar aktivlesecek  -->
                <div id="carouselExampleCaptions" class="carousel slide d-sm-none" data-bs-ride="false">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0"
                            class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                            aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                            aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="../assets/public/Phone.svg" class="d-block w-100" alt="...">
                            <div class="carousel-caption">
                                <p class="red-title-style-one">Create an account</p>
                                <h1 class="h1 title-style-one">Create/login to an existing
                                    account to get started</h1>
                                <p class="text-style-one h5">An account is created with your email
                                    and a desired password</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="../assets/public/Phone.svg" class="d-block w-100" alt="...">
                            <div class="carousel-caption">
                                <p class="red-title-style-one">Create an account</p>
                                <h1 class="h1 title-style-one">Create/login to an existing
                                    account to get started</h1>
                                <p class="text-style-one h5">An account is created with your email
                                    and a desired password</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="../assets/public/Phone.svg" class="d-block w-100" alt="...">
                            <div class="carousel-caption">
                                <p class="red-title-style-one">Create an account</p>
                                <h1 class="h1 title-style-one">Create/login to an existing
                                    account to get started</h1>
                                <p class="text-style-one h5">An account is created with your email
                                    and a desired password</p>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
                <!-- 2-- 576 ölçüsündən sonra aşağıdakı kodlar aktiv olacaq **Slideri əvəz edəcək -->
                <div class="sections d-none d-sm-block">
                    <div class="row section one">
                        <div class="col-12 col-sm-5 section-image">
                            <img src="../assets/public/Phone.svg" />
                        </div>
                        <div class="col-12 col-sm-7">
                            <p class="red-title-style-one">Create an account</p>
                            <h1 class="h1 title-style-one">Create/login to an existing
                                account to get started</h1>
                            <p class="text-style-one h5">An account is created with your email
                                and a desired password</p>
                        </div>
                    </div>
                    <div class="row section two">
                        <div class="col-12 col-sm-7">
                            <p class="red-title-style-one">Create an account</p>
                            <h1 class="h1 title-style-one">Create/login to an existing
                                account to get started</h1>
                            <p class="text h5">An account is created with your email
                                and a desired password</p>
                        </div>
                        <div class="col-12 col-sm-5 section-image">
                            <img src="../assets/public/Phone.svg" />
                        </div>
                    </div>
                    <div class="row section three">
                        <div class="col-5 section-image">
                            <img src="../assets/public/Phone.svg" />
                        </div>
                        <div class="col-7">
                            <p class="red-title-style-one">Create an account</p>
                            <h1 class="h1 title-style-one">Create/login to an existing
                                account to get started</h1>
                            <p class="text-style-one h5">An account is created with your email
                                and a desired password</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- distance class -ı sectionlar arası məsafə saxlamaq üçün yazılıb -->
        <div class="distance">
        </div>
        <div class="faq-background">
            <img src="../assets/public/Group14.svg" />
            <div class="container">
                <div class="faq">
                    <div class="row">
                        <div class="col-12 col-lg-6">
                            <p class="red-title-style-one h4">FAQ</p>
                            <h1 class="title-style-one h1">Questions and Answers on Professional Traffic Permits:</h1>
                        </div>
                    </div>
                    <!-- accordion code start -->
                    <div class="accordion accordion-flush" id="accordionFlushExample">
                        <div class="row">
                            <div class="col-12 col-sm-6">
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingOne">
                                        <button class="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#flush-collapseFour"
                                            aria-expanded="false" aria-controls="flush-collapseOne">
                                            Accordion Item #1
                                        </button>
                                    </h2>
                                    <div id="flush-collapseFour" class="accordion-collapse collapse"
                                        aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">Placeholder content for this accordion, which is
                                            intended to demonstrate the <code>.accordion-flush</code> class. This is the
                                            first item's accordion body.</div>
                                    </div>
                                </div>

                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingTwo">
                                        <button class="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo"
                                            aria-expanded="false" aria-controls="flush-collapseTwo">
                                            Accordion Item #2
                                        </button>
                                    </h2>
                                    <div id="flush-collapseTwo" class="accordion-collapse collapse"
                                        aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">Placeholder content for this accordion, which is
                                            intended to demonstrate the <code>.accordion-flush</code> class. This is the
                                            second item's accordion body. Let's imagine this being filled with some
                                            actual
                                            content.</div>
                                    </div>
                                </div>

                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingTwo">
                                        <button class="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo"
                                            aria-expanded="false" aria-controls="flush-collapseTwo">
                                            Accordion Item #2
                                        </button>
                                    </h2>
                                    <div id="flush-collapseTwo" class="accordion-collapse collapse"
                                        aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">Placeholder content for this accordion, which is
                                            intended to demonstrate the <code>.accordion-flush</code> class. This is the
                                            second item's accordion body. Let's imagine this being filled with some
                                            actual
                                            content.</div>
                                    </div>
                                </div>

                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingTwo">
                                        <button class="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo"
                                            aria-expanded="false" aria-controls="flush-collapseTwo">
                                            Accordion Item #2
                                        </button>
                                    </h2>
                                    <div id="flush-collapseTwo" class="accordion-collapse collapse"
                                        aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">Placeholder content for this accordion, which is
                                            intended to demonstrate the <code>.accordion-flush</code> class. This is the
                                            second item's accordion body. Let's imagine this being filled with some
                                            actual
                                            content.</div>
                                    </div>
                                </div>

                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingOne">
                                        <button class="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#flush-collapseOne"
                                            aria-expanded="false" aria-controls="flush-collapseOne">
                                            Accordion Item #1
                                        </button>
                                    </h2>
                                    <div id="flush-collapseOne" class="accordion-collapse collapse"
                                        aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">Placeholder content for this accordion, which is
                                            intended to demonstrate the <code>.accordion-flush</code> class. This is the
                                            first item's accordion body.</div>
                                    </div>
                                </div>

                                <!-- load more -->
                                <div class="accordion-item d-sm-none">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed item-red" type="button"
                                            aria-expanded="false" aria-controls="flush-collapseOne">
                                            <p>Load more</p>
                                        </button>
                                    </h2>
                                </div>
                            </div>
                            <div class="col-12 col-sm-6 d-none d-sm-block">

                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingThree">
                                        <button class="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#flush-collapseThree"
                                            aria-expanded="false" aria-controls="flush-collapseThree">
                                            Accordion Item #3
                                        </button>
                                    </h2>
                                    <div id="flush-collapseThree" class="accordion-collapse collapse"
                                        aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">Placeholder content for this accordion, which is
                                            intended to demonstrate the <code>.accordion-flush</code> class. This is the
                                            third item's accordion body. Nothing more exciting happening here in terms
                                            of
                                            content, but just filling up the space to make it look, at least at first
                                            glance, a bit more representative of how this would look in a real-world
                                            application.</div>
                                    </div>

                                </div>

                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingOne">
                                        <button class="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#flush-collapseOne"
                                            aria-expanded="false" aria-controls="flush-collapseOne">
                                            Accordion Item #1
                                        </button>
                                    </h2>
                                    <div id="flush-collapseOne" class="accordion-collapse collapse"
                                        aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">Placeholder content for this accordion, which is
                                            intended to demonstrate the <code>.accordion-flush</code> class. This is the
                                            first item's accordion body.</div>
                                    </div>
                                </div>

                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingOne">
                                        <button class="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#flush-collapseOne"
                                            aria-expanded="false" aria-controls="flush-collapseOne">
                                            Accordion Item #1
                                        </button>
                                    </h2>
                                    <div id="flush-collapseOne" class="accordion-collapse collapse"
                                        aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">Placeholder content for this accordion, which is
                                            intended to demonstrate the <code>.accordion-flush</code> class. This is the
                                            first item's accordion body.</div>
                                    </div>
                                </div>

                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingOne">
                                        <button class="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#flush-collapseOne"
                                            aria-expanded="false" aria-controls="flush-collapseOne">
                                            Accordion Item #1
                                        </button>
                                    </h2>
                                    <div id="flush-collapseOne" class="accordion-collapse collapse"
                                        aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">Placeholder content for this accordion, which is
                                            intended to demonstrate the <code>.accordion-flush</code> class. This is the
                                            first item's accordion body.</div>
                                    </div>
                                </div>

                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingOne">
                                        <button class="accordion-button collapsed" type="button"
                                            data-bs-toggle="collapse" data-bs-target="#flush-collapseOne"
                                            aria-expanded="false" aria-controls="flush-collapseOne">
                                            Accordion Item #1
                                        </button>
                                    </h2>
                                    <div id="flush-collapseOne" class="accordion-collapse collapse"
                                        aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">Placeholder content for this accordion, which is
                                            intended to demonstrate the <code>.accordion-flush</code> class. This is the
                                            first item's accordion body.</div>
                                    </div>
                                </div>
                                <!-- load more -->
                                <div class="accordion-item">
                                    <h2 class="accordion-header">
                                        <button class="accordion-button collapsed item-red" type="button"
                                            aria-expanded="false" aria-controls="flush-collapseOne">
                                            <p>Load more</p>
                                        </button>
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- accordion code end -->
                </div>
            </div>

        </div>
        <!-- distance class -ı sectionlar arası məsafə saxlamaq üçün yazılıb -->

    </div>
</template>