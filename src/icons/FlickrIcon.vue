
<template>
  <Icon :iconName="'flickr'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FlickrIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'flickr'
    },
    ...Icon.props
  },
  computed: {
    props() {
      return { ...this.$props };
    }
  }
};
</script>
