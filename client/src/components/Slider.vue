<template>
  <CCarousel controls>
    <CCarouselItem>
      <img class="d-block w-100" src="https://i.ytimg.com/vi/mT96hubdwOU/maxresdefault.jpg" alt="slide 1" />
      <CCarouselCaption class="d-none d-md-block">
      <h5>First slide label</h5>
      <p>Some representative placeholder content for the first slide.</p>
      </CCarouselCaption>
    </CCarouselItem>
    <CCarouselItem>
      <img class="d-block w-100" src="https://img.besthqwallpapers.com/Uploads/10-2-2020/121165/scania-500-s-4k-2020-trucks-lkw-cargo-transport.jpg" alt="slide 2" />
      <CCarouselCaption class="d-none d-md-block">
      <h5>First slide label</h5>
      <p>Some representative placeholder content for the first slide.</p>
      </CCarouselCaption>
    </CCarouselItem>
    <CCarouselItem>
      <img class="d-block w-100" src="https://assets.volvo.com/is/image/VolvoInformationTechnologyAB/trucks-volvo-fh16-introimg?qlt=82&wid=1024&ts=1582779867513&dpr=off&fit=constrain" alt="slide 3" />
      <CCarouselCaption class="d-none d-md-block">
      <h5>First slide label</h5>
      <p>Some representative placeholder content for the first slide.</p>
      </CCarouselCaption>
    </CCarouselItem>
  </CCarousel>
</template>
<script>
import { CCarousel,CCarouselItem,CCarouselCaption } from '@coreui/vue' 

export default {
  components: {
    CCarousel,
    CCarouselItem,
    CCarouselCaption
    
  }
}
</script>
